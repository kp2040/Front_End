import React from "react";
import LiveClock from "./components/LiveClock";
import MoviesList from "./components/MoviesList";
import PostCard from "./components/PostCard";
import SpotifyPlaylists from "./components/SpotifyPlaylists";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Custom Hook Example</h1>
      <h1>TMDB Trending Movies</h1>
      <h1>Instagram Like Button</h1>
      <h1>Spotify Playlist App</h1>
      <h1>Flipkart App</h1>
      <LiveClock />
      <MoviesList />
      <PostCard />
      <SpotifyPlaylists />
      <ProductList />
    {
      
    }  <CategoryList />
    </div>
  );
}

export default App;