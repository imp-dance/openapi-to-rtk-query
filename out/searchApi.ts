import { baseApi } from "./baseApi";
import { SearchForItemResponse } from "./types";

export const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    searchForItem: builder.query<SearchForItemResponse, unknown>({
      query: (args) => ({
        url: `/search`,
        method: "GET",
      }),
      providesTags: () => ["Search"],
    }),
  }),
});

export const { useSearchForItemQuery } = searchApi;
