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

// JavaScript Object with a Single Property & Value
// const styleCard = {
//     backgroundColor: "#f0f0f0"
// }

const RestaurantCard = () => {
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
             className="res-logo"
             alt="res-logo" 
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/559086f6b0c59b7e4f1cd44b0aa6d367" 
             />
            <h3>The Big F</h3>
            <h4>Snacks, Beverages</h4>
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
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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