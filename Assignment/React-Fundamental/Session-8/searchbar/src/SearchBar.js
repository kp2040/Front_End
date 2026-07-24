import React, { useRef, useEffect } from "react";

function SearchBar() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Search here..."
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;