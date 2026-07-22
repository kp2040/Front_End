export const initialState = {
  songs: ["Shape of You", "Believer", "Perfect"],
};

function playlistReducer(state, action) {
  switch (action.type) {
    case "ADD_SONG":
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };

    case "REMOVE_SONG":
      return {
        ...state,
        songs: state.songs.filter(
          (_, index) => index !== action.payload
        ),
      };

    case "EDIT_SONG":
      return {
        ...state,
        songs: state.songs.map((song, index) =>
          index === action.payload.index
            ? action.payload.newSong
            : song
        ),
      };

    default:
      return state;
  }
}

export default playlistReducer;