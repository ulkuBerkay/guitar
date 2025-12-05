import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

const TechniqueOverlay = ({ technique, phase, onFinish, onClose }) => {
    // Hooks must always be called at the top level
    const [status, setStatus] = useState({});
    const isVideoPhase = phase === 'video';

    useEffect(() => {
        if (isVideoPhase && technique) {
            const timer = setTimeout(() => {
                if (onFinish) onFinish();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVideoPhase, technique, onFinish]);

    // Now safely handle the "don't render" case
    if (!technique || phase === 'idle') return null;

    return (
        <View style={styles.container} pointerEvents="box-none">
            <View style={[styles.bubble, isVideoPhase ? styles.videoBubble : styles.alertBubble]}>

                {/* Alert Phase UI */}
                {!isVideoPhase && (
                    <View style={styles.alertContent}>
                        <Text style={styles.alertTitle}>UPCOMING TECHNIQUE</Text>
                        <Text style={styles.alertSub}>Get Ready!</Text>
                    </View>
                )}

                {/* Image Phase UI */}
                {isVideoPhase && (
                    <View style={styles.activeContent}>
                        <View style={styles.header}>
                            <Text style={styles.techniqueTitle}>{technique.technique.toUpperCase()}</Text>
                            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                                <Text style={styles.closeText}>SKIP</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.imageContainer}>
                            {technique.image_url ? (
                                <Image
                                    source={{ uri: technique.image_url }}
                                    style={styles.image}
                                    resizeMode="contain"
                                />
                            ) : (
                                <Text style={styles.errorText}>No Image Available</Text>
                            )}
                            <Text style={styles.note}>{technique.note}</Text>
                        </View>
                    </View>
                )}

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 100,
    },
    bubble: {
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#222',
        borderWidth: 1,
        borderColor: '#FFD700',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    alertBubble: {
        width: 250,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333'
    },
    videoBubble: {
        width: 320,
        height: 350, // Taller needed for image
        backgroundColor: '#1E1E1E'
    },
    alertContent: {
        alignItems: 'center'
    },
    alertTitle: {
        color: '#AAA',
        fontSize: 12,
        marginBottom: 5
    },
    alertSub: {
        color: '#FFF',
        fontStyle: 'italic',
        fontSize: 16
    },
    activeContent: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#333'
    },
    techniqueTitle: {
        color: '#FFD700',
        fontWeight: 'bold',
        fontSize: 16
    },
    closeButton: {
        paddingHorizontal: 5
    },
    closeText: {
        color: '#888',
        fontSize: 12
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        borderRadius: 8
    },
    errorText: {
        color: 'red',
        marginBottom: 10
    },
    note: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'italic'
    }
});

export default TechniqueOverlay;
