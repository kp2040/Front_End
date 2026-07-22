import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function RestaurantCard({ restaurant }) {
  const { favorites, dispatch } =
    useContext(FavoritesContext);

  const isFavorite = favorites.includes(restaurant.id);

  const toggleFavorite = () => {
    dispatch({
      type: isFavorite
        ? "REMOVE_FAVORITE"
        : "ADD_FAVORITE",
      payload: restaurant.id,
    });
  };

  return (
    <div className="card">
      <h3>{restaurant.name}</h3>

      <p>{restaurant.cuisine}</p>

      <button onClick={toggleFavorite}>
        {isFavorite
          ? "❤️ Remove Favorite"
          : "🤍 Add Favorite"}
      </button>
    </div>
  );
}

export default RestaurantCard;