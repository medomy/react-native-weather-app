import { WeatherCondition } from "./weatherCondition"

export interface WeatherData {
    time_epoch: number,
    temp_C: number,
    condition: WeatherCondition,
    wind_kph: number,
    humidity: number, // percentage
    vis_km: number,
    timeString?: string
}