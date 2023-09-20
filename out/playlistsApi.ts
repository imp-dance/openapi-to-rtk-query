import { baseApi } from "./baseApi";
import {
  GetPlaylistParams,
  GetPlaylistResponse,
  ChangePlaylistDetailsParams,
  GetPlaylistItemsParams,
  GetPlaylistItemsResponse,
  AddItemsToPlaylistParams,
  AddItemsToPlaylistResponse,
  UpdatePlaylistItemsParams,
  UpdatePlaylistItemsResponse,
  RemovePlaylistItemsParams,
  RemovePlaylistItemsResponse,
  GetCurrentUsersPlaylistsResponse,
  GetUsersPlaylistsParams,
  GetUsersPlaylistsResponse,
  CreatePlaylistParams,
  CreatePlaylistResponse,
  FollowPlaylistParams,
  UnfollowPlaylistParams,
  GetFeaturedPlaylistsResponse,
  GetCategorysPlaylistsParams,
  GetCategorysPlaylistsResponse,
  GetPlaylistCoverImageParams,
  GetPlaylistCoverImageResponse,
  AddCustomPlaylistCoverImageParams,
  CheckIfUsersFollowPlaylistParams,
  CheckIfUsersFollowPlaylistResponse,
} from "./types";

export const playlistsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlaylist: builder.query<GetPlaylistResponse, GetPlaylistParams>({
      query: (args) => ({
        url: `/playlists/${args.playlist_id}`,
        method: "GET",
      }),
      providesTags: () => ["Playlists"],
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
    getUsersPlaylists: builder.query<
      GetUsersPlaylistsResponse,
      GetUsersPlaylistsParams
    >({
      query: (args) => ({
        url: `/users/${args.user_id}/playlists`,
        method: "GET",
      }),
      providesTags: () => ["Playlists", "Users"],
    }),
    getFeaturedPlaylists: builder.query<GetFeaturedPlaylistsResponse, unknown>({
      query: (args) => ({
        url: `/browse/featured-playlists`,
        method: "GET",
      }),
      providesTags: () => ["Playlists"],
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
    getPlaylistCoverImage: builder.query<
      GetPlaylistCoverImageResponse,
      GetPlaylistCoverImageParams
    >({
      query: (args) => ({
        url: `/playlists/${args.playlist_id}/images`,
        method: "GET",
      }),
      providesTags: () => ["Playlists"],
    }),
    checkIfUsersFollowPlaylist: builder.query<
      CheckIfUsersFollowPlaylistResponse,
      CheckIfUsersFollowPlaylistParams
    >({
      query: (args) => ({
        url: `/playlists/${args.playlist_id}/followers/contains`,
        method: "GET",
      }),
      providesTags: () => ["Users", "Playlists"],
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
    followPlaylist: builder.mutation<unknown, FollowPlaylistParams>({
      query: (args) => ({
        url: `/playlists/${args.playlist_id}/followers`,
        method: "PUT",
        body: args?._body,
      }),
      invalidatesTags: () => ["Users", "Playlists"],
    }),
    unfollowPlaylist: builder.mutation<unknown, UnfollowPlaylistParams>({
      query: (args) => ({
        url: `/playlists/${args.playlist_id}/followers`,
        method: "DELETE",
      }),
      invalidatesTags: () => ["Users", "Playlists"],
    }),
    addCustomPlaylistCoverImage: builder.mutation<
      unknown,
      AddCustomPlaylistCoverImageParams
    >({
      query: (args) => ({
        url: `/playlists/${args.playlist_id}/images`,
        method: "PUT",
      }),
      invalidatesTags: () => ["Playlists"],
    }),
  }),
});

export const {
  useGetPlaylistQuery,
  useGetPlaylistItemsQuery,
  useGetCurrentUsersPlaylistsQuery,
  useGetUsersPlaylistsQuery,
  useGetFeaturedPlaylistsQuery,
  useGetCategorysPlaylistsQuery,
  useGetPlaylistCoverImageQuery,
  useCheckIfUsersFollowPlaylistQuery,
  useChangePlaylistDetailsMutation,
  useAddItemsToPlaylistMutation,
  useUpdatePlaylistItemsMutation,
  useRemovePlaylistItemsMutation,
  useCreatePlaylistMutation,
  useFollowPlaylistMutation,
  useUnfollowPlaylistMutation,
  useAddCustomPlaylistCoverImageMutation,
} = playlistsApi;
