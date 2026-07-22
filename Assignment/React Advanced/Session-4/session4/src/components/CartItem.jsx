import React, { useReducer } from "react";

const initialState = {
  quantity: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { quantity: state.quantity + 1 };

    case "DECREMENT":
      return state.quantity > 1
        ? { quantity: state.quantity - 1 }
        : state;

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function CartItem() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="cart">
      <h2>🛒 Flipkart Cart Item</h2>

      <h3>Product: Wireless Headphones</h3>

      <h2>Quantity: {state.quantity}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        ➕
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        disabled={state.quantity === 1}
      >
        ➖
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        🔄 Reset
      </button>
    </div>
  );
}

export default CartItem;