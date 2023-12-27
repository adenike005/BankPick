// import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './Screen/Home';
// import Settings from './Screen/Settings';
// import React, {useState, useEffect} from 'react'
// import theme from './Theme/Theme';
// import themeContext from './Theme/ThemeContext';
// import { EventRegister } from 'react-native-event-listeners'
// import { StatusBar } from 'expo-status-bar';

// const Stack = createStackNavigator();






// export default function App() {
//   const [darkmode, setDarkMode] = useState(false);
//   useEffect(() =>{
//     const listeners = EventRegister.addEventListener("changeTheme", (data) => {
//       setDarkMode(data);
//       // console.log(data);
//     })
//     return () =>{
//       EventRegister.removeEventListener(listeners)
//     }
//   },[darkmode])
//   return (
//     <>
//       <themeContext.Provider value={darkmode === true ? theme.dark : theme.light}>
//       <NavigationContainer theme={darkmode === true ? DarkTheme : DefaultTheme}>
//       <Stack.Navigator >
//         <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     </themeContext.Provider>
//     </>
  
//   );
// }



import React from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { ThemeProvider } from './Theme/ThemeContext';
// import MainScreen from './MainScreen';
import Settings from './Screen/Settings';

const App = () => {
  const deviceColorScheme = useColorScheme(); // 'light', 'dark', or null

  return (
    <AppearanceProvider>
      <ThemeProvider>
        <Settings deviceColorScheme={deviceColorScheme} />
      </ThemeProvider>
    </AppearanceProvider>
  );
};

export default App;
