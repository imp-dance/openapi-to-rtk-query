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
  let finalCode = "";
  const paths = spec.paths ?? {};
  const components = spec.components;
  const schemas = components?.schemas;
  const security = spec.security;
  const securitySchemes = components?.securitySchemes;
  const servers = spec.servers;
  const tags = spec.tags;
  const externalDocs = spec.externalDocs;
  const info = spec.info;
  tags?.forEach((tag) => {
    const relevantEndpoints = Object.keys(paths)
      .filter((path) => {
        const pathItem = paths[path] ?? {};
        return path.includes(`${tag.name}`.toLowerCase());
      })
      .map((path) => {
        return {
          path: path,
          method: getRelevantMethods(paths[path] as any),
        };
      });
    finalCode += `// ${tag.name}\n`;
    if (tag.description) {
      finalCode += `// ${tag.description}\n`;
    }
    finalCode += `const ${tag.name}Api = createApi({\n`;
    finalCode += `  reducerPath: "${tag.name}Api",\n`;
    finalCode += `  baseQuery: fetchBaseQuery({ baseUrl: "" }),\n`;
    finalCode += `  endpoints: (builder) => ({\n`;
    finalCode += relevantEndpoints.map(({ path, method }) => {
      return `${path}: builder.${
        method[0] === "get" ? "query" : "mutation"
      }({\n`;
    });
    finalCode += "\n";
  });
  return finalCode;
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
    Bun.write("out.js", endpoints);
    console.log("Endpoints written to out.js! ✅");
    logDivider();
  })
  .catch((err) => {
    stopLoad(
      "Failed to fetch open-api spec. Please enter a valid URL!"
    );
    log(logDivider(), log(err));
  });
