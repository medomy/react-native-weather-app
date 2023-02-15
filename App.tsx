/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation';
import { IsDarkContext } from './src/contexts/isDarkContext';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // context value
  const [isDark, setIsDark] = useState<boolean>(isDarkMode);

  return (
    <IsDarkContext.Provider value={{ isDark, setIsDark }}>
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    </IsDarkContext.Provider>
  );
}

export default App;
