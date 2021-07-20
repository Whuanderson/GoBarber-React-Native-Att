import 'react-native-gesture-handler';

import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { AppProvider } from './src/hooks/';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';

import React from "react";
import { View, StatusBar } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './src/routes';

import { theme } from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" translucent backgroundColor={theme.colors.background_primary} />
        <View style={{ flex: 1, backgroundColor: theme.colors.background_primary }} >
          <AppProvider>
            <AuthRoutes />
          </AppProvider>
        </View>
      </NavigationContainer>
    </ThemeProvider>
  )
};

