import React, { memo } from "react";

const SongItem = memo(({ song, toggleFavorite }) => {
  console.log(`Rendering: ${song.name}`);

  return (
    <div className="song-card">
      <div>
        <h3>{song.name}</h3>
        <p>{song.artist}</p>
      </div>

      <button onClick={() => toggleFavorite(song.id)}>
        {song.favorite ? "❤️ Favorite" : "🤍 Mark Favorite"}
      </button>
    </div>
  );
});

export default SongItem;