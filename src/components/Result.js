import React from "react";
import "./Result.scss";

const Result = (props) => {
  return (
    <div className="result">
      <p>{props.weatherResult.city}</p>
      <p>{props.weatherResult.temperature}</p>
      <p>{props.weatherResult.pressure}</p>
      <p>{props.weatherResult.windSpeed}</p>
      <p>{props.weatherResult.weatherType}</p>
    </div>
  );
};

export default Result;
