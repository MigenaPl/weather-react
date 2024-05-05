import React from "react";
import FormattedDate from "./FormattedDate";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <h1>{props.data.city}</h1>

      <div className="row mt-3">
        <div className="col-6">
          <img src={props.data.icon_url} alt={props.data.description} />

          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul className="CityInfo">
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
