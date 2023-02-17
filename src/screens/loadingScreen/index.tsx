import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { IsDarkContext } from '../../contexts/isDarkContext'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { getGeoLocation } from '../../services/geoLocation/geoLocation'
import { useGeoLocation } from '../../hooks/useGeoLocation'

const LoadingScreen = () => {
    const isDarkStyle = useContext(IsDarkContext)
    const position = useGeoLocation();
    const navigation = useNavigation();
    // const navigateToHome = async () => {
    //     try {
    //         const position = await getGeoLocation();
    //         navigation.navigate("Home" as never, {
    //             position
    //         } as never)
    //     } catch (e) {
    //         console.warn(e);
    //     }
    // }
    useEffect(()=>{
        if(position) navigation.navigate("Home" as never , {position} as never);
    },[position])
    return (
        <View style={[styles.page, { backgroundColor: isDarkStyle?.isDark ? COLORS.black : COLORS.white }]}>
            <ActivityIndicator color={COLORS.primaryGradiant} size={55} />
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})