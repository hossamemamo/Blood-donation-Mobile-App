import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Home Screen!</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'green', // Add the background color here
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
  
  export default HomeScreen;
