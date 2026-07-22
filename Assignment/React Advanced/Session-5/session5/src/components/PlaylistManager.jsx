import React, { useReducer, useState } from "react";
import playlistReducer, {
  initialState,
} from "../reducers/playlistReducer";
import SongItem from "./SongItem";

function PlaylistManager() {
  const [state, dispatch] = useReducer(
    playlistReducer,
    initialState
  );

  const [songName, setSongName] = useState("");

  const addSong = () => {
    if (songName.trim() === "") return;

    dispatch({
      type: "ADD_SONG",
      payload: songName,
    });

    setSongName("");
  };

  return (
    <div className="playlist">
      <h2>🎵 Spotify Playlist Manager</h2>

      <input
        type="text"
        placeholder="Enter song name"
        value={songName}
        onChange={(e) => setSongName(e.target.value)}
      />

      <button onClick={addSong}>Add</button>

      <h3>Playlist</h3>

      <ul>
        {state.songs.map((song, index) => (
          <SongItem
            key={index}
            song={song}
            index={index}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </div>
  );
}

export default PlaylistManager;