import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PlaylistPhoto from "./assets/playlist.jpg";

function Playlist({ palette }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ y: -20, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-center">
        <div className="w-[320px] h-[400px] flex flex-col items-center justify-center gap-[24px]">
          <div
            className="font-InriaSerif text-3xl text-center"
            style={{ color: palette.cardText }}
          >
            My Spotify Playlist
          </div>
          <motion.a
            href="https://open.spotify.com/playlist/3Gnzznw2BNeJNdLLDwHVk4?si=909136bc753349fc"
            target="blank"
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-[280px] rounded-lg transition-all duration-300"
                src={PlaylistPhoto}
                alt="Kashiami's songs"
              />

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="w-8 h-8 text-black ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

export default Playlist;
