import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Youtube, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  // Detect scroll crossing first section
  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.9; // Adjust threshold
      setSolid(window.scrollY > triggerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const menuVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: 0.1, duration: 0.3 } },
  };

  return (
    <nav
      className={`w-full flex justify-between items-center px-6 md:px-16 py-4 fixed top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div
        className={`text-2xl font-serif tracking-widest ${
          solid ? "text-gray-800" : "text-white"
        }`}
      >
        MINDSEYE
      </div>

      {/* Desktop Links */}
      <div
        className={`hidden md:flex space-x-10 text-sm font-light ${
          solid ? "text-gray-600" : "text-white"
        }`}
      >
        <a href="#capabilities" className="hover:text-black transition">
          CAPABILITIES
        </a>
        <a href="#ourwork" className="hover:text-black transition">
          OUR WORK
        </a>
        <a href="#studio" className="hover:text-black transition">
          STUDIO
        </a>
        <a href="#contact" className="hover:text-black transition">
          CONTACT
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className={`md:hidden ${solid ? "text-gray-800" : "text-white"} z-50`}
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-between z-40"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center p-6">
              <div className="text-2xl font-serif tracking-widest text-white">
                MINDSEYE
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links (Left-aligned) */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col space-y-6 text-lg font-light text-white px-6"
            >
              <a href="#home" onClick={() => setIsOpen(false)}>HOME</a>
              <a href="#capabilities" onClick={() => setIsOpen(false)}>CAPABILITIES</a>
              <a href="#ourwork" onClick={() => setIsOpen(false)}>OUR WORK</a>
              <a href="#studio" onClick={() => setIsOpen(false)}>STUDIO</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
            </motion.div>

            {/* Social Icons (Bottom Left) */}
            <div className="flex space-x-6 text-white px-6 pb-8">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
