import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroPoster from '../assets/about/profile.png'
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData'

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' })

    const handleLoad = () => AOS.refresh()
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  const renderSocialIcon = (network, href, label) => {
    if (!href) return null

    let iconPath = null
    if (network === 'github') {
      iconPath = (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      )
    } else if (network === 'linkedin') {
      iconPath = (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      )
    } else if (network === 'instagram') {
      iconPath = (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      )
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 hover:scale-110 transition-all shadow-sm"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          {iconPath}
        </svg>
      </a>
    )
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#ff2a2a] overflow-hidden pt-28 pb-16 lg:py-24"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-black/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-3xl pointer-events-none" />

      {/* Left floating social bar (desktop only) */}
      <aside className="hidden xl:flex flex-col gap-4 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference">
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-6 h-6 text-white/70 hover:text-white hover:scale-125 transition-all inline-block"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-6 h-6 text-white/70 hover:text-white hover:scale-125 transition-all inline-block"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        )}
      </aside>

      {/* Main Two-Column Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: All text content (50% width on desktop) */}
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center items-start text-left order-2 lg:order-1"
          >
            {/* Small badge */}
            <span className="inline-block px-3.5 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-white bg-black/25 border border-white/20 rounded-full backdrop-blur-sm">
              Portfolio
            </span>

            {/* Full Name clearly displayed */}
            <h1
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight mb-2 drop-shadow-md"
              style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}
            >
              {personalInfo.name}
            </h1>

            {/* Role Title in bold white text below name */}
            <h2
              className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-5 drop-shadow-md"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
            >
              {heroContent.titleHighlight}
            </h2>

            {/* Introduction paragraph */}
            <p
              className="text-white/95 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-medium drop-shadow-sm"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
            >
              {heroContent.subtitle}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              {heroContent.ctaPrimary && (
                <a
                  href={heroContent.ctaPrimary.href}
                  className="px-6 sm:px-7 py-3 rounded-full bg-white text-black font-bold text-sm sm:text-base hover:bg-neutral-100 hover:scale-105 transition-all shadow-xl cursor-pointer"
                >
                  {heroContent.ctaPrimary.text}
                </a>
              )}

              {heroContent.ctaSecondary && (
                <a
                  href={heroContent.ctaSecondary.href}
                  className="px-6 sm:px-7 py-3 rounded-full bg-black/40 border border-white/80 text-white font-bold text-sm sm:text-base backdrop-blur-md hover:bg-black/60 hover:scale-105 transition-all shadow-xl cursor-pointer"
                >
                  {heroContent.ctaSecondary.text}
                </a>
              )}

              {heroContent.ctaResume && heroContent.ctaResume.href && (
                <a
                  href={heroContent.ctaResume.href}
                  download="Amulya resume01.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-7 py-3 rounded-full bg-white/10 border border-white/60 text-white font-bold text-sm sm:text-base backdrop-blur-md flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all shadow-xl cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 fill-none stroke-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>{heroContent.ctaResume.text}</span>
                </a>
              )}
            </div>

            {/* Social icons visible on both desktop & mobile */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-white/80 text-xs font-semibold uppercase tracking-wider mr-1">
                Connect:
              </span>
              {renderSocialIcon('github', socialLinks.github, 'GitHub')}
              {renderSocialIcon('linkedin', socialLinks.linkedin, 'LinkedIn')}
              {renderSocialIcon('instagram', socialLinks.instagram, 'Instagram')}
            </div>
          </div>

          {/* RIGHT COLUMN: Profile photo (50% width on desktop) */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="flex justify-center items-center order-1 lg:order-2 w-full"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[4/5] flex items-center justify-center">
              {/* Soft ambient shadow behind card */}
              <div className="absolute inset-0 bg-black/25 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

              {/* Professional photo card container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/25 shadow-2xl bg-black/10 backdrop-blur-sm p-3.5 flex items-center justify-center">
                <img
                  src={heroPoster}
                  alt={personalInfo.name}
                  className="w-full h-full object-contain rounded-2xl drop-shadow-xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-centre bouncing down-arrow */}
      <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce pointer-events-none">
        <a
          href="#about"
          className="text-white pointer-events-auto block opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Scroll to About section"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
