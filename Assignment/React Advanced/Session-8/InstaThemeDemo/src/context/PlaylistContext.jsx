import { createContext, useMemo, useState } from "react";

export const PlaylistContext = createContext();

function PlaylistProvider({ children }) {
  const [playlist] = useState([
    "Shape of You",
    "Believer",
    "Perfect",
    "Levitating",
    "Blinding Lights",
  ]);

  // Unrelated state
  const [count, setCount] = useState(0);

  // Memoize the context value
  const value = useMemo(() => {
    return {
      playlist,
    };
  }, [playlist]);

  return (
    <PlaylistContext.Provider value={value}>
      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      {children}
    </PlaylistContext.Provider>
  );
}

export default PlaylistProvider;