import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { FaGamepad } from 'react-icons/fa'; // 🎮 New Game Icon

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [gamesOpen, setGamesOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleGames = () => setGamesOpen(!gamesOpen);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'career', 'project', 'contact'];
            let current = 'about';

            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = id;
                    }
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className="w-full flex border-b border-gray-700 justify-between items-center px-6 py-4 md:px-12 fixed top-0 z-50 bg-black/10 backdrop-blur-sm">
                <div className="ml-[60px] md:ml-[97px] border border-gray-600 px-4 md:px-5 py-2 text-red-400 font-semibold tracking-widest text-lg">
                    MARKYY
                </div>

                <div className="flex items-center space-x-2 md:space-x-4 mr-[60px] md:mr-[120px]">
                    {/* Games Button */}
                    <button
                        onClick={toggleGames}
                        className="border border-gray-600 p-3 hover:bg-white hover:text-black transition-all"
                    >
                        <FaGamepad size={24} className="text-red-400" />
                    </button>

                    {/* Burger/Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="border border-gray-600 p-3 hover:bg-white hover:text-black transition-all"
                    >
                        <MenuIcon fontSize="medium" className="text-red-400" />
                    </button>
                </div>
            </header>

            {/* Games Menu */}
            <AnimatePresence>
                {gamesOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center px-8 z-40"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            <h2 className="text-red-400 text-5xl font-[Firas-Bold] uppercase tracking-widest">
                                Games I Play
                            </h2>

                            {/* Games List */}
                            <div className="flex flex-row justify-center items-center gap-x-8">
                                {/* Minecraft */}
                                <div className="flex flex-col items-center gap-2">
                                    <img src="/assets/Mine.svg" alt="Minecraft" className="w-20 h-20 object-contain" />
                                    <span className="text-white text-xl font-[Firas-Medium]">Minecraft</span>
                                </div>

                                {/* Valorant */}
                                <div className="flex flex-col items-center gap-2">
                                    <img src="/assets/val.svg" alt="Valorant" className="w-20 h-20 object-contain" />
                                    <span className="text-white text-xl font-[Firas-Medium]">Valorant</span>
                                </div>

                                {/* Mobile Legends */}
                                <div className="flex flex-col items-center gap-2">
                                    <img src="/assets/ML.svg" alt="Mobile Legends" className="w-20 h-20 object-contain" />
                                    <span className="text-white text-xl font-[Firas-Medium]">Mobile Legends</span>
                                </div>

                                {/* Dota 2 */}
                                <div className="flex flex-col items-center gap-2">
                                    <img src="/assets/Dota.svg" alt="Dota 2" className="w-20 h-20 object-contain" />
                                    <span className="text-white text-xl font-[Firas-Medium]">Dota 2</span>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={toggleGames}
                                className="mt-10 border border-gray-600 px-8 py-3 text-white hover:bg-white hover:text-black transition-all text-xl font-[Firas-Bold] tracking-widest"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navigation Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center px-12 z-50"
                    >
                        <div className="flex flex-col gap-8">
                            {[
                                { name: 'About', id: 'about' },
                                { name: 'Career Journey', id: 'career' },
                                { name: 'Projects', id: 'project' },
                                { name: 'Contact', id: 'contact' },
                            ].map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center gap-4 text-5xl font-[Firas-Bold] tracking-widest text-white hover:text-red-400 transition-all cursor-hover-target"
                                >
                                    {activeSection === section.id && (
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-red-400 text-4xl"
                                        >
                                            ➔
                                        </motion.span>
                                    )}
                                    {section.name}.
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Header;
