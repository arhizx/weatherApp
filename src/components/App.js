import React from 'react';
import './App.scss'
import Form from "./Form";
import Weather from "./Weather";
import axios from "axios";

class App extends React.Component {

    state = {
        weather: null,
        err: null
    }


    getWeather = (city) => {
        this.errorHandler()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6440ce795db5b932e881bcfac1cee785`)
            .then(({data}) => {
                this.setState({weather: [data.main, data.name, data.weather, data.wind]})
            })
            .catch((err) => {

                this.setState({err: err})
            })

    }

    errorHandler = () => {
        if (this.state.err !== null) this.setState({err: null})
    }


    render() {

        let res

        if (this.state.err) res = <p className="weatherapp__err">Not Found</p>
        else res = <Weather weather={this.state.weather}/>


        return (
            <div className="weatherapp">
                <Form getWeather={this.getWeather}/>
                {res}
            </div>
        );
    }
}

export default App;
