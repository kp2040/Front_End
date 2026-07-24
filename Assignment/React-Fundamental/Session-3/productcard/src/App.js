import ProductCard from "./ProductCard";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <h1>Product List</h1>

      <ProductCard productName="Wireless Mouse" price="599" />
      <ProductCard productName="Keyboard" price="999" />
      <ProductCard productName="Headphones" price="1499" />
     <ProductCard productName="Mouse" price="599" />
     <ProductCard productName="Mouses" price={599} />

      <UserProfile
        username="Krish Panchal"
        followers="1250"
        profilePic="https://i.pravatar.cc/150?img=12"
      />
      <UserProfile
        username="Krish Panchal"
        profilePic="https://i.pravatar.cc/150?img=12"
        followers="999" />
      <UserProfile
        username="John Doe"
        followers={1500}
        profilePic="https://i.pravatar.cc/150?img=5"
      />
    </div>

  );
}

export default App;