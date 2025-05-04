import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Made with React");

  useEffect(() => {
    let interval;

    const updateProgress = () => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onFinish();
          }, 300);
          return 100;
        }

        if (prev >= 0 && prev < 50) {
          setCurrentText("Made with React");
        } else if (prev >= 50 && prev < 100) {
          setCurrentText("Loading into Markyy's World...");
        }

        return prev + 1;
      });
    };

    interval = setInterval(updateProgress, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
    >
      <motion.p
        key={currentText}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white font-[Firas-Bold] text-[30px] tracking-widest mb-8"
      >
        {currentText.includes("React") ? (
          <>
            Made with <span className="text-red-400">React</span>
          </>
        ) : (
          <>{currentText}</>
        )}
      </motion.p>

      <h1 className="text-white text-5xl font-[Firas-Bold] tracking-widest">
        {progress}%
      </h1>
    </motion.div>
  );
};

export default LoadingScreen;
