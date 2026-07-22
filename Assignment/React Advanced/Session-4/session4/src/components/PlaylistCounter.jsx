import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return state.count > 0
        ? { count: state.count - 1 }
        : state;

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function PlaylistCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="card">
      <h2>🎵 Playlist Counter</h2>

      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        ➕ Add Song
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        disabled={state.count === 0}
      >
        ➖ Remove Song
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        🔄 Reset
      </button>
    </div>
  );
}

export default PlaylistCounter;