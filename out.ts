
type Builder = {
  query: <T, A>(options: any) => any;
  mutation: <T, A>(options: any) => any;
};


export const AlbumsEndpoints: Record<string, (builder: Builder) => any> = {
  getAlbum: (builder) => builder.query<{
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
tracks: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        artists?: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
      };
restrictions?: {
        reason?: string;
      };
name?: string;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      }[];
      };
copyrights: {
        text?: string;
type?: string;
      }[];
external_ids: {
        isrc?: string;
ean?: string;
upc?: string;
      };
genres: string[];
label: string;
popularity: number;
      }, unknown>({
    query: (params) => ({
      url: '/albums/{id}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Albums'],
  }),
  getSeveralAlbums: (builder) => builder.query<{
        albums: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
tracks: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        artists?: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
      };
restrictions?: {
        reason?: string;
      };
name?: string;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      }[];
      };
copyrights: {
        text?: string;
type?: string;
      }[];
external_ids: {
        isrc?: string;
ean?: string;
upc?: string;
      };
genres: string[];
label: string;
popularity: number;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/albums',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Albums'],
  }),
  getAlbumTracks: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        artists?: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
      };
restrictions?: {
        reason?: string;
      };
name?: string;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/albums/{id}/tracks',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Albums', 'Tracks'],
  }),
  getArtistsAlbums: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
album_group: string;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/artists/{id}/albums',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Artists', 'Albums'],
  }),
  getUsersSavedAlbums: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        added_at?: string;
album?: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
tracks: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        artists?: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
      };
restrictions?: {
        reason?: string;
      };
name?: string;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      }[];
      };
copyrights: {
        text?: string;
type?: string;
      }[];
external_ids: {
        isrc?: string;
ean?: string;
upc?: string;
      };
genres: string[];
label: string;
popularity: number;
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/albums',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Albums', 'Library'],
  }),
  checkUsersSavedAlbums: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/me/albums/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Albums', 'Library'],
  }),
  getNewReleases: (builder) => builder.query<{
        albums: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
      }[];
      };
      }, unknown>({
    query: (params) => ({
      url: '/browse/new-releases',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Albums'],
  }),
  saveAlbumsForCurrentUser: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/albums',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Albums', 'Library'],
  }),
  removeUsersSavedAlbums: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/albums',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Albums', 'Library'],
  }),
};


export const ArtistsEndpoints: Record<string, (builder: Builder) => any> = {
  getArtist: (builder) => builder.query<{
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }, unknown>({
    query: (params) => ({
      url: '/artists/{id}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Artists'],
  }),
  getSeveralArtists: (builder) => builder.query<{
        artists: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/artists',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Artists'],
  }),
  getArtistsAlbums: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
album_group: string;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/artists/{id}/albums',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Artists', 'Albums'],
  }),
  getArtistsTopTracks: (builder) => builder.query<{
        tracks: {
        album?: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
      };
artists?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_ids?: {
        isrc?: string;
ean?: string;
upc?: string;
      };
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: object;
restrictions?: {
        reason?: string;
      };
name?: string;
popularity?: number;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/artists/{id}/top-tracks',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Artists', 'Tracks'],
  }),
  getArtistsRelatedArtists: (builder) => builder.query<{
        artists: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/artists/{id}/related-artists',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Artists'],
  }),
  getFollowedArtists: (builder) => builder.query<{
        artists: {
        href?: string;
limit?: number;
next?: string;
cursors?: {
        after?: string;
before?: string;
      };
total?: number;
items?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
      };
      }, unknown>({
    query: (params) => ({
      url: '/me/following',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Users', 'Library', 'Artists'],
  }),
  checkIfUserFollowsArtistsOrUsers: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/me/following/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Users', 'Artists', 'Library'],
  }),
  followArtistsOrUsers: (builder) => builder.mutation<unknown, {
        ids: string[];
      }>({
    query: (params) => ({
      url: '/me/following',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Users', 'Artists', 'Library'],
  }),
  unfollowArtistsOrUsers: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/following',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Users', 'Artists', 'Library'],
  }),
};


export const AudiobooksEndpoints: Record<string, (builder: Builder) => any> = {
  getAnAudiobook: (builder) => builder.query<{
        authors: {
        name?: string;
      }[];
available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
edition?: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
languages: string[];
media_type: string;
name: string;
narrators: {
        name?: string;
      }[];
publisher: string;
type: string;
uri: string;
total_chapters: number;
chapters: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        audio_preview_url: string;
available_markets?: string[];
chapter_number: number;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_playable: boolean;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
      }[];
      };
      }, unknown>({
    query: (params) => ({
      url: '/audiobooks/{id}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Audiobooks'],
  }),
  getSeveralAudiobooks: (builder) => builder.query<{
        audiobooks: {
        authors: {
        name?: string;
      }[];
available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
edition?: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
languages: string[];
media_type: string;
name: string;
narrators: {
        name?: string;
      }[];
publisher: string;
type: string;
uri: string;
total_chapters: number;
chapters: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        audio_preview_url: string;
available_markets?: string[];
chapter_number: number;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_playable: boolean;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
      }[];
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/audiobooks',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Audiobooks'],
  }),
  getAudiobookChapters: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        audio_preview_url: string;
available_markets?: string[];
chapter_number: number;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_playable: boolean;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/audiobooks/{id}/chapters',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Audiobooks', 'Chapters'],
  }),
  getUsersSavedAudiobooks: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        authors: {
        name?: string;
      }[];
available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
edition?: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
languages: string[];
media_type: string;
name: string;
narrators: {
        name?: string;
      }[];
publisher: string;
type: string;
uri: string;
total_chapters: number;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/audiobooks',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Audiobooks', 'Library'],
  }),
  checkUsersSavedAudiobooks: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/me/audiobooks/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Audiobooks', 'Library'],
  }),
  saveAudiobooksForCurrentUser: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/audiobooks',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Audiobooks', 'Library'],
  }),
  removeUsersSavedAudiobooks: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/audiobooks',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Audiobooks', 'Library'],
  }),
};


export const CategoriesEndpoints: Record<string, (builder: Builder) => any> = {
  getSeveralBrowseCategories: (builder) => builder.query<{
        categories: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
      };
      }, unknown>({
    query: (params) => ({
      url: '/browse/categories',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Categories'],
  }),
  getSingleBrowseCategory: (builder) => builder.query<{
        href: string;
icons: {
        url: string;
height: number;
width: number;
      }[];
id: string;
name: string;
      }, unknown>({
    query: (params) => ({
      url: '/browse/categories/{category_id}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Categories'],
  }),
  getCategorysPlaylists: (builder) => builder.query<{
        message?: string;
playlists?: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        collaborative?: boolean;
description?: string;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
owner?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
display_name?: string;
      };
public?: boolean;
snapshot_id?: string;
tracks?: {
        href?: string;
total?: number;
      };
type?: string;
uri?: string;
      }[];
      };
      }, unknown>({
    query: (params) => ({
      url: '/browse/categories/{category_id}/playlists',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Playlists', 'Categories'],
  }),
};


export const ChaptersEndpoints: Record<string, (builder: Builder) => any> = {
  getAudiobookChapters: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        audio_preview_url: string;
available_markets?: string[];
chapter_number: number;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_playable: boolean;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/audiobooks/{id}/chapters',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Audiobooks', 'Chapters'],
  }),
  getAChapter: (builder) => builder.query<{
        audio_preview_url: string;
available_markets?: string[];
chapter_number: number;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_playable: boolean;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
audiobook: {
        authors: {
        name?: string;
      }[];
available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
edition?: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
languages: string[];
media_type: string;
name: string;
narrators: {
        name?: string;
      }[];
publisher: string;
type: string;
uri: string;
total_chapters: number;
      };
      }, unknown>({
    query: (params) => ({
      url: '/chapters/{id}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Chapters'],
  }),
  getSeveralChapters: (builder) => builder.query<{
        chapters: {
        audio_preview_url: string;
available_markets?: string[];
chapter_number: number;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_playable: boolean;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
audiobook: {
        authors: {
        name?: string;
      }[];
available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
edition?: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
languages: string[];
media_type: string;
name: string;
narrators: {
        name?: string;
      }[];
publisher: string;
type: string;
uri: string;
total_chapters: number;
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/chapters',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Chapters'],
  }),
};


export const EpisodesEndpoints: Record<string, (builder: Builder) => any> = {
  getShowEpisodes: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        audio_preview_url: string;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
is_playable: boolean;
language?: string;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/shows/{id}/episodes',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Shows', 'Episodes'],
  }),
  getEpisode: (builder) => builder.query<{
        audio_preview_url: string;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
is_playable: boolean;
language?: string;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
show: {
        available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
languages: string[];
media_type: string;
name: string;
publisher: string;
type: string;
uri: string;
total_episodes: number;
      };
      }, unknown>({
    query: (params) => ({
      url: '/episodes/{id}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Episodes'],
  }),
  getSeveralEpisodes: (builder) => builder.query<{
        episodes: {
        audio_preview_url: string;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
is_playable: boolean;
language?: string;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
show: {
        available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
languages: string[];
media_type: string;
name: string;
publisher: string;
type: string;
uri: string;
total_episodes: number;
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/episodes',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Episodes'],
  }),
  getUsersSavedEpisodes: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        added_at?: string;
episode?: {
        audio_preview_url: string;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
is_playable: boolean;
language?: string;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
show: {
        available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
languages: string[];
media_type: string;
name: string;
publisher: string;
type: string;
uri: string;
total_episodes: number;
      };
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/episodes',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Episodes', 'Library'],
  }),
  checkUsersSavedEpisodes: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/me/episodes/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Episodes', 'Library'],
  }),
  saveEpisodesForCurrentUser: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/episodes',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Episodes', 'Library'],
  }),
  removeUsersSavedEpisodes: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/episodes',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Episodes', 'Library'],
  }),
};


export const LibraryEndpoints: Record<string, (builder: Builder) => any> = {
  getUsersSavedAudiobooks: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        authors: {
        name?: string;
      }[];
available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
edition?: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
languages: string[];
media_type: string;
name: string;
narrators: {
        name?: string;
      }[];
publisher: string;
type: string;
uri: string;
total_chapters: number;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/audiobooks',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Audiobooks', 'Library'],
  }),
  checkUsersSavedAudiobooks: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/me/audiobooks/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Audiobooks', 'Library'],
  }),
  getCurrentUsersPlaylists: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        collaborative?: boolean;
description?: string;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
owner?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
display_name?: string;
      };
public?: boolean;
snapshot_id?: string;
tracks?: {
        href?: string;
total?: number;
      };
type?: string;
uri?: string;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/playlists',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Playlists', 'Library'],
  }),
  getUsersSavedAlbums: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        added_at?: string;
album?: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
tracks: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        artists?: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
      };
restrictions?: {
        reason?: string;
      };
name?: string;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      }[];
      };
copyrights: {
        text?: string;
type?: string;
      }[];
external_ids: {
        isrc?: string;
ean?: string;
upc?: string;
      };
genres: string[];
label: string;
popularity: number;
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/albums',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Albums', 'Library'],
  }),
  checkUsersSavedAlbums: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/me/albums/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Albums', 'Library'],
  }),
  getUsersSavedTracks: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        added_at?: string;
track?: {
        album?: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
      };
artists?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_ids?: {
        isrc?: string;
ean?: string;
upc?: string;
      };
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: object;
restrictions?: {
        reason?: string;
      };
name?: string;
popularity?: number;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/tracks',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Tracks', 'Library'],
  }),
  checkUsersSavedTracks: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/me/tracks/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Tracks', 'Library'],
  }),
  getUsersSavedEpisodes: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        added_at?: string;
episode?: {
        audio_preview_url: string;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
is_playable: boolean;
language?: string;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
show: {
        available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
languages: string[];
media_type: string;
name: string;
publisher: string;
type: string;
uri: string;
total_episodes: number;
      };
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/episodes',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Episodes', 'Library'],
  }),
  checkUsersSavedEpisodes: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/me/episodes/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Episodes', 'Library'],
  }),
  getUsersSavedShows: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        added_at?: string;
show?: {
        available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
languages: string[];
media_type: string;
name: string;
publisher: string;
type: string;
uri: string;
total_episodes: number;
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/shows',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Shows', 'Library'],
  }),
  checkUsersSavedShows: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/me/shows/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Shows', 'Library'],
  }),
  getUsersTopItems: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: object[];
      }, unknown>({
    query: (params) => ({
      url: '/me/top/{type}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Users', 'Tracks', 'Library'],
  }),
  getFollowedArtists: (builder) => builder.query<{
        artists: {
        href?: string;
limit?: number;
next?: string;
cursors?: {
        after?: string;
before?: string;
      };
total?: number;
items?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
      };
      }, unknown>({
    query: (params) => ({
      url: '/me/following',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Users', 'Library', 'Artists'],
  }),
  checkIfUserFollowsArtistsOrUsers: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/me/following/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Users', 'Artists', 'Library'],
  }),
  saveAudiobooksForCurrentUser: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/audiobooks',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Audiobooks', 'Library'],
  }),
  removeUsersSavedAudiobooks: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/audiobooks',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Audiobooks', 'Library'],
  }),
  changePlaylistDetails: (builder) => builder.mutation<unknown, {
        name?: string;
public?: boolean;
collaborative?: boolean;
description?: string;
      }>({
    query: (params) => ({
      url: '/playlists/{playlist_id}',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Playlists', 'Library'],
  }),
  saveAlbumsForCurrentUser: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/albums',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Albums', 'Library'],
  }),
  removeUsersSavedAlbums: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/albums',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Albums', 'Library'],
  }),
  saveTracksForCurrentUser: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/tracks',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Tracks', 'Library'],
  }),
  removeUsersSavedTracks: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/tracks',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Tracks', 'Library'],
  }),
  saveEpisodesForCurrentUser: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/episodes',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Episodes', 'Library'],
  }),
  removeUsersSavedEpisodes: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/episodes',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Episodes', 'Library'],
  }),
  saveShowsForCurrentUser: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/shows',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Shows', 'Library'],
  }),
  removeUsersSavedShows: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/shows',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Shows', 'Library'],
  }),
  createPlaylist: (builder) => builder.mutation<unknown, {
        name: string;
public?: boolean;
collaborative?: boolean;
description?: string;
      }>({
    query: (params) => ({
      url: '/users/{user_id}/playlists',
      method: 'POST',
      params,
    }),
    invalidatesTags: () => ['Playlists', 'Library'],
  }),
  followArtistsOrUsers: (builder) => builder.mutation<unknown, {
        ids: string[];
      }>({
    query: (params) => ({
      url: '/me/following',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Users', 'Artists', 'Library'],
  }),
  unfollowArtistsOrUsers: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/following',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Users', 'Artists', 'Library'],
  }),
};


export const GenresEndpoints: Record<string, (builder: Builder) => any> = {
  getAvailableGenreSeeds: (builder) => builder.query<{
        genres: string[];
      }, unknown>({
    query: (params) => ({
      url: '/recommendations/available-genre-seeds',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Genres'],
  }),
};


export const MarketsEndpoints: Record<string, (builder: Builder) => any> = {
  getAvailableMarkets: (builder) => builder.query<{
        markets?: string[];
      }, unknown>({
    query: (params) => ({
      url: '/markets',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Markets'],
  }),
};


export const PlayerEndpoints: Record<string, (builder: Builder) => any> = {
  getPlaybackState: (builder) => builder.query<{
        device?: {
        id?: string;
is_active?: boolean;
is_private_session?: boolean;
is_restricted?: boolean;
name?: string;
type?: string;
volume_percent?: number;
supports_volume?: boolean;
      };
repeat_state?: string;
shuffle_state?: boolean;
context?: {
        type?: string;
href?: string;
external_urls?: {
        spotify?: string;
      };
uri?: string;
      };
timestamp?: number;
progress_ms?: number;
is_playing?: boolean;
item?: any;
currently_playing_type?: string;
actions?: {
        interrupting_playback?: boolean;
pausing?: boolean;
resuming?: boolean;
seeking?: boolean;
skipping_next?: boolean;
skipping_prev?: boolean;
toggling_repeat_context?: boolean;
toggling_shuffle?: boolean;
toggling_repeat_track?: boolean;
transferring_playback?: boolean;
      };
      }, unknown>({
    query: (params) => ({
      url: '/me/player',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Player'],
  }),
  getAvailableDevices: (builder) => builder.query<{
        devices: {
        id?: string;
is_active?: boolean;
is_private_session?: boolean;
is_restricted?: boolean;
name?: string;
type?: string;
volume_percent?: number;
supports_volume?: boolean;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/player/devices',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Player'],
  }),
  getCurrentlyPlayingTrack: (builder) => builder.query<{
        device?: {
        id?: string;
is_active?: boolean;
is_private_session?: boolean;
is_restricted?: boolean;
name?: string;
type?: string;
volume_percent?: number;
supports_volume?: boolean;
      };
repeat_state?: string;
shuffle_state?: boolean;
context?: {
        type?: string;
href?: string;
external_urls?: {
        spotify?: string;
      };
uri?: string;
      };
timestamp?: number;
progress_ms?: number;
is_playing?: boolean;
item?: any;
currently_playing_type?: string;
actions?: {
        interrupting_playback?: boolean;
pausing?: boolean;
resuming?: boolean;
seeking?: boolean;
skipping_next?: boolean;
skipping_prev?: boolean;
toggling_repeat_context?: boolean;
toggling_shuffle?: boolean;
toggling_repeat_track?: boolean;
transferring_playback?: boolean;
      };
      }, unknown>({
    query: (params) => ({
      url: '/me/player/currently-playing',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Player'],
  }),
  getRecentlyPlayedTracks: (builder) => builder.query<{
        href?: string;
limit?: number;
next?: string;
cursors?: {
        after?: string;
before?: string;
      };
total?: number;
items?: {
        track?: {
        album?: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
      };
artists?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_ids?: {
        isrc?: string;
ean?: string;
upc?: string;
      };
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: object;
restrictions?: {
        reason?: string;
      };
name?: string;
popularity?: number;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      };
played_at?: string;
context?: {
        type?: string;
href?: string;
external_urls?: {
        spotify?: string;
      };
uri?: string;
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/player/recently-played',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Player'],
  }),
  getTheUsersQueue: (builder) => builder.query<{
        currently_playing?: any;
queue?: any[];
      }, unknown>({
    query: (params) => ({
      url: '/me/player/queue',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Player'],
  }),
  transferPlayback: (builder) => builder.mutation<unknown, {
        device_ids: string[];
play?: boolean;
      }>({
    query: (params) => ({
      url: '/me/player',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Player'],
  }),
  startresumePlayback: (builder) => builder.mutation<unknown, {
        context_uri?: string;
uris?: string[];
offset?: object;
position_ms?: number;
      }>({
    query: (params) => ({
      url: '/me/player/play',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Player'],
  }),
  pausePlayback: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/player/pause',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Player'],
  }),
  skipToNext: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/player/next',
      method: 'POST',
      params,
    }),
    invalidatesTags: () => ['Player'],
  }),
  skipToPrevious: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/player/previous',
      method: 'POST',
      params,
    }),
    invalidatesTags: () => ['Player'],
  }),
  seekToPosition: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/player/seek',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Player'],
  }),
  setRepeatMode: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/player/repeat',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Player'],
  }),
  setPlaybackVolume: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/player/volume',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Player'],
  }),
  togglePlaybackShuffle: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/player/shuffle',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Player'],
  }),
  addItemToPlaybackQueue: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/player/queue',
      method: 'POST',
      params,
    }),
    invalidatesTags: () => ['Player'],
  }),
};


export const PlaylistsEndpoints: Record<string, (builder: Builder) => any> = {
  getPlaylist: (builder) => builder.query<{
        collaborative?: boolean;
description?: string;
external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
owner?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
display_name?: string;
      };
public?: boolean;
snapshot_id?: string;
tracks?: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        added_at?: string;
added_by?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
      };
is_local?: boolean;
track?: any;
      }[];
      };
type?: string;
uri?: string;
      }, unknown>({
    query: (params) => ({
      url: '/playlists/{playlist_id}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Playlists'],
  }),
  getPlaylistItems: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        added_at?: string;
added_by?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
      };
is_local?: boolean;
track?: any;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/playlists/{playlist_id}/tracks',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Playlists', 'Tracks'],
  }),
  getCurrentUsersPlaylists: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        collaborative?: boolean;
description?: string;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
owner?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
display_name?: string;
      };
public?: boolean;
snapshot_id?: string;
tracks?: {
        href?: string;
total?: number;
      };
type?: string;
uri?: string;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/playlists',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Playlists', 'Library'],
  }),
  getUsersPlaylists: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        collaborative?: boolean;
description?: string;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
owner?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
display_name?: string;
      };
public?: boolean;
snapshot_id?: string;
tracks?: {
        href?: string;
total?: number;
      };
type?: string;
uri?: string;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/users/{user_id}/playlists',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Playlists', 'Users'],
  }),
  getFeaturedPlaylists: (builder) => builder.query<{
        message?: string;
playlists?: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        collaborative?: boolean;
description?: string;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
owner?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
display_name?: string;
      };
public?: boolean;
snapshot_id?: string;
tracks?: {
        href?: string;
total?: number;
      };
type?: string;
uri?: string;
      }[];
      };
      }, unknown>({
    query: (params) => ({
      url: '/browse/featured-playlists',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Playlists'],
  }),
  getCategorysPlaylists: (builder) => builder.query<{
        message?: string;
playlists?: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        collaborative?: boolean;
description?: string;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
owner?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
display_name?: string;
      };
public?: boolean;
snapshot_id?: string;
tracks?: {
        href?: string;
total?: number;
      };
type?: string;
uri?: string;
      }[];
      };
      }, unknown>({
    query: (params) => ({
      url: '/browse/categories/{category_id}/playlists',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Playlists', 'Categories'],
  }),
  getPlaylistCoverImage: (builder) => builder.query<{
        url: string;
height: number;
width: number;
      }[], unknown>({
    query: (params) => ({
      url: '/playlists/{playlist_id}/images',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Playlists'],
  }),
  checkIfUsersFollowPlaylist: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/playlists/{playlist_id}/followers/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Users', 'Playlists'],
  }),
  changePlaylistDetails: (builder) => builder.mutation<unknown, {
        name?: string;
public?: boolean;
collaborative?: boolean;
description?: string;
      }>({
    query: (params) => ({
      url: '/playlists/{playlist_id}',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Playlists', 'Library'],
  }),
  addItemsToPlaylist: (builder) => builder.mutation<unknown, {
        uris?: string[];
position?: number;
      }>({
    query: (params) => ({
      url: '/playlists/{playlist_id}/tracks',
      method: 'POST',
      params,
    }),
    invalidatesTags: () => ['Playlists', 'Tracks'],
  }),
  updatePlaylistItems: (builder) => builder.mutation<{
        snapshot_id?: string;
      }, {
        uris?: string[];
range_start?: number;
insert_before?: number;
range_length?: number;
snapshot_id?: string;
      }>({
    query: (params) => ({
      url: '/playlists/{playlist_id}/tracks',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Playlists', 'Tracks'],
  }),
  removePlaylistItems: (builder) => builder.mutation<{
        snapshot_id?: string;
      }, {
        tracks: {
        uri?: string;
      }[];
snapshot_id?: string;
      }>({
    query: (params) => ({
      url: '/playlists/{playlist_id}/tracks',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Playlists', 'Tracks'],
  }),
  createPlaylist: (builder) => builder.mutation<unknown, {
        name: string;
public?: boolean;
collaborative?: boolean;
description?: string;
      }>({
    query: (params) => ({
      url: '/users/{user_id}/playlists',
      method: 'POST',
      params,
    }),
    invalidatesTags: () => ['Playlists', 'Library'],
  }),
  followPlaylist: (builder) => builder.mutation<unknown, {
        public?: boolean;
      }>({
    query: (params) => ({
      url: '/playlists/{playlist_id}/followers',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Users', 'Playlists'],
  }),
  unfollowPlaylist: (builder) => builder.mutation({
    query: (params) => ({
      url: '/playlists/{playlist_id}/followers',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Users', 'Playlists'],
  }),
  addCustomPlaylistCoverImage: (builder) => builder.mutation({
    query: (params) => ({
      url: '/playlists/{playlist_id}/images',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Playlists'],
  }),
};


export const SearchEndpoints: Record<string, (builder: Builder) => any> = {
  searchForItem: (builder) => builder.query<{
        tracks?: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        album?: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
      };
artists?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_ids?: {
        isrc?: string;
ean?: string;
upc?: string;
      };
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: object;
restrictions?: {
        reason?: string;
      };
name?: string;
popularity?: number;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      }[];
      };
artists?: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
      };
albums?: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
      }[];
      };
playlists?: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        collaborative?: boolean;
description?: string;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
owner?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
display_name?: string;
      };
public?: boolean;
snapshot_id?: string;
tracks?: {
        href?: string;
total?: number;
      };
type?: string;
uri?: string;
      }[];
      };
shows?: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
languages: string[];
media_type: string;
name: string;
publisher: string;
type: string;
uri: string;
total_episodes: number;
      }[];
      };
episodes?: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        audio_preview_url: string;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
is_playable: boolean;
language?: string;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
      }[];
      };
audiobooks?: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        authors: {
        name?: string;
      }[];
available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
edition?: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
languages: string[];
media_type: string;
name: string;
narrators: {
        name?: string;
      }[];
publisher: string;
type: string;
uri: string;
total_chapters: number;
      }[];
      };
      }, unknown>({
    query: (params) => ({
      url: '/search',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Search'],
  }),
};


export const ShowsEndpoints: Record<string, (builder: Builder) => any> = {
  getShow: (builder) => builder.query<{
        available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
languages: string[];
media_type: string;
name: string;
publisher: string;
type: string;
uri: string;
total_episodes: number;
episodes: {
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        audio_preview_url: string;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
is_playable: boolean;
language?: string;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
      }[];
      };
      }, unknown>({
    query: (params) => ({
      url: '/shows/{id}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Shows'],
  }),
  getSeveralShows: (builder) => builder.query<{
        shows: {
        available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
languages: string[];
media_type: string;
name: string;
publisher: string;
type: string;
uri: string;
total_episodes: number;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/shows',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Shows'],
  }),
  getShowEpisodes: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        audio_preview_url: string;
description: string;
html_description: string;
duration_ms: number;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
is_playable: boolean;
language?: string;
languages: string[];
name: string;
release_date: string;
release_date_precision: string;
resume_point: {
        fully_played?: boolean;
resume_position_ms?: number;
      };
type: string;
uri: string;
restrictions?: {
        reason?: string;
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/shows/{id}/episodes',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Shows', 'Episodes'],
  }),
  getUsersSavedShows: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        added_at?: string;
show?: {
        available_markets: string[];
copyrights: {
        text?: string;
type?: string;
      }[];
description: string;
html_description: string;
explicit: boolean;
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
is_externally_hosted: boolean;
languages: string[];
media_type: string;
name: string;
publisher: string;
type: string;
uri: string;
total_episodes: number;
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/shows',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Shows', 'Library'],
  }),
  checkUsersSavedShows: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/me/shows/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Shows', 'Library'],
  }),
  saveShowsForCurrentUser: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/shows',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Shows', 'Library'],
  }),
  removeUsersSavedShows: (builder) => builder.mutation({
    query: (params) => ({
      url: '/me/shows',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Shows', 'Library'],
  }),
};


export const TracksEndpoints: Record<string, (builder: Builder) => any> = {
  getAlbumTracks: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        artists?: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
      };
restrictions?: {
        reason?: string;
      };
name?: string;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/albums/{id}/tracks',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Albums', 'Tracks'],
  }),
  getArtistsTopTracks: (builder) => builder.query<{
        tracks: {
        album?: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
      };
artists?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_ids?: {
        isrc?: string;
ean?: string;
upc?: string;
      };
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: object;
restrictions?: {
        reason?: string;
      };
name?: string;
popularity?: number;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/artists/{id}/top-tracks',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Artists', 'Tracks'],
  }),
  getTrack: (builder) => builder.query<{
        album?: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
      };
artists?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_ids?: {
        isrc?: string;
ean?: string;
upc?: string;
      };
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: object;
restrictions?: {
        reason?: string;
      };
name?: string;
popularity?: number;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      }, unknown>({
    query: (params) => ({
      url: '/tracks/{id}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Tracks'],
  }),
  getSeveralTracks: (builder) => builder.query<{
        tracks: {
        album?: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
      };
artists?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_ids?: {
        isrc?: string;
ean?: string;
upc?: string;
      };
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: object;
restrictions?: {
        reason?: string;
      };
name?: string;
popularity?: number;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/tracks',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Tracks'],
  }),
  getPlaylistItems: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        added_at?: string;
added_by?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
      };
is_local?: boolean;
track?: any;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/playlists/{playlist_id}/tracks',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Playlists', 'Tracks'],
  }),
  getUsersSavedTracks: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        added_at?: string;
track?: {
        album?: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
      };
artists?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_ids?: {
        isrc?: string;
ean?: string;
upc?: string;
      };
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: object;
restrictions?: {
        reason?: string;
      };
name?: string;
popularity?: number;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      };
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/me/tracks',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Tracks', 'Library'],
  }),
  checkUsersSavedTracks: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/me/tracks/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Tracks', 'Library'],
  }),
  getUsersTopItems: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: object[];
      }, unknown>({
    query: (params) => ({
      url: '/me/top/{type}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Users', 'Tracks', 'Library'],
  }),
  getTracksAudioFeatures: (builder) => builder.query<{
        audio_features: {
        acousticness?: number;
analysis_url?: string;
danceability?: number;
duration_ms?: number;
energy?: number;
id?: string;
instrumentalness?: number;
key?: number;
liveness?: number;
loudness?: number;
mode?: number;
speechiness?: number;
tempo?: number;
time_signature?: number;
track_href?: string;
type?: string;
uri?: string;
valence?: number;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/audio-features',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Tracks'],
  }),
  getTracksAudioFeatures: (builder) => builder.query<{
        acousticness?: number;
analysis_url?: string;
danceability?: number;
duration_ms?: number;
energy?: number;
id?: string;
instrumentalness?: number;
key?: number;
liveness?: number;
loudness?: number;
mode?: number;
speechiness?: number;
tempo?: number;
time_signature?: number;
track_href?: string;
type?: string;
uri?: string;
valence?: number;
      }, unknown>({
    query: (params) => ({
      url: '/audio-features/{id}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Tracks'],
  }),
  getTracksAudioAnalysis: (builder) => builder.query<{
        meta?: {
        analyzer_version?: string;
platform?: string;
detailed_status?: string;
status_code?: number;
timestamp?: number;
analysis_time?: number;
input_process?: string;
      };
track?: {
        num_samples?: number;
duration?: number;
sample_md5?: string;
offset_seconds?: number;
window_seconds?: number;
analysis_sample_rate?: number;
analysis_channels?: number;
end_of_fade_in?: number;
start_of_fade_out?: number;
loudness?: number;
tempo?: number;
tempo_confidence?: number;
time_signature?: number;
time_signature_confidence?: number;
key?: number;
key_confidence?: number;
mode?: number;
mode_confidence?: number;
codestring?: string;
code_version?: number;
echoprintstring?: string;
echoprint_version?: number;
synchstring?: string;
synch_version?: number;
rhythmstring?: string;
rhythm_version?: number;
      };
bars?: {
        start?: number;
duration?: number;
confidence?: number;
      }[];
beats?: {
        start?: number;
duration?: number;
confidence?: number;
      }[];
sections?: {
        start?: number;
duration?: number;
confidence?: number;
loudness?: number;
tempo?: number;
tempo_confidence?: number;
key?: number;
key_confidence?: number;
mode?: number;
mode_confidence?: number;
time_signature?: number;
time_signature_confidence?: number;
      }[];
segments?: {
        start?: number;
duration?: number;
confidence?: number;
loudness_start?: number;
loudness_max?: number;
loudness_max_time?: number;
loudness_end?: number;
pitches?: number[];
timbre?: number[];
      }[];
tatums?: {
        start?: number;
duration?: number;
confidence?: number;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/audio-analysis/{id}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Tracks'],
  }),
  getRecommendations: (builder) => builder.query<{
        seeds: {
        afterFilteringSize?: number;
afterRelinkingSize?: number;
href?: string;
id?: string;
initialPoolSize?: number;
type?: string;
      }[];
tracks: {
        album?: {
        album_type: string;
total_tracks: number;
available_markets: string[];
external_urls: {
        spotify?: string;
      };
href: string;
id: string;
images: {
        url: string;
height: number;
width: number;
      }[];
name: string;
release_date: string;
release_date_precision: string;
restrictions?: {
        reason?: string;
      };
type: string;
uri: string;
artists: {
        external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
name?: string;
type?: string;
uri?: string;
      }[];
      };
artists?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
available_markets?: string[];
disc_number?: number;
duration_ms?: number;
explicit?: boolean;
external_ids?: {
        isrc?: string;
ean?: string;
upc?: string;
      };
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
is_playable?: boolean;
linked_from?: object;
restrictions?: {
        reason?: string;
      };
name?: string;
popularity?: number;
preview_url?: string;
track_number?: number;
type?: string;
uri?: string;
is_local?: boolean;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/recommendations',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Tracks'],
  }),
  addItemsToPlaylist: (builder) => builder.mutation<unknown, {
        uris?: string[];
position?: number;
      }>({
    query: (params) => ({
      url: '/playlists/{playlist_id}/tracks',
      method: 'POST',
      params,
    }),
    invalidatesTags: () => ['Playlists', 'Tracks'],
  }),
  updatePlaylistItems: (builder) => builder.mutation<{
        snapshot_id?: string;
      }, {
        uris?: string[];
range_start?: number;
insert_before?: number;
range_length?: number;
snapshot_id?: string;
      }>({
    query: (params) => ({
      url: '/playlists/{playlist_id}/tracks',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Playlists', 'Tracks'],
  }),
  removePlaylistItems: (builder) => builder.mutation<{
        snapshot_id?: string;
      }, {
        tracks: {
        uri?: string;
      }[];
snapshot_id?: string;
      }>({
    query: (params) => ({
      url: '/playlists/{playlist_id}/tracks',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Playlists', 'Tracks'],
  }),
  saveTracksForCurrentUser: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/tracks',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Tracks', 'Library'],
  }),
  removeUsersSavedTracks: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/tracks',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Tracks', 'Library'],
  }),
};


export const UsersEndpoints: Record<string, (builder: Builder) => any> = {
  getCurrentUsersProfile: (builder) => builder.query<{
        country?: string;
display_name?: string;
email?: string;
explicit_content?: {
        filter_enabled?: boolean;
filter_locked?: boolean;
      };
external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
product?: string;
type?: string;
uri?: string;
      }, unknown>({
    query: (params) => ({
      url: '/me',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Users'],
  }),
  getUsersTopItems: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: object[];
      }, unknown>({
    query: (params) => ({
      url: '/me/top/{type}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Users', 'Tracks', 'Library'],
  }),
  getUsersProfile: (builder) => builder.query<{
        display_name?: string;
external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
type?: string;
uri?: string;
      }, unknown>({
    query: (params) => ({
      url: '/users/{user_id}',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Users'],
  }),
  getUsersPlaylists: (builder) => builder.query<{
        href: string;
limit: number;
next: string;
offset: number;
previous: string;
total: number;
items: {
        collaborative?: boolean;
description?: string;
external_urls?: {
        spotify?: string;
      };
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
owner?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
href?: string;
id?: string;
type?: string;
uri?: string;
display_name?: string;
      };
public?: boolean;
snapshot_id?: string;
tracks?: {
        href?: string;
total?: number;
      };
type?: string;
uri?: string;
      }[];
      }, unknown>({
    query: (params) => ({
      url: '/users/{user_id}/playlists',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Playlists', 'Users'],
  }),
  getFollowedArtists: (builder) => builder.query<{
        artists: {
        href?: string;
limit?: number;
next?: string;
cursors?: {
        after?: string;
before?: string;
      };
total?: number;
items?: {
        external_urls?: {
        spotify?: string;
      };
followers?: {
        href?: string;
total?: number;
      };
genres?: string[];
href?: string;
id?: string;
images?: {
        url: string;
height: number;
width: number;
      }[];
name?: string;
popularity?: number;
type?: string;
uri?: string;
      }[];
      };
      }, unknown>({
    query: (params) => ({
      url: '/me/following',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Users', 'Library', 'Artists'],
  }),
  checkIfUserFollowsArtistsOrUsers: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/me/following/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Users', 'Artists', 'Library'],
  }),
  checkIfUsersFollowPlaylist: (builder) => builder.query<boolean[], unknown>({
    query: (params) => ({
      url: '/playlists/{playlist_id}/followers/contains',
      method: 'GET',
      params,
    }),
    providesTags: () => ['Users', 'Playlists'],
  }),
  followPlaylist: (builder) => builder.mutation<unknown, {
        public?: boolean;
      }>({
    query: (params) => ({
      url: '/playlists/{playlist_id}/followers',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Users', 'Playlists'],
  }),
  unfollowPlaylist: (builder) => builder.mutation({
    query: (params) => ({
      url: '/playlists/{playlist_id}/followers',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Users', 'Playlists'],
  }),
  followArtistsOrUsers: (builder) => builder.mutation<unknown, {
        ids: string[];
      }>({
    query: (params) => ({
      url: '/me/following',
      method: 'PUT',
      params,
    }),
    invalidatesTags: () => ['Users', 'Artists', 'Library'],
  }),
  unfollowArtistsOrUsers: (builder) => builder.mutation<unknown, {
        ids?: string[];
      }>({
    query: (params) => ({
      url: '/me/following',
      method: 'DELETE',
      params,
    }),
    invalidatesTags: () => ['Users', 'Artists', 'Library'],
  }),
};


