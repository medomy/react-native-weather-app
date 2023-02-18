import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import HomeHeader from '../../components/HomeSec/header'
import { IsDarkContext } from '../../contexts/isDarkContext'
import { COLORS } from '../../constants'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Position } from '../../types/Position'
import { WeatherData } from '../../types/weatherData'
import { LocationData } from '../../types/locationData'
import WeatherApi from '../../services/weather/weatherApi'
import { getWeatherDataAsyncStorage } from '../../services/weather/weatherAsyncStorage'
import LinearGradient from 'react-native-linear-gradient'
import WeatherCardCurrent from '../../components/HomeSec/weatherCard'
import WeatherInfoSec from '../../components/HomeSec/weathernfoSec'
import HourlyWeatherList from '../../components/HomeSec/hourlyWeatherList'

type NavigationParams = {
    position: Position
}
const HomeScreen = () => {
    const [weatherData, setWeatherData] = useState<WeatherData>({
        time_epoch: 0,
        temp_C: 0,
        condition: {
            text: "",
            icon: ""
        },
        wind_kph: 0,
        humidity: 0,
        vis_km: 0
    });
    const [locationData, setLocationData] = useState<LocationData>({
        name: "",
        country: "",
        localtime_epoch: 0,
        localtime: ""
    });
    const [hourlyWeatherData, setHourlyWeatherData] = useState<WeatherData[]>([]);
    const isDarkState = useContext(IsDarkContext);
    const route = useRoute();
    const params = route.params as NavigationParams;
    const getWeatherData = async () => {
        try {
            const data = await WeatherApi.getWeatherData(params.position);
            setWeatherData(data.weatherData);
            setLocationData(data.locationData);
            setHourlyWeatherData(data.hourlyWeatherData);
        } catch (err) {
            const asyncStorageData = await getWeatherDataAsyncStorage();
            setWeatherData((prev) => asyncStorageData?.weatherData ?? prev);
            setLocationData((prev) => asyncStorageData?.locationData ?? prev);
            console.warn(err);
        }
    }
    useEffect(() => {
        getWeatherData();
        //console.log(params.position);
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: isDarkState?.isDark ? COLORS.black : COLORS.white }}>
            <HomeHeader cityName={locationData.name} />
            <View style={{ flex: 1 }}>
                <LinearGradient style={{ flex: 0.7 }} colors={isDarkState?.isDark ? [COLORS.black, COLORS.black] : [COLORS.white, COLORS.bgGradientLight]}>
                    <WeatherCardCurrent weatherData={weatherData} />
                </LinearGradient>
                <View style={{ flex: 0.3, backgroundColor: isDarkState?.isDark ? COLORS.offBlack : COLORS.offWhite, zIndex: -1 }}>
                    <HourlyWeatherList hourluWeatherData={hourlyWeatherData} currentTime={weatherData.timeString!} />
                </View>
                <WeatherInfoSec weatherData={weatherData} />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})