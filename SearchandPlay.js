import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, Button, Linking } from 'react-native';
import axios from 'axios';
import { map } from 'lodash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Audio } from 'expo-av';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="PlaySong" component={PlaySongScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function SearchScreen({ navigation }) {
    const [tracks, setTracks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    async function getTracks() {
        const options = {
            method: 'GET',
            url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`,
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': '6e9de6409emsh941e7b01617e467p1b5ee3jsnbd6ad0832559',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setTracks(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    function handleSearch() {
        getTracks();
    }

    function handleTrackPress(track) {
        navigation.navigate('PlaySong', { track });
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                onChangeText={setSearchTerm}
                value={searchTerm}
                placeholder="Enter a song title"
            />
            <Button
                title="Search"
                onPress={handleSearch}
            />
            <Text style={styles.title}>Tracks:</Text>
            {tracks.map((track) => (
                <Text
                    key={track.id}
                    style={styles.track}
                    onPress={() => handleTrackPress(track)}
                >
                    {track.title_short} - {track.artist.name}
                </Text>
            ))}

        </View>
    );
}

function PlaySongScreen({ route }) {
    const { track } = route.params;
    const [sound, setSound] = useState();


    useEffect(() => {
        loadSound();
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    useEffect(() => {
        loadSound();
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);




    async function loadSound() {
        const { sound } = await Audio.Sound.createAsync({ uri: track.preview });
        setSound(sound);
    }

    async function unloadSound() {
        await sound.unloadAsync();
        setSound(null);
    }

    async function playSound() {
        await sound.playAsync();
    }

    async function pauseSound() {
        await sound.pauseAsync();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{track.title} - {track.artist.name}</Text>
            <Button title="Load Sound" onPress={loadSound} />
            <Button title="Unload Sound" onPress={unloadSound} disabled={!sound} />
            <Button title="Play" onPress={playSound} disabled={!sound} />
            <Button title="Pause" onPress={pauseSound} disabled={!sound} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInput: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    track: {
        fontSize: 16,
        marginBottom: 5,
        color: 'blue',
        textDecorationLine: 'underline',
    },
    playButton: {
        marginTop: 10,
        backgroundColor: '#1db954',
        borderRadius: 50,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    playButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    songTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    artistName: {
        fontSize: 18,
        marginBottom: 10,
    },
    albumImage: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
});