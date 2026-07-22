import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FavoritesContext } from "../context/FavoritesContext";

function Navbar() {
  const user = useContext(UserContext);
  const favoritesContext = useContext(FavoritesContext);

  // If the provider is missing, don't crash
  if (!favoritesContext) {
    return <h2>FavoritesContext Provider Not Found!</h2>;
  }

  const { favorites } = favoritesContext;

  return (
    <nav
      style={{
        background: "#e23744",
        color: "#fff",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Zomato Clone</h2>

      <h3>Welcome, {user?.name}</h3>

      <h3>❤️ Favorites: {favorites.length}</h3>
    </nav>
  );
}

export default Navbar;