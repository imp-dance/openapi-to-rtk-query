#!/usr/bin/env node

import commandLineArgs from "command-line-args";
import yaml from "yaml";
import { OpenAPIV3_1 } from "openapi-types";
import SwaggerClient from "swagger-client";
import { startLoad, stopLoad } from "./src/load";
import { generateEndpointCode } from "./src/generateEndpointCode";
import * as prettier from "prettier";
import { firstLetterUpper, firstLetterLower } from "./src/utils";

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
  } catch (err) {
    log("Failed to parse open-api spec as JSON");
    log("Trying to parse as YAML...");
    try {
      const resolved = await SwaggerClient.resolve({
        spec: yaml.parse(spec),
      });
      res.data = resolved.spec;
      res.type = "YAML";
    } catch (err) {
      log("Failed to parse open-api spec as YAML");
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

logDivider();
log("Fetching open-api spec");
startLoad();
fetchOpenApiSpec()
  .then(async (spec) => {
    stopLoad("Done! Resolved open-api spec");
    logDivider();
    log("Parsing...");
    const parsed = await parseOpenApiSpec(spec);
    log("Done!");
    logDivider();
    log("Creating endpoints...");
    startLoad();
    const endpoints = await generateEndpointCode(parsed.data);
    stopLoad("Done! Created endpoints");
    for (const key of Object.keys(endpoints)) {
      const formatted = await prettier.format(
        `
      import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
      
      export const ${firstLetterLower(key)}Api = createApi({
        reducerPath: '${firstLetterLower(key)}Api',
        tagTypes: ${JSON.stringify(endpoints[key].tags)},
        baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
        endpoints: (builder) => ({
          ${endpoints[key].queries.map((q) => q.code).join("")}
          ${endpoints[key].mutations
            .map((q) => q.code)
            .join("\n")}
        }),
      })
      
      export const { ${[
        ...endpoints[key].queries,
        ...endpoints[key].mutations,
      ].map(
        (n, i) =>
          `use${firstLetterUpper(n.title).trim()}${
            i > endpoints[key].queries.length - 1
              ? "Mutation"
              : "Query"
          }`
      )} } = ${firstLetterLower(key)}Api;`,
        {
          parser: "typescript",
        }
      );
      Bun.write(`./out/${key}.ts`, formatted);
    }

    log("Endpoints written to ./out ✅");
    logDivider();
  })
  .catch((err) => {
    stopLoad(
      "Failed to fetch open-api spec. Please enter a valid URL!"
    );
    log(logDivider(), log(err));
  });
