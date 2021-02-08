import React from 'react';
import {useEffect, useState} from 'react'; //{useEffect, useState}
import RestaurantName from './RestaurantName';
import Location from '../Geolocated';


const Restaurant = () => {
    const api_key = '5b30698a385bde59533ab80a968bb28c';
    const latitude = '39.6865814';
    const longitude = '-86.11133';
    const ZomatoUrl = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`;
    const [restaurant, setRestaurant] = useState([]);

    const restaurantData = async () => {

        const response = await fetch(ZomatoUrl, {
            method: 'GET',
            headers: {
                'user-key': api_key,
                'Accept': 'application/json'
            }
        });
        const restaurants = await response.json();
        const restaurantInfo = restaurants.nearby_restaurants;
        setRestaurant(restaurantInfo);
        // console.log(restaurantInfo);

    }

    useEffect(() => {
        restaurantData();
    }, []);


    return (
        <div>
            <h1>Restaurants Near Me</h1>
            <Location />
            {restaurant.map(name => <RestaurantName name={name.restaurant.name} id={name.restaurant.id}/>)}
        </div>
    );
};

export default Restaurant;

