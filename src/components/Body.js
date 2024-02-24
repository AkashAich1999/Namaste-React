import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  // Local State Variable
  const [ListOfRestaurants, setListOfRestaurants] = useState(resList);

  // Normal JavaScript Variable
  // let ListOfRestaurantsJS = [
  //     {
  //         type: "restaurant",
  //         data: {
  //           id: "334475",
  //           name: "KFC",
  //           cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //           cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //           costForTwo: 40000,
  //           deliveryTime: 36,
  //           avgRating: "3.8",
  //         },
  //     },
  //     {
  //         type: "restaurant",
  //         data: {
  //           id: "334477",
  //           name: "Domino's",
  //           cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //           cuisines: ["Pizza", "Beverages"],
  //           costForTwo: 40000,
  //           deliveryTime: 36,
  //           avgRating: "4.3",
  //         },
  //     }
  // ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.517929&lng=88.38341199999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    // setListOfRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic Here
            const filteredList = ListOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
