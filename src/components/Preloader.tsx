import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20;
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(
        Math.round((currentStep / totalSteps) * 100),
        100,
      );
      setProgress(nextProgress);

      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setLoading(false);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Lock body scroll while the preloader is active to prevent page weirdness
  useEffect(() => {
    if (!enter) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 1000); // Wait for exit animation to finish
    }
  }, [enter]);

  return (
    <AnimatePresence>
      {!enter && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-slate-950 overflow-hidden origin-bottom"
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated Ambient Background */}
          <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-[120px] animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-sky-600 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" />
          </div>

          <div className="relative z-10 flex flex-col items-center select-none">
            {/* White/Inverted SVG Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/shree_logo.svg"
                alt="Shree Logo"
                className="h-16 md:h-20 object-contain mb-12"
              />
            </motion.div>

            {/* Dynamic Container: Percent vs Button */}
            <div className="h-20 flex items-center justify-center relative w-full">
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key="progress"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center gap-6 w-64"
                  >
                    <span className="text-5xl font-display font-light tabular-nums tracking-widest text-slate-900">
                      {progress}%
                    </span>
                    <div className="w-full h-[2px] bg-slate-200 overflow-hidden rounded-full">
                      <motion.div
                        className="h-full bg-accent shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                        style={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.1 }}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.button
                    key="enter"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    onClick={() => setEnter(true)}
                    className="group relative px-8 py-4 rounded-full border border-slate-200 bg-white backdrop-blur-md hover:bg-accent hover:border-accent hover:text-white text-slate-900 font-sans tracking-[0.2em] uppercase text-xs font-semibold transition-all duration-500 overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Enter Application
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
