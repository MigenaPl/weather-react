import React, { useState } from "react";

import "./weather.css";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  let [city, setCity] = useState("");

  function showFarenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }
  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }
  function enterSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Weather-app">
      <div className="circle">
        <div className="container cont-one">
          <div className="row">
            <p className="current" id="current">
              Date&Time
            </p>
            <br />
            <h2 id="current-city-name">{city}</h2>
          </div>
          <div className="row">
            <div className="col deg-area">
              <h1 id="main-deg" className="main-deg">
                {temperature}°
              </h1>
              <a
                href="/"
                onClick={showCelsius}
                className="units cel"
                id="unit-celsius"
              >
                C
              </a>
              <p className="units">|</p>
              <a
                href="/"
                onClick={showFarenheit}
                className="units far"
                id="unit-fahrenheit"
              >
                F
              </a>
            </div>
            <div className="col main-symbol">
              <p>
                <span role="img" aria-label="emoji">
                  ☀️
                </span>
              </p>
            </div>
          </div>
        </div>

        <h4>Next days:</h4>
        <div className="container cont-two">
          <div className="row">
            <div className="col symbol">
              <span role="img" aria-label="emoji">
                🌥️
              </span>
            </div>
            <div className="col symbol">
              <span role="img" aria-label="emoji">
                ⛈️
              </span>
            </div>
            <div className="col symbol">
              <span role="img" aria-label="emoji">
                ☀️
              </span>
            </div>
            <div className="col symbol">
              <span role="img" aria-label="emoji">
                ☀️
              </span>
            </div>
            <div className="col symbol">
              <span role="img" aria-label="emoji">
                ☀️
              </span>
            </div>
            <div className="col symbol">
              <span role="img" aria-label="emoji">
                ☀️
              </span>
            </div>
            <div className="col symbol">
              <span role="img" aria-label="emoji">
                ☀️
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col deg">
              21°/<strong>30°</strong>
            </div>
            <div className="col deg">
              19°/<strong>23°</strong>
            </div>
            <div className="col deg">
              18°/<strong>29°</strong>
            </div>
            <div className="col deg">
              17°/<strong>29°</strong>
            </div>
            <div className="col deg">
              16°/<strong>27°</strong>
            </div>
            <div className="col deg">
              16°/<strong>28°</strong>
            </div>
            <div className="col deg">
              19°/<strong>28°</strong>
            </div>
          </div>
          <div className="row">
            <div className="col day">Thu</div>
            <div className="col day">Fri</div>
            <div className="col day">Sat</div>
            <div className="col day">Sun</div>
            <div className="col day">Mon</div>
            <div className="col day">Tue</div>
            <div className="col day">Wed</div>
          </div>
        </div>
        <form onSubmit={enterSubmit} id="search-form">
          <input
            type="search"
            name="change"
            id="change-city-input"
            placeholder="Change city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <button
          className="location-icon"
          id="current-location-button"
          title="Current location"
        >
          <i className="fa-solid fa-location-dot fa-xl location-icon"></i>
        </button>
      </div>
      <footer>Coded by Migena Plenishti</footer>
    </div>
  );
}
