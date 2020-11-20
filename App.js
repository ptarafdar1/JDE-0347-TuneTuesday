import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { Header } from 'react-native-elements';
import logo from './assets/favicon.png';
import { Ionicons } from '@expo/vector-icons';
//const backArrow = <Ionicons name="md-arrow-back" size={30} color="#fff"/>;

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={<Ionicons name="md-arrow-back" size={30} color="#fff"/>}
        centerComponent={{ text: 'Game Name', style: { color: '#fff', fontSize: 30 } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Text style =
      {{
        color: '#000',
        paddingTop: 40,
        paddingBottom: 80,
        fontSize: 40
      }}>Submit a Song!</Text>
      <StatusBar style="auto" />
    <TextInput
      style={{
      height: 40,
      width: 250,
      color: "#000",
      borderColor: '#000',
      borderWidth: 2,
      
    }}
    placeholder=" Paste Link Here"
    />
    <TextInput
      style={{
      height: 40,
      width: 250,
      color: "#000",
      borderColor: '#000',
      borderWidth: 2,
      
    }}
    placeholder=" Song Name"
    />
    <TextInput
      style={{
      height: 40,
      width: 250,
      color: "#000",
      borderColor: '#000',
      borderWidth: 2,
      
    }}
    placeholder=" Artist Name"
    />
    
    <Button
      onPress={() => Alert.alert("Submitted Song")}
      title= "Submit"
      color = "#000000"
      />
    <Text style =
      {{
        color: '#000',
        paddingTop: 40,
        paddingBottom: 10,
        fontSize: 20
      }}>Search on YouTube</Text>
    <Text style =
      {{
        color: '#000',
        paddingTop: 10,
        paddingBottom: 80,
        fontSize: 20
      }}>Search on Spotify</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});
