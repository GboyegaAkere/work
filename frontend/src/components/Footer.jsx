/** @format */
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">

        {/* MOBILE VIEW */}
        <div className="block md:hidden space-y-6">
          {/* MINDSEYE for Mobile - ADDED THIS BLOCK */}
          <motion.h2
            className="text-2xl font-serif tracking-wide mb-6" // Added margin-bottom for spacing
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            MINDSEYE
          </motion.h2>

          <motion.div className="text-xs text-gray-400 space-y-1" initial="hidden" animate="visible" variants={containerVariants}>
            <motion.p variants={itemVariants}>A Full-Service Digital Marketing Agency</motion.p>
            <motion.p variants={itemVariants}>902 Marathon Icon</motion.p>
            <motion.p variants={itemVariants}>Off GK Marg, Lower Parel West</motion.p>
            <motion.p variants={itemVariants}>Mumbai 400 013</motion.p>
          </motion.div>

          {/* Contact */}
          <div className="mt-6">
            <h3 className="text-teal-400 text-sm font-semibold uppercase">Contact Us</h3>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-1">
              <motion.p variants={itemVariants} className="text-sm">+91 22 4004 8865 / 8864 / 8832</motion.p>
              <motion.div variants={itemVariants}>
                <a href="mailto:letstalk@mecstudio.com" className="footer-link text-sm">
                  letstalk@mecstudio.com
                </a>
              </motion.div>
              <motion.div variants={itemVariants}>
                <a href="#" className="footer-link text-sm">Get Directions</a>
              </motion.div>
            </motion.div>
          </div>

          {/* Big Email */}
          <motion.div initial="hidden" animate="visible" variants={itemVariants} className="mt-6">
            <a href="mailto:letstalk@mecstudio.com" className="footer-link text-lg font-medium text-teal-100">
              letstalk@mecstudio.com
            </a>
          </motion.div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Agency */}
            <div>
              <h3 className="text-teal-400 text-sm font-semibold uppercase">Agency</h3>
              <motion.ul className="space-y-1 text-sm" initial="hidden" animate="visible" variants={containerVariants}>
                {["Home", "Capabilities", "Our Work / Portfolio", "Studio", "Contact"].map((text) => (
                  <motion.li key={text} variants={itemVariants}>
                    <a href="#" className="footer-link">{text}</a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-teal-400 text-sm font-semibold uppercase">Solutions</h3>
              <motion.ul className="space-y-1 text-sm" initial="hidden" animate="visible" variants={containerVariants}>
                {["Branding", "Website UX/UI", "Marketing Collaterals", "Events", "Presentation", "Illustrations", "Animation & Video", "Research & Insights"].map((text) => (
                  <motion.li key={text} variants={itemVariants}>
                    <a href="#" className="footer-link">{text}</a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          {/* Social */}
          <motion.div className="flex gap-4 text-2xl mt-6" initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="footer-link"><FaYoutube /></a>
            </motion.div>
            <motion.div variants={itemVariants}>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-link"><FaLinkedin /></a>
            </motion.div>
          </motion.div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:block">
          <div className="flex flex-col gap-10">
            {/* Top Row */}
            <motion.div className="flex justify-between items-center" initial="hidden" animate="visible" variants={containerVariants}>
              <motion.h2 variants={itemVariants} className="text-2xl font-serif tracking-wide">MINDSEYE</motion.h2>
              <motion.div variants={itemVariants}>
                <a href="mailto:letstalk@mecstudio.com" className="footer-link text-2xl font-medium">
                  letstalk@mecstudio.com
                </a>
              </motion.div>
            </motion.div>

            {/* Bottom Row */}
            <div className="grid grid-cols-4 gap-8">
              {/* Address */}
              <div>
                <h3 className="text-teal-400 text-sm font-semibold uppercase mb-2">Address</h3>
                <motion.div className="space-y-1" initial="hidden" animate="visible" variants={containerVariants}>
                  <motion.p variants={itemVariants} className="text-sm leading-relaxed">
                    902 Marathon Icon,<br />Off GK Marg,<br />Lower Parel West,<br />Mumbai 400 013
                  </motion.p>
                  <motion.div className="flex gap-4 mt-4 text-2xl" initial="hidden" animate="visible" variants={containerVariants}>
                    <motion.div variants={itemVariants}>
                      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="footer-link"><FaYoutube /></a>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-link"><FaLinkedin /></a>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-teal-400 text-sm font-semibold uppercase mb-2">Contact Us</h3>
                <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                  <motion.p variants={itemVariants} className="text-sm">+91 22 4004 8865 / 8864 / 8832</motion.p>
                  <motion.div variants={itemVariants}>
                    <a href="mailto:letstalk@mecstudio.com" className="footer-link block text-sm mt-2">
                      letstalk@mecstudio.com
                    </a>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <a href="#" className="footer-link text-sm mt-2 inline-block">Get Directions</a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Agency Links */}
              <div>
                <h3 className="text-teal-400 text-sm font-semibold uppercase mb-2">Agency</h3>
                <motion.ul className="space-y-1 text-sm" initial="hidden" animate="visible" variants={containerVariants}>
                  {["Home", "Capabilities", "Our Work / Portfolio", "Studio", "Contact"].map((text) => (
                    <motion.li key={text} variants={itemVariants}>
                      <a href="#" className="footer-link">{text}</a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Solutions Links */}
              <div>
                <h3 className="text-teal-400 text-sm font-semibold uppercase mb-2">Solutions</h3>
                <motion.ul className="space-y-1 text-sm" initial="hidden" animate="visible" variants={containerVariants}>
                  {["Branding", "Website UX/UI", "Marketing Collaterals", "Events", "Presentation", "Illustrations", "Animation & Video", "Research & Insights"].map((text) => (
                    <motion.li key={text} variants={itemVariants}>
                      <a href="#" className="footer-link">{text}</a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}