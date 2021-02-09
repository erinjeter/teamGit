import React from 'react';
import { useEffect, useState } from "react";
// import "./NASA.css";
let long = "86.1581";
let lat = "39.7684";

let key = "6X75nJteHGPQZh0ZZ7EXhuygiSeH92RTL6rKfYbJ";
let base_url = "https://api.nasa.gov/planetary/earth/assets"

const Nasa = () => {
  const url = `${base_url}?lon=${long}&lat=${lat}&date=2018-02-01&&dim=0.15&api_key=${key}`;
  const [data, setData] = useState();

  const initData = async () => {
    const response = await fetch(url);
    const image = await response.json();


    console.log(image);

    setData(image.url);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
  <div>
      <img src={data} alt="NASA satellite of your location"/>
  </div>);
};

export default Nasa;


//Version2

// export default function NasaPhoto() {
//     const [photoData, setPhotoData] = useState(null);

//     useEffect(() => {
//         fetchPhoto();

//         async function fetchPhoto() {
//             const res = await fetch(
//                 `${base_url}?lon=${long}&lat=${lat}&date=2018-02-01&&dim=0.15&api_key=${key}`
//             );
//             const data = await res.json();
//             setPhotoData(data);
//         }
//     }, []);

//     if (!photoData) return <div />;

//     return (
//         <div>
//             <img src={photoData.url} alt={photoData.title}/>
//         </div>
//     )
// }





