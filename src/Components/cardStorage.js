import LogoJ from './assets/Logoj.jpg';
import Music from "./assets/Music.svg";
import Youtube from "./assets/Youtube.svg";
import Spotify from "./assets/Spotify.png";
import Newwave from './assets/newwave.jpg';

export const cardStorage = [
  {
    logo: LogoJ,
    logoHref: "https://linktr.ee/kashiami",
    streamText: "Stream My Music:",
    links: [
      { url: 'https://music.youtube.com/channel/UC-Cs85x5T2AQ5db0cKAMWuA', img: Youtube },
      { url: 'https://music.apple.com/us/artist/kashiami/1777722735', img: Music },
      { url: 'https://open.spotify.com/artist/7yFxrWhhvzk9OQz2aTIhul', img: Spotify }
    ]
  },
  {
    logo: Newwave,
    logoHref: "https://www.youtube.com/watch?v=fkKJEUWPAzY&list=OLAK5uy_kSVZJyaUBTUUgtxXE6ixLo-_v5dG8xPZ0",
    streamText: "Check out my latest single:",
    links: [
      { url: 'https://music.youtube.com/playlist?list=OLAK5uy_lERrBUJRGT1QCxNEx-Qj6HEOgLiv4qT2I', img: Youtube },
      { url: 'https://music.apple.com/pl/album/new-wave-single/1840562785', img: Music },
      { url: 'https://open.spotify.com/album/1pRpyMMqdeTXaeTh2K4BCJ?si=C-y_gaylSGysTYEn9QHNsQ', img: Spotify }
    ]
  },
];