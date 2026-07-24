import React, { useState } from "react";
import axios from "axios";

function AddPlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: playlistName,
          body: description,
        }
      );

      setMessage("Playlist added successfully!");
      setPlaylistName("");
      setDescription("");
    } catch (error) {
      setMessage("Error adding playlist.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Playlist</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Playlist Name:</label>
          <br />
          <input
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Description:</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">
          Add Playlist
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddPlaylist;