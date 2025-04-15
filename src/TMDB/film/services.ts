import { TMDB_ENDPOINTS } from "../config";
import { fetchTMDB } from "../services";
import { TMDBMovie, TMDBResponse } from "../types";

export async function getTrendingFilms() {
  try {
    const data = await fetchTMDB<TMDBResponse<TMDBMovie>>(
      `${TMDB_ENDPOINTS.MOVIE.TRENDING}week`,
    );
    return data.results;
  } catch (error) {
	console.log("Token is:", process.env.AUTH_TOKEN); 
    throw new Error("Failed to fetch trending films", { cause: error });
  }
}

export async function getTopRatedFilms() {
  try {
    const data = await fetchTMDB<TMDBResponse<TMDBMovie>>(
      `${TMDB_ENDPOINTS.MOVIE.TOP_RATED}`,
    );
    return data.results;
  } catch {
    throw new Error("Failed to fetch top rated films");
  }
}
