import axios from 'axios'

export const fetchWeather = (city) => {
    return axios.get(
        `${process.env.REACT_APP_BASE_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APP_ID}`
    )
}
