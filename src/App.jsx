// import axios from "axios";
import React from "react";


function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=meaux&appid=c8aaa36c6e4f9ebb93d065f90b33faf0` 

  return (
    <div className="app">
 <div className="container">
  <div className="top">
    <div className="location">
< p>Meaux</p>
    </div>
    <div className="temp">
      <h1>14°</h1>
    </div>
    <div className="description">
      <p>Clouds</p>
    </div>
  </div>
  <div className="bottom">
    <div className="feels">
      <p>17°</p>
    </div>
    <div className="humidity">
      <p>10%</p>
    </div>
    <div className="wind">
      8MPH
    </div>
  </div>
 </div>

    </div>
  );
}

export default App;
