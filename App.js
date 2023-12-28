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



// import React, {useState} from 'react';
// import { View, Text, StyleSheet, Appearance } from 'react-native';

// const App = () => {
//   // const colorScheme = useColorScheme();
//   // console.log('====================================');
//   // console.log(colorScheme);
//   // console.log('====================================');

//   const [theme, SetTheme] = useState(Appearance.getColorScheme());
//   Appearance.addChangeListener((Scheme) =>{
//     console.log(Scheme);
//   })

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       // backgroundColor: colorScheme === 'dark' ? '#121212' : '#FFFFFF',
//     },
//     // text: {
//     //   // color: colorScheme === 'dark' ? '#FFFFFF' : 'red',
//     // },
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         This is a text componentssss in mode.
//       </Text>
//     </View>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Appearance } from 'react-native';

const App = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const appearanceListener = Appearance.addChangeListener(({ colorScheme }) => {
      console.log('Device appearance changed to:', colorScheme);
      setTheme(colorScheme);
    });

    return () => {
      appearanceListener.remove();
    };
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#121212' : '#FFFFFF',
    },
    text: {
      color: theme === 'dark' ? '#FFFFFF' : 'red',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is a text component in {theme} mode.
      </Text>
    </View>
  );
};

export default App;





