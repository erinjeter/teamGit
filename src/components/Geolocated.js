import {useState} from 'react';

const Location = () => {

  const [pos, setPos] = useState({lat: "", long: ""})
  const  getLocation = () => {

  const [pos, setPos] = useState({lat: "", long: ""});
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
      <button onClick={getLocation}>Click me</button>
      <p>lat: {pos.lat}</p>
      <p>long {pos.long}</p>
      </div>
  );
}
export default Location;

    return (
        <div>
          <button onClick={getLocation} latitude={pos.lat} longitude={pos.long}>Click me</button>
          <p value={pos.lat}>lat: {pos.lat}</p>
          <p value={pos.long}>long {pos.long}</p>
        </div>
    );
};

export default Location;

Location.defaultProps = {
  lat: '39.6865814',
  long: '-86.11133'
}
