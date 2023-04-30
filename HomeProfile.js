// import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
// import { useState } from 'react';
// import { PhotoTaker } from './PhotoTaker'; // import the PhotoTaker component
// import * as ImagePicker from 'expo-image-picker';

// export default function HomeProfile({ navigation }) {
//   const [songs, setSongs] = useState([]);
//   const [imageUri, setImageUri] = useState(null);

//   const addSong = (song) => {
//     setSongs([...songs, song]);
//   };

//   const renderItem = ({ item }) => (
//     <Text style={styles.listItem}>{item}</Text>
//   );

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setImageUri(result.uri);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <TextInput
//           style={[styles.nameInput, { textAlign: 'center' }]}
//           placeholder="Your name"
//           maxLength={50}
//         />

//         <TouchableOpacity onPress={() => navigation.navigate('Profile Photo')}>
//           <Text style={[styles.title, { textAlign: 'center' }]}>Take a Profile Picture</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={pickImage}>
//           <Text style={[styles.title, { textAlign: 'center' }]}>Upload Picture!</Text>
//         </TouchableOpacity>

//         {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}

//         <TouchableOpacity onPress={() => navigation.navigate('Find Songs')}>
//           <Text style={[styles.title, { textAlign: 'center' }]}>Find Songs</Text>
//         </TouchableOpacity>

//         <Text style={[styles.words, { textAlign: 'left' }]}> Songs You Liked:</Text>
//         <View style={styles.container}>
//           <View style={styles.container}>
//             <TextInput
//               style={[styles.listInput, { textAlign: 'left' }]}
//               placeholder="Add a song"
//               maxLength={50}
//               onSubmitEditing={(event) => addSong(event.nativeEvent.text)}
//             />
//             <FlatList
//               data={songs}
//               renderItem={renderItem}
//               keyExtractor={(item, index) => index.toString()}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingLeft: 5,
//     paddingRight: 5,
//     paddingBottom: 50,
//     backgroundColor: 'lightblue'
//   },
//   title: {
//     fontSize: 40,
//     fontFamily: 'Georgia-Bold',
//   },
//   words:
//   {
//     fontSize: 20,
//     fontFamily: 'Georgia-Bold',
//   },
//   nameInput:
//   {
//     fontSize: 40,
//     fontFamily: 'Georgia-Bold',
//   },
//   listInput:
//   {
//     fontSize: 20,
//     fontFamily: 'Georgia-Bold',
//   },
// });





import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { PhotoTaker } from './PhotoTaker'; // import the PhotoTaker component
import * as ImagePicker from 'expo-image-picker';

// import AsyncStorage from '@react-native-async-storage/async-storage';



export default function HomeProfile({ navigation }) {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [imageUri, setImageUri] = useState(null);


  const addSong = (song) => {
    setSongs([...songs, song]);
    //how to get it so that upon pressing submit the "add a song" placeholdrer will come back

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

  // const songsList = songs.map((song, index) => renderSongItem(song, index));
  // const artistsList = artists.map((artist, index) => renderArtistItem(artist, index));
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
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
          style={[styles.title, { textAlign: 'center' }]}
          placeholder="Your Name"
          maxLength={50}
        //add wrap around capability here
        />

        <TouchableOpacity onPress={() => navigation.navigate('Profile Photo')}>
          <Text style={[styles.title, { textAlign: 'center' }]}>Take a Profile Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={pickImage}>
          <Text style={[styles.title, { textAlign: 'center' }]}>Upload Picture!</Text>
        </TouchableOpacity>

        {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Text style={[styles.title, { textAlign: 'center' }]}>Search</Text>
        </TouchableOpacity>

        <View style={styles.listContainer1}>
          <Text style={[styles.words, { textAlign: 'left' }]}> Songs You Liked:</Text>
          <View style={styles.text}>
            <TextInput
              style={[styles.words, { textAlign: 'left' }]}
              placeholder="Add a song"
              maxLength={50}
              onSubmitEditing={(event) => addSong(event.nativeEvent.text)}
            // setShowPlaceholder(false);
            />
            <View>
              <FlatList
                data={songs}
                renderItem={renderSongItem}
                keyExtractor={(item, index) => index.toString()}
              />

              {/* <ScrollView>
              {songsList}
            </ScrollView> */}

            </View>

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
            // setShowPlaceholder(false);
            />
            {/* <ScrollView>
              {artistsList}
            </ScrollView> */}

            <View>
              <FlatList
                data={artists}
                renderItem={renderArtistItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>

        </View>
      </ScrollView>

    </View>




  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingLeft: 5,
    // paddingRight: 5,

    paddingBottom: 50,
    backgroundColor: 'coral'
  },
  text: {
    paddingLeft: 10,

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

