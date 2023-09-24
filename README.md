# openapi-to-rtk-query

Creates **RTK Query** API code from an **OpenAPI 3.x schema**.

>  If you are actually looking for a service like this, you should use [RTK Query's official codegen guide](https://redux-toolkit.js.org/rtk-query/usage/code-generation). This is just a test project.

## **Example**

```shell
$  bunx --bun blup --src "https://developer.spotify.com/_data/documentation/web-api/reference/open-api-schema.yml" --outDir "./out"
```

**CLI args**

* **`--src`** (`-s`)*: The source of the OpenAPI schema. Can be a URL or a relative path. Make sure to start with `http`/`https` if it is a URL.
* **`--outDir`** (`-o`)*: The output directory for the resulting files. Relative current working directory
* **`--baseUrl`** (`-b`)?: The base URL for the API. Defaults to `https://api.example.com`. 

### Set up API schema

> This tool will do its best to generate code that is usable even if your schema does not contains tags or summaries - but adding this will greatly enhance the quality of the code produced in regards to naming and categorizing the queries and mutations.

#### Tags

To get the most out of this utility, your openapi schema should [utilize tags](https://swagger.io/docs/specification/grouping-operations-with-tags/).
Tags should be defined both at top level, and used in the relevant endpoints that you want to group into one API.

We might generate the same query in multiple places if you add multiple tags, but that will also mean that query invalidation will work better - and it's a quick
job for you to remove duplicate endpoints from the APIs that you don't want it in afterwards.

If you don't have tags in your schema, we will use the first path segment to group your endpoints, which might be sub-optimal.

#### Summary

Your endpoints should contain a summary. This summary will be used to name your queries and mutations:

```typescript
"Create User"
// ==>
useCreateUserQuery();

"Update multiple users"
// ==>
useUpdateMultipleUsersMutation();
```

### Example output

You can check out the [out folder](https://github.com/imp-dance/openapi-to-rtk-query/tree/main/out) to see a full example output, when executed on the [Spotify OpenAPI schema](https://developer.spotify.com/reference/web-api/open-api-schema.yaml).

**_marketsApi.ts_**
```typescript 
import { baseApi } from "./baseApi";
import { GetAvailableMarketsResponse } from "./types";

export const marketsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableMarkets: builder.query<GetAvailableMarketsResponse, unknown>({
      query: (args) => ({
        url: `/markets`,
        method: "GET",
      }),
      providesTags: () => ["Markets"],
    }),
  }),
});

export const { useGetAvailableMarketsQuery } = marketsApi;
```

**_baseApi.ts_**
```typescript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const tags = [
  "Albums",
  "Artists",
  "Audiobooks",
  "Categories",
  "Chapters",
  "Episodes",
  "Library",
  "Genres",
  "Markets",
  "Player",
  "Playlists",
  "Search",
  "Shows",
  "Tracks",
  "Users",
] as const;

export const baseApi = createApi({
  tagTypes: tags,
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com" }),
  endpoints: (builder) => ({}),
});
```
