import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import { IsDarkContext } from '../../../contexts/isDarkContext'
import Icon from 'react-native-vector-icons/Entypo'
const HourlyWeatherList = () => {
    const isDarkState = useContext(IsDarkContext);
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
        </View>
    )
}

export default HourlyWeatherList

const styles = StyleSheet.create({
    container: {
        marginTop: "16%",
        width: "100%",
        paddingHorizontal: 1.5 * SIZES.padding
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