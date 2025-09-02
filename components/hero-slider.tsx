"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = ["/landing-1.jpg", "/landing-2.jpg", "/landing-3.jpg", "/landing-4.jpg", "/landing-5.jpg"];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  // autoplay every 6s
  useEffect(() => {
    const interval = setInterval(
      () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % images.length);
      },
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background slider */}
      <AnimatePresence custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.8, ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-theme-blue opacity-70 z-10" />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}