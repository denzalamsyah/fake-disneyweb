// src/services/movieService.js
import api from "./api";

export const fetchTrendingMovies = async () => {
  try {
    const res = await api.get("/trending/all/day");
    return res.data.results;
  } catch (err) {
    console.error("Error fetchTrendingMovies:", err);
    return [];
  }
};

// Ambil movie berdasarkan genre
export const fetchMoviesByGenre = async (genreId) => {
  try {
    const res = await api.get("/discover/movie", {
      params: { with_genres: genreId },
    });
    return res.data.results;
  } catch (err) {
    console.error("Error fetchMoviesByGenre:", err);
    return [];
  }
};
