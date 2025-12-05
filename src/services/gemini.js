const GEMINI_API_KEY = "AIzaSyCy5wK0muu_zvZJsNT54Z92Z_KAVLlddEc"; // PROVIDED BY USER
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;

export const fetchSongData = async (songName) => {
    const prompt = `
    Generate a JSON object for a guitar tab of the song "${songName}".
    Focus on the main riff or intro.
    
    The JSON must strictly follow this schema:
    {
      "id": "generated-1",
      "title": "${songName}",
      "artist": "Unknown",
      "bpm": 120,
      "tabLines": [
        "String representation of the tab (e.g., e|---0---|)",
        "Use standard ASCII tab format with 6 strings",
        "Should be about 4-8 bars long"
      ],
      "events": [
        {
          "time": number (seconds, e.g., 2.5),
          "note": "Description of note/action",
          "technique": "Name of technique (e.g., HAMMER-ON, VIBRATO, BEND, SLIDE, PALM MUTE)",
          "duration": 2000 (milliseconds)
        }
      ]
    }

    IMPORTANT: Return ONLY the JSON object. Do not wrap it in markdown code blocks. Do not add explanation text.
    Ensure "events" are logically placed where the technique would occur in the tab.
  `;

    try {
        const response = await fetch(GEMINI_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            })
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        const textResponse = data.candidates[0].content.parts[0].text;

        // Clean up if the AI wraps in ```json ... ```
        const cleanJson = textResponse.replace(/```json/g, '').replace(/```/g, '').trim();

        const parsedData = JSON.parse(cleanJson);
        return parsedData;

    } catch (error) {
        console.error("Gemini API Error:", error);
        return null;
    }
};
