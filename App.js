import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpeningScreen from './OpeningScreen';
import HomeProfile from './HomeProfile';
import SongList from './SongList';
import SongDetails from './SongDetails';
import PhotoTaker from './PhotoTaker';
import ProfilePicture from './ImageUploader';
import ProfileScreen from './ImageUploader';

//had to install this: npm install react-native-image-picker

const Stack = createNativeStackNavigator();
//const Navigator = NavigationContainer();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OpeningScreen'>
        <Stack.Screen name='Welcome' component={OpeningScreen} />
        <Stack.Screen name='Home' component={HomeProfile} />
        <Stack.Screen name='Find Songs' component={SongList} />
        <Stack.Screen name="Song Details" component={SongDetails} />
        <Stack.Screen name='Profile Photo' component={PhotoTaker} />
        <Stack.Screen name='Upload Picture' component={ProfileScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
