import React from 'react'
import Result from './Result'

class Weather extends React.Component {
    state = {
        city: '',
        temperature: '',
        feelsLike: '',
        pressure: '',
        windSpeed: '',
        weatherType: '',
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.weather !== prevProps.weather) {
            const { weather } = this.props
            const weatherResult = {
                city: weather[1],
                temperature: `${Math.floor(weather[0].temp)} °C `,
                feelsLike: ` ${Math.floor(weather[0].feels_like)} °C`,
                pressure: ` ${Math.floor(weather[0].pressure * 0.75)} mm Hg`,
                windSpeed: `Wind: ${weather[3].speed} km/h`,
                weatherType: weather[2][0].main,
            }
            this.setState({ weatherResult })
        }
    }

    render() {
        const { weatherResult } = this.state

        return <Result weatherResult={weatherResult} />
    }
}

export default Weather
