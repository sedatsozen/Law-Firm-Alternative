"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AboutPage from "@/components/Sections/about";
import IntroPage from "@/components/Sections/intro";
import LandingPage from "@/components/Sections/landing";
import ServicesPage from "@/components/Sections/services";
import TeamPage from "@/components/Sections/team";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Disable scroll while intro is active
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // reset when component unmounts
    };
  }, [showIntro]);

  return (
    <div className="flex flex-col">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50"
          >
            <IntroPage />
          </motion.div>
        )}
      </AnimatePresence>

      <LandingPage />
      <AboutPage />
      <ServicesPage />
      <TeamPage />
    </div>
  );
}
