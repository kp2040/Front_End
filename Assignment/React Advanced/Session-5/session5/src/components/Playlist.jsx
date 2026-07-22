import React, { useReducer, useState } from "react";
import playlistReducer, { initialState } from "../reducers/playlistReducer";

function Playlist() {
  const [state, dispatch] = useReducer(
    playlistReducer,
    initialState
  );

  const [song, setSong] = useState("");

  const addSong = () => {
    if (song.trim() === "") return;

    dispatch({
      type: "ADD_SONG",
      payload: song,
    });

    setSong("");
  };

  return (
    <div>
      <h2>🎵 Playlist</h2>

      <input
        type="text"
        placeholder="Enter song name"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />

      <button onClick={addSong}>Add Song</button>

      <ul>
        {state.songs.map((item, index) => (
          <li key={index}>
            {item}

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_SONG",
                  payload: index,
                })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;