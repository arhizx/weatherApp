import React from "react";
import './Weather.scss'

class Weather extends React.Component {
    state = {
        city: '',
        temperature: '',
        feelsLike: '',
        pressure: '',
        windSpeed: '',
        weatherType: ''
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.weather !== prevProps.weather) {
            this.setState({
                city: this.props.weather[1],
                temperature: `${Math.floor(this.props.weather[0].temp)} °C `,
                feelsLike:` ${Math.floor(this.props.weather[0].feels_like)} °C`,
                pressure:` ${Math.floor(this.props.weather[0].pressure * 0.75)} mm Hg`,
                windSpeed:` ${this.props.weather[3].speed} km/h`,
                weatherType: this.props.weather[2][0].main
            })
        }
    }


    render() {
        return (
            <div className="weatherapp__result">
                <div className="weatherapp__weather">
                    <p className="weatherapp__city">{this.state.city}</p>
                    <p className="weatherapp__temperature">{this.state.temperature}</p>
                    <p className="weatherapp__pressure">{this.state.pressure}</p>
                    <p className="weatherapp__windSpeed">{this.state.windSpeed}</p>
                    <p className="weatherapp__weatherType">{this.state.weatherType}</p>
                </div>
            </div>
        )
    }

}


export default Weather