import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { songs } from '../data/songs';

const SongListScreen = ({ onSelect }) => {
    const renderItem = ({ item, index }) => (
        <TouchableOpacity style={styles.card} onPress={() => onSelect(item)}>
            <View style={styles.rankContainer}>
                <Text style={styles.rank}>{index + 1}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.artist}>{item.artist}</Text>
                <Text style={styles.meta}>BPM: {item.bpm}</Text>
            </View>
            <View style={styles.arrowContainer}>
                <Text style={styles.arrow}>›</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Interactive Tab Coach</Text>
                <Text style={styles.headerSub}>Select a song to start learning</Text>
            </View>

            <FlatList
                data={songs}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={<Text style={styles.sectionTitle}>Popular Riffs</Text>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: StatusBar.currentHeight,
    },
    header: {
        padding: 20,
        backgroundColor: '#1E1E1E',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        alignItems: 'center'
    },
    headerTitle: {
        color: '#FFD700',
        fontSize: 22,
        fontWeight: 'bold'
    },
    headerSub: {
        color: '#AAA',
        fontSize: 14,
        marginTop: 5
    },
    listContent: {
        padding: 20
    },
    sectionTitle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 5
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#222',
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333'
    },
    rankContainer: {
        width: 50,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333'
    },
    rank: {
        color: '#666',
        fontSize: 24,
        fontWeight: 'bold'
    },
    info: {
        flex: 1,
        padding: 15
    },
    title: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4
    },
    artist: {
        color: '#BBB',
        fontSize: 14
    },
    meta: {
        color: '#666',
        fontSize: 12,
        marginTop: 4
    },
    arrowContainer: {
        paddingHorizontal: 20
    },
    arrow: {
        color: '#FFD700',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default SongListScreen;
