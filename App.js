import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Screens
import SongListScreen from './src/screens/SongListScreen';
import PlayerScreen from './src/screens/PlayerScreen';

export default function App() {
    const [selectedSong, setSelectedSong] = useState(null);

    const handleSelectSong = (song) => {
        setSelectedSong(song);
    };

    const handleBack = () => {
        setSelectedSong(null);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            {selectedSong ? (
                <PlayerScreen
                    songData={selectedSong}
                    onBack={handleBack}
                />
            ) : (
                <SongListScreen
                    onSelect={handleSelectSong}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
});
