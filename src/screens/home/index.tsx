import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import HomeHeader from '../../components/HomeSec/header'
import { IsDarkContext } from '../../contexts/isDarkContext'
import { COLORS } from '../../constants'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Position } from '../../types/Position'

type NavigationParams = {
    position: Position
}
const HomeScreen = () => {
    const isDarkState = useContext(IsDarkContext);
    const route = useRoute();
    const params = route.params as NavigationParams;
    useEffect(() => {
        console.log(params.position);
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: isDarkState?.isDark ? COLORS.black : COLORS.white }}>
            <HomeHeader />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})