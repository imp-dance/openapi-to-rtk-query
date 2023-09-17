import { OpenAPIV3_1 } from "openapi-types";
import SwaggerClient from "swagger-client";
import { firstLetterUpper } from "./utils";

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
          `${firstLetterUpper(title)}Body`
        ] = `type ${firstLetterUpper(title)}Body = ${bodyType}`;
        builder[
          `${firstLetterUpper(title)}Response`
        ] = `type ${firstLetterUpper(
          title
        )}Response = ${bodyType}`;
      });
    }
  }
  return builder;
}

// Generates RTK Query endpoints from an open-api spec
export async function generateEndpointCode(
  apiSchema: OpenAPIV3_1.Document
) {
  const builder: Record<
    string,
    {
      queries: { code: string; title: string }[];
      mutations: { code: string; title: string }[];
      tags: string[];
    }
  > = {};
  const tags = apiSchema.tags?.map((tag) => tag.name) ?? [];
  tags.forEach((tag) => {
    builder[tag] = {
      queries: [],
      mutations: [],
      tags: [],
    };
  });

  const types = generateTypeDefs(apiSchema);

  for (const path in apiSchema.paths) {
    const pathData = apiSchema.paths[path];

    for (const method in pathData) {
      const operation = pathData[method as "get"]!;
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

        const generics =
          bodySchema || responseSchema
            ? `<${
                responseSchema
                  ? `${firstLetterUpper(title)}Response`
                  : "unknown"
              }, ${
                bodySchema
                  ? `${firstLetterUpper(title)}Body`
                  : "unknown"
              }>`
            : "";

        builder[tag][
          method === "get" ? "queries" : "mutations"
        ].push({
          title: title,
          code: `  ${title}: builder.${builderMethod}${generics}({
    query: (params) => ({
      url: '${path}',
      method: '${method.toUpperCase()}',
    }),
    ${tagsAttr}: () => ['${operation.tags?.join("', '")}'],
  }),\n`,
        });
      });
    }
  }

  return builder;
}
