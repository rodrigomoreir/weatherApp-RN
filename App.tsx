import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  SafeAreaView
} from 'react-native';
import { Routes } from './src/routes';

const App = () => {

  return (
    <NavigationContainer>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
