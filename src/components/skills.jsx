import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vue",
  "Tailwind CSS",
  "Laravel",
  "GitHub",
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-14 text-center">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
            }}
            className="
              group
              relative
              overflow-hidden
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-6
              text-center
              transition-all
              duration-100
              hover:border-cyan-400/50
              hover:bg-cyan-500/10
              hover:shadow-lg
              hover:shadow-cyan-500/20
              cursor-pointer
            "
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />

            <span className="relative z-10 text-lg font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
