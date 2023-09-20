import { baseApi } from "./baseApi";
import {
  GetAudiobookChaptersParams,
  GetAudiobookChaptersResponse,
  GetAChapterParams,
  GetAChapterResponse,
  GetSeveralChaptersResponse,
} from "./types";

export const chaptersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
    getAChapter: builder.query<GetAChapterResponse, GetAChapterParams>({
      query: (args) => ({
        url: `/chapters/${args.id}`,
        method: "GET",
      }),
      providesTags: () => ["Chapters"],
    }),
    getSeveralChapters: builder.query<GetSeveralChaptersResponse, unknown>({
      query: (args) => ({
        url: `/chapters`,
        method: "GET",
      }),
      providesTags: () => ["Chapters"],
    }),
  }),
});

export const {
  useGetAudiobookChaptersQuery,
  useGetAChapterQuery,
  useGetSeveralChaptersQuery,
} = chaptersApi;
