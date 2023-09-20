import { baseApi } from "./baseApi";
import {
  GetShowParams,
  GetShowResponse,
  GetSeveralShowsResponse,
  GetShowEpisodesParams,
  GetShowEpisodesResponse,
  GetUsersSavedShowsResponse,
  CheckUsersSavedShowsResponse,
} from "./types";

export const showsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getShow: builder.query<GetShowResponse, GetShowParams>({
      query: (args) => ({
        url: `/shows/${args.id}`,
        method: "GET",
      }),
      providesTags: () => ["Shows"],
    }),
    getSeveralShows: builder.query<GetSeveralShowsResponse, unknown>({
      query: (args) => ({
        url: `/shows`,
        method: "GET",
      }),
      providesTags: () => ["Shows"],
    }),
    getShowEpisodes: builder.query<
      GetShowEpisodesResponse,
      GetShowEpisodesParams
    >({
      query: (args) => ({
        url: `/shows/${args.id}/episodes`,
        method: "GET",
      }),
      providesTags: () => ["Shows", "Episodes"],
    }),
    getUsersSavedShows: builder.query<GetUsersSavedShowsResponse, unknown>({
      query: (args) => ({
        url: `/me/shows`,
        method: "GET",
      }),
      providesTags: () => ["Shows", "Library"],
    }),
    checkUsersSavedShows: builder.query<CheckUsersSavedShowsResponse, unknown>({
      query: (args) => ({
        url: `/me/shows/contains`,
        method: "GET",
      }),
      providesTags: () => ["Shows", "Library"],
    }),
    saveShowsForCurrentUser: builder.mutation({
      query: (args) => ({
        url: `/me/shows`,
        method: "PUT",
      }),
      invalidatesTags: () => ["Shows", "Library"],
    }),
    removeUsersSavedShows: builder.mutation({
      query: (args) => ({
        url: `/me/shows`,
        method: "DELETE",
      }),
      invalidatesTags: () => ["Shows", "Library"],
    }),
  }),
});

export const {
  useGetShowQuery,
  useGetSeveralShowsQuery,
  useGetShowEpisodesQuery,
  useGetUsersSavedShowsQuery,
  useCheckUsersSavedShowsQuery,
  useSaveShowsForCurrentUserMutation,
  useRemoveUsersSavedShowsMutation,
} = showsApi;
