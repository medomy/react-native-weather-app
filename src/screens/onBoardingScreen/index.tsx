import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import OnBoardingList from '../../components/onBoardingSec/onBoardingList'
import { IsDarkContext } from '../../contexts/isDarkContext'
import { COLORS } from '../../constants'

const OnBoardingScreen = () => {
    const isDarkState = useContext(IsDarkContext);
    return (
        <View style={{ flex: 1, backgroundColor: isDarkState?.isDark ? COLORS.black : COLORS.white }}>
            <OnBoardingList />
        </View>
    )
}

export default OnBoardingScreen

const styles = StyleSheet.create({})