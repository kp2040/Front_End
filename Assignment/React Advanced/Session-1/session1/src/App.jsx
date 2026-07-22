import React from "react";
import PlaylistCard from "./components/PlaylistCard";
import LikeCounter from "./components/LikeCounter";
import Feed from "./components/Feed";
import UserContext from "./context/UserContext";
import "./App.css";
import FlipkartProductList from "./components/FlipkartProductList";

function App() {
  const user = {
    name: "Krish Panchal",
    username: "@krish",
  };

  return (
    <UserContext.Provider value={user}>
      <div className="container">
        <h1>React Advanced Assignment</h1>

        {/* Assignment 1 - Playlist Card */}
        <section>
          <h2>🎵 Playlist</h2>

          <PlaylistCard
          
            song="Shape of You"
            artist="Ed Sheeran"
          />

          <PlaylistCard
            song="Perfect"
            artist="Ed Sheeran"
          />

          <PlaylistCard
            song="Believer"
            artist="Imagine Dragons"
          />
        </section>

        <hr />

        {/* Assignment 2 - Like Counter */}
        <section>
          <h2>❤️ Like Counter</h2>
          <LikeCounter />
        </section>

        <hr />

        {/* Assignment 3 - Context API */}
        <section>
          <h2>📱 Instagram Feed</h2>
          <Feed />
          <FlipkartProductList />
        </section>
      </div>
    </UserContext.Provider>
    
  );
}

export default App;