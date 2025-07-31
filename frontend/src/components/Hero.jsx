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
      "Designing timeless visual identitie for modern fashion brands.",
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

const everythingOptions = [
  "Books",
  "Brand Identity",
  "Brand Strategy",
  "Motion Graphics & Film",
  "Packaging",
  "Publications",
  "Campaigns",
  "Data Driven Experiences",
  "Digital Experiences",
  "Exhibitions",
  "Industrial/Product Design",
  "Motion Graphics & Film",
  "Packaging",
  "Publications",
  "Signage & Environmental Graphics",
  "Typefaces",
];

const everyoneOptions = [
  "Arts & Culture",
  "Civic & Public",
  "Consumer Brands",
  "Education",
  "Entertainment",
  "Fashion & Beauty",
  "Finance",
  "Food & Drink",
  "Health",
  "Hospitality & Travel",
  "Manufacturing & Industrials",
  "Non-profits",
  "Professional Services",
  "Publishing",
  "Real Estate",
  "Technology",
  "Transport",
];

const allCategories = [...new Set([...everythingOptions, ...everyoneOptions])];

const MOBILE_BREAKPOINT = 768;

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isButtonTextStatic, setIsButtonTextStatic] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);
  const [isSpinning, setIsSpinning] = useState(false); // State for spinning effect
  const [currentDisplayPart1, setCurrentDisplayPart1] = useState(""); // Text displayed during spin or final
  const [currentDisplayPart2, setCurrentDisplayPart2] = useState(""); // Text displayed during spin or final

  const [activeCategoryFilter, setActiveCategoryFilter] = useState("Everything");

  const heroRef = useRef(null);
  const intervalRef = useRef(null);
  const popupContentRef = useRef(null);
  const filterElementRef = useRef(null);

  // Initialize display parts with the first phrase on mount
  useEffect(() => {
    const [part1, part2] = phrases[0].split(" for ");
    setCurrentDisplayPart1(part1);
    setCurrentDisplayPart2(part2);
  }, []);

  // Background image rotation
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

  // Modified useEffect for phrase rotation with "spin and stop" effect
  useEffect(() => {
    let spinTimeout;
    let spinInterval;

    const animateNextPhrase = () => {
      // Clear any existing timeouts/intervals to prevent overlaps
      clearTimeout(spinTimeout);
      clearInterval(spinInterval);

      // 1. Display the current "stopped" phrase
      const [initialPart1, initialPart2] = phrases[phraseIndex].split(" for ");
      setCurrentDisplayPart1(initialPart1);
      setCurrentDisplayPart2(initialPart2);
      setIsSpinning(false); // Ensure it's not spinning when showing the final phrase

      // 2. After a delay (the "stop" duration), start the spin
      spinTimeout = setTimeout(() => {
        setIsSpinning(true); // Indicate spinning state for animation transition
        let currentSpinCount = 0;
        const totalSpins = 5; // How many random words to show during the spin (quick changes)
        const spinDuration = 100; // Milliseconds per word change during spin

        spinInterval = setInterval(() => {
          if (currentSpinCount < totalSpins) {
            // Display random words during the rapid spin
            const randomEverything = everythingOptions[Math.floor(Math.random() * everythingOptions.length)];
            const randomEveryone = everyoneOptions[Math.floor(Math.random() * everyoneOptions.length)];
            setCurrentDisplayPart1(randomEverything);
            setCurrentDisplayPart2(randomEveryone);
            currentSpinCount++;
          } else {
            // 3. Stop spinning and set the actual next phrase
            clearInterval(spinInterval); // Stop the rapid spinning
            setIsSpinning(false); // End spinning state

            // Update phraseIndex to the next phrase
            setPhraseIndex((prev) => {
              const nextIndex = (prev + 1) % phrases.length;
              return nextIndex;
            });
          }
        }, spinDuration);
      }, 2000); // Display current phrase for 2 seconds (the "stop" duration)
    };

    // Start the first animation cycle
    animateNextPhrase();

    // Cleanup function: Clear any active timers when the component unmounts
    return () => {
      clearTimeout(spinTimeout);
      clearInterval(spinInterval);
    };
  }, [phraseIndex]); // Re-run effect when phraseIndex changes, which now drives the sequence

  useEffect(() => {
    const handleScroll = () => {
      if (!popupOpen) {
        const scrolledPastHero = window.scrollY > 100;
        setShowSticky(scrolledPastHero);
        setIsButtonTextStatic(scrolledPastHero);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [popupOpen]);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!popupOpen) {
      setActiveCategoryFilter("Everything");
    }
  }, [popupOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupOpen) {
        if (!isMobile && popupContentRef.current && filterElementRef.current) {
          if (!popupContentRef.current.contains(event.target) && !filterElementRef.current.contains(event.target)) {
            setPopupOpen(false);
          }
        }
        else if (isMobile && popupContentRef.current && !popupContentRef.current.contains(event.target)) {
          setPopupOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupOpen, isMobile]);

  const DropdownIcon = ({ isActive }) => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4 transition-transform duration-200"
      animate={{ rotate: isActive ? 180 : 0 }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </motion.svg>
  );

  const getCategoriesToDisplay = () => {
    switch (activeCategoryFilter) {
      case "Everything":
        return everythingOptions;
      case "Everyone":
        return everyoneOptions;
      default:
        return everythingOptions;
    }
  };

  return (
    <>
      <section
        ref={heroRef}
        className="relative w-full h-200 md:h-screen overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={heroImages[bgIndex]}
            alt="background"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        </div>

        <div className="absolute inset-0 bg-opacity-20" />

        {/* Main hero button that opens the popup */}
        {!popupOpen && (
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
              // Retaining the button's min-width, but the key change is within the spinning spans
              className={`bg-gray-200 font-san bg-opacity-80 px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base text-black shadow-md backdrop-blur-md hover:bg-opacity-90 transition flex flex-wrap justify-center items-center gap-2 text-center max-w-[90%] mx-auto ${
                !isButtonTextStatic ? 'min-w-[12rem]' : ''
              }`}
            >
              {isButtonTextStatic ? (
                <>
                  We design{" "}
                  <span className="inline-flex items-center gap-1 whitespace-nowrap text-center">
                    Everything <DropdownIcon />{" "}
                  </span>
                  <span className="px-1">for</span>
                  <span className="inline-flex items-center gap-1 whitespace-nowrap text-center">
                    Everyone <DropdownIcon />{" "}
                  </span>
                </>
              ) : (
                <>
                  We design{" "}
                  <span className="inline-flex items-center gap-1 whitespace-normal sm:whitespace-nowrap text-center">
                    {/* BEGIN: Fixed-width container for spinning text part 1 */}
                    <span className="relative inline-flex items-center justify-center text-center overflow-hidden min-w-[8rem] max-w-[18rem]"> {/* Adjust min/max widths as needed */}
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentDisplayPart1} // Key changes based on `currentDisplayPart1`
                          initial={{ opacity: 0, y: -5 }} // Reduced vertical movement
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }} // Reduced vertical movement
                          transition={{ duration: isSpinning ? 0.05 : 0.15, ease: "easeOut" }}
                          className="inline-block whitespace-nowrap" // Prevents text wrapping
                        >
                          {currentDisplayPart1}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                    {/* END: Fixed-width container for spinning text part 1 */}
                    <DropdownIcon />{" "}
                  </span>
                  <span className="px-1">for</span>
                  <span className="inline-flex items-center gap-1 whitespace-normal sm:whitespace-nowrap text-center">
                    {/* BEGIN: Fixed-width container for spinning text part 2 */}
                    <span className="relative inline-flex items-center justify-center text-center overflow-hidden min-w-[8rem] max-w-[18rem]"> {/* Adjust min/max widths as needed */}
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentDisplayPart2} // Key changes based on `currentDisplayPart2`
                          initial={{ opacity: 0, y: -5 }} // Reduced vertical movement
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }} // Reduced vertical movement
                          transition={{ duration: isSpinning ? 0.05 : 0.15, ease: "easeOut" }}
                          className="inline-block whitespace-nowrap" // Prevents text wrapping
                        >
                          {currentDisplayPart2}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                    {/* END: Fixed-width container for spinning text part 2 */}
                    <DropdownIcon />{" "}
                  </span>
                </>
              )}
            </button>
          </motion.div>
        )}

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

      {/* This is the popup section */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            className="fixed inset-0 bg-black/10 backdrop-blur-md flex flex-col items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopupOpen(false)}
          >
            {/* Mobile close button (top) */}
            <button
              className="relative -top-6 md:hidden bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100 text-gray-700 mx-auto"
              onClick={(e) => {
                e.stopPropagation();
                setPopupOpen(false);
              }}
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
              ref={popupContentRef}
              onClick={(e) => e.stopPropagation()}
              // MODIFIED: Adjusted width and height for desktop popup
              className="bg-gray-100 rounded-xl md:max-w-[878px] md:h-[569px] w-full shadow-lg relative overflow-hidden flex flex-col items-center p-4 md:p-0"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.2 }}
            >
              <img
                src={heroImages[bgIndex]}
                alt="popup"
                className="w-[70%] h-80 object-cover object-center rounded-md mt-4 hidden md:block"
              />

              <div className="md:p-6 w-full pt-0 md:pt-6 flex flex-col items-center">
                {/* Display filtered categories */}
                <div className="flex flex-wrap justify-center gap-2 text-xs text-center text-black mt-4 w-full px-4 md:px-0">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={activeCategoryFilter}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-wrap justify-center gap-2 w-full"
                    >
                      {getCategoriesToDisplay().map((tag) => (
                        <div
                          key={tag}
                          className="bg-gray-300 border h-6 px-3 border-gray-200 rounded-md justify-center text-center flex items-center cursor-pointer hover:bg-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {tag}
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Mobile Filter Element: Inside the popup content */}
                {isMobile && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="font-san text-sm text-black text-center mt-6 p-2 w-full max-w-[90%] mx-auto"
                  >
                    We design{" "}
                    <span
                      className={`inline-flex items-center gap-1 whitespace-nowrap cursor-pointer ${activeCategoryFilter === 'Everything' ? 'font-bold' : 'hover:text-gray-700'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCategoryFilter("Everything");
                      }}
                    >
                      Everything <DropdownIcon isActive={activeCategoryFilter === 'Everything'} />
                    </span>
                    <span className="px-1">for</span>
                    <span
                      className={`inline-flex items-center gap-1 whitespace-nowrap cursor-pointer ${activeCategoryFilter === 'Everyone' ? 'font-bold' : 'hover:text-gray-700'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCategoryFilter("Everyone");
                      }}
                    >
                      Everyone <DropdownIcon isActive={activeCategoryFilter === 'Everyone'} />
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Desktop Filter Element: Outside the popup content */}
            {!isMobile && (
              <motion.button
                ref={filterElementRef}
                onClick={(e) => e.stopPropagation()}
                // MODIFIED: Removed transparency and backdrop-blur, adjusted hover effect
                className="z-51 font-san bg-gray-200 px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base text-black shadow-md hover:bg-gray-300 transition flex flex-wrap justify-center items-center gap-2 text-center max-w-[90%] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: -30 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                We design{" "}
                <span
                  className={`inline-flex items-center gap-1 whitespace-nowrap text-center cursor-pointer ${activeCategoryFilter === 'Everything' ? 'font-bold' : 'hover:text-gray-700'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCategoryFilter("Everything");
                  }}
                >
                  Everything <DropdownIcon isActive={activeCategoryFilter === 'Everything'} />
                </span>
                <span className="px-1">for</span>
                <span
                  className={`inline-flex items-center gap-1 whitespace-nowrap text-center cursor-pointer ${activeCategoryFilter === 'Everyone' ? 'font-bold' : 'hover:text-gray-700'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCategoryFilter("Everyone");
                  }}
                >
                  Everyone <DropdownIcon isActive={activeCategoryFilter === 'Everyone'} />
                </span>
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;