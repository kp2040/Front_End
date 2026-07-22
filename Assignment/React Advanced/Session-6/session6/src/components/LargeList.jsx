import React, { useMemo, useCallback } from "react";
import ListItem from "./ListItem";

function LargeList() {
  // Create the list only once
  const items = useMemo(() => {
    console.log("Generating List...");
    return Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: `Product ${i + 1}`,
    }));
  }, []);

  // Memoized callback
  const handleClick = useCallback((id) => {
    console.log("Clicked Product:", id);
  }, []);

  return (
    <>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onClick={handleClick}
        />
      ))}
    </>
  );
}

export default LargeList;