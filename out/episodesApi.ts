import { baseApi } from "./baseApi";
import {
  GetShowEpisodesParams,
  GetShowEpisodesResponse,
  GetEpisodeParams,
  GetEpisodeResponse,
  GetSeveralEpisodesResponse,
  GetUsersSavedEpisodesResponse,
  SaveEpisodesForCurrentUserParams,
  RemoveUsersSavedEpisodesParams,
  CheckUsersSavedEpisodesResponse,
} from "./types";

export const episodesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
    getEpisode: builder.query<GetEpisodeResponse, GetEpisodeParams>({
      query: (args) => ({
        url: `/episodes/${args.id}`,
        method: "GET",
      }),
      providesTags: () => ["Episodes"],
    }),
    getSeveralEpisodes: builder.query<GetSeveralEpisodesResponse, unknown>({
      query: (args) => ({
        url: `/episodes`,
        method: "GET",
      }),
      providesTags: () => ["Episodes"],
    }),
    getUsersSavedEpisodes: builder.query<
      GetUsersSavedEpisodesResponse,
      unknown
    >({
      query: (args) => ({
        url: `/me/episodes`,
        method: "GET",
      }),
      providesTags: () => ["Episodes", "Library"],
    }),
    checkUsersSavedEpisodes: builder.query<
      CheckUsersSavedEpisodesResponse,
      unknown
    >({
      query: (args) => ({
        url: `/me/episodes/contains`,
        method: "GET",
      }),
      providesTags: () => ["Episodes", "Library"],
    }),
    saveEpisodesForCurrentUser: builder.mutation<
      unknown,
      SaveEpisodesForCurrentUserParams
    >({
      query: (args) => ({
        url: `/me/episodes`,
        method: "PUT",
        body: args?._body,
      }),
      invalidatesTags: () => ["Episodes", "Library"],
    }),
    removeUsersSavedEpisodes: builder.mutation<
      unknown,
      RemoveUsersSavedEpisodesParams
    >({
      query: (args) => ({
        url: `/me/episodes`,
        method: "DELETE",
        body: args?._body,
      }),
      invalidatesTags: () => ["Episodes", "Library"],
    }),
  }),
});

export const {
  useGetShowEpisodesQuery,
  useGetEpisodeQuery,
  useGetSeveralEpisodesQuery,
  useGetUsersSavedEpisodesQuery,
  useCheckUsersSavedEpisodesQuery,
  useSaveEpisodesForCurrentUserMutation,
  useRemoveUsersSavedEpisodesMutation,
} = episodesApi;
