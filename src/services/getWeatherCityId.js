import axios from "axios";

export function getWeatherCityId(cityId) {
    const response=axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${import.meta.env.VITE_API_KEY}`)
    return response
    
}