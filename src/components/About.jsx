import { useState } from 'react'
import { aboutContent, personalInfo, education, socialLinks } from '../data/portfolioData'
import profileImg from '../assets/about/profile.png'

function About() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ff2a2a]">
            Discover
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Interactive Digital Visiting Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              className="group cursor-pointer select-none w-full max-w-sm"
              style={{ perspective: '1000px' }}
              onClick={() => setIsFlipped(!isFlipped)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setIsFlipped(!isFlipped)
                }
              }}
              aria-label="Interactive digital visiting card. Click to flip."
            >
              <div
                className="relative w-full h-[500px] rounded-2xl shadow-2xl transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* CARD FRONT */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl p-6 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 border border-neutral-800 flex flex-col justify-between shadow-xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a] animate-pulse" />
                      <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                        Digital ID
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <span>Click to flip</span>
                      <span>↺</span>
                    </span>
                  </div>

                  {/* Profile Photo & Identity */}
                  <div className="flex flex-col items-center text-center my-auto">
                    <div className="relative group/avatar mb-4">
                      <div className="absolute -inset-1 bg-gradient-to-tr from-[#ff2a2a] to-neutral-700 rounded-2xl blur-sm opacity-70" />
                      <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-white/20 bg-black shadow-lg">
                        <img
                          src={profileImg}
                          alt={personalInfo.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-white tracking-tight">
                      {personalInfo.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#ff2a2a] mt-1">
                      {personalInfo.title}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1 justify-center">
                      <span>📍</span>
                      <span>{personalInfo.location}</span>
                    </p>
                  </div>

                  {/* Bottom hint bar */}
                  <div className="pt-3 border-t border-neutral-800/80 text-center">
                    <p className="text-[11px] text-neutral-400 flex items-center justify-center gap-1.5">
                      <span>Tap to reveal contact details &amp; networks</span>
                      <span className="text-[#ff2a2a]">↺</span>
                    </p>
                  </div>
                </div>

                {/* CARD BACK */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl p-6 bg-gradient-to-br from-[#160606] via-neutral-950 to-black border border-[#ff2a2a]/40 flex flex-col justify-between shadow-2xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a]" />
                      <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                        Contact Info
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 px-2.5 py-0.5 rounded-full">
                      Flip back ↻
                    </span>
                  </div>

                  {/* Identity Header */}
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#ff2a2a]">
                      {personalInfo.title}
                    </p>
                  </div>

                  {/* Direct Details */}
                  <div className="space-y-2.5 text-xs">
                    {/* Email */}
                    <a
                      href={`mailto:${personalInfo.emails.primary}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-black/60 border border-neutral-800 hover:border-[#ff2a2a]/60 text-neutral-200 hover:text-white transition-all group/item"
                    >
                      <span className="w-7 h-7 rounded-lg bg-neutral-900 flex items-center justify-center text-[#ff2a2a] group-hover/item:scale-110 transition-transform">
                        ✉
                      </span>
                      <span className="truncate font-medium">{personalInfo.emails.primary}</span>
                    </a>

                    {/* Phone */}
                    {personalInfo.phone && (
                      <a
                        href={`tel:${personalInfo.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-black/60 border border-neutral-800 hover:border-[#ff2a2a]/60 text-neutral-200 hover:text-white transition-all group/item"
                      >
                        <span className="w-7 h-7 rounded-lg bg-neutral-900 flex items-center justify-center text-[#ff2a2a] group-hover/item:scale-110 transition-transform">
                          📞
                        </span>
                        <span className="font-medium">{personalInfo.phone}</span>
                      </a>
                    )}

                    {/* Location */}
                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-black/60 border border-neutral-800 text-neutral-300">
                      <span className="w-7 h-7 rounded-lg bg-neutral-900 flex items-center justify-center text-[#ff2a2a]">
                        📍
                      </span>
                      <span className="font-medium">{personalInfo.location}</span>
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="pt-2">
                    <p className="text-[10px] uppercase font-semibold text-neutral-500 mb-2">
                      Social Profiles
                    </p>
                    <div className="flex gap-2">
                      {socialLinks.github && (
                        <a
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2 text-center text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-[#ff2a2a]/50 text-white rounded-lg transition-all"
                        >
                          GitHub
                        </a>
                      )}
                      {socialLinks.linkedin && (
                        <a
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2 text-center text-xs font-semibold bg-[#ff2a2a] hover:bg-[#e02424] text-white rounded-lg shadow-md transition-all"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bottom indicator */}
                  <div className="pt-2 border-t border-neutral-900 text-center">
                    <p className="text-[10px] text-neutral-500">
                      Click anywhere on card to flip back
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mt-3 font-medium">
              Interactive Digital Visiting Card (Click to flip)
            </p>
          </div>

          {/* Bio & Details */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {aboutContent.heading}
              </h3>
              <div
                className="text-neutral-300 leading-relaxed text-base sm:text-lg"
                dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
              />
            </div>

            {/* Core Technologies */}
            <div>
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

            {/* Quick Education & Location Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-4">
                <p className="text-neutral-500 uppercase text-[10px] font-bold tracking-wider mb-1">
                  Education
                </p>
                <p className="text-sm font-semibold text-white">{education.degree}</p>
                <p className="text-xs text-neutral-400">{education.institution}</p>
                <p className="text-xs text-neutral-500 mt-1">{education.cgpa}</p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-4">
                <p className="text-neutral-500 uppercase text-[10px] font-bold tracking-wider mb-1">
                  Availability &amp; Base
                </p>
                <p className="text-sm font-semibold text-white">{personalInfo.location}</p>
                <p className="text-xs text-neutral-400">Open to Full-Stack Developer Roles</p>
                <p className="text-xs text-[#ff2a2a] mt-1 font-medium">Immediate Joiner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
