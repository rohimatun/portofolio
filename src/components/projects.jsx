import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition"
          >
            <div className="h-52 bg-gradient-to-r from-cyan-500 to-blue-500" />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">{project.title}</h3>

              <p className="text-gray-400 mt-4">{project.description}</p>

              <div className="flex gap-3 mt-4 flex-wrap">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
