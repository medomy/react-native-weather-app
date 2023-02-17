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
    const isDarkState = useContext(IsDarkContext);
    const route = useRoute();
    const params = route.params as NavigationParams;
    const getWeatherData = async () => {
        try {
            const data = await WeatherApi.getWeatherData(params.position);
            setWeatherData(data.weatherData);
            setLocationData(data.locationData);
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
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})