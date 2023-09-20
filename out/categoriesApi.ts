import { baseApi } from "./baseApi";
import {
  GetSeveralBrowseCategoriesResponse,
  GetSingleBrowseCategoryParams,
  GetSingleBrowseCategoryResponse,
  GetCategorysPlaylistsParams,
  GetCategorysPlaylistsResponse,
} from "./types";

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSeveralBrowseCategories: builder.query<
      GetSeveralBrowseCategoriesResponse,
      unknown
    >({
      query: (args) => ({
        url: `/browse/categories`,
        method: "GET",
      }),
      providesTags: () => ["Categories"],
    }),
    getSingleBrowseCategory: builder.query<
      GetSingleBrowseCategoryResponse,
      GetSingleBrowseCategoryParams
    >({
      query: (args) => ({
        url: `/browse/categories/${args.category_id}`,
        method: "GET",
      }),
      providesTags: () => ["Categories"],
    }),
    getCategorysPlaylists: builder.query<
      GetCategorysPlaylistsResponse,
      GetCategorysPlaylistsParams
    >({
      query: (args) => ({
        url: `/browse/categories/${args.category_id}/playlists`,
        method: "GET",
      }),
      providesTags: () => ["Playlists", "Categories"],
    }),
  }),
});

export const {
  useGetSeveralBrowseCategoriesQuery,
  useGetSingleBrowseCategoryQuery,
  useGetCategorysPlaylistsQuery,
} = categoriesApi;
