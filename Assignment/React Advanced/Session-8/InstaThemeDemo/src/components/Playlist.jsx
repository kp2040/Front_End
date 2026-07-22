import { useContext } from "react";
import { PlaylistContext } from "../context/PlaylistContext";

function Playlist() {
  console.log("Playlist Rendered");

  const { playlist } = useContext(PlaylistContext);

  return (
    <div>
      <h2>Spotify Playlist</h2>

      {playlist.map((song, index) => (
        <p key={index}>{song}</p>
      ))}
    </div>
  );
}

export default Playlist;