import { memo } from "react";
import { HERO_CONTENT } from "../details";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

function Hero() {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`border-b ${
        isDarkMode ? "border-neutral-900" : "border-neutral-200"
      } pb-4 lg:mb-36`}
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start ">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Dennis Abinayo
            </motion.h1>
            <motion.h2
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl md:text-4xl  tracking-tight"
            >
              React Developer
            </motion.h2>
            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <div className="flex justify-center items-center ">
            <motion.img
              initial={{ x: 100, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 1.5 }}
              src="https://images.pexels.com/photos/6693379/pexels-photo-6693379.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="profile"
              className="object-cover object-center rounded-md shadow-2xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Hero);
