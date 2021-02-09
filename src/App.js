import "./App.css";
import { useEffect, useState } from "react";
// import { Container, Row, Col } from "reactstrap";

import Navbar from "./components/Navbar";
import Restaurant from "./components/Restaurants/Restaurants";
import Footer from "./components/Footer";
import Weather from "./components/Weather/Weather";
import Nasa from "./components/NASA/Nasa";

const App = () => {
  const [pos, setPos] = useState({ lat: 0, long: 0 });
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoords);
    } else {
      alert("GeoLocation not enabled");
    }
  };
  const getCoords = (position) => {
    console.log(position);
    setPos({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div>
      <Navbar />
      <Restaurant pos={pos} />
      <Weather />
      <Nasa />
      <Footer />
    </div>
  );
};
export default App;
