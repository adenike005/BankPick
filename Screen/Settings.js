// import { View, Text, Switch } from 'react-native'
// import React, {useContext, useState} from 'react'
// import { EventRegister } from 'react-native-event-listeners'
// import theme from '../Theme/Theme'
// import themeContext from '../Theme/ThemeContext'

// const Settings = () => {
//     const theme = useContext(themeContext)
//     const [darkmode, setDarkMode] = useState(false);
//   return (
//     <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: theme.backgroundColor}}>
//       <Text style={{color:theme.color}}>Settings</Text>
//       <Switch
//       value={darkmode}
//       onValueChange={(value) =>{
//         setDarkMode(value);
//         EventRegister.emit("changeTheme", value)
//         }}/>
//     </View>
//   )
// }

// export default Settings




import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../Theme/ThemeContext';

const MainScreen = ({ deviceColorScheme }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#161622' : '#ffffff' }]}>
      <Text style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}>Your App Content Goes Here</Text>
      <Text style={{ color: deviceColorScheme === 'dark' ? '#ffffff' : '#000000' }}>
        Device Color Scheme: {deviceColorScheme}
      </Text>
      <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  toggleButtonText: {
    color: '#ffffff',
  },
});

export default MainScreen;
