import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { IsDarkContext } from '../../../contexts/isDarkContext'
import { useNavigation } from '@react-navigation/native'
const ForecastHeader = () => {
    const isDarkState = useContext(IsDarkContext);
    const navigation = useNavigation();
    return (
        <View style={[styles.header, { backgroundColor: isDarkState?.isDark ? COLORS.black : COLORS.white }]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='arrow-left' size={SIZES.iconSize2} color={isDarkState?.isDark ? COLORS.white : COLORS.black} />
            </TouchableOpacity>
            <View style={styles.rest}>
                <Text style={[styles.txt, { color: isDarkState?.isDark ? COLORS.white : COLORS.black }]}>Next 7 Days</Text>
            </View>
        </View>
    )
}

export default ForecastHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        width: SIZES.fullWidth,
        paddingHorizontal: 2 * SIZES.padding2,
        paddingVertical: 1 * SIZES.padding2
    },
    txt: {
        ...FONTS.h4,
        fontWeight: "bold"
    },
    rest: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})