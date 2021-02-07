// adding css to jsx is that easy
import { geolocated } from "react-geolocated";
import "./App.css"; // This pattern is preferred where css for this component has a matching .css filename

// A component import
import Nasa from "./components/NASA/Nasa";

const App = () => {
  const [pos, setPos] = useState({ lat: "", long: "" });
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoords);
    } else {
      alert("GeoLocation not enabled");
    }
  };
  const getCoords = (pos) => {
    console.log(pos);
    setPos({
      lat: pos.coords.latitude,
      long: pos.coords.longitude,
    });
  };
  return (
    <div>
      <button onClick={getLocation}>Click me</button>
      <p>lat: {pos.lat}</p>
      <p>long {pos.long}</p>
    </div>
  );
};
export default App;
