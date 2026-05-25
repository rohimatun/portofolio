import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="\"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-120px] left-[-120px] w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"
      />

      <div className="relative z-10 text-center max-w-4xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-6 backdrop-blur-md"
        >
          Web Developer
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            y: {
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Rohimatun Nurin Nadhifah
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed"
        >
          I build modern, responsive, and interactive web applications with
          clean UI and smooth user experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-600 transition duration-300 shadow-lg shadow-cyan-500/20"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 backdrop-blur-md"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
