import { baseApi } from "./baseApi";
import {
  GetUsersSavedAudiobooksResponse,
  CheckUsersSavedAudiobooksResponse,
  ChangePlaylistDetailsParams,
  GetCurrentUsersPlaylistsResponse,
  GetUsersSavedAlbumsResponse,
  SaveAlbumsForCurrentUserParams,
  RemoveUsersSavedAlbumsParams,
  CheckUsersSavedAlbumsResponse,
  GetUsersSavedTracksResponse,
  SaveTracksForCurrentUserParams,
  RemoveUsersSavedTracksParams,
  CheckUsersSavedTracksResponse,
  GetUsersSavedEpisodesResponse,
  SaveEpisodesForCurrentUserParams,
  RemoveUsersSavedEpisodesParams,
  CheckUsersSavedEpisodesResponse,
  GetUsersSavedShowsResponse,
  CheckUsersSavedShowsResponse,
  GetUsersTopItemsParams,
  GetUsersTopItemsResponse,
  CreatePlaylistParams,
  CreatePlaylistResponse,
  GetFollowedArtistsResponse,
  FollowArtistsOrUsersParams,
  UnfollowArtistsOrUsersParams,
  CheckIfUserFollowsArtistsOrUsersResponse,
} from "./types";

export const libraryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsersSavedAudiobooks: builder.query<
      GetUsersSavedAudiobooksResponse,
      unknown
    >({
      query: (args) => ({
        url: `/me/audiobooks`,
        method: "GET",
      }),
      providesTags: () => ["Audiobooks", "Library"],
    }),
    checkUsersSavedAudiobooks: builder.query<
      CheckUsersSavedAudiobooksResponse,
      unknown
    >({
      query: (args) => ({
        url: `/me/audiobooks/contains`,
        method: "GET",
      }),
      providesTags: () => ["Audiobooks", "Library"],
    }),
    getCurrentUsersPlaylists: builder.query<
      GetCurrentUsersPlaylistsResponse,
      unknown
    >({
      query: (args) => ({
        url: `/me/playlists`,
        method: "GET",
      }),
      providesTags: () => ["Playlists", "Library"],
    }),
    getUsersSavedAlbums: builder.query<GetUsersSavedAlbumsResponse, unknown>({
      query: (args) => ({
        url: `/me/albums`,
        method: "GET",
      }),
      providesTags: () => ["Albums", "Library"],
    }),
    checkUsersSavedAlbums: builder.query<
      CheckUsersSavedAlbumsResponse,
      unknown
    >({
      query: (args) => ({
        url: `/me/albums/contains`,
        method: "GET",
      }),
      providesTags: () => ["Albums", "Library"],
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
    getFollowedArtists: builder.query<GetFollowedArtistsResponse, unknown>({
      query: (args) => ({
        url: `/me/following`,
        method: "GET",
      }),
      providesTags: () => ["Users", "Library", "Artists"],
    }),
    checkIfUserFollowsArtistsOrUsers: builder.query<
      CheckIfUserFollowsArtistsOrUsersResponse,
      unknown
    >({
      query: (args) => ({
        url: `/me/following/contains`,
        method: "GET",
      }),
      providesTags: () => ["Users", "Artists", "Library"],
    }),
    saveAudiobooksForCurrentUser: builder.mutation({
      query: (args) => ({
        url: `/me/audiobooks`,
        method: "PUT",
      }),
      invalidatesTags: () => ["Audiobooks", "Library"],
    }),
    removeUsersSavedAudiobooks: builder.mutation({
      query: (args) => ({
        url: `/me/audiobooks`,
        method: "DELETE",
      }),
      invalidatesTags: () => ["Audiobooks", "Library"],
    }),
    changePlaylistDetails: builder.mutation<
      unknown,
      ChangePlaylistDetailsParams
    >({
      query: (args) => ({
        url: `/playlists/${args.playlist_id}`,
        method: "PUT",
        body: args?._body,
      }),
      invalidatesTags: () => ["Playlists", "Library"],
    }),
    saveAlbumsForCurrentUser: builder.mutation<
      unknown,
      SaveAlbumsForCurrentUserParams
    >({
      query: (args) => ({
        url: `/me/albums`,
        method: "PUT",
        body: args?._body,
      }),
      invalidatesTags: () => ["Albums", "Library"],
    }),
    removeUsersSavedAlbums: builder.mutation<
      unknown,
      RemoveUsersSavedAlbumsParams
    >({
      query: (args) => ({
        url: `/me/albums`,
        method: "DELETE",
        body: args?._body,
      }),
      invalidatesTags: () => ["Albums", "Library"],
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
    createPlaylist: builder.mutation<
      CreatePlaylistResponse,
      CreatePlaylistParams
    >({
      query: (args) => ({
        url: `/users/${args.user_id}/playlists`,
        method: "POST",
        body: args?._body,
      }),
      invalidatesTags: () => ["Playlists", "Library"],
    }),
    followArtistsOrUsers: builder.mutation<unknown, FollowArtistsOrUsersParams>(
      {
        query: (args) => ({
          url: `/me/following`,
          method: "PUT",
          body: args?._body,
        }),
        invalidatesTags: () => ["Users", "Artists", "Library"],
      },
    ),
    unfollowArtistsOrUsers: builder.mutation<
      unknown,
      UnfollowArtistsOrUsersParams
    >({
      query: (args) => ({
        url: `/me/following`,
        method: "DELETE",
        body: args?._body,
      }),
      invalidatesTags: () => ["Users", "Artists", "Library"],
    }),
  }),
});

export const {
  useGetUsersSavedAudiobooksQuery,
  useCheckUsersSavedAudiobooksQuery,
  useGetCurrentUsersPlaylistsQuery,
  useGetUsersSavedAlbumsQuery,
  useCheckUsersSavedAlbumsQuery,
  useGetUsersSavedTracksQuery,
  useCheckUsersSavedTracksQuery,
  useGetUsersSavedEpisodesQuery,
  useCheckUsersSavedEpisodesQuery,
  useGetUsersSavedShowsQuery,
  useCheckUsersSavedShowsQuery,
  useGetUsersTopItemsQuery,
  useGetFollowedArtistsQuery,
  useCheckIfUserFollowsArtistsOrUsersQuery,
  useSaveAudiobooksForCurrentUserMutation,
  useRemoveUsersSavedAudiobooksMutation,
  useChangePlaylistDetailsMutation,
  useSaveAlbumsForCurrentUserMutation,
  useRemoveUsersSavedAlbumsMutation,
  useSaveTracksForCurrentUserMutation,
  useRemoveUsersSavedTracksMutation,
  useSaveEpisodesForCurrentUserMutation,
  useRemoveUsersSavedEpisodesMutation,
  useSaveShowsForCurrentUserMutation,
  useRemoveUsersSavedShowsMutation,
  useCreatePlaylistMutation,
  useFollowArtistsOrUsersMutation,
  useUnfollowArtistsOrUsersMutation,
} = libraryApi;
