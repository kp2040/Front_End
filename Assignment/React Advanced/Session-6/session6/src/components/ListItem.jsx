import React, { memo } from "react";

const ListItem = memo(({ item, onClick }) => {
  console.log("Rendering:", item.name);

  return (
    <div
      onClick={() => onClick(item.id)}
      style={{
        padding: "8px",
        borderBottom: "1px solid #ddd",
        cursor: "pointer",
      }}
    >
      {item.name}
    </div>
  );
});

export default ListItem;