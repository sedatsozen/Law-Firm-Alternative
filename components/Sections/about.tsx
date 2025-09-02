"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutCard from "../about-card";
import { Book, Globe, Handshake, Scale } from "lucide-react";

const aboutText = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const floatingElements = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br flex flex-col items-center justify-center px-8 py-20 overflow-hidden">
      <div className="flex flex-row items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Enhanced Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              custom={1}
              variants={aboutText}
              className="text-6xl md:text-7xl font-cormorant text-gray-900 leading-tight"
            >
              About Our Firm
            </motion.h2>

            <motion.p
              custom={2}
              variants={aboutText}
              className="text-xl text-gray-600 leading-relaxed font-light"
            >
              For over two decades, Law Firm & Co. has been providing trusted
              legal counsel to individuals and businesses worldwide. Our
              commitment to integrity, excellence, and advocacy ensures that our
              clients receive the highest standard of representation.
            </motion.p>

            <motion.p
              custom={3}
              variants={aboutText}
              className="text-lg text-gray-600 leading-relaxed"
            >
              We combine traditional values with modern solutions to navigate
              today's complex legal landscape, always putting our clients first.
            </motion.p>

            {/* Enhanced CTA Button */}
            <motion.div custom={4} variants={aboutText} className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-theme-blue text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Learn More About Us</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r bg-theme-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="button-bg"
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              {/* Background Image */}
              <Image
                src="/landing-2.jpg"
                alt="Law team working"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/20" />

              {/* Enhanced Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex justify-between gap-4"
                >
                  <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-lg hover:bg-white/15 transition-all duration-300">
                    <motion.p
                      className="text-4xl font-bold text-white mb-1"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      25+
                    </motion.p>
                    <p className="text-white/90 text-sm uppercase tracking-wider font-medium">
                      Years of Service
                    </p>
                  </div>

                  <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-lg hover:bg-white/15 transition-all duration-300">
                    <motion.p
                      className="text-4xl font-bold text-white mb-1"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.7,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      500+
                    </motion.p>
                    <p className="text-white/90 text-sm uppercase tracking-wider font-medium">
                      Cases Won
                    </p>
                  </div>
                </motion.div>

                {/* Additional Achievement */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="bg-theme-yellow/50 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">
                        Client Satisfaction
                      </p>
                      <p className="text-white/80 text-sm">
                        Consistently rated excellent
                      </p>
                    </div>
                    <div className="text-3xl font-bold text-white">98%</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-[78%] flex flex-row items-center justify-between gap-4 mt-8">
        <AboutCard Icon={Scale} description="Integrity in every case" imgSrc="/landing-2.jpg"  />
        <AboutCard Icon={Book} description="Decades of expertise" imgSrc="/landing-3.jpg" />
        <AboutCard Icon={Globe} description="Global legal perspective" imgSrc="/landing-4.jpg" />
        <AboutCard Icon={Handshake} description="Client-first advocacy" imgSrc="/landing-5.jpg" />
      </div>
    </section>
  );
}
