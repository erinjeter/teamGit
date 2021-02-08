import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Nasa from "./components/NASA/Nasa";

import "./App.css";

// A component import

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route component={Nasa} path="/" exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
