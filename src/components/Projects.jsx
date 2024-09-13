import { PROJECTS } from "../details";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="capitalize text-center my-20 text-4xl  "
      >
        projects
      </motion.h2>
      <div className="">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              initial={{ opacity: 0, x: -100, scale: 0.5 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                className="object-cover object-center rounded-sm mb-6"
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-md">{project.title}</h3>
              <p className="text-md text-neutral-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology, index) => (
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
    </div>
  );
}

export default Projects;
