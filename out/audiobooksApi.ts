import { baseApi } from "./baseApi";
import {
  GetAnAudiobookParams,
  GetAnAudiobookResponse,
  GetSeveralAudiobooksResponse,
  GetAudiobookChaptersParams,
  GetAudiobookChaptersResponse,
  GetUsersSavedAudiobooksResponse,
  CheckUsersSavedAudiobooksResponse,
} from "./types";

export const audiobooksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnAudiobook: builder.query<GetAnAudiobookResponse, GetAnAudiobookParams>(
      {
        query: (args) => ({
          url: `/audiobooks/${args.id}`,
          method: "GET",
        }),
        providesTags: () => ["Audiobooks"],
      },
    ),
    getSeveralAudiobooks: builder.query<GetSeveralAudiobooksResponse, unknown>({
      query: (args) => ({
        url: `/audiobooks`,
        method: "GET",
      }),
      providesTags: () => ["Audiobooks"],
    }),
    getAudiobookChapters: builder.query<
      GetAudiobookChaptersResponse,
      GetAudiobookChaptersParams
    >({
      query: (args) => ({
        url: `/audiobooks/${args.id}/chapters`,
        method: "GET",
      }),
      providesTags: () => ["Audiobooks", "Chapters"],
    }),
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
  }),
});

export const {
  useGetAnAudiobookQuery,
  useGetSeveralAudiobooksQuery,
  useGetAudiobookChaptersQuery,
  useGetUsersSavedAudiobooksQuery,
  useCheckUsersSavedAudiobooksQuery,
  useSaveAudiobooksForCurrentUserMutation,
  useRemoveUsersSavedAudiobooksMutation,
} = audiobooksApi;
