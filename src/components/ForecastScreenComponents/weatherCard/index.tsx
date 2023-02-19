import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import LinearGradient from 'react-native-linear-gradient'
import { ForeCast } from '../../../types/foreCast'

type props = {
    forecastDay: ForeCast
}
const ForecastWeatherCard = ({ forecastDay }: props) => {
    return (
        <LinearGradient style={styles.card}
            colors={[COLORS.primaryGradiant, COLORS.socendryGradiant, COLORS.thirdGradiant]}>
            <Image
                source={{ uri: forecastDay.condition.icon }}
                style={styles.icon} />
            <View style={styles.descriptionBox}>
                <Text style={styles.dayTxt}>Tomorrow</Text>
                <View style={styles.degRow}>
                    <Text style={styles.maxDeg}>{forecastDay.maxtemp_c}</Text>
                    <Text style={styles.minDeg}>{`/${forecastDay.mintemp_c}`}</Text>
                </View>
                <Text style={styles.descriptionTxt}>{forecastDay.condition.text}</Text>
            </View>
        </LinearGradient>
    )
}

export default ForecastWeatherCard

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 2 * SIZES.padding2,
        width: "90%",
        borderRadius: SIZES.radius,
        paddingHorizontal: SIZES.padding2,
        paddingVertical:  SIZES.padding2,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        marginTop: SIZES.margin2
    },
    icon: {
        resizeMode: "cover",
        width: "30%",
        height: 60,
        marginRight: SIZES.margin
    },
    descriptionBox: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    dayTxt: {
        ...FONTS.h2,
        color: COLORS.white,
        fontWeight: "800"
    },
    degRow: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginVertical: SIZES.margin
    },
    maxDeg: {
        ...FONTS.h1,
        color: COLORS.white,
        fontWeight: "800"
    },
    minDeg: {
        ...FONTS.h4,
        color: COLORS.white,
        fontWeight: "600"
    },
    descriptionTxt: {
        ...FONTS.body2,
        fontWeight: "400",
        color: COLORS.white,
    }
})