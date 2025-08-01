import { motion } from "framer-motion";
import cat from "../assets/images/cat.gif"

export default function Creativity() {
  return (
    <section className="w-full pt-26 bg-white h-130 flex flex-col md:flex-row items-start justify-center py-20 px-6 md:px-20">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-start text-left space-y-4 md:w-1/2"
      >
        <img
          src={cat} 
          alt="Cat Icon"
          className="w-30 h-30"
        />

        <h2 className="text-3xl md:text-4xl font-light leading-snug text-gray-900">
          We stretch creativity <br /> across possibilities.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 md:mt-15 md:w-1/2 text-left space-y-6"
      >
        <p className="text-gray-600 text-base leading-relaxed">
          We find the right shade of you. We shape every idea until it feels
          right. We understand the design problem by asking a zillion
          questions. We apply the same sensibility of aesthetic excellence
          across the board. We adapt to the new and adopt what works for you.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
        >
          Read more
        </motion.button>
      </motion.div>
    </section>
  );
}