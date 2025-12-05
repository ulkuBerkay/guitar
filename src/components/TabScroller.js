import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

/**
 * TabScroller
 * Renders ASCII tab lines from props and auto-scrolls.
 */
const TabScroller = ({ isPlaying, currentTime, tabLines = [] }) => {
    const scrollViewRef = useRef(null);

    // Calibrated for monospace font.
    // Assuming approx 10 chars per second at 123 BPM?
    // Let's approximate: 1 character ~ 12px width.
    // This needs manual tuning to match the song speed.
    const PIXELS_PER_SECOND = 40;

    useEffect(() => {
        if (scrollViewRef.current) {
            const position = currentTime * PIXELS_PER_SECOND;
            // paddingLeft handles the centering, so we just scroll to the pixel position corresponding to time.
            scrollViewRef.current.scrollTo({
                x: position,
                animated: false
            });
        }
    }, [currentTime]);

    // If no tabLines, return empty or dummy
    if (!tabLines.length) return null;

    return (
        <View style={styles.container}>
            {/* Center Marker */}
            <View style={styles.centerLine} />

            <ScrollView
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.tabContainer}>
                    {tabLines.map((line, index) => (
                        <Text key={index} style={styles.tabText} numberOfLines={1}>
                            {line}
                        </Text>
                    ))}
                </View>
                {/* Extra padding at end */}
                <View style={{ width: width }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 180, // Increased height for multiple strings
        backgroundColor: '#1E1E1E',
        justifyContent: 'center',
        position: 'relative',
        marginVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#333'
    },
    scrollContent: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: width / 2, // Start at center
    },
    centerLine: {
        position: 'absolute',
        left: width / 2,
        top: 0,
        bottom: 0,
        width: 2,
        backgroundColor: 'rgba(255, 215, 0, 0.5)', // Gold semi-transparent
        zIndex: 10,
    },
    tabContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    tabText: {
        fontFamily: 'monospace', // Critical for alignment
        color: '#DDD',
        fontSize: 14,
        lineHeight: 20,
        whiteSpace: 'pre', // Ensure spaces are respected
    }
});

export default TabScroller;
