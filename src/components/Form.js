import React from 'react'
import './Form.scss'

class Form extends React.Component {
    state = { cityName: '' }

    componentDidMount() {
        this.input.focus()
    }

    handleSubmit = () => {
        this.props.onFetchWeather(this.state.cityName)
        this.setState({ cityName: '' })
    }

    render() {
        return (
            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <h1 className="form__header">Weather App</h1>
                <input
                    className="form__input"
                    type="text"
                    placeholder="city"
                    value={this.state.cityName}
                    ref={(input) => {
                        this.input = input
                    }}
                    onChange={(e) => {
                        this.setState({
                            cityName: e.target.value,
                            isEmpty: false,
                        })
                    }}
                />
                <button
                    className="form__button"
                    disabled={!this.state.cityName}
                    onClick={this.handleSubmit}
                >
                    Submit
                </button>
            </form>
        )
    }
}

export default Form
