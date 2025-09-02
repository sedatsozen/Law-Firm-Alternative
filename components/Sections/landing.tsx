"use client";

import React, { useEffect, useState } from "react";
import HeroSlider from "../hero-slider";
import { color, motion } from "framer-motion";

const LandingPage = () => {
  const [textColor, setTextColor] = useState<string>("text-theme-white");

  useEffect(() => {
    const interval = setInterval(() => {
      // turn black
      setTextColor("text-black");

      // after 1s, return to white
      setTimeout(() => {
        setTextColor("text-theme-white");
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-theme-blue">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <HeroSlider />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 w-full h-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
            Comprehensive Legal Services
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-6xl md:text-8xl font-cormorant leading-tight mb-6 text-white`}
        >
          Legal Excellence
          <span className="block text-theme-yellow">
            Across All Areas
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          From corporate law to family matters, our experienced team provides
          strategic legal solutions tailored to your unique needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-theme-yellow text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Explore Our Services
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPage;
