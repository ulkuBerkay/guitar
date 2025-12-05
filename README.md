# Interactive Tab Coach

Interactive Tab Coach is a React Native (Expo) application designed to help beginner guitarists learn techniques (like Palm Mute, Slide, Hammer-on) in real-time. As the user plays along with a scrolling tab, the app detects upcoming techniques and displays a visual overlay (image) to guide them.

## Key Features

- **Interactive Tab Scrolling**: ASCII tabs scroll automatically in sync with the song's BPM.
- **Technique Detection**: Real-time detection of guitar techniques based on the song's timeline.
- **Visual Overlays**: Displays a large image of the technique (e.g., finger positioning for a bend) when it occurs in the song.
- **Interactive Flow**: The tab pauses briefly when a new technique appears, allowing the user to prepare ("Alert Phase"), shows the technique ("Action Phase"), and then resumes playback.
- **Song Library**: Includes 10 classic guitar riffs (Enter Sandman, Smoke on the Water, etc.) pre-loaded with tabs and events.

## Project Structure

```
src/
├── components/
│   ├── TabScroller.js       # Renders the scrolling ASCII tab
│   └── TechniqueOverlay.js  # Displays the alert and technique image bubble
├── data/
│   └── songs.js             # JSON data for songs, tabs, and technique events
├── hooks/
│   └── useTechniqueTrigger.js # Custom hook to sync time with events
├── screens/
│   ├── SongListScreen.js    # Main menu to select songs
│   └── PlayerScreen.js      # Playback interface with tab and overlay
└── services/
    └── gemini.js            # (Optional) Service for AI-generated tabs
```

## How It Works

1.  **Select a Song**: Choose from the list of available riffs.
2.  **Play**: Press the "PLAY" button. The tab starts scrolling.
3.  **Learn**: When a technique (e.g., "SLIDE") approaches:
    -   The tab pauses.
    -   An "UPCOMING TECHNIQUE" alert appears.
    -   An image of the technique is shown for 3 seconds.
    -   The tab resumes automatically.

## Installation & Running

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start the App**:
    ```bash
    npx expo start
    ```

3.  **Run on Device/Simulator**:
    -   Press `i` for iOS Simulator.
    -   Press `a` for Android Emulator.
    -   Scan the QR code with Expo Go on your physical device.

## Technologies Used

-   **React Native** / **Expo**
-   **React Hooks** (`useState`, `useEffect`, `useRef`, `useCallback`)
-   **Custom Logic**:
    -   `TabScroller` uses pixel-per-second calculation for sync.
    -   `useTechniqueTrigger` uses a time threshold to detect events.

## Recent Updates

-   **Static Image Mode**: Replaced video/AI dependencies with reliable static images for techniques.
-   **Sync Fix**: Fixed timing issues where the tab didn't align perfectly with the overlay.
-   **Hook Optimization**: Refactored hooks to prevent render loops and ensure stability.
