import { OpenAPIV3_1 } from "openapi-types";
import SwaggerClient from "swagger-client";
import * as prettier from "prettier";
import { firstLetterLower, firstLetterUpper } from "./utils";

function summaryToTitle(summary: string) {
  return summary
    .split(" ")
    .map((word, i) => {
      if (i === 0) {
        return word.toLowerCase();
      }
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .map((word) => word.replace(/[^a-zA-Z0-9]/g, ""))
    .join("");
}

function typeFromSchema(apiSchema: any): string {
  function convertType(schema: any): string {
    if (schema === undefined) {
      return "any";
    }
    if (schema.type === "object" && schema.properties) {
      const properties = Object.keys(schema.properties).map(
        (propertyName) => {
          const propertySchema = schema.properties[propertyName];
          const required =
            schema.required &&
            schema.required.includes(propertyName)
              ? ""
              : "?";
          return `${propertyName}${required}: ${convertType(
            propertySchema
          )};`;
        }
      );

      return `{
        ${properties.join("\n")}
      }`;
    } else if (schema.type === "array" && schema.items) {
      return `${convertType(schema.items)}[]`;
    } else {
      return schema.type === "integer"
        ? "number"
        : schema.type || "any";
    }
  }

  const typeDefinition = convertType(apiSchema);
  return typeDefinition;
}

export function generateTypeDefs(
  apiSchema: OpenAPIV3_1.Document
) {
  const builder: Record<string, string> = {};
  for (const path in apiSchema.paths) {
    const paramsFromPath = path.matchAll(/{(.*?)}/g);
    const params = Array.from(paramsFromPath).map(
      (match) => match[1]
    );
    const hasParams = params.length > 0;
    const pathData = apiSchema.paths[path];

    for (const method in pathData) {
      const operation = pathData[method as "get"]!;
      const title = summaryToTitle(operation.summary!);
      operation.tags?.forEach((tag) => {
        const responseSchema = (
          operation.responses?.[200] as any
        )?.content?.["application/json"]?.schema;
        const responseType = typeFromSchema(responseSchema);

        const bodySchema = (operation.requestBody as any)
          ?.content?.["application/json"]?.schema;
        const bodyType = typeFromSchema(bodySchema);

        builder[
          `${firstLetterUpper(title)}Params`
        ] = `type ${firstLetterUpper(title)}Params = { ${
          hasParams
            ? `${params
                .map((param) => `${param}: string`)
                .join(",\n")},`
            : ""
        } _body${bodyType === "any" ? "?" : ""}: ${bodyType} }`;
        builder[
          `${firstLetterUpper(title)}Response`
        ] = `type ${firstLetterUpper(
          title
        )}Response = ${responseType}`;
      });
    }
  }
  return builder;
}

type ParsedOpenApiSpec = Record<
  string,
  {
    queries: { code: string; title: string }[];
    mutations: { code: string; title: string }[];
    tags: string[];
    types: string[];
  }
>;

export async function parseOpenAPISchema(
  apiSchema: OpenAPIV3_1.Document
) {
  const builder: ParsedOpenApiSpec = {};
  const tags = apiSchema.tags?.map((tag) => tag.name) ?? [];
  tags.forEach((tag) => {
    builder[tag] = {
      queries: [],
      mutations: [],
      tags: [],
      types: [],
    };
  });

  for (const path in apiSchema.paths) {
    const paramsFromPath = path.matchAll(/{(.*?)}/g);
    const params = Array.from(paramsFromPath).map(
      (match) => match[1]
    );
    const hasParams = params.length > 0;
    // Each path contains up to multiple methods (ex: get, post, put, delete) as a key on the object
    for (const method in apiSchema.paths[path]) {
      const operation =
        apiSchema.paths[path]?.[method as "get"]!;
      const title = summaryToTitle(operation.summary!);

      const tagsAttr =
        method === "get" ? "providesTags" : "invalidatesTags";
      const builderMethod =
        method === "get" ? "query" : "mutation";

      operation.tags?.forEach((tag) => {
        if (!builder[tag].tags.includes(tag)) {
          builder[tag].tags.push(tag);
        }
        const responseSchema = (
          operation.responses?.[200] as any
        )?.content?.["application/json"]?.schema;

        const bodySchema = (operation.requestBody as any)
          ?.content?.["application/json"]?.schema;

        if (bodySchema || hasParams) {
          builder[tag].types.push(
            `${firstLetterUpper(title)}Params`
          );
        }

        if (responseSchema) {
          builder[tag].types.push(
            `${firstLetterUpper(title)}Response`
          );
        }

        const generics =
          bodySchema || responseSchema || hasParams
            ? `<${
                responseSchema
                  ? `${firstLetterUpper(title)}Response`
                  : "unknown"
              }, ${
                bodySchema || hasParams
                  ? `${firstLetterUpper(title)}Params`
                  : "unknown"
              }>`
            : "";

        builder[tag][
          method === "get" ? "queries" : "mutations"
        ].push({
          title: title,
          code: `  ${title}: builder.${builderMethod}${generics}({
    query: (args) => ({
      url: \`${path.replace(/{(.*?)}/g, function (match, p1) {
        return "${args." + p1 + "}";
      })}\`,
      method: '${method.toUpperCase()}',
      ${bodySchema ? `body: args?._body` : ""}
    }),
    // ${tagsAttr}: () => ['${operation.tags?.join("', '")}'],
  }),\n`,
        });
      });
    }
  }

  return builder;
}

export async function apiFromEndpoints(
  endpoints: Awaited<ReturnType<typeof parseOpenAPISchema>>
) {
  const apis: {
    name: string;
    code: string;
  }[] = [];
  for (const key of Object.keys(endpoints)) {
    const apiName = `${firstLetterLower(key)}Api`;
    const formatted = await prettier.format(
      `
    import { baseApi } from './baseApi';
    import { ${endpoints[key].types.join(", ")} } from './types';
    
    export const ${apiName} = baseApi.injectEndpoints({
      endpoints: (builder) => ({
        ${endpoints[key].queries.map((q) => q.code).join("")}
        ${endpoints[key].mutations.map((q) => q.code).join("\n")}
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
    )} } = ${apiName};`,
      {
        parser: "typescript",
      }
    );
    apis.push({
      name: apiName,
      code: formatted,
    });
  }
  return apis;
}
