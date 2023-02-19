// get and set weather data from async storage in case internet fails
// caching purposes

import AsyncStorage from "@react-native-async-storage/async-storage";
import { WeatherData } from "../../types/weatherData";
import { LocationData } from "../../types/locationData";
import { ForeCast } from "../../types/foreCast";

export async function getWeatherDataAsyncStorage(): Promise<{ weatherData: WeatherData, locationData: LocationData, hourlyWeatherDataDay: WeatherData[], forecastDays: ForeCast[] } | null> {
    try {
        const weatherDataString = await AsyncStorage.getItem("weatherData");
        const locationDataString = await AsyncStorage.getItem("locationData");
        const hourlyWeatherDataDayString = await AsyncStorage.getItem("hourlyWeatherDataDay");
        const forecastDaysString = await AsyncStorage.getItem("forecastDays");
        return weatherDataString && locationDataString && hourlyWeatherDataDayString && forecastDaysString ? { weatherData: JSON.parse(weatherDataString!), locationData: JSON.parse(locationDataString!), hourlyWeatherDataDay: JSON.parse(hourlyWeatherDataDayString!), forecastDays: JSON.parse(forecastDaysString!) } : null;
    } catch (e) {
        throw new Error(`could not find data , ${e}`);
    }
}

export async function setWeatherData(weatherData: WeatherData, locationData: LocationData, hourlyWeatherDataDay: WeatherData[], forecastDays: ForeCast[]) {
    try {
        await AsyncStorage.setItem("weatherData", JSON.stringify(weatherData));
        await AsyncStorage.setItem("locationData", JSON.stringify(locationData));
        await AsyncStorage.setItem("hourlyWeatherDataDay", JSON.stringify(hourlyWeatherDataDay))
        await AsyncStorage.setItem("forecastDays", JSON.stringify(forecastDays))
    } catch (e) {
        throw new Error(`could not set data to storage , ${e}`);
    }
}