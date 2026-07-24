import LikeButton from "./LikeButton";
import CartItem from "./CartItem";
import SongVote from "./SongVote";
import RatingSelector from "./RatingSelector";

function App() {
  return (
    <div className="App">
     <h1>Like Button Example</h1>
      <LikeButton />

      <h1>Product 1</h1>
      <CartItem />

      <h1>Spotify Playlist Voting</h1>
      <SongVote />

       <h1>Zomato Rating Selector ★</h1>
      <RatingSelector />
    </div>
  );
}

export default App;
