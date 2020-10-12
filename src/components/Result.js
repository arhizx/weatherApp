import React from 'react'
import './Result.scss'

const Result = ({ weather }) => {
    if (!weather) return null
    console.log(weather)

    return (
        <div className="result">
            <p>{weather[1]}</p>
            <p>{`${Math.floor(weather[0].temp)} °C `}</p>
            <p>{` ${Math.floor(weather[0].feels_like)} °C`}</p>
            <p>{` ${Math.floor(weather[0].pressure * 0.75)} mm Hg`}</p>
            <p>{weather[2][0].main}</p>
        </div>
    )
}

export default Result
