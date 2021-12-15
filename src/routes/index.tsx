import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { HomeScreen } from '../screens/HomeScreen';

export const Routes = () => {
  // const { Navigator, Screen } = createStackNavigator();
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};
