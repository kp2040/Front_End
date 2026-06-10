import TrendingSong from "./TrendingSong";


function App() {
  return (
    <div className="App">
      <h1>Welcome to My React Zomato App' </h1>
      <p>React's Virtual DOM improves performance by creating a lightweight copy of the real DOM in memory. When data changes, React first updates the Virtual DOM and compares it with the previous version to identify only the changed elements. Instead of updating the entire page, React updates only the necessary parts of the real DOM, making UI rendering faster and more efficient.
      </p>

      <TrendingSong />
    </div>
  );
}

export default App;
