#!/usr/bin/env node

import commandLineArgs from "command-line-args";
import yaml from "yaml";
import { OpenAPIV3_1 } from "openapi-types";
const { startLoad, stopLoad } = require("./load");

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

const parseOpenApiSpec = (spec: string) => {
  const res = {
    type: "JSON",
    data: null,
  };
  try {
    res.data = JSON.parse(spec);
  } catch (err) {
    console.log("Failed to parse open-api spec as JSON");
    console.log("Trying to parse as YAML...");
    try {
      res.data = yaml.parse(spec);
      res.type = "YAML";
    } catch (err) {
      console.log("Failed to parse open-api spec as YAML");
      console.log("Please provide a valid open-api spec");
      process.exit(1);
    }
  }
  return res as unknown as {
    type: "JSON" | "YAML";
    data: OpenAPIV3_1.Document;
  };
};

const resolveJSONRef = (
  ref: string,
  spec: OpenAPIV3_1.Document
) => {
  const refPath = ref.split("/");
  refPath.shift();
  let resolved: any = spec;
  refPath.forEach((path) => {
    resolved = resolved[path];
  });
  return resolved;
};

const getRelevantMethods = (test: Record<Method, any>) => {
  return Object.keys(test).filter((key) => {
    return ["get", "post", "put", "delete", "patch"].includes(
      key
    );
  }) as Method[];
};
// Generates RTK Query endpoints from an open-api spec
const generateEndpoints = (spec: OpenAPIV3_1.Document) => {
  const flattenedPaths = Object.keys(spec.paths ?? {}).map(
    (path) => {
      const methods = getRelevantMethods(
        spec.paths?.[path] as any
      );
      return methods.map((method) => {
        return {
          path,
          method,
        };
      });
    }
  );

  const parsePath = (path: string) => {
    let replacedPath = path.replace(/\{(.+?)\}/g, "${string}");
    if (replacedPath.endsWith("}")) {
      replacedPath = replacedPath + "/";
    }
    return `\`${replacedPath}\``;
  };

  return `type Endpoint = ${flattenedPaths
    .map((path) => parsePath(path[0].path))
    .join(" | ")};
    
const endpoint = (endpoint: Endpoint) => endpoint`;
};

logDivider();
log("Fetching open-api spec");
startLoad();
fetchOpenApiSpec()
  .then((spec) => {
    stopLoad("Done! Resolved open-api spec");
    logDivider();
    console.log("Parsing...");
    const parsed = parseOpenApiSpec(spec);
    console.log("Done!");
    logDivider();
    console.log("Creating endpoints...");
    const endpoints = generateEndpoints(parsed.data);
    Bun.write("out.ts", endpoints);
    console.log("Endpoints written to out.ts! ✅");
    logDivider();
  })
  .catch((err) => {
    stopLoad(
      "Failed to fetch open-api spec. Please enter a valid URL!"
    );
    log(logDivider(), log(err));
  });
