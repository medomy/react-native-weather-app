import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import { IsDarkContext } from '../../../contexts/isDarkContext'
import { ForeCast } from '../../../types/foreCast'
import { formatDateToDayShortcut } from '../../../utils/formatDate'

type props = {
    forcastDay: ForeCast
}
const ForecastRowSecCard = ({ forcastDay }: props) => {
    const isDarkState = useContext(IsDarkContext);
    return (
        <TouchableOpacity style={styles.row}>
            <Text style={[styles.txt, { color: isDarkState?.isDark ? COLORS.white : COLORS.darkgray }]}>{formatDateToDayShortcut(forcastDay.time_epoch)}</Text>
            <View style={styles.conditionRow}>
                <Image
                    source={{ uri: forcastDay.condition.icon }}
                    style={styles.conditionImg}
                />
                <Text style={[styles.txt, { color: COLORS.darkgray }]}>
                    {forcastDay.condition.text}
                </Text>
            </View>
            <Text style={[styles.txt, { color: isDarkState?.isDark ? COLORS.white : COLORS.darkgray }]}>
                {`${forcastDay.maxtemp_c}/${forcastDay.mintemp_c}`}
            </Text>
        </TouchableOpacity>
    )
}

export default ForecastRowSecCard

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        width: SIZES.fullWidth,
        paddingHorizontal: SIZES.padding2,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 2 * SIZES.padding,
        marginVertical: 0.5 * SIZES.margin
    },
    txt: {
        ...FONTS.body3,
    },
    conditionRow: {
        flexDirection: "row"
    },
    conditionImg: {
        width: 0.75 * SIZES.iconSize,
        height: 0.75 * SIZES.iconSize,
        resizeMode: "contain",
        marginHorizontal: 0.25 * SIZES.margin
    }
})