import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from 'react';
import SongDetails from './SongDetails';
import axios from "axios";

export default function App({navigation}) {
  // Call the function to retrieve the tracks
  const [listData, setListData] = useState([]);
  useEffect(() => {
    getTracks().then((tracks) => {
      setListData(tracks.map(track => ({ songName: track.title })));
    });
  }, []);


// const listofsngs =  [{songName: "never say never"}, {songName: "baby"}];
// const[listData, setListData] = useState(listofsngs);

  //getTracks();

  return (
    <View style={styles.container}>
          <FlatList
          data={listData}
          extraData={listData}
          renderItem={({item}) => 
            <View style={styles.border}>
             <TouchableOpacity onPress={() => navigation.navigate('Song Details')}> 
             <Text style={styles.itemName}>{item.songName}</Text>
             
             </TouchableOpacity>              
              </View>
          } />
      </View>
  );
}

// This part of the code is for retrieving tracks 
async function getTracks() {
  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/track/%7Bid%7D',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '6e9de6409emsh941e7b01617e467p1b5ee3jsnbd6ad0832559',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const tracks = response.data;
    console.log(response.data);
   
    return tracks;
  } 
 
  catch (error) {
    console.error(error);
    return [];
  }
}

// This part of the code is for lyrics

async function getLyrics(){
  const options = {
    method: 'GET',
    url: 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/',
    params: {id: '2396871'},
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '6e9de6409emsh941e7b01617e467p1b5ee3jsnbd6ad0832559',
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
   // justifyContent: 'center',
  },
  itemName:
  {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 2,
    paddingTop: 2,
    fontSize: 25,
    fontFamily: 'Georgia-Bold',
  },
  border: {
    borderWidth: 1,
    borderColor: "gray",
  },
});
























// import { useState } from 'react';
// import { View } from "react-native";
// import { Text  } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import axios from "axios";


// export default function SongsList() 
// {
//     getTracks();
//     const [song, setSong] = useState("Song name");
//     const [artist, setArtist] = useState("artist");
//     const [lyrics, setLyrics] = useState("lyrics");
    
        
//     function getSongsFromAPI() {
//         fetch("insert link here")
//     }
    
//     return (
//         <View style={styles.container}>
//           <Text>{setSong}</Text>
//           <Text>{setArtist}</Text>  
//           <Text>{setLyrics}</Text>  
                      
//           <Button title="Get Another Song" onPress={()=>getSongsFromAPI()} />
//         </View>
//         // <View style={styles.container}>
//         //     <FlatList
//         //     data={listData}
//         //     extraData={listData}
//         //     renderItem={({item}) => 
//         //       <View style={styles.border}>
//         //        <TouchableOpacity onPress={() => navigation.navigate('Song')}> 
//         //        <Text style={styles.sngName}>{item.SongName}</Text>
//         //        <Text style={styles.sngArtist}>{item.ArtistName}</Text>
//         //        <Text style={styles.sngLyrs}>{item.lyrics}</Text>
               
//         //        </TouchableOpacity>              
//         //         </View>
//         //     } />
//         // </View>
//     );
// }


// // This part of the code is for retrieving tracks 
// async function getTracks() {
//     const options = {
//       method: 'GET',
//       url: 'https://deezerdevs-deezer.p.rapidapi.com/track/%7Bid%7D',
//       headers: {
//         'content-type': 'application/octet-stream',
//         'X-RapidAPI-Key': '6e9de6409emsh941e7b01617e467p1b5ee3jsnbd6ad0832559',
//         'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//       }
//     };
  
//     try {
//       const response = await axios.request(options);
//       //check to see what  is printed here
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   // This part of the code is for lyrics
  
//   async function getLyrics(){
//     const options = {
//       method: 'GET',
//       url: 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/',
//       params: {id: '2396871'},
//       headers: {
//         'content-type': 'application/octet-stream',
//         'X-RapidAPI-Key': '6e9de6409emsh941e7b01617e467p1b5ee3jsnbd6ad0832559',
//         'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
//       }
//     };
    
//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });