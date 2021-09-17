import { useState } from "react";

import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";

import "./App.css";

function App() {
  const [weather, SetWeather] = useState([]);
  const [city, setCity] = useState("");

  const handleChangeWeather = (weatherData, city) => {
    SetWeather(weatherData);
    setCity(city);
  };

  return (
    <div className="App">
      <SearchWeather handleChangeWeather={handleChangeWeather} />
      <DisplayWeather weather={weather} city={city} />
    </div>
  );
}

export default App;
