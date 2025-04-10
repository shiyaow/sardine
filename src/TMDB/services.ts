import { TMDB_CONFIG, TMDB_ENDPOINTS, TMDB_IMAGE_SIZES } from "./config";
import { TMDBResponse, TMDBMultiSearchResult } from "./types";

export const fetchTMDB = async <T>(
  endpoint: string,
  params: Record<string, string> = {},
  options: Record<string, string> = {},
): Promise<T> => {
  const queryParams = new URLSearchParams({
    language: TMDB_CONFIG.DEFAULT_LANGUAGE,
    ...params,
  });

  const url = `${TMDB_CONFIG.BASE_URL}${endpoint}?${queryParams.toString()}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.statusText}`);
  }

  return response.json();
};

// Search
export const searchMulti = (query: string, page: number = 1) =>
  fetchTMDB<TMDBResponse<TMDBMultiSearchResult>>(TMDB_ENDPOINTS.SEARCH.MULTI, {
    query,
    page: page.toString(),
  });

// Image URLs
export const getPosterUrl = (
  path: string | null,
  size: keyof typeof TMDB_IMAGE_SIZES.POSTER = "MEDIUM",
) => {
  if (!path) return "/placeholder-poster.jpg";
  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_IMAGE_SIZES.POSTER[size]}${path}`;
};

export const getBackdropUrl = (
  path: string | null,
  size: keyof typeof TMDB_IMAGE_SIZES.BACKDROP = "LARGE",
) => {
  if (!path) return "/placeholder-backdrop.jpg";
  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_IMAGE_SIZES.BACKDROP[size]}${path}`;
};

export const getProfileUrl = (
  path: string | null,
  size: keyof typeof TMDB_IMAGE_SIZES.PROFILE = "MEDIUM",
) => {
  if (!path) return "/placeholder-profile.jpg";
  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_IMAGE_SIZES.PROFILE[size]}${path}`;
};
