import plot from './assets/youtube_views_over_time.png';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { platforms } from "./cardStorage";

export default function statsdesc ({ palette }) {

    return (
        <motion.section
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full"
        >
            <div className="flex flex-col items-center gap-6 px-4 sm:px-6 py-8 sm:py-12 w-full">
                <motion.h1
                    className="font-InriaSerif text-3xl sm:text-4xl md:text-5xl text-center leading-tight"
                    style={{ color: palette?.aboutmeText }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    Welcome to Statistics Page!
                </motion.h1>
            </div>

            <div className="flex flex-col items-center gap-6 px-4 sm:px-6 py-6 sm:py-10 w-full">
                <motion.p
                    className="font-InriaSerif text-base sm:text-lg md:text-xl text-center max-w-6xl leading-relaxed"
                    style={{ color: palette?.text }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Since June 2024, my music got streamed over <strong>1.3 million</strong> times across all platforms.
                    Below I present some insights about this journey. I conducted some basic data analysis using python to see the trends and patterns in the data.
                </motion.p>
            </div>

            <div className="flex flex-col items-center gap-6 px-4 sm:px-6 py-6 sm:py-10 w-full">
                <motion.p
                    className="font-InriaSerif text-base sm:text-lg md:text-xl text-center max-w-6xl leading-relaxed"
                    style={{ color: palette?.text }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    I gathered some data from major platforms: Youtube, Spotify Apple Music SoundCloud, but I will use only Youtube dataset since it is easier to retrieve data from their studio page.

                </motion.p>
            </div>

            <div className="flex flex-col items-center gap-6 px-4 sm:px-6 py-6 sm:py-10 w-full">
                <motion.h2
                    className="font-InriaSerif text-lg sm:text-xl md:text-2xl text-center leading-tight"
                    style={{ color: palette?.text }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    YouTube Views over time
                </motion.h2>
                <motion.div
                    className="w-full flex justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <img 
                        src={plot} 
                        alt="YouTube views over time" 
                        className="w-full max-w-4xl h-auto rounded-lg shadow-md"
                    />
                </motion.div>
            </div>
        </motion.section>
    )

}