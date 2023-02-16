import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { OnBoardingItem } from '../../../types/onboardingItem'
import { COLORS, FONTS, SIZES } from '../../../constants'
import { IsDarkContext } from '../../../contexts/isDarkContext'
import LinearGradient from 'react-native-linear-gradient'

type props = {
    item: OnBoardingItem,
    isLast: boolean
}
const OnBoardingItemComponent = ({ isLast, item }: props) => {
    const isDarkState = useContext(IsDarkContext);
    return (
        <View style={[styles.container, { backgroundColor: isDarkState?.isDark ? COLORS.black : COLORS.white }]}>
            <Image
                source={item.img}
                style={styles.img} />
            <View style={styles.txtContainer}>
                <Text style={[styles.title]}>{item.title}</Text>
                <Text style={[styles.description, { color: isDarkState?.isDark ? COLORS.white : COLORS.black }]}>{item.description}</Text>
                {isLast && <LinearGradient colors={[COLORS.primaryGradiant, COLORS.socendryGradiant, COLORS.thirdGradiant]} style={styles.btnGradiant}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.description}>Got it</Text>
                    </TouchableOpacity>
                </LinearGradient>}
            </View>
        </View>
    )
}

export default OnBoardingItemComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SIZES.fullScreenWidth,
        padding: SIZES.padding2,
        alignItems: "center"
    },
    img: {
        flex: 0.6,
        resizeMode: "contain",
        marginVertical: SIZES.margin
    },
    txtContainer: {
        flex: 0.4,
        alignItems: "center",
        width: SIZES.fullWidth,
        marginVertical: SIZES.margin,
        justifyContent: "center"
    },
    title: {
        color: COLORS.primaryGradiant,
        textAlign: "center",
        ...FONTS.h2,
        fontWeight: "bold",
        marginVertical: SIZES.margin
    },
    description: {
        ...FONTS.body3,
        textAlign: "center",
        marginVertical: SIZES.margin
    },
    btnGradiant: {
        width: "50%",
        borderRadius: SIZES.btnRadius,
        marginVertical: SIZES.margin
    },
    btn: {
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding2,
        justifyContent: "center",
        alignItems: "center"
    }
})