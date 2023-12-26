import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import ThemeSwitcher from './Screen/ThemeSwitcher';
// import { createStackNavigator } from '@react-navigation/stack'


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>{/* content */}
    
    </NavigationContainer>
  );
}