import React, { useState } from "react";
import useSearchMovies from "../hooks/useSearchMovies";

function MovieSearch() {
  const [query, setQuery] = useState("");

  const { movies, loading, error } = useSearchMovies(query);

  return (
    <div>
      <h1>🎬 Movie Search</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {!loading &&
        !error &&
        movies.map((movie) => (
          <div key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img
              src={movie.Poster}
              alt={movie.Title}
              width="120"
            />
            <hr />
          </div>
        ))}
    </div>
  );
}

export default MovieSearch;