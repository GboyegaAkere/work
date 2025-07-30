/** @format */
import React from "react";
import { motion } from "framer-motion";

export default function Basic() {
  const colorVariant = {
    offscreen: { color: "#ffffff" }, // White when not visible
    onscreen: {
      color: "#00BCD4", // Teal when in view
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-[#1a1a1a] text-center py-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        
        {/* First Pair */}
        <div>
          <h2 className="text-5xl mb-6 md:text-7xl font-serif text-gray-300 flex items-baseline justify-center">
            Basic{" "}
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.8 }}
              variants={colorVariant}
              className="text-2xl text-white md:text-3xl font-sans ml-2"
            >
              to
            </motion.span>
          </h2>

          <h2 className="text-5xl md:text-7xl font-serif text-gray-300 flex items-baseline justify-center flex-wrap mt-[-10px] md:mt-[-20px]">
            
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.8 }}
              variants={colorVariant}
              className="inline-block"
            >
              <p className="text-gray-300 text-sm inline-block ml-3 md:ml-4 text-left leading-tight">
              Simple to high-end <br /> we take on every challenge
            </p>
              Evolved
            </motion.span>
          </h2>
        </div>

        {/* Second Pair */}
        <div>
          <h2 className="text-5xl md:text-7xl font-serif text-gray-300 flex items-baseline justify-center">
            Functional{" "}
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.8 }}
              variants={colorVariant}
              className="text-2xl md:text-3xl font-sans ml-2"
            >
              to
            </motion.span>
          </h2>

          <h2 className="text-5xl md:text-7xl font-serif text-gray-300 flex items-baseline justify-center flex-wrap mt-[-10px] md:mt-[-20px]">
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.8 }}
              variants={colorVariant}
              className="inline-block"
            >
              Conceptual <p className="text-gray-300 text-sm inline-block ml-3 md:ml-4 text-left leading-tight">
              Specific solutions to <br /> holistic ideas we do it all
            </p>
            </motion.span>
            
          </h2>
        </div>

        {/* Third Pair */}
        <div>
          <h2 className="text-5xl md:text-7xl font-serif text-gray-300 flex items-baseline justify-center">
            Classic{" "}
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.8 }}
              variants={colorVariant}
              className="text-2xl md:text-3xl font-sans ml-2"
            >
              to
            </motion.span>
          </h2>

          <h2 className="text-5xl md:text-7xl font-serif text-gray-300 flex items-baseline justify-center flex-wrap mt-[-10px] md:mt-[-20px]">
           
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.8 }}
              variants={colorVariant}
              className="inline-block" 
            >
             <span><p className="text-gray-300 text-sm inline-block ml-3 md:ml-4 text-left leading-tight">
              Vintage to cutting-edge <br /> we find the exact shade of you
            </p></span> Modern 
            </motion.span>
          </h2>
        </div>
      </div>
    </section>
  );
}
