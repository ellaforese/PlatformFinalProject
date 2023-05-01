import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpeningScreen from './OpeningScreen';
import HomeProfile from './HomeProfile';
import SearchScreen from './SearchScreen';
import PlaySongScreen from './PlaySongScreen';
import PhotoTaker from './PhotoTaker';
import ProfileScreen from './ImageUploader';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OpeningScreen'>
        <Stack.Screen name='Welcome' component={OpeningScreen} />
        <Stack.Screen name='Home' component={HomeProfile} />
        <Stack.Screen name='Profile Photo' component={PhotoTaker} />
        <Stack.Screen name='Upload Picture' component={ProfileScreen} />
        <Stack.Screen name='Search' component={SearchScreen} />
        <Stack.Screen name='Play Song' component={PlaySongScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

