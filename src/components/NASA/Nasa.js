import React from 'react';
import { useEffect, useState } from "react";
// import "./NASA.css";
let long = "86.1581";
let lat = "39.7684";

let key = "6X75nJteHGPQZh0ZZ7EXhuygiSeH92RTL6rKfYbJ";
let base_url = "https://api.nasa.gov/planetary/earth/assets"

const Nasa = () => {
  const url = `${base_url}?lon=${long}&lat=${lat}&date=2018-02-01&&dim=0.15&api_key=${key}`;
  const [data, setData] = useState(null);

  const initData = async () => {
    const response = await fetch(url);
    const image = await response.json();


    console.log(image);

    setData(image);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
  <div>
      <img src={image.url} alt="NASA satellite of your location"/>
  </div>);
};

export default Nasa;

// import React, { Component } from 'react';
// // import './Nasa.css';

// export default class NASA extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             lat: '',
//             long: '',
//             NASAurl: 'https://api.nasa.gov/neo/rest/v1/neo/browse',
//             img: '',
//             key: '6X75nJteHGPQZh0ZZ7EXhuygiSeH92RTL6rKfYbJ'
//         };
//     }

//     componentWillMount() {
//         console.log("NASA API is working on it.");
//     }

//     componentDidMount = (props) => {
//         console.log('starting mount')
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition((position) => {
//             this.setState({
//                 long: (position.coords.longitude),
//                 lat: (position.coords.latitude)
//             })

//             console.log("Latitude is :", position.coords.latitude);
//             console.log("Longitude is :", position.coords.longitude);
//             console.log("NASA component mounted.");

//             fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?lon=86.1581&lat=9.7684&api_key=6X75nJteHGPQZh0ZZ7EXhuygiSeH92RTL6rKfYbJ`)
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json);
//                 this.setState({
//                     img: json.url
//                 })
//                 console.log(this.state.img);
//             })
//           })
//         }
//       }
    
//     render(){
//         return(
//             <div id='nasaDiv'>
//                 <h2 id='nasah2'>YOU ARE HERE</h2>
//                 <br />
//                 <img id='apiReturn' src={this.state.img} alt='NASA API photo'/>
//                 <br />
//                 <hr />
//             </div>
//         )
//     }
// // }