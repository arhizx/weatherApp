import React from 'react'
import './App.scss'
import Form from './Form'

import { fetchWeather } from '../HTTP'
import Result from './Result'

class App extends React.Component {
    state = {
        weather: null,
        err: null,
    }

    handleFetchWeather = (city) => {
        fetchWeather(city)
            .then(({ data }) => {
                this.setState({
                    weather: [data.main, data.name, data.weather, data.wind],
                    err: null,
                })
            })
            .catch((err) => {
                this.setState({ err: err })
            })
    }

    render() {
        const { err, weather } = this.state

        return (
            <div className="app">
                <Form onFetchWeather={this.handleFetchWeather} />
                {err ? <p>Not found</p> : <Result weather={weather} />}
            </div>
        )
    }
}

export default App
