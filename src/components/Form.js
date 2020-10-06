import React from "react";
import './Form.scss'

class Form extends React.Component {

    state = {cityName: '', isEmpty: true}

    componentDidMount() {
        this.input.focus()
    }

    render() {
        return (
            <form className="weatherapp__form" onSubmit={(e) => {
                e.preventDefault()
            }}>
                <h1 className="weatherapp__header">Weather App</h1>
                <input className="weatherapp__input"
                       type="text" placeholder="city"
                       value={this.state.cityName}
                       ref={(input) => {
                           this.input = input
                       }}
                       onChange={(e) => {
                           this.setState({cityName: e.target.value, isEmpty: false})
                       }}/>
                <button className="weatherapp__button"
                        disabled={this.state.isEmpty}
                        onClick={() => {
                            this.props.getWeather(this.state.cityName)
                            this.setState({cityName: '', isEmpty: true})
                        }}>
                    Submit
                </button>
            </form>
        )
    }
}


export default Form

