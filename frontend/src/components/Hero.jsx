/** @format */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import blender from "../assets/images/flower.jpg";
import hell from "../assets/images/hell.jpg";
import hello from "../assets/images/hello.jpg";
import hi from "../assets/images/hi.jpg";
import motor from "../assets/images/motor.jpg";

const heroImages = [blender, hello, hi, hell, hi, motor];
const popupImages = [blender];

const phrases = [
  "Industrial/Product Design for Consumer Brands",
  "Digital identities for global brands",
  "Timeless visuals for cultural institutions",
];

// Captions synced with heroImages
const captions = [
  {
    title: "Studio Theatre",
    description:
      "Yoto’s identity, environmental graphics and packaging for an audio player that kids can control.",
  },
  {
    title: "Tech Branding",
    description:
      "Crafting digital experiences for innovative technology companies worldwide.",
  },
  {
    title: "Cultural Exhibits",
    description:
      "Visual storytelling for leading cultural institutions and art exhibitions.",
  },
  {
    title: "Fashion Identity",
    description:
      "Designing timeless visual identities for modern fashion brands.",
  },
  {
    title: "Education Projects",
    description:
      "Creating engaging educational tools and interactive design for learning.",
  },
  {
    title: "Travel Experiences",
    description:
      "Building immersive branding for travel and lifestyle companies.",
  },
];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const intervalRef = useRef(null);

  // Function to start auto-rotation
  const startAutoRotate = () => {
    intervalRef.current = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
  };

  // Start auto-rotation on mount
  useEffect(() => {
    startAutoRotate();
    return () => clearInterval(intervalRef.current);
  }, []);

  // When user clicks dot: set bgIndex and restart timer
  const handleDotClick = (index) => {
    setBgIndex(index);
    clearInterval(intervalRef.current);
    startAutoRotate();
  };

  // Popup image slideshow
  useEffect(() => {
    if (!popupOpen) return;
    const interval = setInterval(() => {
      setPopupIndex((prev) => (prev + 1) % popupImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [popupOpen]);

  // Phrase rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImages[bgIndex]}
          alt="background"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-20" />

      {/* Center Translucent Box with Animated Text */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <button
          onClick={() => setPopupOpen(true)}
          className="bg-white bg-opacity-80 px-6 py-3 rounded-md text-sm text-black shadow-md backdrop-blur-md hover:bg-opacity-90 transition"
        >
          We design{" "}
          <span className="underline underline-offset-4 inline-block min-w-[200px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={phrases[phraseIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {phrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </button>
      </div>

      {/* Bottom Left Text (Dynamic per image) */}
      <div className="absolute bottom-4 left-6 z-10 text-white text-sm max-w-xs">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {/* Heading - Always Visible */}
            <p className="font-semibold text-base">{captions[bgIndex].title}</p>

            {/* Description - Hidden on Mobile */}
            <p className="text-xs hidden md:block">
              {captions[bgIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Right Dots (Clickable, hidden on mobile) */}
      <div className="absolute bottom-4 right-6 z-10 hidden md:flex space-x-3">
        {heroImages.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              index === bgIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

      {/* Popup Modal with Glass Effect */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            className="fixed inset-0 bg-white/10 backdrop-blur-xl flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-4 max-w-xl w-full shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={popupImages[popupIndex]}
                alt="popup"
                className="rounded-md w-full h-64 object-cover"
              />
              <div className="grid grid-cols-3 gap-2 mt-4 text-xs text-center text-black">
                {[
                  "Arts & Culture",
                  "Tech",
                  "Health",
                  "Fashion",
                  "Education",
                  "Travel",
                  "Real Estate",
                  "Finance",
                  "Publishing",
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 rounded-md py-1 px-2 cursor-pointer hover:bg-gray-200"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-gray-600 mt-4">
                We design <span className="underline">Everything</span> for{" "}
                <span className="underline">Everyone</span>
              </p>
              <div className="text-center mt-4">
                <button
                  onClick={() => setPopupOpen(false)}
                  className="text-sm text-gray-600 underline"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
