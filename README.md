# bun-cli-testing

Bun CLI app testing

## `blup`

Creates a endpoint type definition based on Open-API schema

**Example**

```shell
$  bunx --bun blup --src "https://developer.spotify.com/_data/documentation/web-api/reference/open-api-schema.yml"
```

Creates the following `out.ts` file:

```typescript
type Endpoint =
  | `/albums/${string}/`
  | `/albums`
  | `/albums/${string}/tracks`
  | `/artists/${string}/`
  | `/artists`
  | `/artists/${string}/albums`
  | `/artists/${string}/top-tracks`
  | `/artists/${string}/related-artists`
  | `/shows/${string}/`
  | `/shows`
  | `/shows/${string}/episodes`
  | `/episodes/${string}/`
  | `/episodes`
  | `/audiobooks/${string}/`
  | `/audiobooks`
  | `/audiobooks/${string}/chapters`
  | `/me/audiobooks`
  | `/me/audiobooks/contains`
  | `/chapters/${string}/`
  | `/chapters`
  | `/tracks/${string}/`
  | `/tracks`
  | `/search`
  | `/me`
  | `/playlists/${string}/`
  | `/playlists/${string}/tracks`
  | `/me/playlists`
  | `/me/albums`
  | `/me/albums/contains`
  | `/me/tracks`
  | `/me/tracks/contains`
  | `/me/episodes`
  | `/me/episodes/contains`
  | `/me/shows`
  | `/me/shows/contains`
  | `/me/top/${string}/`
  | `/users/${string}/`
  | `/users/${string}/playlists`
  | `/playlists/${string}/followers`
  | `/browse/featured-playlists`
  | `/browse/categories`
  | `/browse/categories/${string}/`
  | `/browse/categories/${string}/playlists`
  | `/playlists/${string}/images`
  | `/browse/new-releases`
  | `/me/following`
  | `/me/following/contains`
  | `/playlists/${string}/followers/contains`
  | `/audio-features`
  | `/audio-features/${string}/`
  | `/audio-analysis/${string}/`
  | `/recommendations`
  | `/recommendations/available-genre-seeds`
  | `/me/player`
  | `/me/player/devices`
  | `/me/player/currently-playing`
  | `/me/player/play`
  | `/me/player/pause`
  | `/me/player/next`
  | `/me/player/previous`
  | `/me/player/seek`
  | `/me/player/repeat`
  | `/me/player/volume`
  | `/me/player/shuffle`
  | `/me/player/recently-played`
  | `/me/player/queue`
  | `/markets`;

const endpoint = (endpoint: Endpoint) => endpoint;
```
