import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';


export default function OpeningScreen({navigation}) {
    return (
    <View style={styles.container}>
        {/* <Image
        source={require('/Users/ellaforese/Desktop/CSC2053/PlatformFinalProjectMP3/mp3Player/music-notes-color.jpeg')
        }
        style={{ width: 400, height: 300 }}
        >
        </Image> */}

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={[styles.title, {textAlign: 'center'}]}>Begin Listening</Text>
      </TouchableOpacity>

      {/* <Image
        source={require('/Users/ellaforese/Desktop/CSC2053/PlatformFinalProjectMP3/mp3Player/music-notes-color.jpeg')
        }
        style={{ width: 400, height: 300 }}
        >
        </Image> */}

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
});