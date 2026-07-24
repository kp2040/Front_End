function ProductCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "200px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <h2>{props.productName}</h2>
      <p>Price: ₹{props.price}</p>
    </div>
  );
}

export default ProductCard;