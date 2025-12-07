export interface Track {
    title: string;
    src: string;
}

export interface Album {
    id: string;
    title: string;
    tracks: Track[];
}

export const albums: Record<string, Track[]> = {
    "40": [
        { title: "The Birth", src: "/assets/music/40/01 The Birth.mp3" },
        { title: "Infantile", src: "/assets/music/40/02 Infantile.mp3" },
        { title: "Melancholy Morning", src: "/assets/music/40/03 Melancholy Morning.mp3" },
        { title: "The Next", src: "/assets/music/40/04 The Next.mp3" },
        { title: "Flight", src: "/assets/music/40/05 Flight.mp3" },
        { title: "Desertion", src: "/assets/music/40/06 Desertion.mp3" },
        { title: "Forsaken", src: "/assets/music/40/07 Forsaken.mp3" },
        { title: "The Boy", src: "/assets/music/40/08 The Boy.mp3" },
        { title: "Little Sorrows", src: "/assets/music/40/09 Little Sorrows.mp3" },
        { title: "My Sister's Dolls", src: "/assets/music/40/10 My Sister's Dolls.mp3" },
        { title: "Grief", src: "/assets/music/40/11 Grief.mp3" },
        { title: "Infantine (Piano Version)", src: "/assets/music/40/12 Infantine (Piano Version).mp3" },
        { title: "Remorse", src: "/assets/music/40/13 Remorse.mp3" },
        { title: "Salvation", src: "/assets/music/40/14 Salvation.mp3" },
    ],
    "sadeh": [
        { title: "The First Day", src: "/assets/music/sadeh/01 The First Day.mp3" },
        { title: "Under the Rain", src: "/assets/music/sadeh/02 Under the Rain.mp3" },
        { title: "The Wait", src: "/assets/music/sadeh/03 The Wait.mp3" },
        { title: "Not a Song", src: "/assets/music/sadeh/04 Not a Song.mp3" },
        { title: "248", src: "/assets/music/sadeh/05 248.mp3" },
        { title: "Without You", src: "/assets/music/sadeh/06 Without You.mp3" },
        { title: "Sadeh", src: "/assets/music/sadeh/07 Sadeh.mp3" },
        { title: "Maybe", src: "/assets/music/sadeh/08 Maybe.mp3" },
        { title: "The Fifth Day", src: "/assets/music/sadeh/09 The fifth day.mp3" },
        { title: "Rain Again", src: "/assets/music/sadeh/10 Rain Again.mp3" },
        { title: "StarLess", src: "/assets/music/sadeh/11 StarLess.mp3" },
        { title: "Departed", src: "/assets/music/sadeh/12 Departed.mp3" },
        { title: "Farewell", src: "/assets/music/sadeh/13 Farewell.mp3" },
        { title: "Yearning", src: "/assets/music/sadeh/14 Yearning.mp3" },
        { title: "13:57:32", src: "/assets/music/sadeh/15 13 57 32.mp3" },
    ]
};
