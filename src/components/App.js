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
        let res = this.state.err ? (
            <p>Not Found</p>
        ) : (
            <Result weather={this.state.weather} />
        )

        return (
            <div className="app">
                <Form onFetchWeather={this.handleFetchWeather} />
                {res}
            </div>
        )
    }
}

export default App
