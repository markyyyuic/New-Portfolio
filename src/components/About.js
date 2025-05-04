import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiReact } from "react-icons/si";

const AboutSection = () => {
    const [showTools, setShowTools] = useState(false);

    const toggleTheTools = () => {
        setShowTools((prev) => !prev);
    };

    return (
        <section className="w-full min-h-screen flex flex-col justify-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                className="flex flex-col md:flex-row w-full px-6 md:px-20 gap-8 md:gap-20"
            >
                {/* Left Bio */}
                <div className="flex-1 flex flex-col gap-6">
                    <h3 className="text-red-400 text-[32px] md:text-[40px] font-[Firas-Bold] uppercase tracking-widest mb-4">
                        About Me
                    </h3>
                    <p className="text-gray-300 text-[20px] md:text-[23px] leading-relaxed text-justify">
                        I'm 22 years old. An aspiring Front-end Developer eager to deepen my knowledge and craft modern, responsive web experiences.
                    </p>
                    <button
                        onClick={toggleTheTools}
                        className="mt-2 self-start border border-gray-600 px-6 py-2 sm:py-3 text-white font-[Firas-Bold] tracking-widest hover:bg-gray-800 transition"
                    >
                        {showTools ? "Hide Tech/Tools" : "Tech/Tools Used"}
                    </button>
                </div>

                {/* Divider Line */}
                <AnimatePresence>
                    {showTools && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="hidden md:flex justify-center"
                        >
                            <div className="w-px bg-gray-800 h-[86%]"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Right Tools */}
                <AnimatePresence>
                    {showTools && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                            className="flex-1 flex flex-col gap-4 pl-0 md:pl-16"
                        >
                            <h3 className="text-red-400 text-[32px] md:text-[40px] font-[Firas-Bold] uppercase tracking-widest mb-2">
                                Tools I Use
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                <div className="flex items-center gap-2 border border-gray-700 px-3 py-2 rounded-md hover:bg-gray-800 transition">
                                    <FaReact className="text-gray-200 flex-shrink-0" size={27} />
                                    <span className="text-gray-300 text-xs font-[Firas-Medium] whitespace-nowrap">React</span>
                                </div>
                                <div className="flex items-center gap-2 border border-gray-700 px-3 py-2 rounded-md hover:bg-gray-800 transition">
                                    <SiTailwindcss className="text-gray-200 flex-shrink-0" size={27} />
                                    <span className="text-gray-300 text-xs font-[Firas-Medium] whitespace-nowrap">Tailwind</span>
                                </div>
                                <div className="flex items-center gap-2 border border-gray-700 px-3 py-2 rounded-md hover:bg-gray-800 transition">
                                    <SiTypescript className="text-gray-200 flex-shrink-0" size={27} />
                                    <span className="text-gray-300 text-xs font-[Firas-Medium] whitespace-nowrap">TypeScript</span>
                                </div>
                                <div className="flex items-center gap-2 border border-gray-700 px-3 py-2 rounded-md hover:bg-gray-800 transition">
                                    <SiReact className="text-gray-200 flex-shrink-0" size={27} />
                                    <span className="text-gray-300 text-xs font-[Firas-Medium] whitespace-nowrap">React Native</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default AboutSection;
