export const songs = [
    {
        id: '1',
        title: "Enter Sandman (Intro)",
        artist: "Metallica",
        bpm: 123,
        tabLines: [
            "e|---------------------------------|---------------------------------|",
            "B|---------------------------------|---------------------------------|",
            "G|---------------------------------|---------------------------------|",
            "D|-------5-------------------------|-------5-------------------------|",
            "A|----7-----------7----------------|----7-----------7----------------|",
            "E|-0-------6--5-------0--0-0-0-0-0-|-0-------6--5-------0--0-0-0-0-0-|",
            "                                     PM.............."
        ],
        events: [
            {
                time: 0.5,
                note: "Open E",
                technique: "let_ring",
                image_url: "https://www.justinguitar.com/images/BC-134-EmCord-2.jpg",
                duration: 2000
            },
            {
                time: 2.2,
                note: "A string 7 (Slide)",
                technique: "slide",
                image_url: "https://www.guitarhabits.com/wp-content/uploads/2019/02/slide-guitar-technique-1024x512.jpg",
                duration: 3000
            },
            {
                time: 7.0,
                note: "E string 0 (Palm Mute)",
                technique: "palm_mute",
                image_url: "https://www.guitarworld.com/wp-content/uploads/2019/08/palm-mute.jpg",
                duration: 5000
            },
            {
                time: 10.5,
                note: "Blue Note (Bb)",
                technique: "vibrato",
                image_url: "https://takelessons.com/blog/wp-content/uploads/2014/01/vibrato.jpg",
                duration: 4000
            }
        ]
    },
    {
        id: '2',
        title: "Smoke on the Water",
        artist: "Deep Purple",
        bpm: 112,
        tabLines: [
            "e|-----------------|-----------------|-----------------|-----------------|",
            "B|-----------------|-----------------|-----------------|-----------------|",
            "G|-0---3---5-------|-0---3---6-5-----|-0---3---5---3---|-0---------------|",
            "D|-0---3---5-------|-0---3---6-5-----|-0---3---5---3---|-0---------------|",
            "A|-----------------|-----------------|-----------------|-----------------|",
            "E|-----------------|-----------------|-----------------|-----------------|"
        ],
        events: [
            {
                time: 0.2,
                note: "Double Stop (G/D string)",
                technique: "double_stop",
                image_url: "https://www.fender.com/articles/img/article/20220914_double-stops-hero.jpg",
                duration: 2000
            },
            {
                time: 3.5,
                note: "Slide G to F#",
                technique: "slide",
                image_url: "https://www.guitarhabits.com/wp-content/uploads/2019/02/slide-guitar-technique-1024x512.jpg",
                duration: 3000
            }
        ]
    },
    {
        id: '3',
        title: "Seven Nation Army",
        artist: "The White Stripes",
        bpm: 120,
        tabLines: [
            "e|-----------------|-----------------|",
            "B|-----------------|-----------------|",
            "G|-----------------|-----------------|",
            "D|-----------------|-----------------|",
            "A|-7---7-10-7-5-3-2|-----------------|",
            "E|-----------------|-----------------|"
        ],
        events: [
            {
                time: 0.5,
                note: "E Note",
                technique: "staccato",
                image_url: "https://spinditty.com/instruments-gear/How-to-Play-Staccato-on-Guitar", // Dummy valid-ish URL structure used for placeholder logic if needed, but going with generics
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Staccato_dot.svg/1200px-Staccato_dot.svg.png",
                duration: 2000
            },
            {
                time: 2.0,
                note: "G to E",
                technique: "pull_off",
                image_url: "https://www.dummies.com/wp-content/uploads/150212.image0.jpg",
                duration: 3000
            }
        ]
    },
    {
        id: '4',
        title: "Iron Man",
        artist: "Black Sabbath",
        bpm: 74,
        tabLines: [
            "e|-----------------|-----------------|",
            "B|-----------------|-----------------|",
            "G|-----------------|-----------------|",
            "D|-----7---7/9-9---|10-9-10-9-10-5-5-|",
            "A|-9---5---5/7-7---|8--7-8--7-8--3-3-|",
            "E|-7---------------|-----------------|"
        ],
        events: [
            {
                time: 0.1,
                note: "B5 Power Chord",
                technique: "power_chord",
                image_url: "https://www.guitarhabits.com/wp-content/uploads/2017/02/Power-Chord-A5-Root-6-1024x556.jpg",
                duration: 3000
            },
            {
                time: 2.5,
                note: "Slide 7 to 9",
                technique: "slide",
                image_url: "https://www.guitarhabits.com/wp-content/uploads/2019/02/slide-guitar-technique-1024x512.jpg",
                duration: 2000
            },
            {
                time: 4.8,
                note: "Bend",
                technique: "bend",
                image_url: "https://www.guitarworld.com/wp-content/uploads/2019/10/string-bending.jpg",
                duration: 3000
            }
        ]
    },
    {
        id: '5',
        title: "Come As You Are",
        artist: "Nirvana",
        bpm: 120,
        tabLines: [
            "e|-----------------|-----------------|",
            "B|-----------------|-----------------|",
            "G|-----------------|-----------------|",
            "D|-----------------|-----------------|",
            "A|---------0---0---|---------2-------|",
            "E|-0-0-1-2---2---2-|-2-1-0-2---2-1-0-|"
        ],
        events: [
            {
                time: 3.5,
                note: "Chorus Effect Riff",
                technique: "alternate_picking",
                image_url: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F0c553922365261883526155556209255.999x999x1.jpg",
                duration: 4000
            }
        ]
    },
    {
        id: '6',
        title: "Back in Black",
        artist: "AC/DC",
        bpm: 96,
        tabLines: [
            "e|-----------------|-3-3-3-----------|",
            "B|-----3-3-3-------|-3-3-3-----------|",
            "G|-----2-2-2-2-2-2-|-0-0-0-----------|",
            "D|-2---0-0-0-2-2-2-|-0-0-0-----------|",
            "A|-2---------0-0-0-|-----------------|",
            "E|-0---------------|-3-3-3-----------|",
            "                     PM.............."
        ],
        events: [
            {
                time: 0.5,
                note: "E Power Chord",
                technique: "power_chord",
                image_url: "https://www.guitarhabits.com/wp-content/uploads/2017/02/Power-Chord-A5-Root-6-1024x556.jpg",
                duration: 3000
            },
            {
                time: 1.5,
                note: "Mute Strum",
                technique: "palm_mute",
                image_url: "https://www.guitarworld.com/wp-content/uploads/2019/08/palm-mute.jpg",
                duration: 2000
            }
        ]
    },
    {
        id: '7',
        title: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        bpm: 125,
        tabLines: [
            "e|-----------------15----14----|",
            "B|-------15--------------------|",
            "G|----14----14--12----14----14-|",
            "D|-12----------12--------------|",
            "A|-----------------------------|",
            "E|-----------------------------|"
        ],
        events: [
            {
                time: 0.2,
                note: "D String 12",
                technique: "string_skipping",
                image_url: "https://i.ytimg.com/vi/Hj343e-V4Y4/maxresdefault.jpg",
                duration: 5000
            }
        ]
    },
    {
        id: '8',
        title: "Sunshine of Your Love",
        artist: "Cream",
        bpm: 115,
        tabLines: [
            "e|-----------------|-----------------|",
            "B|-----------------|-----------------|",
            "G|-----------------|-----------------|",
            "D|-12-12-10-12-----|-----------------|",
            "A|-------------12--|-11-10-----------|",
            "E|-----------------|-------10-8------|"
        ],
        events: [
            {
                time: 2.5,
                note: "Descending Blues Scale",
                technique: "vibrato",
                image_url: "https://takelessons.com/blog/wp-content/uploads/2014/01/vibrato.jpg",
                duration: 3000
            }
        ]
    },
    {
        id: '9',
        title: "Do I Wanna Know?",
        artist: "Arctic Monkeys",
        bpm: 85,
        tabLines: [
            "e|-----------------|-----------------|",
            "B|-----------------|-----------------|",
            "G|-----------------|-----------------|",
            "D|-----------------|-----------------|",
            "A|-----1h3/5-------|-3h5\\3-1-3-------|",
            "E|-1h3-------------|-----------1-----|"
        ],
        events: [
            {
                time: 0.2,
                note: "Hammer-on",
                technique: "hammer_on",
                image_url: "https://www.guitarhabits.com/wp-content/uploads/2018/11/hammer-ons-pull-offs-guitar-technique-1024x512.jpg",
                duration: 2000
            },
            {
                time: 0.8,
                note: "Slide",
                technique: "slide",
                image_url: "https://www.guitarhabits.com/wp-content/uploads/2019/02/slide-guitar-technique-1024x512.jpg",
                duration: 2000
            }
        ]
    },
    {
        id: '10',
        title: "Breaking the Law",
        artist: "Judas Priest",
        bpm: 160,
        tabLines: [
            "e|-----------------|-----------------|",
            "B|-----------------|-----------------|",
            "G|-----------------|-----------------|",
            "D|-----------------|-----------------|",
            "A|-0-2-3-0-2-3-0-2-|-3-0-2-3-0-2-----|",
            "E|-----------------|-------------3-1-|"
        ],
        events: [
            {
                time: 0.5,
                note: "A 0",
                technique: "alternate_picking",
                image_url: "https://www.guitarhabits.com/wp-content/uploads/2019/07/Alternate-Picking-Exercise-1-1024x512.jpg",
                duration: 5000
            }
        ]
    }
];
