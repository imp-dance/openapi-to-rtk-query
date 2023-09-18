import { OpenAPIV3_1 } from "openapi-types";
import * as prettier from "prettier";
import { firstLetterLower, firstLetterUpper } from "./utils";

function operationToTitle(
  operation: NonNullable<
    NonNullable<OpenAPIV3_1.Document["paths"]>["/"]
  >["get"],
  path: string,
  method?: string
) {
  if (operation?.summary) {
    return operation.summary
      .split(" ")
      .map((word, i) => {
        if (i === 0) {
          return word.toLowerCase();
        }
        return (
          word[0].toUpperCase() + word.slice(1).toLowerCase()
        );
      })
      .map((word) => word.replace(/[^a-zA-Z0-9]/g, ""))
      .join("");
  } else {
    return `${method}${firstLetterUpper(
      path.split("/").filter(Boolean).join("")
    )}`;
  }
}

function typeFromSchema(apiSchema: any): string {
  function convertType(schema: any): string {
    if (schema === undefined) {
      return "unknown";
    }
    if (
      (schema.type === "object" && schema.properties) ||
      (!schema.type && schema.properties)
    ) {
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
        : schema.type || "unknown";
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
      const title = operationToTitle(operation!, path, method);
      const operationTags = operation.tags ?? [
        path.startsWith("/")
          ? path.split("/")[1]
          : path.split("/")[0],
      ];
      operationTags.forEach((tag) => {
        const responseSchema = (
          (operation.responses?.[200] ??
            operation.responses?.[201]) as any
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
  const tags =
    apiSchema.tags?.map((tag) => tag.name) ??
    Object.keys(apiSchema.paths ?? {}).map((path) =>
      path.startsWith("/")
        ? path.split("/")[1]
        : path.split("/")[0]
    );

  if (tags.length === 0) {
    console.warn(
      "No tags found in schema, trying to organize by first path segment"
    );
  }
  if (!apiSchema.openapi.trim().startsWith("3")) {
    throw new Error(
      "Only OpenAPI 3.x.x is supported at this time"
    );
  }

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
      const title = operationToTitle(operation!, path, method);

      const tagsAttr =
        method === "get" ? "providesTags" : "invalidatesTags";
      const builderMethod =
        method === "get" ? "query" : "mutation";

      const operationTags = operation.tags ?? [
        path.startsWith("/")
          ? path.split("/")[1]
          : path.split("/")[0],
      ];
      operationTags?.forEach((tag) => {
        if (!builder[tag].tags.includes(tag)) {
          builder[tag].tags.push(tag);
        }
        const responseSchema = (
          (operation.responses?.[200] ??
            operation.responses?.[201]) as any
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
    ${tagsAttr}: () => ['${operationTags.join("', '")}'],
  }),\n`,
        });
      });
    }
  }

  return builder;
}

export async function apiFromEndpoints(
  endpoints: NonNullable<
    Awaited<ReturnType<typeof parseOpenAPISchema>>
  >
) {
  const apis: {
    name: string;
    code: string;
  }[] = [];
  for (const key of Object.keys(endpoints)) {
    const apiName = `${firstLetterLower(key)}Api`;
    const filterDuplicates = (
      acc: { title: string; code: string }[],
      value: { title: string; code: string }
    ) => {
      if (!acc.find((v) => v.title === value.title)) {
        acc.push(value);
      }
      return acc;
    };

    const qNM = [
      ...endpoints[key].queries.reduce(filterDuplicates, []),
      ...endpoints[key].mutations.reduce(filterDuplicates, []),
    ];
    const queriesAndMutations = qNM.reduce(
      (acc, value) => {
        const isMutation = value.code.includes(
          "builder.mutation"
        );
        if (
          !acc.find(
            (v) =>
              v.title === value.title &&
              v.code.includes("builder.mutation") === isMutation
          )
        ) {
          acc.push(value);
        }
        return acc;
      },
      [] as typeof qNM
    );
    const formatted = await prettier.format(
      `
    import { baseApi } from './baseApi';
${
  endpoints[key].types.length > 0
    ? `import { ${[...new Set(endpoints[key].types)].join(
        ", "
      )} } from './types';`
    : ""
}
    
    export const ${apiName} = baseApi.injectEndpoints({
      endpoints: (builder) => ({
        ${queriesAndMutations.map((q) => q.code).join("")}
      }),
    })
    
    export const { ${queriesAndMutations
      .map(
        (n, i) =>
          `use${firstLetterUpper(n.title).trim()}${
            i >
            endpoints[key].queries.reduce(filterDuplicates, [])
              .length -
              1
              ? "Mutation"
              : "Query"
          }`
      )
      .join(",")} } = ${apiName};`,
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
