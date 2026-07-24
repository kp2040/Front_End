import React, { useState } from "react";

function PlaylistAdder() {
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (songName.trim() === "" || artist.trim() === "") {
      return;
    }

    const newSong = {
      songName,
      artist,
    };

    setPlaylist([...playlist, newSong]);

    // Clear input fields
    setSongName("");
    setArtist("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎵 Spotify Playlist </h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter song name"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <input
            type="text"
            placeholder="Enter artist name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Add Song</button>
      </form>

      <h3>My Playlist</h3>

      <ul>
        {playlist.map((song, index) => (
          <li key={index}>
            🎶 <strong>{song.songName}</strong> - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistAdder;