import { apiInstance } from "../../network/config";
import { Position } from "../../types/Position";
import { ForeCast } from "../../types/foreCast";
import { LocationData } from "../../types/locationData";
import { WeatherData } from "../../types/weatherData";
import { ApiConfig } from "../ApiConfig";
import { setWeatherData } from "./weatherAsyncStorage";

export default class WeatherApi {
    // get the data for 7 days forecast and certailn location
    static async getWeatherData(position: Position): Promise<{ weatherData: WeatherData, locationData: LocationData, hourlyWeatherData: WeatherData[], forecastDays: ForeCast[] }> {
        try {
            const response = await apiInstance.get(`/forecast.json`, {
                params: {
                    key: ApiConfig.API_KEY,
                    q: `${position.lat},${position.lon}`,
                    days: 7
                }
            });
            // current Weahter data
            const weatherData: WeatherData = {
                time_epoch: response.data.current.last_updated_epoch,
                temp_C: response.data.current.temp_c,
                wind_kph: response.data.current.wind_kph,
                humidity: response.data.current.humidity,
                vis_km: response.data.current.vis_km,
                condition: {
                    text: response.data.current.condition.text,
                    icon: `https:${response.data.current.condition.icon}`
                },
                timeString: response.data.current.last_updated
            }
            // requested location data
            const locationData: LocationData = {
                name: response.data.location.name,
                country: response.data.location.country,
                localtime_epoch: response.data.location.localtime_epoch,
                localtime: response.data.location.localtime
            }

            // requested hourly weather data
            const hourlyWeatherData: WeatherData[] = response.data.forecast.forecastday[0].hour.map((h: any) => {
                return {
                    time_epoch: h.time_epoch,
                    temp_C: h.temp_c,
                    wind_kph: h.wind_kph,
                    humidity: h.humidity,
                    vis_km: h.vis_km,
                    condition: {
                        text: h.condition.text,
                        icon: `https:${h.condition.icon}`
                    },
                    timeString: h.time
                }
            })
            // requested forecast data
            const forecastDays: ForeCast[] = response.data.forecast.forecastday.map((f: any) => {
                return {
                    maxtemp_c: f.day.maxtemp_c,
                    mintemp_c: f.day.mintemp_c,
                    time_epoch: f.date_epoch,
                    temp_C: f.day.maxtemp_c,
                    wind_kph: f.day.maxwind_kph,
                    humidity: f.day.avghumidity,
                    vis_km: f.day.avgvis_km,
                    condition: {
                        text: f.day.condition.text,
                        icon: `https:${f.day.condition.icon}`
                    },
                    timeString: f.date
                }
            })
            await setWeatherData(weatherData, locationData, hourlyWeatherData, forecastDays);
            return { weatherData, locationData, hourlyWeatherData, forecastDays };
        } catch (err) {
            throw new Error(`could not request api , ${err}`);
        }
    }
}