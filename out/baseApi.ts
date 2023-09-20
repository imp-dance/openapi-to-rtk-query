import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const tags = [
  "Albums",
  "Artists",
  "Audiobooks",
  "Categories",
  "Chapters",
  "Episodes",
  "Library",
  "Genres",
  "Markets",
  "Player",
  "Playlists",
  "Search",
  "Shows",
  "Tracks",
  "Users",
] as const;

export const baseApi = createApi({
  tagTypes: tags,
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com" }),
  endpoints: (builder) => ({}),
});
