import LogoJ from './assets/Logoj.jpg';
import MusicD from './assets/MusicD.png';
import YoutubeD from './assets/YoutubeD.png';
import SpotifyD from './assets/SpotifyD.png';
import Newwave from './assets/newwave.png';

export const cardStorage = [
  {
    logo: LogoJ,
    logoHref: "https://linktr.ee/kashiami",
    streamText: "Stream My Music:",
    links: [
      { url: 'https://music.apple.com/us/artist/kashiami/1777722735', img: MusicD },
      { url: 'https://www.youtube.com/@kashiami4', img: YoutubeD },
      { url: 'https://open.spotify.com/artist/7yFxrWhhvzk9OQz2aTIhul', img: SpotifyD }
    ]
  },
  {
    logo: Newwave,
    logoHref: "https://www.youtube.com/watch?v=fkKJEUWPAzY&list=OLAK5uy_kSVZJyaUBTUUgtxXE6ixLo-_v5dG8xPZ0",
    streamText: "Check out my latest single:",
    links: [
      { url: 'https://music.apple.com/pl/album/new-wave-single/1840562785', img: MusicD },
      { url: 'https://music.apple.com/pl/album/new-wave-single/1840562785', img: YoutubeD },
      { url: 'https://open.spotify.com/album/1pRpyMMqdeTXaeTh2K4BCJ?si=C-y_gaylSGysTYEn9QHNsQ', img: SpotifyD }
    ]
  }
];