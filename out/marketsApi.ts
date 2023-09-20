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
