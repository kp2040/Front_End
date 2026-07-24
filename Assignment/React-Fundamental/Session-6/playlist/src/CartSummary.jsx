function CartSummary(props) {
  const { cartItems } = props;

  return (
    <div>
      <h2>Cart Summary</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}

      {cartItems.length >= 3 && (
        <button>Checkout Now</button>
      )}
    </div>
  );
}

export default CartSummary;