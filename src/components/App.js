import React from 'react';
import './App.scss'
import Form from "./Form";
import Weather from "./Weather";
import axios from "axios";

class App extends React.Component {

    state = {weather: null}

    getWeather = (city) => {

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6440ce795db5b932e881bcfac1cee785`)
            .then(({data}) => this.setState({weather: [data.main, data.name, data.weather, data.wind]}))

    }


    render() {

        return (
            <div className="weatherapp">
                <Form getWeather={this.getWeather}/>
                <Weather weather={this.state.weather ? this.state.weather : null}/>
            </div>
        );
    }
}

export default App;
