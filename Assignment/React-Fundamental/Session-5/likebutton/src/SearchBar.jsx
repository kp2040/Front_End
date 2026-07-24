import React, { useState } from "react";

function SearchBar() {
  const [productName, setProductName] = useState("");

  const handleChange = (event) => {
    setProductName(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Flipkart Product Search</h2>

      <input
        type="text"
        placeholder="Search for products..."
        value={productName}
        onChange={handleChange}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <p>
        <strong>Searching for:</strong> {productName}
      </p>
    </div>
  );
}

export default SearchBar;