import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I'm Rohimatun Nurin Nadhifah
        </motion.h1>

        <p className="mt-6 text-gray-400 text-lg md:text-xl">
          A front-end developer who builds modern, responsive web applications.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
