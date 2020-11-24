import axios from 'axios'

export const fetchWeather = (city) => {
    return axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6440ce795db5b932e881bcfac1cee785`
    )
}
