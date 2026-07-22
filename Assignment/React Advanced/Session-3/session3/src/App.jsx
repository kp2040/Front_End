import React from "react";
import MovieSearch from "./components/MovieSearch";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>OMDb Movie Search</h1>

      <MovieSearch />
    </div>
  );
}

export default App;