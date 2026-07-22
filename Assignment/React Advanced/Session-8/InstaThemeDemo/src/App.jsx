import Navbar from "./components/Navbar";
import RestaurantList from "./components/RestaurantList";
import PlaylistProvider from "./context/PlaylistContext";
import Playlist from "./components/Playlist";
import Header from "./components/Header";
import Profile from "./components/Profile";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <RestaurantList />
      <PlaylistProvider>
        <Playlist />
      </PlaylistProvider>
      <Header />
      <Profile />
      <h1>Shopping Cart App</h1>

      <ProductList />

      <hr />

      <Cart />
    </>
  );
}

export default App;