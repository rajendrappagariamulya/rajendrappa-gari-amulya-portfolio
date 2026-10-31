import { internshipsList, leadershipList } from '../data/portfolioData'

function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ff2a2a]">
            Career Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Experience &amp; Activities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Internship */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Internship Experience
            </h3>
            <div className="space-y-6">
              {internshipsList.map((item) => (
                <div
                  key={item.organization}
                  className="bg-black border border-neutral-800 rounded-xl p-6"
                >
                  <span className="text-xs font-mono text-[#ff2a2a] block mb-1">
                    {item.duration}
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    {item.role}
                  </h4>
                  <p className="text-sm text-neutral-400 font-medium mb-4">
                    {item.organization}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
                      Key Competencies
                    </p>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {item.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2">
                          <span className="text-[#ff2a2a]">✓</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-900">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-neutral-900 text-neutral-300 rounded text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities / Practice */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Technical Practice &amp; Growth
            </h3>
            <div className="space-y-6">
              {leadershipList.map((item) => (
                <div
                  key={item.title}
                  className="bg-black border border-neutral-800 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 text-xs font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 rounded">
                      {item.badge}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">
                      {item.role}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
