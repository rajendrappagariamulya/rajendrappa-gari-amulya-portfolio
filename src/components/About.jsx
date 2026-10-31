import { aboutContent, personalInfo, education } from '../data/portfolioData'

function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ff2a2a]">
            Discover
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              {aboutContent.heading}
            </h3>
            <div
              className="text-neutral-300 leading-relaxed text-base sm:text-lg"
              dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
            />
            <div className="pt-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {aboutContent.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded-md text-sm text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black/60 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h4 className="text-lg font-bold text-white border-b border-neutral-800 pb-3">
              Quick Facts
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-neutral-500 uppercase text-xs font-semibold">Location</p>
                <p className="text-neutral-200">{personalInfo.location}</p>
              </div>
              <div>
                <p className="text-neutral-500 uppercase text-xs font-semibold">Education</p>
                <p className="text-neutral-200 font-medium">{education.degree}</p>
                <p className="text-neutral-400 text-xs">{education.institution}</p>
                <p className="text-neutral-500 text-xs">{education.cgpa}</p>
              </div>
              <div>
                <p className="text-neutral-500 uppercase text-xs font-semibold">Email</p>
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="text-neutral-200 hover:text-[#ff2a2a] transition-colors break-all"
                >
                  {personalInfo.emails.primary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
