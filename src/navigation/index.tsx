import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DarkTheme, DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COLORS } from '../constants';
import OnBoardingScreen from '../screens/onBoardingScreen';
import HomeScreen from '../screens/home';

const StackNavigator = createNativeStackNavigator();
const Navigation = () => {
  const defaultTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.white,
      text: COLORS.black
    }
  }
  const darkTheme: Theme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: COLORS.black,
      text: COLORS.white
    }
  }
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName='OnBoarding' screenOptions={({ navigation }) => {
        return {
          headerShown: false
        }
      }}>
        <StackNavigator.Screen name='OnBoarding' component={OnBoardingScreen} />
        <StackNavigator.Screen name='Home' component={HomeScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})