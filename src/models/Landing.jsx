import { motion } from 'framer-motion';
import React from 'react';

const LandingPage = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden px-4 md:px-0"
    >
      {/* Dusty Noise Background */}
      <div
        className="absolute inset-0 bg-cover opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/bg-noise.jpg')",
        }}
      />

      {/* Main Landing Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-red-400 text-5xl md:text-6xl font-[Firas-Bold] mb-6 tracking-widest"
        >
          MARKYY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-gray-400 text-lg mb-12 font-[Firas-Medium]"
        >
          HOLA !
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          onClick={onStart}
          className="border border-gray-600 px-8 py-3 text-white font-[Firas-Bold] tracking-widest hover:bg-gray-800 transition"
        >
          RUN
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LandingPage;
