import React from "react";
import useFetchData from "../hooks/useFetchData";

function ProductList() {
  const { data, loading, error } = useFetchData(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <h2>Loading Products...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Products</h2>

      {data.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>₹ {product.price}</p>
          <img
            src={product.image}
            alt={product.title}
            width="100"
          />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductList;