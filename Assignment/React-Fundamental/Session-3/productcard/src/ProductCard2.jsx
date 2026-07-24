import PropTypes from "prop-types";

function ProductCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "200px",
      }}
    >
      <h2>{props.productName}</h2>
      <p>Price: ₹{props.price}</p>
    </div>
  );
}

// Prop validation
ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;