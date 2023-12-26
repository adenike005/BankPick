import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appearance, useColorScheme } from 'react-native-appearance';

const App = () => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? '#121212' : '#FFFFFF',
    },
    text: {
      color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
      fontSize: 18,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Dark Mode!</Text>
    </View>
  );
};

export default App;
