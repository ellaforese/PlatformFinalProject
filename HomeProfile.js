import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

export default function HomeProfile({navigation}) {
  const [songs, setSongs] = useState([]);
 
  const addSong = (song) => {
    setSongs([...songs, song]);
  //how to get it so that upon pressing submit the "add a song" placeholdrer will come back
  
  };

  const renderItem = ({ item }) => (
    <Text style={styles.listItem}>{item}</Text>
  );

   
  return ( 
    <View style={styles.container}>
      <ScrollView>
    <TextInput
     style={[styles.nameInput, {textAlign: 'center'}]} 
      placeholder="Your name"
      maxLength={50}
      //add wrap around capability here
    />

    <Text style={[styles.words, {textAlign: 'center'}]} > Profile Photo: </Text>
    {/* add user ability to take photo here */}
  
   
    <TouchableOpacity onPress={() => navigation.navigate('Find Songs')}>
        <Text style={[styles.title, {textAlign: 'center'}]}>Find Songs</Text>
      </TouchableOpacity>

    <Text style={[styles.words, {textAlign: 'left'}]}> Songs You Liked:</Text>
    <View style={styles.container}>
          <View style={styles.container}>
            <TextInput
              style={[styles.listInput, {textAlign: 'left'}]} 
              placeholder="Add a song"
              maxLength={50}
              onSubmitEditing={(event) => addSong(event.nativeEvent.text)}
            />
             <FlatList
            data={songs}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          </View>
        </View>
      </ScrollView>
    </View>  
  
  );

  }
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      paddingLeft: 5,
      paddingRight: 5,
      paddingBottom: 50,
      backgroundColor: 'lightblue'
    },
    title: {
      fontSize: 40,
      fontFamily: 'Georgia-Bold',
    },
    words:
    {  
      fontSize: 20,
      fontFamily: 'Georgia-Bold',
    },
    nameInput:
    {
      fontSize: 40,
      fontFamily: 'Georgia-Bold',

    },
    listInput:
    {
      fontSize: 20,
      fontFamily: 'Georgia-Bold',
    },

  });



