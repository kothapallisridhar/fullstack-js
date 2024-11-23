import React from 'react';
import ReactDOM from 'react-dom/client'; 
import Header from './components/Header';

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