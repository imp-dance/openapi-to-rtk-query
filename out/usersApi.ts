import { baseApi } from "./baseApi";
import {
  GetCurrentUsersProfileResponse,
  GetUsersTopItemsParams,
  GetUsersTopItemsResponse,
  GetUsersProfileParams,
  GetUsersProfileResponse,
  GetUsersPlaylistsParams,
  GetUsersPlaylistsResponse,
  FollowPlaylistParams,
  UnfollowPlaylistParams,
  GetFollowedArtistsResponse,
  FollowArtistsOrUsersParams,
  UnfollowArtistsOrUsersParams,
  CheckIfUserFollowsArtistsOrUsersResponse,
  CheckIfUsersFollowPlaylistParams,
  CheckIfUsersFollowPlaylistResponse,
} from "./types";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUsersProfile: builder.query<
      GetCurrentUsersProfileResponse,
      unknown
    >({
      query: (args) => ({
        url: `/me`,
        method: "GET",
      }),
      providesTags: () => ["Users"],
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
    getUsersProfile: builder.query<
      GetUsersProfileResponse,
      GetUsersProfileParams
    >({
      query: (args) => ({
        url: `/users/${args.user_id}`,
        method: "GET",
      }),
      providesTags: () => ["Users"],
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
  useGetCurrentUsersProfileQuery,
  useGetUsersTopItemsQuery,
  useGetUsersProfileQuery,
  useGetUsersPlaylistsQuery,
  useGetFollowedArtistsQuery,
  useCheckIfUserFollowsArtistsOrUsersQuery,
  useCheckIfUsersFollowPlaylistQuery,
  useFollowPlaylistMutation,
  useUnfollowPlaylistMutation,
  useFollowArtistsOrUsersMutation,
  useUnfollowArtistsOrUsersMutation,
} = usersApi;
