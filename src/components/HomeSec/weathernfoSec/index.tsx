import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useMemo } from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import { IsDarkContext } from '../../../contexts/isDarkContext'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { WeatherData } from '../../../types/weatherData'
type props = {
    weatherData: WeatherData
}
const WeatherInfoSec = ({ weatherData }: props) => {
    const isDarkState = useContext(IsDarkContext);
    const data = useMemo(() => {
        return [
            {
                icon: "weather-windy-variant",
                value: `${weatherData.wind_kph}Km/h`,
                description: "wind"
            },
            {
                icon: "water-percent",
                value: `${weatherData.humidity}%`,
                description: "humidity"
            },
            {
                icon: "eye-outline",
                value: `${weatherData.vis_km}Km`,
                description: "visibility"
            }
        ]
    }, [weatherData])
    return (
        <View style={[styles.infoSec, { backgroundColor: isDarkState?.isDark ? COLORS.offBlack : COLORS.white }]}>
            {data.map((d) => (
                <WeatherInfoBit key={d.icon} iconName={d.icon} description={d.description} value={d.value} />
            ))}
        </View>
    )
}

const WeatherInfoBit = ({ iconName, value, description }: { iconName: string, value: string, description: string }) => {
    const isDarkState = useContext(IsDarkContext);
    return (
        <View style={styles.bit}>
            <Icon name={iconName}
                color={isDarkState?.isDark ? COLORS.socendryGradiant : COLORS.primaryGradiant}
                size={SIZES.iconSize} />
            <Text style={[styles.bitTxt, { color: isDarkState?.isDark ? COLORS.white : COLORS.black }]}>{value}</Text>
            <Text style={styles.bitDescription}>{description}</Text>
        </View>
    )
}

export default WeatherInfoSec

const styles = StyleSheet.create({
    bit: {
        alignItems: "center",
    },
    bitTxt: {
        ...FONTS.body3,
        fontWeight: "bold",
        marginTop: 0.5 * SIZES.margin2,
        marginBottom: 0.5 * SIZES.margin,
        textAlign: "center"
    },
    bitDescription: {
        color: COLORS.darkgray,
        ...FONTS.body5,
        textAlign: "center"
    },
    infoSec: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 1.5 * SIZES.padding2,
        paddingVertical: 1.8 * SIZES.padding2,
        alignSelf: "center",
        position: "absolute",
        bottom: "22%",
        borderRadius: SIZES.radius2,
        zIndex: 100,
        elevation: 5
    }

})