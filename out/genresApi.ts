import { baseApi } from "./baseApi";
import { GetAvailableGenreSeedsResponse } from "./types";

export const genresApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableGenreSeeds: builder.query<
      GetAvailableGenreSeedsResponse,
      unknown
    >({
      query: (args) => ({
        url: `/recommendations/available-genre-seeds`,
        method: "GET",
      }),
      providesTags: () => ["Genres"],
    }),
  }),
});

export const { useGetAvailableGenreSeedsQuery } = genresApi;
