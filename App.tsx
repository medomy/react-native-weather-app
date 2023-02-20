/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './src/navigation';
import { IsDarkContext } from './src/contexts/isDarkContext';
import SplashScreen from 'react-native-splash-screen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // context value
  const [isDark, setIsDark] = useState<boolean>(isDarkMode);

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <IsDarkContext.Provider value={{ isDark, setIsDark }}>
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    </IsDarkContext.Provider>
  );
}

export default App;
