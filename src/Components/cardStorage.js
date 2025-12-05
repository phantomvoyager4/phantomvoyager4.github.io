import LogoJ from "./assets/Logoj.jpg";
import Music from "./assets/Music.svg";
import Youtube from "./assets/Youtube.svg";
import Spotify from "./assets/Spotify.png";
import Newwave from "./assets/newwave.jpg";

// Environment variables with fallbacks
const config = {
  linktreeUrl:
    import.meta.env.VITE_LINKTREE_URL || "https://linktr.ee/kashiami",
  youtubeMusicUrl:
    import.meta.env.VITE_YOUTUBE_MUSIC_URL ||
    "https://music.youtube.com/channel/UC-Cs85x5T2AQ5db0cKAMWuA",
  appleMusicUrl:
    import.meta.env.VITE_APPLE_MUSIC_URL ||
    "https://music.apple.com/us/artist/kashiami/1777722735",
  spotifyUrl:
    import.meta.env.VITE_SPOTIFY_URL ||
    "https://open.spotify.com/artist/7yFxrWhhvzk9OQz2aTIhul",
  latestSingle: {
    youtube:
      import.meta.env.VITE_LATEST_SINGLE_YOUTUBE ||
      "https://music.youtube.com/playlist?list=OLAK5uy_lERrBUJRGT1QCxNEx-Qj6HEOgLiv4qT2I",
    apple:
      import.meta.env.VITE_LATEST_SINGLE_APPLE ||
      "https://music.apple.com/pl/album/new-wave-single/1840562785",
    spotify:
      import.meta.env.VITE_LATEST_SINGLE_SPOTIFY ||
      "https://open.spotify.com/album/1pRpyMMqdeTXaeTh2K4BCJ?si=C-y_gaylSGysTYEn9QHNsQ",
  },
};

// Platform configurations
export const platforms = {
  youtube: {
    name: "YouTube Music",
    icon: Youtube,
    color: "#FF0000",
    ariaLabel: "Listen on YouTube Music",
  },
  apple: {
    name: "Apple Music",
    icon: Music,
    color: "#FA243C",
    ariaLabel: "Listen on Apple Music",
  },
  spotify: {
    name: "Spotify",
    icon: Spotify,
    color: "#1DB954",
    ariaLabel: "Listen on Spotify",
  },
};

export const cardStorage = [
  {
    id: "main-profile",
    logo: LogoJ,
    logoHref: config.linktreeUrl,
    streamText: "Stream My Music",
    description: "Listen to all my tracks across major streaming platforms",
    links: [
      {
        platform: "youtube",
        url: config.youtubeMusicUrl,
        img: Youtube,
        ...platforms.youtube,
      },
      {
        platform: "apple",
        url: config.appleMusicUrl,
        img: Music,
        ...platforms.apple,
      },
      {
        platform: "spotify",
        url: config.spotifyUrl,
        img: Spotify,
        ...platforms.spotify,
      },
    ],
  },
  {
    id: "latest-single",
    logo: Newwave,
    logoHref:
      "https://www.youtube.com/watch?v=fkKJEUWPAzY&list=OLAK5uy_kSVZJyaUBTUUgtxXE6ixLo-_v5dG8xPZ0",
    streamText: "Check out my latest single",
    description: "New Wave - My latest musical creation",
    links: [
      {
        platform: "youtube",
        url: config.latestSingle.youtube,
        img: Youtube,
        ...platforms.youtube,
      },
      {
        platform: "apple",
        url: config.latestSingle.apple,
        img: Music,
        ...platforms.apple,
      },
      {
        platform: "spotify",
        url: config.latestSingle.spotify,
        img: Spotify,
        ...platforms.spotify,
      },
    ],
  },
];

// Helper function to get card by ID
export const getCardById = (id) => {
  return cardStorage.find((card) => card.id === id);
};

// Helper function to get all platform links
export const getAllPlatformLinks = () => {
  return cardStorage.reduce((acc, card) => {
    return [...acc, ...card.links];
  }, []);
};
