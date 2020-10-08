import React from "react";
import Result from "./Result";

class Weather extends React.Component {
  state = {
    city: "",
    temperature: "",
    feelsLike: "",
    pressure: "",
    windSpeed: "",
    weatherType: "",
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.weather !== prevProps.weather) {
      this.setState({
        city: this.props.weather[1],
        temperature: `${Math.floor(this.props.weather[0].temp)} °C `,
        feelsLike: ` ${Math.floor(this.props.weather[0].feels_like)} °C`,
        pressure: ` ${Math.floor(this.props.weather[0].pressure * 0.75)} mm Hg`,
        windSpeed: `Wind: ${this.props.weather[3].speed} km/h`,
        weatherType: this.props.weather[2][0].main,
      });
    }
  };

  render() {
    return <Result weatherResult={this.state} />;
  }
}

export default Weather;
