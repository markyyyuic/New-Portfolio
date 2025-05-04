import React from 'react';
import { motion } from 'framer-motion';
import { SiTypescript, SiReact } from 'react-icons/si'; 

const CareerSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center px-6 md:px-20 relative z-10">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="flex flex-col gap-8 md:gap-16"
      >
        <h3 className="text-red-400 text-[32px] md:text-[40px] font-[Firas-Bold] uppercase tracking-widest text-left">
          Career Journey
        </h3>

        <div className="relative border-l-2 border-gray-700 ml-4">

          {/* AlayaCare */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <div className="absolute w-4 h-4 bg-red-400 rounded-full mt-1.5 -left-2 border border-gray-800"></div>
            <h4 className="text-gray-100 text-xl md:text-2xl font-[Firas-Bold]">2022–2023</h4>
            <h5 className="text-gray-300 text-lg md:text-xl font-[Firas-Medium] mt-1">
              Encoder at AlayaCare
            </h5>
            <p className="text-gray-400 text-base mt-2">
              Helped digitize healthcare forms by making them interactive and answerable through AlayaCare’s web-based Electronic Health Record (EHR) system.
            </p>
          </motion.div>

          {/* CHED RO XI */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <div className="absolute w-4 h-4 bg-red-400 rounded-full mt-1.5 -left-2 border border-gray-800"></div>
            <h4 className="text-gray-100 text-xl md:text-2xl font-[Firas-Bold]">2024–Present</h4>
            <h5 className="text-gray-300 text-lg md:text-xl font-[Firas-Medium] mt-1">
              Frontend Assistant Developer at CHED RO XI Project
            </h5>
            <p className="text-gray-400 text-base mt-2">
              Assisted the Lead Developer by building and refining frontend components, ensuring a responsive and user-friendly web application using React Native and TypeScript.
            </p>

            {/* Tech Stack */}
            <div className="flex gap-3 md:gap-4 flex-wrap mt-4">
              <div className="flex items-center gap-2 border border-gray-700 px-3 py-2 rounded-md text-gray-300 text-sm hover:bg-gray-800 transition">
                <SiReact className="text-gray-200" size={20} />
                <span className="whitespace-nowrap">React Native</span>
              </div>
              <div className="flex items-center gap-2 border border-gray-700 px-3 py-2 rounded-md text-gray-300 text-sm hover:bg-gray-800 transition">
                <SiTypescript className="text-gray-200" size={20} />
                <span className="whitespace-nowrap">TypeScript</span>
              </div>
            </div>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
};

export default CareerSection;
