import React, { useState, useRef } from "react";

function AddToPlaylist() {
  const [song, setSong] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const inputRef = useRef(null);

  const handleAdd = () => {
    if (song.trim() === "") return;

    setPlaylist([...playlist, song]);
    setSong("");

    // Focus the input field again
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Add To Playlist</h2>

      <input
        type="text"
        placeholder="Enter song name"
        value={song}
        ref={inputRef}
        onChange={(e) => setSong(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <h3>Playlist</h3>
      <ul>
        {playlist.map((songName, index) => (
          <li key={index}>{songName}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddToPlaylist;