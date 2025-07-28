import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heaith from "../assets/images/slide1.webp";
import start from "../assets/images/slide2.webp";
import con from "../assets/images/slide3.webp";
import fort from "../assets/images/slide4.webp";

const slides = [
  { image: con, heading: "Clients" },
  { image: fort, heading: "Fortune" },
  { image: start, heading: "Building" },
  { image: heaith, heading: "Delivering" },
];

export default function Client() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
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
         <p className="text-gray-600 mt-1 text-3xl md:text-5xl">
            Clients we co-create with keep
            <br className="hidden md:inline" /> 
            coming back for more
         </p>

        </div>

         <h2
           
            className="absolute pt-2 left-4 text-2xl md:text-3xl font-semibold text-black drop-shadow-lg"
          >
            {slides[current].heading}
          </h2>

        {/* Slider Container */}
        <div className="relative w-full h-[250px] mt-23 overflow-hidden rounded-md">
          {/* Dynamic heading overlay directly on image */}
         

          {/* Slides */}
          <motion.div
            className="flex w-full h-full"
            animate={{ x: `-${current * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="min-w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition ${
                  current === idx ? "bg-white" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
