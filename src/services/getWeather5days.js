import axios from "axios";

export async function getWeather5days(cityId) {
    const api=await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${import.meta.env.VITE_API_KEY}`)
    return api
    
}