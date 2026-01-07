// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { platforms } from "./cardStorage";
import Music from "./assets/Music.svg";
import Youtube from "./assets/Youtube.svg";
import Spotify from "./assets/Spotify.png";

function Aboutme({ palette }) {
  return (
    <motion.section
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center gap-[24px] px-[6px] max-sm:pt-[40px] max-sm:pb-[64px] w-full max-w-4xl mx-auto">
        <motion.div
          className="font-InriaSerif text-4xl sm:text-5xl text-center mb-8"
          style={{ color: palette.aboutmeText }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hello! Thank you for visiting my website
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          className="flex flex-col gap-8 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div
            className="about-content-box bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm"
            style={{
              backgroundColor: `${palette.cardIcon}10`,
              border: `1px solid ${palette.cardIcon}20`,
            }}
          >
            <h2
              className="font-InriaSerif text-2xl mb-4 text-center"
              style={{ color: palette.aboutmeText }}
            >
              About My Music Journey
            </h2>
            <p
              className="font-InriaSerif text-lg leading-relaxed text-center"
              style={{ color: palette.aboutmeText }}
            >
              Happy to see you on my website! I am a young Polish student
              passionate about programming and music. I've been producing music
              since 2020, starting back in high school. In 2024, I discovered
              jumpstyle and instantly fell in love with it. After posting my
              music, it caught attention on YouTube, and now, after over a year
              of being active, I have ~30k Spotify listeners with my most
              popular song reaching over 200k plays. I'm happy because I always
              strive to create the best music possible.
            </p>
          </div>

          <div
            className="about-content-box bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm"
            style={{
              backgroundColor: `${palette.cardIcon}10`,
              border: `1px solid ${palette.cardIcon}20`,
            }}
          >
            <h2
              className="font-InriaSerif text-2xl mb-4 text-center"
              style={{ color: palette.aboutmeText }}
            >
              This Website
            </h2>
            <p
              className="font-InriaSerif text-lg leading-relaxed text-center"
              style={{ color: palette.aboutmeText }}
            >
              As an IT student, I decided to combine my passions and create this
              website using React.js and Tailwind CSS. I'm constantly working to
              improve the features and design to provide a simple and pleasant
              experience for anyone interested in my music. If you're new to my
              work, I highly recommend checking it out, especially if you enjoy
              hardstyle music!
            </p>
          </div>
        </motion.div>
        {/* Streaming Services Section */}
        <motion.div
          className="flex flex-col gap-6 items-center mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2
            className="font-InriaSerif text-3xl sm:text-4xl text-center"
            style={{ color: palette.aboutmeText }}
          >
            Stream My Music
          </h2>
          <div className="flex flex-row gap-6 sm:gap-8">
            {[
              {
                platform: "apple",
                url: "https://music.apple.com/us/artist/kashiami/1777722735",
                img: Music,
                name: "Apple Music",
              },
              {
                platform: "youtube",
                url: "https://www.youtube.com/@kashiami4",
                img: Youtube,
                name: "YouTube",
              },
              {
                platform: "spotify",
                url: "https://open.spotify.com/artist/7yFxrWhhvzk9OQz2aTIhul?si=D1gHsCjJT2SYFYuA_Q9KsA",
                img: Spotify,
                name: "Spotify",
              },
            ].map((service) => (
              <motion.a
                key={service.platform}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* Platform Icon Background */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 0,
                    backgroundColor:
                      platforms[service.platform]?.color || palette.cardIcon,
                  }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Platform Icon */}
                <div className="relative p-4 rounded-xl transition-all duration-200">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                </div>

                {/* Tooltip */}
                <motion.div
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap pointer-events-none"
                  style={{
                    backgroundColor: palette.navbarBackground,
                    color: palette.navbarText,
                    boxShadow: `0 4px 12px ${palette.bg}40`,
                  }}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.name}
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link to="/">
            <motion.button
              className="px-8 py-3 rounded-full font-InriaSerif text-lg font-medium border-2 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor:
                  palette.icon === "#000000ff" ? palette.headerBg : palette.icon,
                color:
                  palette.icon === "#000000ff" ? palette.icon : palette.headerBg,
                borderColor: palette.icon,
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: palette.icon,
                color: palette.headerBg,
                boxShadow: `0 10px 25px -5px ${palette.icon}40`,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              ← Back to Main Page
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Aboutme;
