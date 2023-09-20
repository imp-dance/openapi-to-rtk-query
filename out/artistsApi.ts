import { baseApi } from "./baseApi";
import {
  GetArtistParams,
  GetArtistResponse,
  GetSeveralArtistsResponse,
  GetArtistsAlbumsParams,
  GetArtistsAlbumsResponse,
  GetArtistsTopTracksParams,
  GetArtistsTopTracksResponse,
  GetArtistsRelatedArtistsParams,
  GetArtistsRelatedArtistsResponse,
  GetFollowedArtistsResponse,
  FollowArtistsOrUsersParams,
  UnfollowArtistsOrUsersParams,
  CheckIfUserFollowsArtistsOrUsersResponse,
} from "./types";

export const artistsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getArtist: builder.query<GetArtistResponse, GetArtistParams>({
      query: (args) => ({
        url: `/artists/${args.id}`,
        method: "GET",
      }),
      providesTags: () => ["Artists"],
    }),
    getSeveralArtists: builder.query<GetSeveralArtistsResponse, unknown>({
      query: (args) => ({
        url: `/artists`,
        method: "GET",
      }),
      providesTags: () => ["Artists"],
    }),
    getArtistsAlbums: builder.query<
      GetArtistsAlbumsResponse,
      GetArtistsAlbumsParams
    >({
      query: (args) => ({
        url: `/artists/${args.id}/albums`,
        method: "GET",
      }),
      providesTags: () => ["Artists", "Albums"],
    }),
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
    getArtistsRelatedArtists: builder.query<
      GetArtistsRelatedArtistsResponse,
      GetArtistsRelatedArtistsParams
    >({
      query: (args) => ({
        url: `/artists/${args.id}/related-artists`,
        method: "GET",
      }),
      providesTags: () => ["Artists"],
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
  useGetArtistQuery,
  useGetSeveralArtistsQuery,
  useGetArtistsAlbumsQuery,
  useGetArtistsTopTracksQuery,
  useGetArtistsRelatedArtistsQuery,
  useGetFollowedArtistsQuery,
  useCheckIfUserFollowsArtistsOrUsersQuery,
  useFollowArtistsOrUsersMutation,
  useUnfollowArtistsOrUsersMutation,
} = artistsApi;
