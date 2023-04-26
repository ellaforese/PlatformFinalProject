import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
        <Text style = {styles.words}> Song: </Text>
        <Text style = {styles.words}> Artist: </Text>
        <Text style = {styles.words}> Lyrics: </Text>
    </View> 

  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',

      //alignItems: 'center',
     // justifyContent: 'center',
    },

    words:{
      paddingLeft: 5,
      paddingRight: 5,
      paddingBottom: 2,
      paddingTop: 2,
      fontSize: 25,
      fontFamily: 'Georgia-Bold',
    }
   
  });
