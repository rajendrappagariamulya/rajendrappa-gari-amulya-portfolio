import { personalInfo } from '../data/portfolioData'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 rounded-full">
          Portfolio Active &amp; Ready
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Hi, I&apos;m <span className="text-[#ff2a2a]">{personalInfo.name}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-neutral-400 font-light mb-4">
          {personalInfo.role}
        </p>
        <p className="text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.bio}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-[#ff2a2a] hover:bg-[#e02424] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#ff2a2a]/20 transition-all"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold rounded-lg transition-all"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
