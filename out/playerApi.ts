import { baseApi } from "./baseApi";
import {
  GetPlaybackStateResponse,
  TransferPlaybackParams,
  GetAvailableDevicesResponse,
  GetCurrentlyPlayingTrackResponse,
  StartresumePlaybackParams,
  GetRecentlyPlayedTracksResponse,
  GetTheUsersQueueResponse,
} from "./types";

export const playerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlaybackState: builder.query<GetPlaybackStateResponse, unknown>({
      query: (args) => ({
        url: `/me/player`,
        method: "GET",
      }),
      providesTags: () => ["Player"],
    }),
    getAvailableDevices: builder.query<GetAvailableDevicesResponse, unknown>({
      query: (args) => ({
        url: `/me/player/devices`,
        method: "GET",
      }),
      providesTags: () => ["Player"],
    }),
    getCurrentlyPlayingTrack: builder.query<
      GetCurrentlyPlayingTrackResponse,
      unknown
    >({
      query: (args) => ({
        url: `/me/player/currently-playing`,
        method: "GET",
      }),
      providesTags: () => ["Player"],
    }),
    getRecentlyPlayedTracks: builder.query<
      GetRecentlyPlayedTracksResponse,
      unknown
    >({
      query: (args) => ({
        url: `/me/player/recently-played`,
        method: "GET",
      }),
      providesTags: () => ["Player"],
    }),
    getTheUsersQueue: builder.query<GetTheUsersQueueResponse, unknown>({
      query: (args) => ({
        url: `/me/player/queue`,
        method: "GET",
      }),
      providesTags: () => ["Player"],
    }),
    transferPlayback: builder.mutation<unknown, TransferPlaybackParams>({
      query: (args) => ({
        url: `/me/player`,
        method: "PUT",
        body: args?._body,
      }),
      invalidatesTags: () => ["Player"],
    }),
    startresumePlayback: builder.mutation<unknown, StartresumePlaybackParams>({
      query: (args) => ({
        url: `/me/player/play`,
        method: "PUT",
        body: args?._body,
      }),
      invalidatesTags: () => ["Player"],
    }),
    pausePlayback: builder.mutation({
      query: (args) => ({
        url: `/me/player/pause`,
        method: "PUT",
      }),
      invalidatesTags: () => ["Player"],
    }),
    skipToNext: builder.mutation({
      query: (args) => ({
        url: `/me/player/next`,
        method: "POST",
      }),
      invalidatesTags: () => ["Player"],
    }),
    skipToPrevious: builder.mutation({
      query: (args) => ({
        url: `/me/player/previous`,
        method: "POST",
      }),
      invalidatesTags: () => ["Player"],
    }),
    seekToPosition: builder.mutation({
      query: (args) => ({
        url: `/me/player/seek`,
        method: "PUT",
      }),
      invalidatesTags: () => ["Player"],
    }),
    setRepeatMode: builder.mutation({
      query: (args) => ({
        url: `/me/player/repeat`,
        method: "PUT",
      }),
      invalidatesTags: () => ["Player"],
    }),
    setPlaybackVolume: builder.mutation({
      query: (args) => ({
        url: `/me/player/volume`,
        method: "PUT",
      }),
      invalidatesTags: () => ["Player"],
    }),
    togglePlaybackShuffle: builder.mutation({
      query: (args) => ({
        url: `/me/player/shuffle`,
        method: "PUT",
      }),
      invalidatesTags: () => ["Player"],
    }),
    addItemToPlaybackQueue: builder.mutation({
      query: (args) => ({
        url: `/me/player/queue`,
        method: "POST",
      }),
      invalidatesTags: () => ["Player"],
    }),
  }),
});

export const {
  useGetPlaybackStateQuery,
  useGetAvailableDevicesQuery,
  useGetCurrentlyPlayingTrackQuery,
  useGetRecentlyPlayedTracksQuery,
  useGetTheUsersQueueQuery,
  useTransferPlaybackMutation,
  useStartresumePlaybackMutation,
  usePausePlaybackMutation,
  useSkipToNextMutation,
  useSkipToPreviousMutation,
  useSeekToPositionMutation,
  useSetRepeatModeMutation,
  useSetPlaybackVolumeMutation,
  useTogglePlaybackShuffleMutation,
  useAddItemToPlaybackQueueMutation,
} = playerApi;
