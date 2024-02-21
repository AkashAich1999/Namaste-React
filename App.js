import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *      - Logo
 *      - Nav Items
 * Body
 *      - Search
 *      - RestaurantContainer
 *          - RestaurantCard
 *              - Img
 *              - Name of Restaurant, Star Rating, Cuisine, Delivery Time.
 * Footer
 *      - Copyright
 *      - Links
 *      - Address
 *      - Contact
 */

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = ({resName, cuisine}) => {
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
             className="res-logo"
             alt="res-logo" 
             src="https://b.zmtcdn.com/data/pictures/chains/0/18371310/ff149f65ad165478dbccf89a5332dd32.jpg?fit=around|750:500&crop=750:500;*,*" 
             />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.2 Stars</h4>
            <h4>46 mins</h4>
        </div>
    );
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                    resName="Behrouz Biryani"
                    cuisine="Biryani, North Indian, Kebabs, Mughlai, Beverages"
                />
                <RestaurantCard 
                    resName="La Pino'z Pizza" 
                    cuisine="Pizzas, Pastas, Italian, Desserts, Beverages"/>
                <RestaurantCard 
                    resName="KFC" 
                    cuisine="American, Snacks"/>
                <RestaurantCard 
                    resName="McDonald's" 
                    cuisine="Burger, Beverages, Cafe, Desserts"/>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard /> 
            </div>
        </div>
    );
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);