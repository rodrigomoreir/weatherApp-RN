import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import {
  StatusBar,
  SafeAreaView
} from 'react-native';
import { Routes } from './src/routes';
import { darkTheme, defaultTheme } from './src/global/styles/theme';

const App = () => {
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <ThemeProvider theme={scheme === 'dark' ? darkTheme : defaultTheme}>
        <NavigationContainer>
          <StatusBar barStyle={'dark-content'} />
          <SafeAreaView style={{ flex: 1 }}>
            <Routes />
          </SafeAreaView>
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
  );
};

export default App;
