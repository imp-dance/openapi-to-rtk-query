export type GetAlbumParams = { id: string; _body: unknown };
export type GetAlbumResponse = {
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
export type GetSeveralAlbumsParams = { _body: unknown };
export type GetSeveralAlbumsResponse = {
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
};
export type GetAlbumTracksParams = { id: string; _body: unknown };
export type GetAlbumTracksResponse = {
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
export type GetArtistParams = { id: string; _body: unknown };
export type GetArtistResponse = {
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
};
export type GetSeveralArtistsParams = { _body: unknown };
export type GetSeveralArtistsResponse = {
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
};
export type GetArtistsAlbumsParams = { id: string; _body: unknown };
export type GetArtistsAlbumsResponse = {
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
};
export type GetArtistsTopTracksParams = { id: string; _body: unknown };
export type GetArtistsTopTracksResponse = {
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
};
export type GetArtistsRelatedArtistsParams = { id: string; _body: unknown };
export type GetArtistsRelatedArtistsResponse = {
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
};
export type GetShowParams = { id: string; _body: unknown };
export type GetShowResponse = {
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
};
export type GetSeveralShowsParams = { _body: unknown };
export type GetSeveralShowsResponse = {
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
};
export type GetShowEpisodesParams = { id: string; _body: unknown };
export type GetShowEpisodesResponse = {
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
export type GetEpisodeParams = { id: string; _body: unknown };
export type GetEpisodeResponse = {
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
export type GetSeveralEpisodesParams = { _body: unknown };
export type GetSeveralEpisodesResponse = {
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
};
export type GetAnAudiobookParams = { id: string; _body: unknown };
export type GetAnAudiobookResponse = {
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
};
export type GetSeveralAudiobooksParams = { _body: unknown };
export type GetSeveralAudiobooksResponse = {
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
};
export type GetAudiobookChaptersParams = { id: string; _body: unknown };
export type GetAudiobookChaptersResponse = {
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
export type GetUsersSavedAudiobooksParams = { _body: unknown };
export type GetUsersSavedAudiobooksResponse = {
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
export type SaveAudiobooksForCurrentUserParams = { _body: unknown };
export type SaveAudiobooksForCurrentUserResponse = unknown;
export type RemoveUsersSavedAudiobooksParams = { _body: unknown };
export type RemoveUsersSavedAudiobooksResponse = unknown;
export type CheckUsersSavedAudiobooksParams = { _body: unknown };
export type CheckUsersSavedAudiobooksResponse = boolean[];
export type GetAChapterParams = { id: string; _body: unknown };
export type GetAChapterResponse = {
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
};
export type GetSeveralChaptersParams = { _body: unknown };
export type GetSeveralChaptersResponse = {
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
};
export type GetTrackParams = { id: string; _body: unknown };
export type GetTrackResponse = {
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
export type GetSeveralTracksParams = { _body: unknown };
export type GetSeveralTracksResponse = {
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
};
export type SearchForItemParams = { _body: unknown };
export type SearchForItemResponse = {
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
};
export type GetCurrentUsersProfileParams = { _body: unknown };
export type GetCurrentUsersProfileResponse = {
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
};
export type GetPlaylistParams = { playlist_id: string; _body: unknown };
export type GetPlaylistResponse = {
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
      track?: unknown;
    }[];
  };
  type?: string;
  uri?: string;
};
export type ChangePlaylistDetailsParams = {
  playlist_id: string;
  _body: {
    name?: string;
    public?: boolean;
    collaborative?: boolean;
    description?: string;
  };
};
export type ChangePlaylistDetailsResponse = unknown;
export type GetPlaylistItemsParams = { playlist_id: string; _body: unknown };
export type GetPlaylistItemsResponse = {
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
    track?: unknown;
  }[];
};
export type AddItemsToPlaylistParams = {
  playlist_id: string;
  _body: {
    uris?: string[];
    position?: number;
  };
};
export type AddItemsToPlaylistResponse = {
  snapshot_id?: string;
};
export type UpdatePlaylistItemsParams = {
  playlist_id: string;
  _body: {
    uris?: string[];
    range_start?: number;
    insert_before?: number;
    range_length?: number;
    snapshot_id?: string;
  };
};
export type UpdatePlaylistItemsResponse = {
  snapshot_id?: string;
};
export type RemovePlaylistItemsParams = {
  playlist_id: string;
  _body: {
    tracks: {
      uri?: string;
    }[];
    snapshot_id?: string;
  };
};
export type RemovePlaylistItemsResponse = {
  snapshot_id?: string;
};
export type GetCurrentUsersPlaylistsParams = { _body: unknown };
export type GetCurrentUsersPlaylistsResponse = {
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
export type GetUsersSavedAlbumsParams = { _body: unknown };
export type GetUsersSavedAlbumsResponse = {
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
};
export type SaveAlbumsForCurrentUserParams = {
  _body: {
    ids?: string[];
  };
};
export type SaveAlbumsForCurrentUserResponse = unknown;
export type RemoveUsersSavedAlbumsParams = {
  _body: {
    ids?: string[];
  };
};
export type RemoveUsersSavedAlbumsResponse = unknown;
export type CheckUsersSavedAlbumsParams = { _body: unknown };
export type CheckUsersSavedAlbumsResponse = boolean[];
export type GetUsersSavedTracksParams = { _body: unknown };
export type GetUsersSavedTracksResponse = {
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
};
export type SaveTracksForCurrentUserParams = {
  _body: {
    ids?: string[];
  };
};
export type SaveTracksForCurrentUserResponse = unknown;
export type RemoveUsersSavedTracksParams = {
  _body: {
    ids?: string[];
  };
};
export type RemoveUsersSavedTracksResponse = unknown;
export type CheckUsersSavedTracksParams = { _body: unknown };
export type CheckUsersSavedTracksResponse = boolean[];
export type GetUsersSavedEpisodesParams = { _body: unknown };
export type GetUsersSavedEpisodesResponse = {
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
};
export type SaveEpisodesForCurrentUserParams = {
  _body: {
    ids?: string[];
  };
};
export type SaveEpisodesForCurrentUserResponse = unknown;
export type RemoveUsersSavedEpisodesParams = {
  _body: {
    ids?: string[];
  };
};
export type RemoveUsersSavedEpisodesResponse = unknown;
export type CheckUsersSavedEpisodesParams = { _body: unknown };
export type CheckUsersSavedEpisodesResponse = boolean[];
export type GetUsersSavedShowsParams = { _body: unknown };
export type GetUsersSavedShowsResponse = {
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
};
export type SaveShowsForCurrentUserParams = { _body: unknown };
export type SaveShowsForCurrentUserResponse = unknown;
export type RemoveUsersSavedShowsParams = { _body: unknown };
export type RemoveUsersSavedShowsResponse = unknown;
export type CheckUsersSavedShowsParams = { _body: unknown };
export type CheckUsersSavedShowsResponse = boolean[];
export type GetUsersTopItemsParams = { type: string; _body: unknown };
export type GetUsersTopItemsResponse = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: object[];
};
export type GetUsersProfileParams = { user_id: string; _body: unknown };
export type GetUsersProfileResponse = {
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
};
export type GetUsersPlaylistsParams = { user_id: string; _body: unknown };
export type GetUsersPlaylistsResponse = {
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
export type CreatePlaylistParams = {
  user_id: string;
  _body: {
    name: string;
    public?: boolean;
    collaborative?: boolean;
    description?: string;
  };
};
export type CreatePlaylistResponse = {
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
      track?: unknown;
    }[];
  };
  type?: string;
  uri?: string;
};
export type FollowPlaylistParams = {
  playlist_id: string;
  _body: {
    public?: boolean;
  };
};
export type FollowPlaylistResponse = unknown;
export type UnfollowPlaylistParams = { playlist_id: string; _body: unknown };
export type UnfollowPlaylistResponse = unknown;
export type GetFeaturedPlaylistsParams = { _body: unknown };
export type GetFeaturedPlaylistsResponse = {
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
};
export type GetSeveralBrowseCategoriesParams = { _body: unknown };
export type GetSeveralBrowseCategoriesResponse = {
  categories: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
};
export type GetSingleBrowseCategoryParams = {
  category_id: string;
  _body: unknown;
};
export type GetSingleBrowseCategoryResponse = {
  href: string;
  icons: {
    url: string;
    height: number;
    width: number;
  }[];
  id: string;
  name: string;
};
export type GetCategorysPlaylistsParams = {
  category_id: string;
  _body: unknown;
};
export type GetCategorysPlaylistsResponse = {
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
};
export type GetPlaylistCoverImageParams = {
  playlist_id: string;
  _body: unknown;
};
export type GetPlaylistCoverImageResponse = {
  url: string;
  height: number;
  width: number;
}[];
export type AddCustomPlaylistCoverImageParams = {
  playlist_id: string;
  _body: unknown;
};
export type AddCustomPlaylistCoverImageResponse = unknown;
export type GetNewReleasesParams = { _body: unknown };
export type GetNewReleasesResponse = {
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
};
export type GetFollowedArtistsParams = { _body: unknown };
export type GetFollowedArtistsResponse = {
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
};
export type FollowArtistsOrUsersParams = {
  _body: {
    ids: string[];
  };
};
export type FollowArtistsOrUsersResponse = unknown;
export type UnfollowArtistsOrUsersParams = {
  _body: {
    ids?: string[];
  };
};
export type UnfollowArtistsOrUsersResponse = unknown;
export type CheckIfUserFollowsArtistsOrUsersParams = { _body: unknown };
export type CheckIfUserFollowsArtistsOrUsersResponse = boolean[];
export type CheckIfUsersFollowPlaylistParams = {
  playlist_id: string;
  _body: unknown;
};
export type CheckIfUsersFollowPlaylistResponse = boolean[];
export type GetTracksAudioFeaturesParams = { id: string; _body: unknown };
export type GetTracksAudioFeaturesResponse = {
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
};
export type GetTracksAudioAnalysisParams = { id: string; _body: unknown };
export type GetTracksAudioAnalysisResponse = {
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
};
export type GetRecommendationsParams = { _body: unknown };
export type GetRecommendationsResponse = {
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
};
export type GetAvailableGenreSeedsParams = { _body: unknown };
export type GetAvailableGenreSeedsResponse = {
  genres: string[];
};
export type GetPlaybackStateParams = { _body: unknown };
export type GetPlaybackStateResponse = {
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
  item?: unknown;
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
};
export type TransferPlaybackParams = {
  _body: {
    device_ids: string[];
    play?: boolean;
  };
};
export type TransferPlaybackResponse = unknown;
export type GetAvailableDevicesParams = { _body: unknown };
export type GetAvailableDevicesResponse = {
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
};
export type GetCurrentlyPlayingTrackParams = { _body: unknown };
export type GetCurrentlyPlayingTrackResponse = {
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
  item?: unknown;
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
};
export type StartresumePlaybackParams = {
  _body: {
    context_uri?: string;
    uris?: string[];
    offset?: object;
    position_ms?: number;
  };
};
export type StartresumePlaybackResponse = unknown;
export type PausePlaybackParams = { _body: unknown };
export type PausePlaybackResponse = unknown;
export type SkipToNextParams = { _body: unknown };
export type SkipToNextResponse = unknown;
export type SkipToPreviousParams = { _body: unknown };
export type SkipToPreviousResponse = unknown;
export type SeekToPositionParams = { _body: unknown };
export type SeekToPositionResponse = unknown;
export type SetRepeatModeParams = { _body: unknown };
export type SetRepeatModeResponse = unknown;
export type SetPlaybackVolumeParams = { _body: unknown };
export type SetPlaybackVolumeResponse = unknown;
export type TogglePlaybackShuffleParams = { _body: unknown };
export type TogglePlaybackShuffleResponse = unknown;
export type GetRecentlyPlayedTracksParams = { _body: unknown };
export type GetRecentlyPlayedTracksResponse = {
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
};
export type GetTheUsersQueueParams = { _body: unknown };
export type GetTheUsersQueueResponse = {
  currently_playing?: unknown;
  queue?: unknown[];
};
export type AddItemToPlaybackQueueParams = { _body: unknown };
export type AddItemToPlaybackQueueResponse = unknown;
export type GetAvailableMarketsParams = { _body: unknown };
export type GetAvailableMarketsResponse = {
  markets?: string[];
};
