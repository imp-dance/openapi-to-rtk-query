#!/usr/bin/env node

import commandLineArgs from "command-line-args";
import { OpenAPIV3_1 } from "openapi-types";
import * as prettier from "prettier";
import SwaggerClient from "swagger-client";
import yaml from "yaml";
import {
  apiFromEndpoints,
  parseOpenAPISchema,
  generateTypeDefs,
} from "./src/buildCode";
import { startLoad, stopLoad } from "./src/load";

const log = console.log;
const divider =
  "--------------------------------------------------------------------";
const logDivider = () => log(divider);

const options = commandLineArgs([
  {
    name: "src",
    alias: "s",
    type: String,
    multiple: false,
  },
]) as {
  src: string;
};

type Method = "get" | "post" | "put" | "delete" | "patch";

const fetchOpenApiSpec = async () => {
  if (!options.src) {
    console.log("Please provide a source open-api spec");
    process.exit(1);
  }

  const spec = await fetch(options.src);
  return await spec.text();
};

const parseOpenApiSpec = async (spec: string) => {
  const res = {
    type: "JSON",
    data: null as null | OpenAPIV3_1.Document,
  };
  try {
    res.data = JSON.parse(spec);
    log("Parsed open-api spec as JSON ✅");
  } catch (err) {
    log("Failed to parse open-api spec as JSON ⛔️");
    log("Trying to parse as YAML...");
    try {
      const resolved = await SwaggerClient.resolve({
        spec: yaml.parse(spec),
      });
      res.data = resolved.spec;
      res.type = "YAML";
    } catch (err) {
      log("Failed to parse open-api spec as YAML ⛔️");
      log("Please provide a valid open-api spec");
      logDivider();
      log(err);
      logDivider();
      process.exit(1);
    }
  }
  return res as unknown as {
    type: "JSON" | "YAML";
    data: OpenAPIV3_1.Document;
  };
};

async function writeTypes(typeDefs: Record<string, string>) {
  const formattedTypes = await prettier.format(
    Object.keys(typeDefs).reduce((acc, tag) => {
      return acc + "export " + typeDefs[tag] + "\n";
    }, ""),
    { parser: "typescript" }
  );
  Bun.write("./out/types.ts", formattedTypes);
}

logDivider();
log("Fetching open-api spec");
startLoad();
fetchOpenApiSpec()
  .then(async (spec) => {
    stopLoad("Fetched openapi spec ✅");
    logDivider();

    startLoad("Parsing...");
    const parsed = await parseOpenApiSpec(spec);
    const endpoints = await parseOpenAPISchema(parsed.data);
    stopLoad("Parsed openapi spec ✅");

    startLoad("Building base api...");
    const allTags = [
      ...new Set(
        Object.keys(endpoints).reduce(
          (acc, key) => [...acc, ...endpoints[key].tags],
          [] as string[]
        )
      ),
    ];
    const baseApi = await prettier.format(
      `
    import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
    const tags = [${allTags
      .map((t) => `'${t}'`)
      .join(", ")}] as const;
    
    export const baseApi = createApi({
      tagTypes: tags,
      reducerPath: "baseApi",
      baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com" }),
      endpoints: (builder) => ({}),
    });
    `,
      { parser: "typescript" }
    );
    Bun.write(`./out/baseApi.ts`, baseApi);
    stopLoad("Built base api ✅");

    startLoad("Building APIs...");
    const apis = await apiFromEndpoints(endpoints);
    apis.forEach((api) => {
      Bun.write(`./out/${api.name}.ts`, api.code);
    });
    stopLoad("Built APIs ✅");

    startLoad("Writing types...");
    const typeDefs = generateTypeDefs(parsed.data);
    await writeTypes(typeDefs);
    stopLoad("Wrote types ✅");
    logDivider();

    log("✅ Done!");
    logDivider();
  })
  .catch((err) => {
    stopLoad(
      "Failed to fetch open-api spec. Please enter a valid URL!"
    );
    log(logDivider(), log(err));
  });
