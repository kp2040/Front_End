import React, { useState, useCallback } from "react";
import SongItem from "./SongItem";

function PlaylistManager() {
  const [songs, setSongs] = useState([
    { id: 1, name: "Shape of You", artist: "Ed Sheeran", favorite: false },
    { id: 2, name: "Believer", artist: "Imagine Dragons", favorite: false },
    { id: 3, name: "Perfect", artist: "Ed Sheeran", favorite: false },
    { id: 4, name: "Closer", artist: "The Chainsmokers", favorite: false },
    { id: 5, name: "Levitating", artist: "Dua Lipa", favorite: false },
  ]);

  // Memoized function
  const toggleFavorite = useCallback((id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id
          ? { ...song, favorite: !song.favorite }
          : song
      )
    );
  }, []);

  return (
    <div className="container">
      <h1>🎵 Playlist Manager</h1>

      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default PlaylistManager;