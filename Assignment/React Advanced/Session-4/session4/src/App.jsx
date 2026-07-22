import React from "react";
import PlaylistCounter from "./components/PlaylistCounter";
import CartItem from "./components/CartItem";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="container">
      <h1>useReducer Example</h1>
      <h1>Flipkart Cart Quantity Manager</h1>
      <h1>useReducer Counter Example</h1>
      <Counter />

      <CartItem />

      <PlaylistCounter />
    </div>
  );
}

export default App;