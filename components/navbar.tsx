'use client';
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeSwitcher } from "./theme-switcher";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const { currentTheme } = useTheme();
  const { scrollY } = useScroll();

  // Animate padding-top and padding-bottom
  const paddingY = useTransform(scrollY, [0, 100], [24, 16]); // 6rem -> 4rem

  // Animate background color (transparent -> theme-blue)
  const bgColor = useTransform(scrollY, [0, 100], [
    "rgba(0,0,0,0)",
    currentTheme.colors.primary,
  ]);

  // Animate text color (theme-white -> theme-yellow or any other color)
  const textColor = useTransform(scrollY, [0, 100], [
    currentTheme.colors.text, // white
    currentTheme.colors.secondary, // gold
  ]);

  return (
    <motion.nav
      style={{
        paddingTop: paddingY,
        paddingBottom: paddingY,
        backgroundColor: bgColor,
      }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <motion.h1
          style={{ color: textColor }}
          className="text-2xl font-semibold font-cormorant"
        >
          Law Firm & Co.
        </motion.h1>

        <div className="space-x-6 text-sm uppercase tracking-wide">
          <a href="#" className="hover:text-[#D4AF37] transition" style={{color: currentTheme.colors.text}}>
            Home
          </a>
          <a href="#" className="hover:text-[#D4AF37] transition" style={{color: currentTheme.colors.text}}>
            About
          </a>
          <a href="#" className="hover:text-[#D4AF37] transition" style={{color: currentTheme.colors.text}}>
            Services
          </a>
          <a href="#" className="hover:text-[#D4AF37] transition" style={{color: currentTheme.colors.text}}>
            Contact
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;