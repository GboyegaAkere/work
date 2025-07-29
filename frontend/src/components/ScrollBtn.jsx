// components/ScrollTopButton.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react"; // install lucide-react

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={scrollToTop}
        className="fixed right-6 bottom-25 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-black transition"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>
    )
  );
};

export default ScrollBtn;
