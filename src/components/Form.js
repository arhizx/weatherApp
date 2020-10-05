import React from "react";
import './Form.scss'

class Form extends React.Component {

    state = {cityName: ''}

    submitHandle = (e) => {
        e.preventDefault()
        if (this.state.cityName === '') return false
    }


    render() {

        return (
            <form className="weatherapp__form" onSubmit={this.submitHandle}>
                <h1 className="weatherapp__header">Weather App</h1>
                <input className="weatherapp__input"
                       type="text" placeholder="city"
                       value={this.state.cityName}
                       onChange={(e) => {
                           this.setState({cityName: e.target.value})
                       }}/>
                <button className="weatherapp__button" onClick={() => {
                    this.props.getWeather(this.state.cityName)
                    this.setState({cityName: ''})
                }}>
                    Submit
                </button>
            </form>
        )
    }
}


export default Form

