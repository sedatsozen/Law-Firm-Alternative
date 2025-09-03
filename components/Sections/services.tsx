"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Scale, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const services = [
  {
    id: 1,
    title: "Corporate Law",
    description:
      "Comprehensive legal solutions for businesses of all sizes, from startups to Fortune 500 companies.",
    features: [
      "Contract Negotiation",
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Compliance",
    ],
    image: "/landing-1.jpg",
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    title: "Intellectual Property",
    description:
      "Protect your innovations, trademarks, and creative works with our specialized IP expertise.",
    features: [
      "Patent Filing",
      "Trademark Registration",
      "Copyright Protection",
      "IP Litigation",
    ],
    image: "/landing-2.jpg",
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 3,
    title: "Employment Law",
    description:
      "Navigate complex workplace regulations and protect your business from employment-related risks.",
    features: [
      "HR Compliance",
      "Contract Drafting",
      "Dispute Resolution",
      "Policy Development",
    ],
    image: "/landing-3.jpg",
    color: "from-emerald-600 to-teal-600",
    bgColor: "bg-emerald-50",
  },
  {
    id: 4,
    title: "Real Estate",
    description:
      "Expert guidance through complex real estate transactions and property law matters.",
    features: [
      "Property Transactions",
      "Lease Agreements",
      "Zoning Issues",
      "Title Disputes",
    ],
    image: "/landing-4.jpg",
    color: "from-amber-600 to-orange-600",
    bgColor: "bg-amber-50",
  },
  {
    id: 5,
    title: "Litigation",
    description:
      "Aggressive representation in court with a track record of successful outcomes.",
    features: [
      "Civil Litigation",
      "Commercial Disputes",
      "Appeals",
      "Arbitration",
    ],
    image: "/landing-5.jpg",
    color: "from-red-600 to-rose-600",
    bgColor: "bg-red-50",
  },
  {
    id: 6,
    title: "Family Law",
    description:
      "Compassionate legal support during life's most challenging personal moments.",
    features: [
      "Divorce Proceedings",
      "Child Custody",
      "Adoption",
      "Estate Planning",
    ],
    image: "/landing-6.jpg",
    color: "from-indigo-600 to-blue-600",
    bgColor: "bg-indigo-50",
  },
];

export default function ServicesPage() {
  const { currentTheme } = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsToShow = 3; // Show 2 cards at a time
  const maxIndex = Math.max(0, services.length - itemsToShow);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Reset to beginning
        }
        return prev + 1;
      });
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    // Resume auto-play after manual interaction
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    // Resume auto-play after manual interaction
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    // Resume auto-play after manual interaction
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div style={{backgroundColor: currentTheme.colors.background}}>
      <section className="relative py-20 overflow-hidden">
        {/* Header */}
        <div className="w-full flex items-center justify-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-cormorant leading-tight"
            style={{color: currentTheme.colors.foreground}}
          >
            Our Services
          </motion.h1>
        </div>

        {/* Services Container */}
        <div className="relative max-w-7xl mx-auto px-8">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-theme-blue/90 hover:bg-theme-blue backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-theme-blue/90 hover:bg-theme-blue backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Services Slider */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: `calc(-${currentIndex * (100 / itemsToShow)}% - ${
                  currentIndex * 1
                }rem)`,
              }}
              transition={{
                type: "tween",
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 group"
                  style={{
                    width: `calc(${100 / itemsToShow}% - ${
                      ((itemsToShow - 1) * 2) / itemsToShow
                    }rem)`,
                    minWidth: "350px",
                  }}
                >
                  <div className="relative h-[600px] bg-theme-blue/75 rounded-3xl overflow-hidden  transition-all duration-500 group-hover:-translate-y-4">
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-20">
                      <Image
                        src={service.image}
                        fill
                        className="w-full h-full object-cover"
                        alt="image"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col">
                      {/* Header */}
                      <div className="mb-6">
                        <motion.div style={{backgroundColor: currentTheme.colors.secondary}} className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center ">
                          <Scale color={currentTheme.colors.text} className="w-8 h-8" />
                        </motion.div>
                        <h3 style={{color: currentTheme.colors.text}} className="text-3xl font-cormorant mb-3">
                          {service.title}
                        </h3>
                        <p style={{color: currentTheme.colors.text}} className="leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="flex-1 space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 + 0.3 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-theme-yellow" />
                            <span style={{color: currentTheme.colors.text}} className="font-medium">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 text-theme-blue rounded-xl font-semibold  transition-all duration-300 relative overflow-hidden group"
                        style={{backgroundColor: currentTheme.colors.backgroundMuted}}
                      >
                        <span style={{color: currentTheme.colors.foreground}} className="relative z-10">Learn More</span>
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.button>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1 h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-theme-blue w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
