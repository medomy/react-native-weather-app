import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import LinearGradient from 'react-native-linear-gradient'
import { WeatherData } from '../../../types/weatherData'
import { formatDateBasic } from '../../../utils/formatDate'
import Icon from 'react-native-vector-icons/FontAwesome'
type props = {
    weatherData: WeatherData
}
const WeatherCardCurrent = ({ weatherData }: props) => {
    return (
        <LinearGradient colors={[COLORS.primaryGradiant, COLORS.socendryGradiant, COLORS.thirdGradiant]} style={styles.cardContainer}>
            <View style={styles.dateBox}>
                <Text style={styles.dateTxt}>{formatDateBasic(weatherData.time_epoch)}</Text>
            </View>
            <Text style={styles.conditionTxt}>{weatherData.condition.text}</Text>
            <View style={styles.degreeBox}>
                <Text style={styles.degree}>{weatherData.temp_C}</Text>
                <Icon style={styles.iconDegree} name='circle-o' color={COLORS.white} size={0.6 *SIZES.iconSize} />
            </View>
            <Image
                source={{ uri: weatherData.condition.icon }}
                style={styles.weatherIcon} />
        </LinearGradient>
    )
}

export default WeatherCardCurrent

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: SIZES.bigRadius,
        //justifyContent: "center",
        alignItems: "center",
        width: 250,
        height: 250,
        position: "relative",
        marginTop: 3 * SIZES.margin,
        alignSelf: "center"
    },
    conditionTxt: {
        marginVertical: 3 * SIZES.margin,
        color: COLORS.white,
        ...FONTS.h4,
    },
    degreeBox: {
        position: "relative",
        flexDirection: "row",
        marginVertical : 1*SIZES.margin
    },
    degree: {
        ...FONTS.largeTitle,
        fontWeight: "bold",
        lineHeight : 100,
        fontSize : 100
    },
    iconDegree: {
        position: "absolute",
        top: 0,
        right: -15
    },
    dateBox: {
        position: "absolute",
        top: -15,
        paddingVertical: 10,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    dateTxt: {
        color: COLORS.black,
        ...FONTS.body3
    },
    weatherIcon: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        position: "absolute",
        bottom: -75,
    }
})