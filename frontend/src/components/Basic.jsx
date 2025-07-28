/** @format */

import React from "react";
import { motion } from "framer-motion";

const textGroups = [
  {
    left: "Basic",
    right: "Evolved",
    topText: "Simple to high-end",
    bottomText: "we take on every challenge",
  },
  {
    left: "Functional",
    right: "Conceptual",
    topText: "Specific solutions to",
    bottomText: "holistic ideas we do it all",
  },
  {
    left: "Classic",
    right: "Modern",
    topText: "Vintage to cutting-edge",
    bottomText: "we find the exact shade of you",
  },
];

const wordVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Basic = () => {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto flex flex-col gap-24">
        {textGroups.map((group, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={wordVariant}
            className="text-center space-y-2"
          >
            <p className="text-sm md:text-base text-gray-300">{group.topText}</p>
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-2 text-4xl md:text-6xl font-serif font-medium">
              <span className="text-gray-300">{group.left}</span>
              <span className="text-lg md:text-2xl mx-2 text-gray-400">to</span>
              <span className="text-cyan-400">{group.right}</span>
            </div>
            <p className="text-sm md:text-base text-gray-300">{group.bottomText}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Basic;
