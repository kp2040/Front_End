import React, { useMemo, useState } from "react";

function ProductList() {
  // Create 1000 products only once
  const products = useMemo(() => {
    return Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      price: (Math.random() * 1000).toFixed(2),
    }));
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  // Memoized filtering
  const filteredProducts = useMemo(() => {
    console.log("Filtering Products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <div className="container">
      <h1>Product List</h1>

      <input
        type="text"
        placeholder="Search Product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h3>Total Products: {filteredProducts.length}</h3>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;