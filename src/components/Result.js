import React from "react";
import "./Result.scss";
const Result = (props) => {
  console.log(props);
  return (
    <div className="result">
      <p>{props.weather.city}</p>
      <p>{props.weather.temperature}</p>
      <p>{props.weather.pressure}</p>
      <p>{props.weather.windSpeed}</p>
      <p>{props.weather.weatherType}</p>
    </div>
  );
};

export default Result;
