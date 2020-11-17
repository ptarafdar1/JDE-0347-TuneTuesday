import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import favicon from './assets/favicon.png';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={favicon} style={{ width: 305, height: 300}}></Image>
      <Text style={{color:'#888', fontSize: 18}}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
