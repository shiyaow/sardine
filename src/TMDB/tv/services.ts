import { TMDB_ENDPOINTS } from "../config";
import { fetchTMDB } from "../services";
import { TMDBTVShow, TMDBResponse } from "../types";

export async function getTrendingTV() {
  try {
    const data = await fetchTMDB<TMDBResponse<TMDBTVShow>>(
      `${TMDB_ENDPOINTS.TV.TRENDING}day`,
    );
    return data.results;
  } catch {
    throw new Error("Failed to fetch trending TV series");
  }
}

export async function getTopRatedTV() {
  try {
    const data = await fetchTMDB<TMDBResponse<TMDBTVShow>>(
      `${TMDB_ENDPOINTS.TV.TOP_RATED}`,
    );
    return data.results;
  } catch {
    throw new Error("Failed to fetch top rated TV series");
  }
}
