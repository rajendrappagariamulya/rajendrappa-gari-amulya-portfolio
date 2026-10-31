import { heroContent } from '../data/portfolioData'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black px-6 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 rounded-full">
          {heroContent.titleHighlight}
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          {heroContent.greeting}
        </h1>
        <p className="text-lg sm:text-2xl text-neutral-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {heroContent.subtitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={heroContent.ctaPrimary.href}
            className="px-7 py-3.5 bg-[#ff2a2a] hover:bg-[#e02424] text-white font-medium rounded-lg shadow-lg hover:shadow-[#ff2a2a]/20 transition-all cursor-pointer"
          >
            {heroContent.ctaPrimary.text}
          </a>
          <a
            href={heroContent.ctaSecondary.href}
            className="px-7 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-medium rounded-lg transition-all cursor-pointer"
          >
            {heroContent.ctaSecondary.text}
          </a>
          <a
            href={heroContent.ctaResume.href}
            download="Amulya resume01.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-transparent hover:bg-neutral-900 text-neutral-300 border border-neutral-800 font-medium rounded-lg transition-all cursor-pointer"
          >
            {heroContent.ctaResume.text}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
