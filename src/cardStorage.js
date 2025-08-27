import LogoJ from './assets/Logoj.jpg';
import MusicD from './assets/MusicD.png';
import YoutubeD from './assets/YoutubeD.png';
import SpotifyD from './assets/SpotifyD.png';
import Penumbra from './assets/penumbra.jpg';

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
    logo: Penumbra,
    logoHref: "https://www.youtube.com/watch?v=0sYTp5ZvdZo&ab_channel=kashiami-Topic",
    streamText: "Check out my newest single:",
    links: [
      { url: 'https://music.apple.com/us/artist/kashiami/1777722735', img: MusicD },
      { url: 'https://www.youtube.com/@kashiami4', img: YoutubeD },
      { url: 'https://open.spotify.com/artist/7yFxrWhhvzk9OQz2aTIhul', img: SpotifyD }
    ]
  }
];