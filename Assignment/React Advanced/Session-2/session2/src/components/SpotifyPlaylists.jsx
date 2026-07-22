import React from "react";
import useFetchData from "../hooks/useFetchData";

function SpotifyPlaylists() {
  const url = "https://api.spotify.com/v1/browse/featured-playlists";

  // ✅ Custom hook called at the top level
  const { data, loading, error } = useFetchData(url);

  if (loading) {
    return <h2>Loading Playlists...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>🎵 Spotify Featured Playlists</h2>

      {data.map((playlist) => (
        <div
          key={playlist.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{playlist.name}</h3>

          <p>{playlist.description}</p>

          <p>
            <strong>Tracks:</strong> {playlist.tracks.total}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SpotifyPlaylists;