import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { WeatherData } from '../../../types/weatherData'
import { COLORS, FONTS, SIZES } from '../../../constants'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import { IsDarkContext } from '../../../contexts/isDarkContext'


type props = {
    weatherData: WeatherData,
    currentTime: boolean
}
const HourlyWeatherCard = ({ weatherData, currentTime }: props) => {
    const isDarkState = useContext(IsDarkContext);
    return (
        <LinearGradient
            colors={currentTime ? [COLORS.primaryGradiant, COLORS.socendryGradiant, COLORS.thirdGradiant]
                : isDarkState?.isDark
                    ? [COLORS.offblack2, COLORS.offblack2]
                    : [COLORS.white, COLORS.white]}
            style={styles.card}>
            <View style={styles.degSec}>
                <Text style={[styles.tempTxt, { color: currentTime ? COLORS.white : isDarkState?.isDark ? COLORS.white : COLORS.black }]}>{weatherData.temp_C}</Text>
                <Icon name='circle-o' size={5} style={styles.degIcon} color={currentTime ? COLORS.white : isDarkState?.isDark ? COLORS.white : COLORS.black} />
            </View>
            <Image
                source={{ uri: weatherData.condition.icon }}
                style={styles.icon}
            />
            <Text style={[styles.timeTxt, { color: currentTime ? COLORS.white : COLORS.darkgray }]}>
                {weatherData.timeString!.split(" ")[1]}
            </Text>
        </LinearGradient>
    )
}

export default HourlyWeatherCard

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.radius2,
        paddingVertical: 0.5 * SIZES.padding,
        marginHorizontal: SIZES.margin,
        marginBottom: 0.5 * SIZES.margin
    },
    tempTxt: {
        ...FONTS.body4
    },
    timeTxt: {
        ...FONTS.body5
    },
    icon: {
        marginVertical: 1.5 * SIZES.margin,
        width: 2 * SIZES.iconSize,
        height: SIZES.iconSize,
        resizeMode: "contain"
    },
    degSec: {
        flexDirection: "row",
        position: "relative"
    },
    degIcon: {
        position: "absolute",
        right: -5,
    }
})