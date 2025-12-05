import LogoJ from "./assets/Logoj.jpg";
import Music from "./assets/Music.svg";
import Youtube from "./assets/Youtube.svg";
import Spotify from "./assets/Spotify.png";
import Voyager from "./assets/voyagerbootleg.jpg"

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
      "https://music.youtube.com/playlist?list=OLAK5uy_mMhAmlgHeerT8bqjotQWv_j22xUXf3quk",
    apple:
      import.meta.env.VITE_LATEST_SINGLE_APPLE ||
      "https://music.apple.com/us/song/voyager-bootleg/1856574024",
    spotify:
      import.meta.env.VITE_LATEST_SINGLE_SPOTIFY ||
      "https://open.spotify.com/album/0yQhIs7du9CT5kmQzkvAFD?si=ocxezCG1SneHR1KHvBEngg",
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
    logo: Voyager,
    logoHref:
      "https://music.youtube.com/playlist?list=OLAK5uy_mMhAmlgHeerT8bqjotQWv_j22xUXf3quk",
    streamText: "Check out my latest single",
    description: "Voyager Bootleg - My latest musical creation",
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
