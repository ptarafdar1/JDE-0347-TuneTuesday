import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { Header } from 'react-native-elements';
import logo from './assets/favicon.png';
import { Ionicons } from '@expo/vector-icons';
//const backArrow = <Ionicons name="md-arrow-back" size={30} color="#fff"/>;

export default function App() {
  const [textInputLink, setTextInputLink] = useState('');
  const [textInputName, setTextInputName] = useState('');
  const [textInputArtist, setTextInputArtist] = useState('');

  const checkTextInput = () => {
    
    if (!textInputLink.trim()) {
      Alert.alert('All fields must be filled out','Please Enter a Link');
      return;
    }
    
    if (!textInputName.trim()) {
      Alert.alert('All fields must be filled out', 'Please Enter a Song Name');
      return;
    }
    if (!textInputArtist.trim()) {
      Alert.alert('All fields must be filled out', 'Please Enter an Artist');
      return;
    }
    //Checked Successfully
    
    Alert.alert('Success', 'Song Submitted');
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={<Ionicons name="md-arrow-back" size={30} color="#fff"/>}
        centerComponent={{ text: 'Pritish\'s Test Game', style: { color: '#fff', fontSize: 30 } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />

      <Text style =
      {{
        color: '#000',
        paddingTop: 40,
        paddingBottom: 80,
        fontSize: 40
      }}>Submit a Song!
      </Text>

      <StatusBar style="auto" />

      <TextInput
        onChangeText={
          (value) => setTextInputLink(value)
        }
        style={{
        height: 40,
        width: 250,
        color: "#000",
        borderColor: '#000',
        borderWidth: 2,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        marginBottom: 20,
      }}
      placeholder=" Paste Link Here"
      />

      <TextInput
        onChangeText={
          (value) => setTextInputName(value)
        }
        style={{
        height: 40,
        width: 250,
        color: "#000",
        borderColor: '#000',
        borderWidth: 2,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        marginBottom: 20,
      }}
      placeholder=" Song Name"
      />

      <TextInput
        onChangeText={
          (value) => setTextInputArtist(value)
        }
        style={{
          height: 40,
          width: 250,
          color: "#000",
          borderColor: '#000',
          borderWidth: 2,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 10,
          marginBottom: 20,
      }}
        placeholder=" Artist Name"
      />
    
      <Button
        onPress={() => checkTextInput()}
        title= "Submit"
        color = "#000000"
        />

      <Text style =
        {{
          color: '#000',
          paddingTop: 40,
          paddingBottom: 10,
          fontSize: 20
        }}>Search on YouTube
      </Text>
      
      <Text style =
        {{
          color: '#000',
          paddingTop: 10,
          paddingBottom: 80,
          fontSize: 20
        }}>Search on Spotify
      </Text>
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
