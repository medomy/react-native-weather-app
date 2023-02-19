import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ForecastHeader from '../../components/ForecastScreenComponents/header'
import LinearGradient from 'react-native-linear-gradient'
import { IsDarkContext } from '../../contexts/isDarkContext'
import { COLORS, images } from '../../constants'
import { ForeCast } from '../../types/foreCast'
import { getWeatherDataAsyncStorage } from '../../services/weather/weatherAsyncStorage'
import ForecastWeatherCard from '../../components/ForecastScreenComponents/weatherCard'

const ForeCastScreen = () => {
    const [forecastDays, setForecastDays] = useState<ForeCast[]>([{
        maxtemp_c: 0,
        mintemp_c: 0,
        time_epoch: 0,
        temp_C: 0,
        condition: {
            text: "",
            icon: ""
        },
        wind_kph: 0,
        humidity: 0,
        vis_km: 0
    }])
    const isDarkState = useContext(IsDarkContext);
    const setData = async () => {
        try {
            const data = await getWeatherDataAsyncStorage();
            setForecastDays(data?.forecastDays!);
        } catch (err) {
            console.warn(err);
        }
    }
    useEffect(() => {
        setData();
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <ForecastHeader />
            <LinearGradient
                colors={isDarkState?.isDark ? [COLORS.black, COLORS.black] : [COLORS.white, COLORS.bgGradientLight]}
                style={{ flex: 0.3 }}>
                {forecastDays.length > 1 && <ForecastWeatherCard forecastDay={forecastDays[1]} />}
            </LinearGradient>
            <View style={{ flex: 0.7, backgroundColor: isDarkState?.isDark ? COLORS.offBlack : COLORS.offWhite }}></View>
        </View>
    )
}

export default ForeCastScreen

const styles = StyleSheet.create({})