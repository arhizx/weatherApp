import React from 'react'
import './Result.scss'

const Result = ({ weatherResult }) => {
    if (!weatherResult) return null

    const {
        city,
        temperature,
        pressure,
        windSpeed,
        weatherType,
    } = weatherResult
    return (
        <div className="result">
            <p>{city}</p>
            <p>{temperature}</p>
            <p>{pressure}</p>
            <p>{windSpeed}</p>
            <p>{weatherType}</p>
        </div>
    )
}

export default Result
