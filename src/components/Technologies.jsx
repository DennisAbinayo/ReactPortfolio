import { memo } from "react";
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { SiFramer, SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

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

function Technologies() {
  return (
    <div className="border-b border-neutral-900 pb-24">
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
        {/* javascript  */}
        <motion.div
          variants={icon(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-6xl text-center text-yellow-400" />
        </motion.div>
        {/* react  */}
        <motion.div
          variants={icon(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsFill className="text-6xl text-center text-cyan-400" />
        </motion.div>
        {/* framer  */}
        <motion.div
          variants={icon(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFramer className="text-6xl text-center " />
        </motion.div>
        {/* tailwind  */}
        <motion.div
          variants={icon(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-6xl text-center text-[#38bdf8]" />
        </motion.div>
        {/* redux  */}
        <motion.div
          variants={icon(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-6xl text-center text-purple-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(Technologies);
