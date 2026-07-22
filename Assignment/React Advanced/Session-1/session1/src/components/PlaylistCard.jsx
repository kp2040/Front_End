import React from "react";

function PlaylistCard({ song, artist }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        width: "250px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>🎵 {song}</h3>
      <p>
        <strong>Artist:</strong> {artist}
      </p>
    </div>
  );
}

export default PlaylistCard;