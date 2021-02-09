import React from 'react';
import {useEffect, useState} from 'react'; //{useEffect, useState}
import RestaurantName from './RestaurantName';
import './Restaurants.css';


const Restaurant = ({pos}) => {
    const api_key = '5b30698a385bde59533ab80a968bb28c';
    const [restaurant, setRestaurant] = useState([]);

    const restaurantData = async () => {
        let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${pos.lat}&lon=${pos.long}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'user-key': api_key,
                'Accept': 'application/json'

            }
        });
        const restaurants = await response.json();
        const restaurantInfo = restaurants.nearby_restaurants;
        setRestaurant(restaurantInfo);
        console.log(restaurantInfo);

    }

    useEffect(() => {
        restaurantData();
    }, [pos.lat, pos.long]);


    return (
        <div className="restaurants">
            <h4>RESTAURANTS API</h4>
            {restaurant.map(name => <RestaurantName name={name.restaurant.name} id={name.restaurant.id}/>)}
        </div>
    );
};

export default Restaurant;

