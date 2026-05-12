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
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
