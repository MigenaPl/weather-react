import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "9da03fffet062oac34bd00790f54faa4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather-app">
        <div className="circle">
          <div className="circle-container">
            <WeatherInfo data={weatherData} />
            <WeatherForecast data={weatherData} />

            <form className="change-city-form mt-4" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter your city.."
                    className="input-branding"
                    autofocus="on"
                    onChange={updateCity}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-branding"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer>
          Open-source{" "}
          <a href="https://github.com/MigenaPl/weather-react">code</a>. Coded by
          Migena Plenishti
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
