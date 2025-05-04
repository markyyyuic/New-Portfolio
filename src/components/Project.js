import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiTypescript, SiReact } from 'react-icons/si';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProjectSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleProject = () => setIsOpen(prev => !prev);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center px-6 md:px-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="flex flex-col gap-6 md:gap-10"
      >
        {/* Section Title */}
        <h3 className="text-red-400 text-[32px] md:text-[40px] font-[Firas-Bold] uppercase tracking-widest text-left">
          Projects
        </h3>

        {/* Project Card */}
        <div className="border border-gray-700 p-4 rounded-lg hover:bg-gray-800 transition flex flex-col gap-4">
          {/* Top: Title + Arrow */}
          <div className="flex items-center justify-between cursor-pointer" onClick={toggleProject}>
            <h4 className="text-white text-xl md:text-2xl font-[Firas-Bold]">
              CHED RO XI Application
            </h4>
            {isOpen ? (
              <FaChevronUp className="text-gray-400" size={20} />
            ) : (
              <FaChevronDown className="text-gray-400" size={20} />
            )}
          </div>

          {/* Expandable Details */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden"
              >
                {/* Status Badge */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="border border-yellow-400 text-yellow-400 px-3 py-1 rounded-md text-xs font-[Firas-Medium]">
                    🛠️ In Development
                  </span>
                </div>

                {/* Role and Timeline */}
                <div className="flex flex-col gap-1 mt-4">
                  <p className="text-gray-300 text-sm font-[Firas-Medium]">
                    Role: <span className="text-white">Frontend Assistant Developer</span>
                  </p>
                  <p className="text-gray-400 text-sm">
                    Timeline: <span className="text-white">September 2024 – Present</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-base mt-4 leading-relaxed">
                  Contributed to building a web application for CHED RO XI’s school compliance system.
                  Assisted the Lead Developer by developing responsive frontend components using React Native and TypeScript.
                  The project is still under active development and targeted for launch soon.
                </p>

                {/* Tech Stack Icons */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="flex items-center gap-2 border border-gray-700 px-3 py-1 rounded-md text-gray-300 text-sm hover:bg-gray-700 transition">
                    <SiReact className="text-gray-200" size={20} />
                    <span className="whitespace-nowrap">React Native</span>
                  </div>
                  <div className="flex items-center gap-2 border border-gray-700 px-3 py-1 rounded-md text-gray-300 text-sm hover:bg-gray-700 transition">
                    <SiTypescript className="text-gray-200" size={20} />
                    <span className="whitespace-nowrap">TypeScript</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
