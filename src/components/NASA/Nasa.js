import React from 'react';
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player/youtube';
import "./Nasa.css";
let long = "86.1581";
let lat = "39.7684";

let key = "6X75nJteHGPQZh0ZZ7EXhuygiSeH92RTL6rKfYbJ";
let base_url = "https://api.nasa.gov/planetary/apod"

const Nasa = () => {
  const [data, setData] = useState();

  const initData = async () => {
    const url = `${base_url}?api_key=${key}`;
    const response = await fetch(url);
    const image = await response.json();


    console.log(image);

    setData(image.url);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
  <div className="space">
      <br/>
      <h4>While you're here, care to learn about space?</h4>
      <ReactPlayer url={data} alt="NASA satellite of your location" width={2000} height={500}/>
      <br />
      <br />
      <br />
  </div>
  );
};

export default Nasa;