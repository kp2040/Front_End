import Playlist from "./Playlist";
import OrderStatus from "./OrderStatus";
import FollowerList from "./FollowerList";
import CartSummary from "./CartSummary";

function App() {
  const songs = [
    { title: "Blinding Lights", artist: "The Weeknd" },
    { title: "Lock", artist: "SidhuMoosewala" },
    { title: "Balenci", artist: "Shubh" },
    { title: "AtPeace", artist: "Karan Aujila" }
  ];
   const cartItems = [
    { name: "Wireless Mouse", price: 599 },
    { name: "Keyboard", price: 999 },
    { name: "Headphones", price: 1499 }
  ];


  return (
    <div>
      <Playlist songs={songs} />

      <OrderStatus isDelivered={true} />
      <OrderStatus isDelivered={false} />
      <FollowerList
        followers={[
          "krish_01",
          "john_doe",
          "react_dev"]} />
     <CartSummary cartItems={cartItems} />



    </div>
  );
}

export default App;