import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import { IsDarkContext } from '../../../contexts/isDarkContext'
import { Switch } from 'react-native-switch'

const HomeHeader = () => {
    const isDarkState = useContext(IsDarkContext);
    const changeTheme = (value: boolean) => {
        isDarkState?.setIsDark(value);
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <DrawerIcon />
            </TouchableOpacity>
            <Text style={[styles.txt, { color: isDarkState?.isDark ? COLORS.white : COLORS.black }]}>City</Text>
            <Switch
                value={isDarkState?.isDark}
                onValueChange={changeTheme}
                backgroundInactive='#bebfc3'
                backgroundActive={COLORS.primaryGradiant}
                activeText=''
                inActiveText=''
                barHeight={25}
                renderInsideCircle={()=> (
                    <View style={styles.outerCircle}>
                        <View style={styles.innerCircle}></View>
                    </View>
                )}
            />
        </View>
    )
}

const DrawerIcon = () => {
    const isDarkState = useContext(IsDarkContext);
    return (
        <View style={styles.drawerIconWrapper}>
            <View style={[styles.dash, { width: 15, backgroundColor: isDarkState?.isDark ? COLORS.white : COLORS.black }]}></View>
            <View style={[styles.dash, { width: 25, backgroundColor: isDarkState?.isDark ? COLORS.white : COLORS.black }]}></View>
            <View style={[styles.dash, { width: 10, backgroundColor: isDarkState?.isDark ? COLORS.white : COLORS.black }]}></View>
        </View>
    )
}
export default HomeHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.fullWidth,
        paddingHorizontal:2* SIZES.padding2,
        paddingVertical:3* SIZES.padding2
    },
    txt: {
        ...FONTS.h4,
        fontWeight: "bold"
    },
    drawerIconWrapper: {
        justifyContent: "space-between",
        height: 22
    },
    dash: {
        height: 3,
        borderRadius: SIZES.radius2,
    },
    outerCircle : {
        width : SIZES.iconSize,
        height : SIZES.iconSize,
        borderRadius : 0.5 * SIZES.iconSize,
        backgroundColor : COLORS.offWhite,
        justifyContent : "center",
        alignItems : "center"
    },
    innerCircle:{
        backgroundColor : COLORS.primaryGradiant,
        width : 0.25 * SIZES.iconSize,
        height : 0.25 * SIZES.iconSize,
        borderRadius : 0.5* 0.25 * SIZES.iconSize
    }
})