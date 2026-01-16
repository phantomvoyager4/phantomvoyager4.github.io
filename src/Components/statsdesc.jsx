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
        >
            <div className="flex flex-col items-center gap-[24px] px-[6px] max-sm:pt-[40px] max-sm:pb-[64px] w-full mx-auto">
                <motion.div
                    className="font-InriaSerif text-4xl sm:text-5xl text-center mb-8"
                    style={{ color: palette?.aboutmeText }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Welcome to statistics Page!
                </motion.div>
            </div>
            <div className="flex flex-col items-center gap-[24px] px-[6px] max-sm:pt-[40px] max-sm:pb-[64px] w-full max-w-6xl mx-auto">
                <motion.div
                    className="font-InriaSerif text-xl sm:text-xl text-center mb-8"
                    style={{ color: palette }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    During the period from June 2024 until January 2026 (1.5 years), my music got streamed over <strong>1.3 million</strong> times across all platforms.
                    Below I present some insights about this journey. I conducted some basic data analysis using python to see the trends and patterns in the data.
                </motion.div>
            </div>
            <div className="flex flex-col items-center gap-[24px] px-[6px] max-sm:pt-[40px] max-sm:pb-[64px] w-full max-w-6xl mx-auto">
                <motion.div
                    className="font-InriaSerif text-sm sm:text-xl text-center mb-8"
                    style={{ color: palette }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                {/* data repo div */}
                </motion.div>
            </div>
            <div className="flex flex-col items-center gap-[24px] px-[6px] max-sm:pt-[40px] max-sm:pb-[64px] w-full max-w-6xl mx-auto">
                <motion.div
                    className="font-InriaSerif text-sm sm:text-xl text-center mb-8"
                    style={{ color: palette }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Lets take a overall look into Youtube data, since it is the easiest to retrieve data from this platform:
                </motion.div>
            </div>
            

        </motion.section>
    )

}