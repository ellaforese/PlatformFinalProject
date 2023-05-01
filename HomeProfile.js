import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { PhotoTaker } from './PhotoTaker'; // import the PhotoTaker component
import * as ImagePicker from 'expo-image-picker';


export default function HomeProfile({ navigation }) {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [imageUri, setImageUri] = useState(null);


  const addSong = (song) => {
    setSongs([...songs, song]);

  };

  const addArtist = (artist) => {
    setArtists([...artists, artist]);

  };

  const renderSongItem = ({ item }) => (
    <Text style={styles.listItem}>{item}</Text>

  );

  const renderArtistItem = ({ item }) => (
    <Text style={styles.listItem}>{item}</Text>
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.uri);
    }
  };


  return (

    <View style={styles.container}>
      <ScrollView>
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
          style={[styles.name, { textAlign: 'center' }]}
          placeholder="Your Name"
          maxLength={50}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Profile Photo')}>
          <Text style={[styles.words, { textAlign: 'center' }]}>Take a Profile Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={pickImage}>
          <Text style={[styles.words, { textAlign: 'center' }]}>Upload Picture!</Text>
        </TouchableOpacity>

        <View style={styles.imgContainer}>
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.imgStyle} />
          )}
        </View>


        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Text style={[styles.title, { textAlign: 'center' }]}>Search For Songs</Text>
        </TouchableOpacity>

        <View style={styles.listContainer1}>

          <Text style={[styles.words, { textAlign: 'left' }]}> Songs You Liked:</Text>
          <View style={styles.text}>
            <TextInput
              style={[styles.words, { textAlign: 'left' }]}
              placeholder="Add a song"
              maxLength={50}
              onSubmitEditing={(event) => addSong(event.nativeEvent.text)}
            />
            {songs.map((song, index) => (
              <Text style={styles.listItem} key={index}>
                {song}
              </Text>
            ))}

          </View>
        </View>

        <View style={styles.listContainer2}>
          <Text style={[styles.words, { textAlign: 'left' }]}> Artists You Liked:</Text>
          <View style={styles.text}>
            <TextInput
              style={[styles.words, { textAlign: 'left' }]}
              placeholder="Add an artist"
              maxLength={50}
              onSubmitEditing={(event) => addArtist(event.nativeEvent.text)}
            />

            {artists.map((artist, index) => (
              <Text style={styles.listItem} key={index}>
                {artist}
              </Text>
            ))}

            {/* i origionally used a flatlist, but had issues with the styling so switched to using a map */}
            {/* <View>
              <FlatList
                data={artists}
                renderItem={renderArtistItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View> */}
          </View>

        </View>
      </ScrollView>

    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
  },
  text: {
    paddingLeft: 10,
  },
  name:
  {
    fontSize: 40,
    //fontFamily: 'Georgia-Bold',

  },
  title: {
    fontSize: 30,
    //fontFamily: 'Georgia-Bold',
  },
  words:
  {
    marginTop: 2.5,
    marginBottom: 2.5,
    fontSize: 20,
    //fontFamily: 'Georgia-Bold',
  },

  imgContainer:
  {
    flex: 1,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    height: 220,
    width: 220,
    alignSelf: 'center',
  },
  imgStyle:
  {
    height: 200,
    width: 200,
    alignSelf: 'center',

  },

  headphoneContainer: {
    flexDirection: 'row',
  },

  listContainer1:
  {
    flexDirection: 'column',
    flex: 1,
    borderTopWidth: 5,
    borderBottomWidth: 2.5,
  },

  listContainer2:
  {
    flexDirection: 'column',
    flex: 1,
    borderBottomWidth: 5,
    borderTopWidth: 2.5,
  },

});

