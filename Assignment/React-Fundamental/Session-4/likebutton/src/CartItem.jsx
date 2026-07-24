import React, { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div
      style={{
      
       
        width: "200px",
        borderRadius: "8px",
        margin: "20px",
      }}
    >
      <h3>Wireless Mouse</h3>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={decreaseQuantity}>-</button>

        <span>Quantity: {quantity}</span>

        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  );
}

export default CartItem;