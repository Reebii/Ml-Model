import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
import About from './components/About';
import NaturalDisaster from "./components/NaturalDisaster";
import NaturalDisasters from "./components/NaturalDisasters";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div>
      <NaturalDisasters/>
      </div>
      <div>
      <About/>
      </div>
    </React.Fragment>
  );
}

export default App;
