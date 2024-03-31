import React from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    console.log("API response:", response.data);
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}$units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <Circles
      height="80"
      width="80"
      color="#e6007e"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
