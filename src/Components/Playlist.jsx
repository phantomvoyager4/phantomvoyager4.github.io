import { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { themes } from "../themecolorsStorage";
import PlaylistPhoto from "./assets/playlist.jpg";

function Playlist({ palette }) {
  const [current, setCurrent] = useState(0);

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
          <a
            href="https://open.spotify.com/playlist/3Gnzznw2BNeJNdLLDwHVk4?si=909136bc753349fc"
            target="blank"
            className="shadow-md transition-shadow duration-300 hover:shadow-xl" //add shadow here
          >
            <img
              className="w-[280px] h-[280px] transition-transform duration-200 transform hover:scale-103 shadow-lg hover:shadow-2xl shadow-black/40 rounded-lg" 
              src={PlaylistPhoto}
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Playlist;
