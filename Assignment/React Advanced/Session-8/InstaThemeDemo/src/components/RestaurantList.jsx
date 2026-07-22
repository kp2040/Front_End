import RestaurantCard from "./RestaurantCard";

function RestaurantList() {
  const restaurants = [
    {
      id: 1,
      name: "Pizza Hut",
      cuisine: "Italian",
    },
    {
      id: 2,
      name: "Domino's",
      cuisine: "Fast Food",
    },
    {
      id: 3,
      name: "Barbeque Nation",
      cuisine: "BBQ",
    },
    {
      id: 4,
      name: "Subway",
      cuisine: "Healthy",
    },
  ];

  return (
    <>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </>
  );
}

export default RestaurantList;