import React from "react";
import useTrendingMovies from "../hooks/useTrendingMovies";

function MoviesList() {
  const { movies, loading, error } = useTrendingMovies();

  if (loading) return <h2>Loading Movies...</h2>;

  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>🎬 Trending Movies</h2>

      {movies.map((movie) => (
        <div
          key={movie.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{movie.title}</h3>

          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>

          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;