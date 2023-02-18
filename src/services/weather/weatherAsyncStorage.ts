// get and set weather data from async storage in case internet fails
// caching purposes

import AsyncStorage from "@react-native-async-storage/async-storage";
import { WeatherData } from "../../types/weatherData";
import { LocationData } from "../../types/locationData";

export async function getWeatherDataAsyncStorage(): Promise<{ weatherData: WeatherData, locationData: LocationData, hourlyWeatherDataDay: WeatherData[] } | null> {
    try {
        const weatherDataString = await AsyncStorage.getItem("weatherData");
        const locationDataString = await AsyncStorage.getItem("locationData");
        const hourlyWeatherDataDayString = await AsyncStorage.getItem("hourlyWeatherDataDay");
        return weatherDataString && locationDataString ? { weatherData: JSON.parse(weatherDataString!), locationData: JSON.parse(locationDataString!), hourlyWeatherDataDay: JSON.parse(hourlyWeatherDataDayString!) } : null;
    } catch (e) {
        throw new Error(`could not find data , ${e}`);
    }
}

export async function setWeatherData(weatherData: WeatherData, locationData: LocationData, hourlyWeatherDataDay: WeatherData[]) {
    try {
        await AsyncStorage.setItem("weatherData", JSON.stringify(weatherData));
        await AsyncStorage.setItem("locationData", JSON.stringify(locationData));
        await AsyncStorage.setItem("hourlyWeatherDataDay", JSON.stringify(hourlyWeatherDataDay))
    } catch (e) {
        throw new Error(`could not set data to storage , ${e}`);
    }
}