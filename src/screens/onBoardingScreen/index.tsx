import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnBoardingList from '../../components/onBoardingSec/onBoardingList'

const OnBoardingScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <OnBoardingList />
        </View>
    )
}

export default OnBoardingScreen

const styles = StyleSheet.create({})