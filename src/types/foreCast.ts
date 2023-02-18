import { WeatherData } from "./weatherData"

export interface ForeCast extends WeatherData {
    maxtemp_c: number,
    mintemp_c: number,
}