import { useState, useEffect } from "react";

function useSearchMovies(query) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!query.trim()) {
            setMovies([]);
            setError("");
            return;
        }

        const fetchMovies = async () => {
            setLoading(true);
            setError("");

            try {
                const response = await fetch(
                    `https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${encodeURIComponent(query)}`
                );

                if (!response.ok) {
                    throw new Error("Network response was not successful.");
                }

                const data = await response.json();

                if (data.Response === "True") {
                    setMovies(data.Search);
                } else {
                    setMovies([]);
                    setError(data.Error || "No movies found.");
                }
            } catch (err) {
                setMovies([]);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [query]);

    return { movies, loading, error };
}

export default useSearchMovies;