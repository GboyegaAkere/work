import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import jew from "../assets/images/jew.webp";
import logo1 from "../assets/images/Frame-1.png.webp"
import logo2 from "../assets/images/Asset-1@3x-8-1.png.webp"

export default function Teams() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-auto md:h-screen flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start overflow-hidden"
    >
      <motion.div
        style={{ y, backgroundImage: `url(${jew})` }}
        className="hidden md:block absolute inset-0 bg-cover bg-center scale-110"
      ></motion.div>

      <motion.img
        style={{ y }}
        src={jew}
        alt="Team Background"
        className="block md:hidden w-full h-85 md:64 object-cover scale-110"
      />

      <div className="hidden md:block absolute inset-0 bg-black/20"></div>

      <div
        className="relative md:max-w-3xl bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-md shadow-md text-left
        mt-6 md:mt-0 md:absolute md:top-1/2 md:left-20 md:-translate-y-1/2"
      >
        <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-snug">
          We are two teams,
          <br className="hidden md:inline" /> one sensibility.
        </h2>
        <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed">
          At MEC, we make ideas come alive. At Slidexpress, we make the most
          expressive presentations in the world, stretching the power of the
          possible. We breathe the same oxygen when it comes to delivering the
          best B2B communication design.
        </p>
        <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed">
          Together, we cover the whole spectrum across creative direction,
          execution and strategy media, brand identity, marketing communication,
          research and insights.
        </p>

        <div className="flex items-center space-x-6 mt-6">
          <img src={logo1} alt="Mindseye" className="h-4 md:h-8" />
          <span className="text-3xl">|</span>
          <img src={logo2} alt="Slidexpress" className="h-5 md:h-8" />
        </div>
      </div>
    </section>
  );
}