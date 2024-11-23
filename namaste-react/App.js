import React from 'react';
import ReactDOM from 'react-dom/client'; 

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - ReataurantContainer
 *  - RestaurantCard
 *      - Img
 *      - Name of Res, Star rating, Cuisine, Delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * 
 */

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://static.vecteezy.com/system/resources/previews/047/112/083/non_2x/simple-food-logo-free-vector.jpg'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>                

            </div>
        </div>
    )
}

// const styleCard = {
//     backgroundColor: '#f0f0f0'
// }

const RestaurantCard = (props) => {
    return (
        <div className='res-card' style={{backgroundColor: '#f0f0f0'}}>
            <img className='res-logo' alt='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/23/091216a6-dce4-4e17-bf57-53ddcda3c897_928546.jpg'/>
            <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.5 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard/><RestaurantCard/>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);