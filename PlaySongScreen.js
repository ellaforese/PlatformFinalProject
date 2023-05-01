import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image} from 'react-native';
import { Audio } from 'expo-av';


export default function PlaySongScreen({ route }) {
    const { track } = route.params;
    const [sound, setSound] = useState();
    
  
    async function loadSound() {
       
        const { sound } = await Audio.Sound.createAsync({ uri: track.preview });
       setSound(sound);
          }
    async function unloadSound() {
      await sound.unloadAsync();
      setSound(null);
    }
  
    async function playSound() {
      await sound.playAsync();
      
    }
  
    async function pauseSound() {
      await sound.pauseAsync();
    
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
      

        <Text style={styles.title}>{track.title} - {track.artist.name}</Text>
        <Button title="Load Sound" onPress={loadSound} />
        <Button title="Unload Sound" onPress={unloadSound} disabled={!sound} />
        <Button title="Play" onPress={playSound} disabled={!sound} />
        <Image source={require('./playbutton.png')}
            style={{ width: 40, height: 40 }}
          />
        <Button title="Pause" onPress={pauseSound} disabled={!sound} />
        <Image source={require('./pausebutton.png')}
            style={{ width: 40, height: 40 }}
          />

      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'coral',
      alignItems: 'center',
    },
    headphoneContainer: {
      flexDirection: 'row',
    },
    
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
    
   
  });