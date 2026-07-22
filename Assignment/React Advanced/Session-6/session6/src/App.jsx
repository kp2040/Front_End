import ProductList from "./components/ProductList";
import PlaylistManager from "./components/PlaylistManager";
import LargeList from "./components/LargeList";

function App() {
  return (
    <div>
      <ProductList />
      <PlaylistManager />
      <h1>React Performance Optimization</h1>

      {/* <h2>Counter: {count}</h2> */}

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Counter
      </button>

      <LargeList />
    </div>
  );
}

export default App;