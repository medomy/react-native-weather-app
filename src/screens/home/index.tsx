import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import HomeHeader from '../../components/HomeSec/header'
import { IsDarkContext } from '../../contexts/isDarkContext'
import { COLORS } from '../../constants'

const HomeScreen = () => {
    const isDarkState = useContext(IsDarkContext)
    return (
        <View style={{ flex: 1, backgroundColor: isDarkState?.isDark ? COLORS.black : COLORS.white }}>
            <HomeHeader />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})