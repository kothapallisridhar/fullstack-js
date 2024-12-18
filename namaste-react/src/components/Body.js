import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    const [ listOfRestaurants, setListOfRestaurants ] = useState([]);

    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard/>
            </div>
        </div>
    )
}

export default Body;