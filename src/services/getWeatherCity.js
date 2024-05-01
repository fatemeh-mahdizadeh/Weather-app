import axios from "axios"

export async function getWeatherCity(cityName, signal) {


    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_API_KEY}`, {
        signal
    })

    const data = await response.json();

    return data
}