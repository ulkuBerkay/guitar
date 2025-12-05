import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Components
import TabScroller from '../components/TabScroller';
import TechniqueOverlay from '../components/TechniqueOverlay';

// Hooks
import { useTechniqueTrigger } from '../hooks/useTechniqueTrigger';

export default function PlayerScreen({ songData, onBack }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [interactionPhase, setInteractionPhase] = useState('idle'); // 'idle' | 'alert' | 'video'

    const intervalRef = useRef(null);

    const { activeTechnique, clearActiveTechnique } = useTechniqueTrigger(currentTime, songData.events);

    useEffect(() => {
        if (activeTechnique && interactionPhase === 'idle') {
            // 1. Pause Tab
            setIsPlaying(false);

            // Snap to exact time for perfect alignment
            setCurrentTime(activeTechnique.time);

            // 2. Show Alert
            setInteractionPhase('alert');
            setTimeout(() => {
                setInteractionPhase('video');
            }, 2000);
        }
    }, [activeTechnique, interactionPhase]);

    const handleVideoFinished = useCallback(() => {
        setInteractionPhase('idle');
        clearActiveTechnique();
        setIsPlaying(true);
    }, [clearActiveTechnique]);

    const handleOverlayClose = useCallback(() => {
        setInteractionPhase('idle');
        clearActiveTechnique();
    }, [clearActiveTechnique]);

    useEffect(() => {
        if (isPlaying) {
            const startTime = Date.now() - (currentTime * 1000);

            intervalRef.current = setInterval(() => {
                const now = Date.now();
                const nextTime = (now - startTime) / 1000;
                setCurrentTime(nextTime);

                if (nextTime > 20) {
                    setCurrentTime(0);
                    setIsPlaying(false);
                }

            }, 50);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <Text style={styles.backText}>‹ Back</Text>
                </TouchableOpacity>
                <View style={styles.headerInfo}>
                    <Text style={styles.title} numberOfLines={1}>{songData.title}</Text>
                    <Text style={styles.subTitle}>{songData.artist}</Text>
                </View>
                <View style={{ width: 50 }} />
            </View>

            <View style={styles.mainContent}>
                <TabScroller
                    isPlaying={isPlaying}
                    currentTime={currentTime}
                    tabLines={songData.tabLines}
                />

                <View style={styles.controls}>
                    <TouchableOpacity style={styles.playButton} onPress={togglePlay}>
                        <Text style={styles.playText}>{isPlaying ? "PAUSE" : "PLAY"}</Text>
                    </TouchableOpacity>
                    <Text style={styles.timerText}>Time: {currentTime.toFixed(1)}s</Text>
                </View>

                <View style={styles.infoArea}>
                    <Text style={styles.infoText}>
                        Upcoming Events: {"\n"}
                        {songData.events.map(e => `${e.time}s `).join(' | ')}
                    </Text>
                </View>

                <TechniqueOverlay
                    technique={activeTechnique}
                    phase={interactionPhase}
                    onFinish={handleVideoFinished}
                    onClose={handleOverlayClose}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: RNStatusBar.currentHeight,
    },
    header: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#222',
        justifyContent: 'space-between'
    },
    backButton: {
        padding: 10,
    },
    backText: {
        color: '#FFD700',
        fontSize: 16
    },
    headerInfo: {
        alignItems: 'center',
        flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFD700',
    },
    subTitle: {
        fontSize: 14,
        color: '#AAA',
    },
    mainContent: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 30,
    },
    controls: {
        alignItems: 'center',
        marginVertical: 30,
    },
    playButton: {
        backgroundColor: '#FFD700',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginBottom: 20,
    },
    playText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    timerText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'monospace',
    },
    infoArea: {
        padding: 20,
        alignItems: 'center'
    },
    infoText: {
        color: '#555',
        textAlign: 'center',
        lineHeight: 22
    }
});
