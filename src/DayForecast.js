import React from "react";

import "./DayForecast.css";

export default function DayForecast(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
      />
      <div className="ForecastTemp">
        <p>
          <span className="ForecastTempMin">{minTemperature()}</span>/
          <span className="ForecastTempMax">{maxTemperature()}</span>
        </p>
      </div>
    </div>
  );
}
