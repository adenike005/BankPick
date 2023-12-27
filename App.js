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
import { View, Text, useColorScheme, StyleSheet } from 'react-native';

const App = () => {
  const colorScheme = useColorScheme();
  console.log('====================================');
  console.log(colorScheme);
  console.log('====================================');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? '#121212' : '#FFFFFF',
    },
    text: {
      color: colorScheme === 'dark' ? '#FFFFFF' : 'red',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is a text component in {colorScheme} mode.
      </Text>
    </View>
  );
};

export default App;

