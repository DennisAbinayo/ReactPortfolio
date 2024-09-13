import { memo } from "react";
import { ABOUT_TEXT } from "../details";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function About() {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`border-b ${
        isDarkMode ? "border-neutral-900" : "border-neutral-200"
      } pb-4`}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="capitalize text-center my-20 text-4xl  "
      >
        about <span className="text-neutral-500">me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 p-8">
          <motion.div
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            initial={{ x: -100, opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center h-64 lg:h-80"
          >
            <img
              src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Abstract code on a computer screen"
              className="object-cover w-full h-full rounded-md "
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 150, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <p className="max-w-xl my-2 py-6">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default memo(About);
