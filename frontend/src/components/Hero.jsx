/** @format */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import blender from "../assets/images/flower.jpg";
import hell from "../assets/images/hell.jpg";
import hello from "../assets/images/hello.jpg";
import hi from "../assets/images/hi.jpg";
import motor from "../assets/images/motor.jpg";

const heroImages = [blender, hello, hi, hell, hi, motor];

const phrases = [
  "Industrial/Product Design for Consumer Brands",
  "Digital identities for global brands",
  "Timeless visuals for cultural institutions",
];

const captions = [
  { title: "Studio Theatre", description: "Yoto’s identity, environmental graphics can control." },
  { title: "Tech Branding", description: "Crafting digital experiences for innovative." },
  { title: "Cultural Exhibits", description: "Visual storytelling for leading cultural institutions." },
  { title: "Fashion Identity", description: "Designing timeless visual identities for modern fashion brands." },
  { title: "Education Projects", description: "Creating engaging educational tools." },
  { title: "Travel Experiences", description: "Building immersive branding for travel." },
];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const heroRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-rotate hero images
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDotClick = (index) => {
    setBgIndex(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
  };

  // Phrase rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Track hero visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  // Track footer visibility
  useEffect(() => {
    const footerElement = document.querySelector("footer");
    if (!footerElement) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footerElement);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImages[bgIndex]}
            alt="background"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-20" />

        {/* Center Button */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <button
            onClick={() => setPopupOpen(true)}
            className="bg-white bg-opacity-80 px-6 py-3 rounded-md text-sm text-black shadow-md backdrop-blur-md hover:bg-opacity-90 transition"
          >
            We design{" "}
            <span className="inline-flex items-center gap-2 min-w-[220px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phrases[phraseIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="font-medium"
                >
                  {phrases[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>
        </div>

        {/* Bottom Left Captions */}
        <div className="absolute bottom-4 left-6 z-10 text-white text-sm max-w-xs">
          <AnimatePresence mode="wait">
            <motion.div
              key={bgIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-semibold text-base">{captions[bgIndex].title}</p>
              <p className="text-xs hidden md:block">{captions[bgIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Right Dots */}
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
      </section>

      {/* Sticky Bottom Button */}
      <AnimatePresence>
        {!isHeroVisible && !isFooterVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-4 left-0 right-0 z-50 flex justify-center"
          >
            <button
              onClick={() => setPopupOpen(true)}
              className="bg-white bg-opacity-80 px-6 py-3 rounded-md text-sm text-black shadow-md backdrop-blur-md hover:bg-opacity-90 transition"
            >
              We design{" "}
              <span className="inline-flex items-center gap-2 min-w-[220px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phrases[phraseIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="font-medium"
                  >
                    {phrases[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup Modal */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            className="fixed inset-0 bg-white/10 backdrop-blur-xl flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopupOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl p-5 max-w-sm sm:max-w-xl w-full shadow-lg relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Close Icon (Mobile) */}
              <button
                className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100 md:hidden"
                onClick={() => setPopupOpen(false)}
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={heroImages[bgIndex]}
                alt="popup"
                className="rounded-md w-full h-64 object-cover"
              />

              {/* Tags */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 text-xs text-center text-black">
                {[
                  "Books",
                  "Brand Identity",
                  "Brand Strategy",
                  "Campaigns",
                  "Digital Experiences",
                  "Exhibitions",
                  "Industrial/Product Design",
                  "Motion Graphics & Film",
                  "Packaging",
                  "Typefaces",
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-200 rounded-md py-1 px-2 cursor-pointer hover:bg-gray-100"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <p className="text-center text-xs text-gray-600 mt-4">
                We design <span className="underline">Everything</span> for{" "}
                <span className="underline">Everyone</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
