import { technicalSkills, softSkillsList } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="py-24 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ff2a2a]">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Skills &amp; Expertise
          </h2>
        </div>

        {/* Technical skills categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technicalSkills.categories.map((category) => (
            <div
              key={category.title}
              className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors"
            >
              <h3 className="text-base font-bold text-white mb-4 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="w-2 h-2 rounded-full bg-[#ff2a2a]" />
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="text-sm text-neutral-300 flex items-center gap-2"
                  >
                    <span className="text-[#ff2a2a] text-xs">▸</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Professional Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkillsList.map((skill) => (
              <div
                key={skill.name}
                className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-5 hover:border-[#ff2a2a]/40 transition-colors"
              >
                <div className="text-2xl mb-3">{skill.icon}</div>
                <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
