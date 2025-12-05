import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useTechniqueTrigger Hook
 * 
 * Checks if the current song time matches any technique event time.
 * If a match is found (within a small threshold), triggers the video.
 *
 * @param {number} currentTime - Current playback time in seconds
 * @param {Array} events - List of song events from JSON
 * @returns {Object} { activeTechnique, clearActiveTechnique }
 */
export const useTechniqueTrigger = (currentTime, events) => {
    const [activeTechnique, setActiveTechnique] = useState(null);
    // Use useRef to track the last triggered time without causing re-renders itself
    const lastTriggeredTimeRef = useRef(-1);

    // Precision threshold in seconds (e.g., 0.1s tolerance)
    const THRESHOLD = 0.1;

    useEffect(() => {
        if (!events || events.length === 0) return;

        // Find an event that matches the current time within the threshold
        const match = events.find(event => {
            const timeDiff = Math.abs(event.time - currentTime);
            return timeDiff <= THRESHOLD;
        });

        if (match) {
            // Check against the ref to avoid re-triggering the same event
            if (Math.abs(match.time - lastTriggeredTimeRef.current) > THRESHOLD) {
                setActiveTechnique(match);
                lastTriggeredTimeRef.current = match.time;
            }
        }
    }, [currentTime, events]);

    // Use useCallback to keep this function reference stable
    const clearActiveTechnique = useCallback(() => {
        setActiveTechnique(null);
    }, []);

    // Reset ref when events change (song change)
    useEffect(() => {
        lastTriggeredTimeRef.current = -1;
        setActiveTechnique(null);
    }, [events]);

    return { activeTechnique, clearActiveTechnique };
};
