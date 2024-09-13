import { memo } from "react";
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { SiFramer, SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const icon = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
});

const technologies = [
  { Icon: SiJavascript, color: "text-yellow-400", duration: 2.5 },
  { Icon: RiReactjsFill, color: "text-cyan-400", duration: 3 },
  { Icon: SiFramer, color: "", duration: 2 },
  { Icon: RiTailwindCssFill, color: "text-[#38bdf8]", duration: 3.5 },
  { Icon: SiRedux, color: "text-purple-400", duration: 2.8 },
];

function Technologies() {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`border-b ${
        isDarkMode ? "border-neutral-900" : "border-neutral-200"
      } pb-24`}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="capitalize text-center my-20 text-4xl  "
      >
        technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        initial={{ opacity: 0, scale: 0.5, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        {technologies.map(({ Icon, color, duration }, index) => (
          <motion.div
            key={index}
            variants={icon(duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <Icon className={`text-6xl text-center ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default memo(Technologies);
