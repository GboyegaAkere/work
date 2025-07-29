/** @format */
import React from "react";
import { motion } from "framer-motion";

export default function Basic() {
  // Motion variant for color transition
  const colorVariant = {
    offscreen: { color: "#9ca3af" }, // gray-400
    onscreen: {
      color: "#2dd4bf", // teal-400
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-[#1a1a1a] text-center py-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        {/* First Pair */}
        <div>
          <p className="text-gray-300 text-sm mb-2">
            Simple to high-end we take on every challenge
          </p>
          <h2 className="text-5xl md:text-7xl font-serif text-gray-300">
            Basic{" "}
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.5 }}
              variants={colorVariant}
              className="text-4xl md:text-6xl font-sans"
            >
              to Evolved
            </motion.span>
          </h2>
        </div>

        {/* Second Pair */}
        <div>
          <h2 className="text-5xl md:text-7xl font-serif text-gray-300">
            Functional{" "}
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.5 }}
              variants={colorVariant}
              className="text-4xl md:text-6xl font-sans"
            >
              to Conceptual
            </motion.span>
          </h2>
          <p className="text-gray-300 text-sm mt-2">
            Specific solutions to holistic ideas we do it all
          </p>
        </div>

        {/* Third Pair */}
        <div>
          <h2 className="text-5xl md:text-7xl font-serif text-gray-300">
            Classic{" "}
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.5 }}
              variants={colorVariant}
              className="text-4xl md:text-6xl font-sans"
            >
              to Modern
            </motion.span>
          </h2>
          <p className="text-gray-300 text-sm mt-2">
            Vintage to cutting-edge we find the exact shade of you
          </p>
        </div>
      </div>
    </section>
  );
}
