import MusicD from './assets/MusicD.png';
import YoutubeD from './assets/YoutubeD.png';
import SpotifyD from './assets/SpotifyD.png';

function Aboutme() {
  return (
    <div className="flex flex-col items-center gap-[24px]">
      <div className="font-InriaSerif text-4xl">Hello! I am kashiami, 21yo jumpstyle producent from Poland.</div>
      <div className="flex flex-col gap-[8px]">
      <div className="font-InriaSerif text-xl text-center max-w-4xl break-words">Happy to see you on my website! I am young polish student interested in programming and music. I've producing music since 2020,
        when I was back in high school. Then in 2024, I discovered jumpstyle and instantly fell in love with it. I started posting my music and it caught some attention on Youtube. Now, after over
        a year of being active, I have ~ 30k spotify listeners and my most popular song has over 200k plays. I am happy, because I always try hard to make the best music possible. 
      </div>
      <div className="font-InriaSerif text-xl text-center max-w-4xl break-words"> 
        I am also IT student, and I decided to connect my passions and prepare simple website for my as an artist using React.js and tailwindcss. Currently, I still figure out what features and design I should use to create simple
        and pleasant experience for anyone interested in my music. If you don't know my music and just stumbled upon my profile, I highly recommend you check out my work, especially if you are interested
        in hardstyle type of music!
      </div>
      </div>
      <div className="flex flex-col gap-[4px] items-center">
      <div className="font-InriaSerif text-4xl">
        My streaming services:
      </div>
      <div className="flex flex-row gap-[5px]">
        <a href="https://music.apple.com/us/artist/kashiami/1777722735" target="_blank" rel="noopener noreferrer">
                <img src={MusicD} alt="Logo" className="w-[100px] transition-transform duration-200 transform hover:scale-110" />
        </a>
        <a href="https://www.youtube.com/@kashiami4" target="_blank" rel="noopener noreferrer">
                <img src={YoutubeD} alt="Logo" className="w-[100px] transition-transform duration-200 transform hover:scale-110" />
        </a>
        <a href="https://open.spotify.com/artist/7yFxrWhhvzk9OQz2aTIhul?si=D1gHsCjJT2SYFYuA_Q9KsA" target="_blank" rel="noopener noreferrer">
                <img src={SpotifyD} alt="Logo" className="w-[100px] transition-transform duration-200 transform hover:scale-110" />
        </a>
      </div>
      </div>
    </div>
  );
}

export default Aboutme;
