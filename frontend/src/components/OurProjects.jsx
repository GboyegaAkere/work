import { motion } from "framer-motion";
import market from "../assets/images/market.webp";
import jew from "../assets/images/jew.webp";
import vidd from "../assets/images/vidd.mp4";

const projects = [
  {
    title: "Branding",
    image: market,
    video: vidd,
  },
  {
    title: "Websites – UX/UI",
    image: jew,
    video: vidd,
  },
  {
    title: "Branding",
    image: market,
    video: vidd,
  },
  {
    title: "Websites – UX/UI",
    image: jew,
    video: vidd,
  },
];

export default function OurProjects() {
  return (
    <section className="bg-gray-100 w-full py-16 px-6 md:px-20">
      {/* Section Heading */}
      <div className="mb-10">
        <p className="text-teal-500 text-sm font-medium uppercase">
          OUR PROJECTS
        </p>
        <h2 className="text-2xl md:text-4xl font-light leading-snug mt-2 text-gray-900">
          Seeing is believing what we do <br /> and how!
        </h2>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Hover Container */}
            <div className="overflow-hidden rounded-md shadow-md relative group">
              {/* Image (default) */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full object-cover transition-transform duration-500 group-hover:opacity-0"
              />

              {/* Video (on hover) */}
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                src={project.video}
                autoPlay
                loop
                muted
              />
            </div>

            {/* Title */}
            <p className="text-gray-500 text-sm mt-3">{project.title}</p>
          </motion.div>
        ))}
      </div>

      {/* View All Work Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
      >
        View All Work
      </motion.button>
    </section>
  );
}
