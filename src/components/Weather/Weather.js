import React from 'react';
import {useEffect, useState} from 'react'; //{useEffect, useState}
// import RestaurantName from './RestaurantName';
// import Location from '../Geolocated';
    
const Weather = ({match}) => {
    let lat = 39.7684
    let lon = 86.1581
    const WeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=d9c83a590f45484ed5d3808e110436db`;
    const [weather, setweather] = useState();
    const weatherData = async () => {
        const response = await fetch(WeatherUrl);         
        const data = await response.json();
        console.log(data);
        setweather(data);
    };
    useEffect(() => {
        weatherData();
    }, [] );

    return (
        <div>
           
            <h1>Indianapolis Area Weather</h1>
            {weather?.main.temp}
            
            {weather?.weather[0].description}
            
        </div>
    );
};

export default Weather;
/*const weatherInfo = () => {
    const [pos, setPos] = useState({lat: "", long: ""})
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoords)
        } else {
            alert('GeoLocation not enabled');
        }
    }
    const getCoords = (pos) => {
        console.log(pos)
        setPos({
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        })
    }
    return (
        <div>
            <button onClick={(event) => getLocation(event.target.value)}>Click Me</button>
            <p>latitude: {pos.lat}</p>
            <p>longitude: {pos.long}</p>
        </div>
    );
};*/
