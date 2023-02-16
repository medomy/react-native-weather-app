import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OnBoardingItem } from '../../../types/onboardingItem'
import { COLORS, SIZES } from '../../../constants'
import LinearGradient from 'react-native-linear-gradient'

type props = {
    data: OnBoardingItem[],
    selectedIndex: number,
    scrollX: Animated.Value
}
const Pagination = ({ data, selectedIndex, scrollX }: props) => {

    function mapDots(item: OnBoardingItem, index: number): JSX.Element {
        // inputRange is the beginning I am giving to scroll x values (means that these ranges are when scrolled)
        const inputRange = [(index - 1) * SIZES.fullScreenWidth, index * SIZES.fullScreenWidth, (index + 1) * SIZES.fullScreenWidth];
        // determine the dot width based on scrollX
        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: "clamp"
        })
        // determine opacity based on scrollX
        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp"
        })
        return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={item.title}></Animated.View>
        
    }
    return (
        <View style={styles.row}>
            {data.map((item, index) => mapDots(item, index))}
        </View>
    )
}

export default Pagination

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: SIZES.fullWidth,
        flex: 1
    },
    dot: {
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0.5 * SIZES.margin,
        backgroundColor : COLORS.primaryGradiant
    }
})