import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heaith from "../assets/images/slide1.webp";
import start from "../assets/images/slide2.webp";
import con from "../assets/images/slide3.webp";
import fort from "../assets/images/slide4.webp";

// Slides
const slides = [
  { image: con, heading: "Clients" },
  { image: fort, heading: "Fortune" },
  { image: start, heading: "Building" },
  { image: heaith, heading: "Delivering" },
];

export default function Client() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length); // loop smoothly
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white w-full py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-6">
          <p className="text-teal-500 text-sm font-medium uppercase">
            OUR CLIENTS
          </p>
          <p className="text-black font-light mt-1 text-2xl md:text-3xl">
            Clients we co-create with keep
            <br className="hidden md:inline" />
            coming back for more
          </p>
        </div>

        {/* Dynamic heading */}
        <h2 className="text-xl md:text-2xl text-black mb-3">
          {slides[current].heading}
        </h2>

        {/* Slider */}
        <div className="relative w-full h-[250px] overflow-hidden rounded-md">
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              className="absolute w-full h-full"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={slides[current].image}
                alt={slides[current].heading}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition ${
                  current === idx ? "bg-black" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
