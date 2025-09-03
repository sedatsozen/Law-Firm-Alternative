"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TeamCard, { TeamCardProps } from "../team-card";
import { useTheme } from "@/context/ThemeContext";

const team: TeamCardProps[] = [
  { name: "Lawyer 1", position: "Position 1" },
  { name: "Lawyer 2", position: "Position 2" },
  { name: "Lawyer 3", position: "Position 3" },
  { name: "Lawyer 4", position: "Position 4" },
  { name: "Lawyer 5", position: "Position 5" },
  { name: "Lawyer 6", position: "Position 6" },
  { name: "Lawyer 7", position: "Position 7" },
  { name: "Lawyer 8", position: "Position 8" },
];

const TeamPage = () => {
  const { currentTheme } = useTheme();
  // refs for each row
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  // in-view state for each row
  const isRow1InView = useInView(row1Ref, { once: true, margin: "-100px" });
  const isRow2InView = useInView(row2Ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section style={{backgroundColor: currentTheme.colors.background}} className="w-full flex flex-col  items-center py-16 px-24 text-black z-30">
      <motion.h2 style={{color: currentTheme.colors.foreground}} className="text-6xl md:text-7xl font-cormorant leading-tight">
        Our Team
      </motion.h2>

      {/* First row */}
      <div
        ref={row1Ref}
        className="w-full mt-16 flex flex-row items-center justify-between gap-4 h-[500px]"
      >
        {team.slice(0, 4).map((member, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={isRow1InView ? "visible" : "hidden"}
            variants={cardVariants}
            className="w-full h-full"
          >
            <TeamCard name={member.name} position={member.position} />
          </motion.div>
        ))}
      </div>

      {/* Second row */}
      <div
        ref={row2Ref}
        className="w-full mt-16 flex flex-row items-center justify-between gap-4 h-[500px]"
      >
        {team.slice(4, 8).map((member, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={isRow2InView ? "visible" : "hidden"}
            variants={cardVariants}
            className="w-full h-full"
          >
            <TeamCard name={member.name} position={member.position} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
