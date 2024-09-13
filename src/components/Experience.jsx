import { memo } from "react";
import { EXPERIENCES } from "../details";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="capitalize text-center my-20 text-4xl  "
      >
        work experience
      </motion.h2>

      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h3 className="mb-2 font-semibold text-md">
              {experience.role} -{" "}
              <span className="text-sm text-purple-100">
                {experience.company}
              </span>
            </h3>
            <p className="text-sm text-neutral-400 mb-4">
              {experience.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="text-sm text-purple-900 bg-neutral-900 rounded-md px-2 py-1"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default memo(Experience);
