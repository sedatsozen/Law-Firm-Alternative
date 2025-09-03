"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const text = "Law Firm & Co.";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letter: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

const IntroPage = () => {
  const { currentTheme } = useTheme();
  
  return (
    <section style={{backgroundColor: currentTheme.colors.primary}} className="w-full h-screen flex items-center justify-center absolute top-0 z-50">
      <motion.h1
        className="font-cormorant text-8xl flex"
        variants={container}
        initial="hidden"
        animate="visible"
        style={{color: currentTheme.colors.secondary}}
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </section>
  );
};

export default IntroPage;
