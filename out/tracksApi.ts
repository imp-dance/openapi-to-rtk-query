import { baseApi } from "./baseApi";
import {
  GetAlbumTracksParams,
  GetAlbumTracksResponse,
  GetArtistsTopTracksParams,
  GetArtistsTopTracksResponse,
  GetTrackParams,
  GetTrackResponse,
  GetSeveralTracksResponse,
  GetPlaylistItemsParams,
  GetPlaylistItemsResponse,
  AddItemsToPlaylistParams,
  AddItemsToPlaylistResponse,
  UpdatePlaylistItemsParams,
  UpdatePlaylistItemsResponse,
  RemovePlaylistItemsParams,
  RemovePlaylistItemsResponse,
  GetUsersSavedTracksResponse,
  SaveTracksForCurrentUserParams,
  RemoveUsersSavedTracksParams,
  CheckUsersSavedTracksResponse,
  GetUsersTopItemsParams,
  GetUsersTopItemsResponse,
  GetTracksAudioFeaturesResponse,
  GetTracksAudioFeaturesParams,
  GetTracksAudioAnalysisParams,
  GetTracksAudioAnalysisResponse,
  GetRecommendationsResponse,
} from "./types";

export const tracksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAlbumTracks: builder.query<GetAlbumTracksResponse, GetAlbumTracksParams>(
      {
        query: (args) => ({
          url: `/albums/${args.id}/tracks`,
          method: "GET",
        }),
        providesTags: () => ["Albums", "Tracks"],
      },
    ),
    getArtistsTopTracks: builder.query<
      GetArtistsTopTracksResponse,
      GetArtistsTopTracksParams
    >({
      query: (args) => ({
        url: `/artists/${args.id}/top-tracks`,
        method: "GET",
      }),
      providesTags: () => ["Artists", "Tracks"],
    }),
    getTrack: builder.query<GetTrackResponse, GetTrackParams>({
      query: (args) => ({
        url: `/tracks/${args.id}`,
        method: "GET",
      }),
      providesTags: () => ["Tracks"],
    }),
    getSeveralTracks: builder.query<GetSeveralTracksResponse, unknown>({
      query: (args) => ({
        url: `/tracks`,
        method: "GET",
      }),
      providesTags: () => ["Tracks"],
    }),
    getPlaylistItems: builder.query<
      GetPlaylistItemsResponse,
      GetPlaylistItemsParams
    >({
      query: (args) => ({
        url: `/playlists/${args.playlist_id}/tracks`,
        method: "GET",
      }),
      providesTags: () => ["Playlists", "Tracks"],
    }),
    getUsersSavedTracks: builder.query<GetUsersSavedTracksResponse, unknown>({
      query: (args) => ({
        url: `/me/tracks`,
        method: "GET",
      }),
      providesTags: () => ["Tracks", "Library"],
    }),
    checkUsersSavedTracks: builder.query<
      CheckUsersSavedTracksResponse,
      unknown
    >({
      query: (args) => ({
        url: `/me/tracks/contains`,
        method: "GET",
      }),
      providesTags: () => ["Tracks", "Library"],
    }),
    getUsersTopItems: builder.query<
      GetUsersTopItemsResponse,
      GetUsersTopItemsParams
    >({
      query: (args) => ({
        url: `/me/top/${args.type}`,
        method: "GET",
      }),
      providesTags: () => ["Users", "Tracks", "Library"],
    }),
    getTracksAudioFeatures: builder.query<
      GetTracksAudioFeaturesResponse,
      unknown
    >({
      query: (args) => ({
        url: `/audio-features`,
        method: "GET",
      }),
      providesTags: () => ["Tracks"],
    }),
    getTracksAudioAnalysis: builder.query<
      GetTracksAudioAnalysisResponse,
      GetTracksAudioAnalysisParams
    >({
      query: (args) => ({
        url: `/audio-analysis/${args.id}`,
        method: "GET",
      }),
      providesTags: () => ["Tracks"],
    }),
    getRecommendations: builder.query<GetRecommendationsResponse, unknown>({
      query: (args) => ({
        url: `/recommendations`,
        method: "GET",
      }),
      providesTags: () => ["Tracks"],
    }),
    addItemsToPlaylist: builder.mutation<
      AddItemsToPlaylistResponse,
      AddItemsToPlaylistParams
    >({
      query: (args) => ({
        url: `/playlists/${args.playlist_id}/tracks`,
        method: "POST",
        body: args?._body,
      }),
      invalidatesTags: () => ["Playlists", "Tracks"],
    }),
    updatePlaylistItems: builder.mutation<
      UpdatePlaylistItemsResponse,
      UpdatePlaylistItemsParams
    >({
      query: (args) => ({
        url: `/playlists/${args.playlist_id}/tracks`,
        method: "PUT",
        body: args?._body,
      }),
      invalidatesTags: () => ["Playlists", "Tracks"],
    }),
    removePlaylistItems: builder.mutation<
      RemovePlaylistItemsResponse,
      RemovePlaylistItemsParams
    >({
      query: (args) => ({
        url: `/playlists/${args.playlist_id}/tracks`,
        method: "DELETE",
        body: args?._body,
      }),
      invalidatesTags: () => ["Playlists", "Tracks"],
    }),
    saveTracksForCurrentUser: builder.mutation<
      unknown,
      SaveTracksForCurrentUserParams
    >({
      query: (args) => ({
        url: `/me/tracks`,
        method: "PUT",
        body: args?._body,
      }),
      invalidatesTags: () => ["Tracks", "Library"],
    }),
    removeUsersSavedTracks: builder.mutation<
      unknown,
      RemoveUsersSavedTracksParams
    >({
      query: (args) => ({
        url: `/me/tracks`,
        method: "DELETE",
        body: args?._body,
      }),
      invalidatesTags: () => ["Tracks", "Library"],
    }),
  }),
});

export const {
  useGetAlbumTracksQuery,
  useGetArtistsTopTracksQuery,
  useGetTrackQuery,
  useGetSeveralTracksQuery,
  useGetPlaylistItemsQuery,
  useGetUsersSavedTracksQuery,
  useCheckUsersSavedTracksQuery,
  useGetUsersTopItemsQuery,
  useGetTracksAudioFeaturesQuery,
  useGetTracksAudioAnalysisQuery,
  useGetRecommendationsQuery,
  useAddItemsToPlaylistMutation,
  useUpdatePlaylistItemsMutation,
  useRemovePlaylistItemsMutation,
  useSaveTracksForCurrentUserMutation,
  useRemoveUsersSavedTracksMutation,
} = tracksApi;
