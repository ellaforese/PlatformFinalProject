// import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';


// export default function OpeningScreen({navigation}) {
//     return (
//     <View style={styles.container}>
//         {/* <Image
//         source={require('/Users/ellaforese/Desktop/CSC2053/PlatformFinalProjectMP3/mp3Player/music-notes-color.jpeg')
//         }
//         style={{ width: 400, height: 300 }}
//         >
//         </Image> */}

//         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//         <Text style={[styles.title, {textAlign: 'center'}]}>Begin Listening</Text>
//       </TouchableOpacity>

//       {/* <Image
//         source={require('/Users/ellaforese/Desktop/CSC2053/PlatformFinalProjectMP3/mp3Player/music-notes-color.jpeg')
//         }
//         style={{ width: 400, height: 300 }}
//         >
//         </Image> */}

//     </View>
//     );

// }

// const styles = StyleSheet.create({
//     container:{
//       flex: 1,
//       paddingLeft: 5,
//       paddingRight: 5,
//       paddingBottom: 50,
//       backgroundColor: 'lightblue'
//     },
//     title: {
//       fontSize: 40,
//       fontFamily: 'Georgia-Bold',
//     },
// });


import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';


export default function OpeningScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require('./music1.png')}
        style={{ width: 420, height: 200 }}
        >
        </Image> */}


      <ImageBackground
        source={require('./music3.jpeg')}
        style={{ width: 400, height: 800 }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.words}>
          <Text style={styles.text}>Click anywhere to get started</Text>
        </TouchableOpacity>

      </ImageBackground>



      {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={[styles.title, {textAlign: 'center'}]}>Begin Listening</Text>
      </TouchableOpacity> */}

      {/* <Image
        source={require('./music2.jpeg')}
        style={{ width: 400, height: 450 }}
        >
        </Image> */}

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingLeft: 0,
    // paddingRight: 5,

    // backgroundColor: 'lightblue'
  },
  words: {
    fontSize: 80,
    alignItems: 'center',
    justifyContent: 'center',
    height: 1300,

  },


});