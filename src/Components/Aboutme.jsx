import MusicD from "./assets/Music.svg";
import YoutubeD from "./assets/Youtube.svg";
import SpotifyD from "./assets/Spotify.png";
import { themes } from "../themecolorsStorage";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Aboutme({ palette }) {
  return (
    <motion.section
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center gap-[24px] px-[6px] max-sm:pt-[40px] max-sm:pb-[64px]">
        <div
          className="font-InriaSerif text-4xl text-center"
          style={{ color: palette.aboutmeText }}
        >
          Hello! Thank you for visiting my website
        </div>
        <div className="flex flex-col gap-[8px]">
          <div
            className="font-InriaSerif text-xl text-center max-w-4xl break-words"
            style={{ color: palette.aboutmeText }}
          >
            Happy to see you on my website! I am young polish student interested
            in programming and music. I've producing music since 2020, when I
            was back in high school. Then in 2024, I discovered jumpstyle and
            instantly fell in love with it. I started posting my music and it
            caught some attention on Youtube. Now, after over a year of being
            active, I have ~ 30k spotify listeners and my most popular song has
            over 200k plays. I am happy, because I always try hard to make the
            best music possible.
          </div>
          <div
            className="font-InriaSerif text-xl text-center max-w-4xl break-words"
            style={{ color: palette.aboutmeText }}
          >
            I am also IT student, and I decided to connect my passions and
            prepare simple website for my as an artist using React.js and
            tailwindcss. Currently, I still figure out what features and design
            I should use to create simple and pleasant experience for anyone
            interested in my music. If you don't know my music and just stumbled
            upon my profile, I highly recommend you check out my work,
            especially if you are interested in hardstyle type of music!
          </div>
        </div>
        <div className="flex flex-col gap-[16px] items-center">
          <div
            className="font-InriaSerif text-4xl text-center"
            style={{ color: palette.aboutmeText }}
          >
            My streaming services
          </div>
          <div className="flex flex-row gap-[16px]">
            <a
              href="https://music.apple.com/us/artist/kashiami/1777722735"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MusicD}
                alt="Logo"
                className="w-[88px] transition-transform duration-200 transform hover:scale-105"
              />
            </a>
            <a
              href="https://www.youtube.com/@kashiami4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={YoutubeD}
                alt="Logo"
                className="w-[88px] transition-transform duration-200 transform hover:scale-105"
              />
            </a>
            <a
              href="https://open.spotify.com/artist/7yFxrWhhvzk9OQz2aTIhul?si=D1gHsCjJT2SYFYuA_Q9KsA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={SpotifyD}
                alt="Logo"
                className="w-[88px] transition-transform duration-200 transform hover:scale-105"
              />
            </a>
          </div>
        </div>
        <Link to="/">
          <div
            className="text-3xl font-InriaSerif mt-[64px] hover:underline"
            style={{ color: palette.aboutmeText }}
          >
            Back to main page
          </div>
        </Link>
      </div>
    </motion.section>
  );
}

export default Aboutme;
