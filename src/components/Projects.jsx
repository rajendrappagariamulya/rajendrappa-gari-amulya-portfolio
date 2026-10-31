import { projects } from '../data/portfolioData'

function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ff2a2a]">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Featured Projects
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-8 sm:p-10 hover:border-neutral-700 transition-colors relative overflow-hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="text-sm font-mono text-neutral-500 font-semibold">
                  PROJECT {project.number}
                </span>
                {project.badge && (
                  <span className="px-3 py-1 text-xs font-semibold text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 rounded-full">
                    {project.badge}
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                {project.title}
              </h3>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.techTags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 rounded-lg transition-colors"
                  >
                    View Code
                  </a>
                ) : (
                  <span className="px-5 py-2.5 bg-neutral-900/50 text-neutral-500 border border-neutral-800 rounded-lg cursor-not-allowed">
                    Code Repository (Private / Academic)
                  </span>
                )}

                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#ff2a2a] hover:bg-[#e02424] text-white rounded-lg transition-colors"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="px-5 py-2.5 bg-neutral-900/40 text-neutral-500 border border-neutral-800/80 rounded-lg text-xs">
                    Demo Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
