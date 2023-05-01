import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';


export default function OpeningScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('./music3.jpeg')}
        style={{ width: 400, height: 800 }}
      >
      < TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.words}>
          <Text>Click anywhere to get started</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  words: {
    fontSize: 80,
    alignItems: 'center',
    justifyContent: 'center',
    height: 1300,

  },

});