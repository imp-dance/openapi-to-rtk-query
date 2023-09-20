import { baseApi } from "./baseApi";
import {
  GetAlbumParams,
  GetAlbumResponse,
  GetSeveralAlbumsResponse,
  GetAlbumTracksParams,
  GetAlbumTracksResponse,
  GetArtistsAlbumsParams,
  GetArtistsAlbumsResponse,
  GetUsersSavedAlbumsResponse,
  SaveAlbumsForCurrentUserParams,
  RemoveUsersSavedAlbumsParams,
  CheckUsersSavedAlbumsResponse,
  GetNewReleasesResponse,
} from "./types";

export const albumsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAlbum: builder.query<GetAlbumResponse, GetAlbumParams>({
      query: (args) => ({
        url: `/albums/${args.id}`,
        method: "GET",
      }),
      providesTags: () => ["Albums"],
    }),
    getSeveralAlbums: builder.query<GetSeveralAlbumsResponse, unknown>({
      query: (args) => ({
        url: `/albums`,
        method: "GET",
      }),
      providesTags: () => ["Albums"],
    }),
    getAlbumTracks: builder.query<GetAlbumTracksResponse, GetAlbumTracksParams>(
      {
        query: (args) => ({
          url: `/albums/${args.id}/tracks`,
          method: "GET",
        }),
        providesTags: () => ["Albums", "Tracks"],
      },
    ),
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
    getNewReleases: builder.query<GetNewReleasesResponse, unknown>({
      query: (args) => ({
        url: `/browse/new-releases`,
        method: "GET",
      }),
      providesTags: () => ["Albums"],
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
  }),
});

export const {
  useGetAlbumQuery,
  useGetSeveralAlbumsQuery,
  useGetAlbumTracksQuery,
  useGetArtistsAlbumsQuery,
  useGetUsersSavedAlbumsQuery,
  useCheckUsersSavedAlbumsQuery,
  useGetNewReleasesQuery,
  useSaveAlbumsForCurrentUserMutation,
  useRemoveUsersSavedAlbumsMutation,
} = albumsApi;
