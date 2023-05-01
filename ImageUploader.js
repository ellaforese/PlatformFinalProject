import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, AsyncStorage, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        getProfilePic();
    }, []);

    const getProfilePic = async () => {
        try {
            const value = await AsyncStorage.getItem('profilePic');
            if (value !== null) {
                setProfilePic(JSON.parse(value));
            }
        } catch (error) {
            // handle error
        }
    };

    const saveProfilePic = async (source) => {
        try {
            await AsyncStorage.setItem('profilePic', JSON.stringify(source));
        } catch (error) {
            // handle error
        }
    };

    const openImagePicker = async () => {
        let permissionResult;
        if (Platform.OS === 'ios') {
            permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        }
        if (Platform.OS === 'android') {
            permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        }
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll or camera is required!');
            return;
        }
        const pickerResult = await ImagePicker.launchImageLibraryAsync({ allowsEditing: true, aspect: [1, 1] });
        if (!pickerResult.cancelled) {
            const source = { uri: pickerResult.uri };
            setProfilePic(source);
            saveProfilePic(source);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={openImagePicker}>
                {profilePic ? (
                    <Image source={profilePic} style={{ width: 200, height: 200, borderRadius: 100}} />
                ) : (
                    <View style={{ width: 200, height: 200, borderRadius: 100, backgroundColor: 'gray' }} />
                )}
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;
