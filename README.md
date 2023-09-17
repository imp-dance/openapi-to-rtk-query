# bun blup

Creates RTK query api definitions based on a OpenAPI 3.x schema.

## **Example**

```shell
$  bunx --bun blup --src "https://developer.spotify.com/_data/documentation/web-api/reference/open-api-schema.yml" --outDir "./out"
```

You might have to `link` the package. From the root directory: `bun link`.

### Example output

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
