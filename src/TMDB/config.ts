export const TMDB_CONFIG = {
  API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  BASE_URL: "https://api.themoviedb.org/3",
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p",
  DEFAULT_LANGUAGE: "en",
} as const;

export const TMDB_ENDPOINTS = {
  MOVIE: {
    TRENDING: "/trending/movie/",
    POPULAR: "/movie/popular",
    TOP_RATED: "/movie/top_rated",
    UPCOMING: "/movie/upcoming",
    NOW_PLAYING: "/movie/now_playing",
    DETAILS: (id: number) => `/movie/${id}`,
    SIMILAR: (id: number) => `/movie/${id}/similar`,
    GENRES: "/genre/movie/list",
  },
  TV: {
    TRENDING: "/trending/tv/",
    POPULAR: "/tv/popular",
    TOP_RATED: "/tv/top_rated",
    ON_THE_AIR: "/tv/on_the_air",
    AIRING_TODAY: "/tv/airing_today",
    DETAILS: (id: number) => `/tv/${id}`,
    SIMILAR: (id: number) => `/tv/${id}/similar`,
    GENRES: "/genre/tv/list",
  },
  SEARCH: {
    MULTI: "/search/multi",
    MOVIE: "/search/movie",
    TV: "/search/tv",
  },
} as const;

export const TMDB_IMAGE_SIZES = {
  BACKDROP: {
    SMALL: "w300",
    MEDIUM: "w780",
    LARGE: "w1280",
    ORIGINAL: "original",
  },
  POSTER: {
    SMALL: "w154",
    MEDIUM: "w342",
    LARGE: "w500",
    ORIGINAL: "original",
  },
  PROFILE: {
    SMALL: "w45",
    MEDIUM: "w185",
    LARGE: "h632",
    ORIGINAL: "original",
  },
} as const;
