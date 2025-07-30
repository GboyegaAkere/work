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
  {
    title: "Studio Theatre",
    description: "Yoto’s identity, environmental graphics can control.",
  },
  {
    title: "Tech Branding",
    description: "Crafting digital experiences for innovative.",
  },
  {
    title: "Cultural Exhibits",
    description: "Visual storytelling for leading cultural institutions.",
  },
  {
    title: "Fashion Identity",
    description:
      "Designing timeless visual identities for modern fashion brands.",
  },
  {
    title: "Education Projects",
    description: "Creating engaging educational tools.",
  },
  {
    title: "Travel Experiences",
    description: "Building immersive branding for travel.",
  },
];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isButtonTextStatic, setIsButtonTextStatic] = useState(false);

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

  // Scroll tracking to switch button position smoothly and update button text
  useEffect(() => {
    const handleScroll = () => {
      // Button logic only applies when popup is not open
      if (!popupOpen) {
        const scrolledPastHero = window.scrollY > 100; // You can adjust this threshold
        setShowSticky(scrolledPastHero);
        setIsButtonTextStatic(scrolledPastHero); // Set static text when sticky
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [popupOpen]); // Re-run effect when popupOpen changes

  // Track footer visibility to hide sticky button
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

  // Define the dropdown icon SVG function for reusability with a direction prop
  const DropdownIcon = ({ direction = "down" }) => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4"
      // Set initial rotation based on direction prop (no animation or transition)
      style={{
        transform:
          direction === "up" ? "rotate(180deg)" : "rotate(0deg)", // Rotate 180 for 'up'
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </motion.svg>
  );

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative w-full h-200 md:h-screen overflow-hidden"
      >
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

        {/* Main Button (always visible unless footer is showing or popup is open) */}
        {!popupOpen && ( // Only show this button if popup is NOT open
          <motion.div
            className="z-20 flex items-center justify-center w-full"
            style={{
              position: showSticky ? "fixed" : "absolute",
              bottom: showSticky ? 20 : "50%",
              left: 0,
            }}
            animate={{
              y: showSticky ? 0 : "-40%",
              scale: showSticky ? 0.9 : 1,
              opacity: isFooterVisible ? 0 : 1,
            }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => setPopupOpen(true)}
              className="bg-gray-200 font-san bg-opacity-80 px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base text-black shadow-md backdrop-blur-md hover:bg-opacity-90 transition flex flex-wrap justify-center items-center gap-2 text-center max-w-[90%] mx-auto"
            >
              {isButtonTextStatic ? (
                // Static text with icons when sticky
                <>
                  We design{" "}
                  <span className="inline-flex items-center gap-1 whitespace-nowrap text-center">
                    Everything <DropdownIcon direction="up" />{" "}
                  </span>
                  <span className="px-1">for</span>
                  <span className="inline-flex items-center gap-1 whitespace-nowrap text-center">
                    Everyone <DropdownIcon direction="down" />{" "}
                  </span>
                </>
              ) : (
                // Dynamic text with icons when not sticky
                <>
                  We design{" "}
                  <span className="inline-flex items-center gap-1 whitespace-normal sm:whitespace-nowrap text-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={phrases[phraseIndex] + "-first"}
                        initial={{ opacity: 0, y: -50, rotateX: 90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, y: 50, rotateX: -90 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="inline-block text-center"
                      >
                        {phrases[phraseIndex].split(" for ")[0]}
                      </motion.span>
                    </AnimatePresence>
                    <DropdownIcon direction="up" />{" "}
                  </span>
                  <span className="px-1">for</span>
                  <span className="inline-flex items-center gap-1 whitespace-normal sm:whitespace-nowrap text-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={phrases[phraseIndex] + "-second"}
                        initial={{ opacity: 0, y: -50, rotateX: 90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, y: 50, rotateX: -90 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="inline-block text-center"
                      >
                        {phrases[phraseIndex].split(" for ")[1]}
                      </motion.span>
                    </AnimatePresence>
                    <DropdownIcon direction="down" />{" "}
                  </span>
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* Bottom Left Captions */}
        <div className="absolute bottom-4 font-serif left-6 z-10 text-white text-sm max-w-xs">
          <AnimatePresence mode="wait">
            <motion.div
              key={bgIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-semibold text-base">
                {captions[bgIndex].title}
              </p>
              <p className="text-xs hidden md:block">
                {captions[bgIndex].description}
              </p>
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

      {/* Popup Modal */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            className="fixed inset-0 bg-black/10 backdrop-blur-md flex flex-col items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopupOpen(false)}
          >
            {/* Close Icon (Mobile Only, Centered, OUTSIDE popup) */}
            <button
              className="relative -top-6 md:hidden bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100 text-gray-700 mx-auto"
              onClick={() => setPopupOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <motion.div
              onClick={(e) => e.stopPropagation()} // Prevents clicking the modal from closing it
              className="bg-gray-100 rounded-xl max-w-[800px] w-full shadow-lg relative overflow-hidden flex flex-col items-center p-4 md:p-0"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.2 }}
            >
              {/* Image (Hidden on Mobile, Displayed on MD and Up) */}
              <img
                src={heroImages[bgIndex]}
                alt="popup"
                className="w-[70%] h-80 object-cover object-center rounded-md mt-4 hidden md:block"
              />

              {/* Tags and "We design..." content */}
              <div className="md:p-6 w-full pt-0 md:pt-6 flex flex-col items-center">
                <div className="flex flex-wrap justify-center gap-2 text-xs text-center text-black">
                  {[
                    "Books",
                    "Brand Identity",
                    "Brand Strategy",
                    "Campaigns",
                    "Data Driven Experiences",
                    "Digital Experiences",
                    "Exhibitions",
                    "Industrial/Product Design",
                    "Motion Graphics & Film",
                    "Packaging",
                    "Publications",
                    "Digital Experiences",
                    "Exhibitions",
                    "Industrial/Product Design",
                    "Motion Graphics & Film",
                    "Signage & Environmental Graphics",
                    "Typefaces",
                  ].map((tag, i) => (
                    <div
                      key={i}
                      className="bg-gray-300 border h-6 px-3 border-gray-200 rounded-md justify-center text-center cursor-pointer hover:bg-gray-100 flex items-center"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                {/* Text version for Mobile Views (this is always visible on mobile, outside the popup button) */}
                <p className="text-center text-xs text-gray-600 mt-4 pb-4 md:pb-0 md:hidden">
                  We design <span className="underline">Everything</span> for{" "}
                  <span className="underline">Everyone</span>
                </p>
              </div>
            </motion.div>

            {/* NEW LOCATION FOR THE BUTTON: Below the popup modal, but still within the backdrop */}
            {/* Added 'hidden md:flex' to hide on mobile and show as flex on medium+ screens */}
            <motion.div
              className="z-51 mt-6 hidden md:flex items-center justify-center w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <button
                // The onClick here is redundant as popup is already open.
                // Consider if you want it to close the popup, or do nothing.
                // For now, it just re-sets popupOpen to true, which is fine.
                onClick={() => setPopupOpen(true)}
                className="bg-gray-200 font-san bg-opacity-80 px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base text-black shadow-md backdrop-blur-md hover:bg-opacity-90 transition flex flex-wrap justify-center items-center gap-2 text-center max-w-[90%] mx-auto"
              >
                {/* When the popup is open, this button should show static text */}
                <>
                  We design{" "}
                  <span className="inline-flex items-center gap-1 whitespace-nowrap text-center">
                    Everything <DropdownIcon direction="up" />{" "}
                  </span>
                  <span className="px-1">for</span>
                  <span className="inline-flex items-center gap-1 whitespace-nowrap text-center">
                    Everyone <DropdownIcon direction="down" />{" "}
                  </span>
                </>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;