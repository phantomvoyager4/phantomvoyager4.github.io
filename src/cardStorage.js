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
      { url: 'https://music.apple.com/us/album/prenumbra/1831024899?i=1831024900', img: MusicD },
      { url: 'https://www.youtube.com/playlist?list=OLAK5uy_lFyjY17jQ-09gw21XHktQn2WM2g1mzaFU', img: YoutubeD },
      { url: 'https://open.spotify.com/album/6CA4lU88xZqKxjAIzkhYY8?si=uWBTx9dYTc6I1Ho7FizjBA', img: SpotifyD }
    ]
  }
];