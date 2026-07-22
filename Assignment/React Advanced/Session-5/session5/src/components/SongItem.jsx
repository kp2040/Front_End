import React, { useState } from "react";

function SongItem({ song, index, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSong, setEditedSong] = useState(song);

  const saveSong = () => {
    if (editedSong.trim() === "") return;

    dispatch({
      type: "EDIT_SONG",
      payload: {
        index,
        newSong: editedSong,
      },
    });

    setIsEditing(false);
  };

  return (
    <li className="song-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedSong}
            onChange={(e) => setEditedSong(e.target.value)}
          />

          <button onClick={saveSong}>Save</button>
        </>
      ) : (
        <>
          <span>{song}</span>

          <div>
            <button onClick={() => setIsEditing(true)}>
              Edit
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_SONG",
                  payload: index,
                })
              }
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default SongItem;