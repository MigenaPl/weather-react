import React, { useState, useEffect } from "react";
import axios from "axios";

import DayForecast from "./DayForecast";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="DailyForecast mt-3 d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <DayForecast data={forecast[1]} />
          </div>

          <div className="col">
            <DayForecast data={forecast[2]} />
          </div>

          <div className="col">
            <DayForecast data={forecast[3]} />
          </div>

          <div className="col">
            <DayForecast data={forecast[4]} />
          </div>

          <div className="col">
            <DayForecast data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "9da03fffet062oac34bd00790f54faa4";
    let city = props.data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
