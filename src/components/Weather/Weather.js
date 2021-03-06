import React from 'react';
import {useEffect, useState} from 'react'; //{useEffect, useState}
import "./Weather.css"
const Weather = () => {
    let lat = 39.7684
    let lon = 86.1581
    const WeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=2dfd73a7e486ac6b59f194d965bbd0ba`;
    const [weather, setweather] = useState();
    const [toggle, setToggle] = useState(false);
    const [celcius, setCelcius] = useState('');
    const weatherData = async () => {
        const response = await fetch(WeatherUrl);         
        const data = await response.json();
        const farenheit = data.main.temp;
        console.log(farenheit);
        setweather(farenheit);
        setCelcius((farenheit - 32) * .556);
    };
    useEffect(() => {
        weatherData();
    }, [] );
    return (
        <div className="weather">
            <br/>
            <h3>
                The current local
                <br /> temperature is:
            </h3>
            <div>
                <button onClick= {() => setToggle(!toggle)}>Switch Scale</button>
                <p>{toggle ? `${weather} °F` : `${celcius} °C`}</p>
            </div>
        </div>
    );
};
export default Weather;