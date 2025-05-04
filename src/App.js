import './App.css';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ParticlesBackground from '../src/components/particles';
import CustomCursor from '../src/UI/CustomerCursor';
import Intro from './components/Intro';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Career from './components/Career';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LandingPage from './models/Landing';
import LoadingScreen from './models/LoadingScreen'; // ✅

function App() {
  const [showLanding, setShowLanding] = useState(true);   // START here
  const [showLoading, setShowLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleStart = () => {
    setShowLanding(false);     // Hide Landing
    setShowLoading(true);      // Show LoadingScreen
  };

  const handleLoadingFinish = () => {
    setShowLoading(false);     // Hide LoadingScreen
    setShowContent(true);      // Show real content
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* Animate LandingPage */}
      <AnimatePresence>
        {showLanding && <LandingPage onStart={handleStart} />}
      </AnimatePresence>

      {/* Animate LoadingScreen */}
      <AnimatePresence>
        {showLoading && <LoadingScreen onFinish={handleLoadingFinish} />}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      {showContent && (
        <>
          {/* Dusty Noise Layer */}
          <div
            className="absolute inset-0 bg-cover opacity-5 pointer-events-none z-0"
            style={{
              backgroundImage: "url('/bg-noise.jpg')",
            }}
          />

          {/* Background Particles */}
          <div className="absolute inset-0 z-0">
            <ParticlesBackground />
          </div>

          {/* Custom Cursor */}
          <CustomCursor />

          {/* Header */}
          <Header />

          {/* MAIN Content */}
          <div className="relative flex flex-col items-start min-h-screen px-6 md:px-12 z-20">
            <div className="max-w-4xl w-full mt-16">
              <Intro />
            </div>

            <div className="max-w-6xl w-full mt-5" id="about">
              <About />
            </div>

            <div className="max-w-6xl w-full mt-5" id="career">
              <Career />
            </div>

            <div className="max-w-6xl w-full mt-5" id="project">
              <Project />
            </div>

            <div className="max-w-6xl w-full mt-5" id="contact">
              <Contact />
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
