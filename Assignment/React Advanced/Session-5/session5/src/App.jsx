import React from "react";
import Playlist from "./components/Playlist";
import PlaylistManager from "./components/PlaylistManager";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Playlist Manager using useReducer</h1>
      <h1>Spotify Playlist App</h1>

      <PlaylistManager />
      <Playlist />
    </div>
  );
}

export default App;