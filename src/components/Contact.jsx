import { memo } from "react";
import { CONTACT } from "../details";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Contact() {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`border-b ${
        isDarkMode ? "border-neutral-900" : "border-neutral-200"
      } pb-24`}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 1 }}
        className="capitalize text-center my-10 text-4xl"
      >
        contact me
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter"
      >
        <div className="flex items-center justify-center my-4">
          <FaMapMarkerAlt className="mr-2" />
          <p>{CONTACT.address}</p>
        </div>
        <div className="flex flex-col items-center">
          <a
            className="my-4 cursor-pointer hover:scale-105 transition-all duration-500 hover:text-blue-600 flex items-center"
            href={`tel:${CONTACT.phoneNumber}`}
          >
            <FaPhoneAlt className="mr-2" />
            {CONTACT.phoneNumber}
          </a>
          <a
            className="my-4 cursor-pointer hover:scale-105 underline transition-all duration-500 hover:text-blue-600 flex items-center"
            href={`mailto:${CONTACT.email}`}
          >
            <FaEnvelope className="mr-2" />
            {CONTACT.email}
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default memo(Contact);
