import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-cyan-400/50
              hover:bg-cyan-500/10 hover:shadow-lg
              hover:shadow-cyan-500/20 transition duration-300"
          >
            {/* Preview */}
            <img
              src={project.image}
              alt={project.title}
              className="h-52 w-full object-cover"
            />

            <div className="p-6">
              {/* Title */}
              <h3 className="text-2xl font-semibold">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mt-4">{project.description}</p>

              {/* Tech Stack */}
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

              {/* Button */}
              <div className="flex gap-4 mt-6">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
                  >
                    GitHub
                  </a>
                ) : (
                  <button className="px-4 py-2 rounded-xl bg-cyan-500/30 text-white cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
