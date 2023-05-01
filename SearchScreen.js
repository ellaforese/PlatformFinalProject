import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image , ScrollView} from 'react-native';
import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function SearchScreen({ navigation }) {
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function getTracks() {
    const options = {
      method: 'GET',
      url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`,
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '6e9de6409emsh941e7b01617e467p1b5ee3jsnbd6ad0832559',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setTracks(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearch() {
    getTracks();
  }

  function handleTrackPress(track) {
    navigation.navigate('Play Song', { track });
  }

  return (
    
    <View style={styles.container}>
    
    <View style={styles.headphoneContainer}>
          <Image source={require('./headphones.jpeg')}
            style={{ width: 98, height: 90 }}
          />
          <Image source={require('./headphones.jpeg')}
            style={{ width: 98, height: 90 }}
          />
          <Image source={require('./headphones.jpeg')}
            style={{ width: 98, height: 90 }}
          />
          <Image source={require('./headphones.jpeg')}
            style={{ width: 98, height: 90 }}
          />
        </View>
      
      <TextInput 
        style={styles.searchInput} 
        onChangeText={setSearchTerm}
        value={searchTerm}
        placeholder="Enter a song title"
      />
      <Button 
        title="Search"
        onPress={handleSearch}
      />
      <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Tracks:</Text>
      {tracks.map((track) => (
        <Text 
          key={track.id} 
          style={styles.track}
          onPress={() => handleTrackPress(track)}
        >
          {track.title_short} - {track.artist.name}
        </Text>
      ))}
        </ScrollView>
     
    </View>
  );
}



const styles = StyleSheet.create({
  headphoneContainer: {
    flexDirection: 'row',
  },

  container: {
    flex: 1,
    backgroundColor: 'coral',
    alignItems: 'center',
    //justifyContent: 'center',
  },

  searchInput: {
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth:  5,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  track: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
    textDecorationLine: 'underline',
  },
});