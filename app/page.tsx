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
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* <AnimatePresence>
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
      </AnimatePresence> */}

      <LandingPage />
      <AboutPage />
      <ServicesPage />
      <TeamPage />
    </div>
  );
}
