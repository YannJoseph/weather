
import axios from "axios";
import React, {useState} from "react";


function App() {

  const [data, setData] = useState ({});
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c8aaa36c6e4f9ebb93d065f90b33faf0` 

const searchLocation = (event) => {
  if(event.key === 'Enter') {
  axios.get(url).then((reponse) => {
    setData(reponse.data)
    console.log(reponse.data)
  })
  setLocation('')
}
}

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder='Enter Location'
        onKeyPress={searchLocation}
        type="text" />
      </div>
 <div className="container">
  <div className="top">
    <div className="location">
< p>{data.name}</p>
    </div>
    <div className="temp">
      {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null }
      
    </div>
    <div className="description">
    {data.weather ? <p>{data.weather[0].main} </p>: null}
   
     
    </div>
  </div>


    {data.name != undefined &&
    <div className="bottom">
    <div className="feels">
    
      <p className="bold">{data.main ? <p>{data.main.feels_like} °C</p>: null}</p>
      <p>feels like</p>
    </div>
    <div className="humidity">
      <p className="bold">{data.main ? <p>{data.main.humidity} %</p>: null}</p>
      <p>Humidity</p>
    </div>
    <div className="wind">
      <p className="bold">{data.wind ? <p>{data.wind.speed} MPH</p>:null } </p>
      <p>Wind speed</p>
    </div>
  </div>
    }

  


 </div>

    </div>
  );
}

export default App;
