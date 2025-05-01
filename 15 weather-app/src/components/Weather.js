import { useState } from "react";
import { getWeather } from "../api";
import "../styles/Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("API Key:", process.env.REACT_APP_WEATHER_API_KEY);

    setError("");
    const data = await getWeather(city);
    if (data) {
      setWeather(data);
    } else {
      setWeather(null);
      setError("City not found please try again..");
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h3>
            {weather.name},{weather.sys.country}
          </h3>
          <p>Temperature:{weather.main.temp}℃</p>
          <p>Weather: {weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
        </div>
      )}
    </div>
  );
}

export default Weather;
