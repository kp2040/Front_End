import React from "react";
import useFetchData from "../hooks/useFetchData";

function CategoryList() {
  const { data, loading, error } = useFetchData(
    "https://fakestoreapi.com/products/categories"
  );

  if (loading) return <h2>Loading Categories...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Categories</h2>

      <ul>
        {data.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;