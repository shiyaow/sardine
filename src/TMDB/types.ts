export interface TMDBResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface TMDBMedia {
  id: number;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

export interface TMDBMovie extends TMDBMedia {
  title: string;
  original_title: string;
  release_date: string;
  overview: string;
  genre_ids: number[];
  adult: boolean;
  video: boolean;
}

export interface TMDBTVShow extends TMDBMedia {
  name: string;
  original_name: string;
  first_air_date: string;
  overview: string;
  genre_ids: number[];
  origin_country: string[];
}

export interface TMDBGenre {
  id: number;
  name: string;
}

export interface TMDBMovieDetails extends TMDBMovie {
  genres: TMDBGenre[];
  runtime: number;
  status: string;
  tagline: string;
  budget: number;
  revenue: number;
  production_companies: {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
  }[];
}

export interface TMDBTVShowDetails extends TMDBTVShow {
  genres: TMDBGenre[];
  episode_run_time: number[];
  status: string;
  tagline: string;
  number_of_seasons: number;
  number_of_episodes: number;
  networks: {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
  }[];
}

export interface TMDBMultiSearchResult {
  media_type: "movie" | "tv" | "person";
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
}
