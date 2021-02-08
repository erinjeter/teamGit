import "./App.css"; 

import Navbar from './components/Navbar';
import Restaurant from './components/Restaurants/Restaurants';
import Footer from './components/Footer';



const App = () => {

  return (
    <div>
      <Navbar />
      <Restaurant />
      <Footer />

    </div>
  );
};
export default App;
