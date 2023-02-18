import { StyleSheet, Text, View, TouchableOpacity, ListRenderItem, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import { IsDarkContext } from '../../../contexts/isDarkContext'
import Icon from 'react-native-vector-icons/Entypo'
import { WeatherData } from '../../../types/weatherData'
import HourlyWeatherCard from '../hourlyWeatherCard'

type props = {
    hourluWeatherData: WeatherData[],
    currentTime: string
}
const HourlyWeatherList = ({ hourluWeatherData, currentTime }: props) => {
    const isDarkState = useContext(IsDarkContext);
    const renderWeatherCards: ListRenderItem<WeatherData> = ({ item }) => {
        return <HourlyWeatherCard
            weatherData={item}
            currentTime={currentTime.split(" ")[1].split(":")[0] == item.timeString!.split(" ")[1].split(":")[0]} />
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={[styles.txt, { color: isDarkState?.isDark ? COLORS.white : COLORS.black }]}>Today</Text>
                <TouchableOpacity style={[styles.btn]}>
                    <Text style={[styles.txt, { color: isDarkState?.isDark ? COLORS.white : COLORS.black }]}>
                        Next 7 Days
                    </Text>
                    <Icon name='chevron-right' size={SIZES.iconSize} color={isDarkState?.isDark ? COLORS.white : COLORS.black} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginTop: 0.5 * SIZES.margin }}>
                <FlatList
                    data={hourluWeatherData}
                    renderItem={renderWeatherCards}
                    keyExtractor={(item) => item.timeString!}
                    horizontal
                    showsHorizontalScrollIndicator={false} />
            </View>
        </View>
    )
}

export default HourlyWeatherList

const styles = StyleSheet.create({
    container: {
        marginTop: "16%",
        width: "100%",
        paddingHorizontal: 1.5 * SIZES.padding,
        flex: 1
    },
    row: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    txt: {
        ...FONTS.body2,
        fontWeight: "900"
    },
    btn: {
        flexDirection: "row",
        alignItems: "center"
    }
})