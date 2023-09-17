// Albums
const AlbumsApi = createApi({
  reducerPath: "AlbumsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
/albums/{id}: builder.query({
,/albums: builder.query({
,/albums/{id}/tracks: builder.query({
,/artists/{id}/albums: builder.query({
,/me/albums: builder.query({
,/me/albums/contains: builder.query({

// Artists
const ArtistsApi = createApi({
  reducerPath: "ArtistsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
/artists/{id}: builder.query({
,/artists: builder.query({
,/artists/{id}/albums: builder.query({
,/artists/{id}/top-tracks: builder.query({
,/artists/{id}/related-artists: builder.query({

// Audiobooks
const AudiobooksApi = createApi({
  reducerPath: "AudiobooksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
/audiobooks/{id}: builder.query({
,/audiobooks: builder.query({
,/audiobooks/{id}/chapters: builder.query({
,/me/audiobooks: builder.query({
,/me/audiobooks/contains: builder.query({

// Categories
const CategoriesApi = createApi({
  reducerPath: "CategoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
/browse/categories: builder.query({
,/browse/categories/{category_id}: builder.query({
,/browse/categories/{category_id}/playlists: builder.query({

// Chapters
const ChaptersApi = createApi({
  reducerPath: "ChaptersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
/audiobooks/{id}/chapters: builder.query({
,/chapters/{id}: builder.query({
,/chapters: builder.query({

// Episodes
const EpisodesApi = createApi({
  reducerPath: "EpisodesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
/shows/{id}/episodes: builder.query({
,/episodes/{id}: builder.query({
,/episodes: builder.query({
,/me/episodes: builder.query({
,/me/episodes/contains: builder.query({

// Library
const LibraryApi = createApi({
  reducerPath: "LibraryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({

// Genres
const GenresApi = createApi({
  reducerPath: "GenresApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({

// Markets
const MarketsApi = createApi({
  reducerPath: "MarketsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
/markets: builder.query({

// Player
const PlayerApi = createApi({
  reducerPath: "PlayerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
/me/player: builder.query({
,/me/player/devices: builder.query({
,/me/player/currently-playing: builder.query({
,/me/player/play: builder.mutation({
,/me/player/pause: builder.mutation({
,/me/player/next: builder.mutation({
,/me/player/previous: builder.mutation({
,/me/player/seek: builder.mutation({
,/me/player/repeat: builder.mutation({
,/me/player/volume: builder.mutation({
,/me/player/shuffle: builder.mutation({
,/me/player/recently-played: builder.query({
,/me/player/queue: builder.query({

// Playlists
const PlaylistsApi = createApi({
  reducerPath: "PlaylistsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
/playlists/{playlist_id}: builder.query({
,/playlists/{playlist_id}/tracks: builder.query({
,/me/playlists: builder.query({
,/users/{user_id}/playlists: builder.query({
,/playlists/{playlist_id}/followers: builder.mutation({
,/browse/featured-playlists: builder.query({
,/browse/categories/{category_id}/playlists: builder.query({
,/playlists/{playlist_id}/images: builder.query({
,/playlists/{playlist_id}/followers/contains: builder.query({

// Search
const SearchApi = createApi({
  reducerPath: "SearchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
/search: builder.query({

// Shows
const ShowsApi = createApi({
  reducerPath: "ShowsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
/shows/{id}: builder.query({
,/shows: builder.query({
,/shows/{id}/episodes: builder.query({
,/me/shows: builder.query({
,/me/shows/contains: builder.query({

// Tracks
const TracksApi = createApi({
  reducerPath: "TracksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
/albums/{id}/tracks: builder.query({
,/artists/{id}/top-tracks: builder.query({
,/tracks/{id}: builder.query({
,/tracks: builder.query({
,/playlists/{playlist_id}/tracks: builder.query({
,/me/tracks: builder.query({
,/me/tracks/contains: builder.query({

// Users
const UsersApi = createApi({
  reducerPath: "UsersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
/users/{user_id}: builder.query({
,/users/{user_id}/playlists: builder.query({

