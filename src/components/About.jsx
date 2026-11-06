import { useState } from 'react'
import { aboutContent, personalInfo, education, socialLinks } from '../data/portfolioData'
import profileImg from '../assets/about/profile.png'

function About() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] text-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ff2a2a]">
            Discover
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Hanging ID Badge Visiting Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Lanyard Strap & Clip Assembly */}
            <div className="flex flex-col items-center z-10 -mb-3 pointer-events-none">
              {/* Lanyard Strap hanging from above */}
              <div className="w-8 h-12 bg-gradient-to-b from-[#b31414] via-[#ff2a2a] to-[#d41e1e] border-x border-[#ff6666]/40 shadow-md relative flex items-center justify-center">
                <span className="text-[7px] text-white/90 font-mono font-bold tracking-widest -rotate-90 select-none">
                  DEV
                </span>
              </div>

              {/* Metal Buckle / Connector */}
              <div className="w-10 h-3 bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-400 rounded-sm shadow-sm border border-neutral-500" />

              {/* Steel Clip / Clasp */}
              <div className="w-4 h-6 bg-gradient-to-b from-neutral-300 via-neutral-100 to-neutral-400 border border-neutral-500 rounded-b-md shadow-md flex items-end justify-center pb-0.5">
                <div className="w-2 h-2 rounded-full border border-neutral-600 bg-neutral-200" />
              </div>
            </div>

            {/* Interactive Flip Card Container */}
            <div
              className="group cursor-pointer select-none w-full max-w-[340px]"
              style={{ perspective: '1200px' }}
              onClick={() => setIsFlipped(!isFlipped)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setIsFlipped(!isFlipped)
                }
              }}
              aria-label="Interactive hanging ID badge. Click to flip between badge and visiting card."
            >
              <div
                className="relative w-full h-[520px] rounded-2xl shadow-2xl transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* ================= CARD FRONT: Stylish Hanging ID Badge ================= */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl p-5 bg-gradient-to-b from-neutral-900 via-black to-[#140404] border-2 border-neutral-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  {/* Top Slot Punch cutout */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-2.5 rounded-full bg-neutral-950 border border-neutral-700 shadow-inner mb-3" />

                    {/* ID Header Bar */}
                    <div className="w-full flex items-center justify-between px-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse" />
                        <span className="text-[10px] font-mono tracking-widest text-neutral-300 font-extrabold uppercase">
                          Developer Access
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-[#ff2a2a] bg-[#ff2a2a]/15 border border-[#ff2a2a]/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span>Click to Flip</span>
                        <span>↺</span>
                      </span>
                    </div>
                  </div>

                  {/* Profile Photo with ID Frame */}
                  <div className="flex flex-col items-center text-center my-auto">
                    <div className="relative group/photo mb-3">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#ff2a2a] to-neutral-700 rounded-2xl blur-sm opacity-60" />
                      <div className="relative w-40 h-44 rounded-xl overflow-hidden border-2 border-[#ff2a2a] bg-black shadow-xl">
                        <img
                          src={profileImg}
                          alt={personalInfo.name}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                    </div>

                    <h3 className="text-lg font-black text-white tracking-tight uppercase">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-bold text-[#ff2a2a] tracking-wider uppercase mt-1">
                      {personalInfo.title}
                    </p>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      📍 {personalInfo.location}
                    </p>
                  </div>

                  {/* ID Badge Footer: Barcode & Security Chip */}
                  <div className="pt-3 border-t border-neutral-800">
                    <div className="flex items-center justify-between bg-black/60 border border-neutral-800 px-3 py-1.5 rounded-lg mb-2">
                      <div className="flex flex-col text-left">
                        <span className="text-[8px] text-neutral-500 font-mono uppercase font-semibold">
                          PASS NUMBER
                        </span>
                        <span className="text-[10px] text-neutral-300 font-mono font-bold tracking-wider">
                          2026-JAVA-FS
                        </span>
                      </div>
                      {/* Simulated Holographic Chip */}
                      <div className="w-7 h-5 rounded bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 border border-amber-300/80 shadow-sm flex items-center justify-center">
                        <div className="w-5 h-3 border border-amber-600/40 rounded-sm" />
                      </div>
                    </div>

                    {/* Faux Barcode */}
                    <div className="flex items-center justify-center gap-0.5 h-4 opacity-75">
                      {[1, 3, 2, 4, 1, 3, 1, 2, 4, 2, 1, 3, 2, 1, 4, 2, 1, 3].map((w, idx) => (
                        <span
                          key={idx}
                          className="bg-white h-full"
                          style={{ width: `${w}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* ================= CARD BACK: Digital Visiting Card ================= */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl p-5 bg-gradient-to-b from-[#140404] via-neutral-950 to-black border-2 border-[#ff2a2a]/60 shadow-[0_20px_50px_rgba(255,42,42,0.15)] flex flex-col justify-between"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  {/* Top Slot Punch cutout */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-2.5 rounded-full bg-neutral-950 border border-neutral-700 shadow-inner mb-3" />

                    {/* Visiting Card Header Bar */}
                    <div className="w-full flex items-center justify-between px-1">
                      <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold">
                        Visiting Card
                      </span>
                      <span className="text-[10px] font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 px-2.5 py-0.5 rounded-full">
                        Flip to Badge ↻
                      </span>
                    </div>
                  </div>

                  {/* Header identity */}
                  <div className="text-center pt-1">
                    <h3 className="text-base font-extrabold text-white tracking-tight">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-bold text-[#ff2a2a] mt-0.5">
                      {personalInfo.title}
                    </p>
                  </div>

                  {/* Contact Links */}
                  <div className="space-y-2 text-xs">
                    {/* Email */}
                    <a
                      href={`mailto:${personalInfo.emails.primary}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-black/70 border border-neutral-800 hover:border-[#ff2a2a] text-neutral-200 hover:text-white transition-colors group/item"
                    >
                      <span className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#ff2a2a] group-hover/item:scale-110 transition-transform">
                        ✉
                      </span>
                      <span className="truncate font-medium">{personalInfo.emails.primary}</span>
                    </a>

                    {/* Phone */}
                    {personalInfo.phone && (
                      <a
                        href={`tel:${personalInfo.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-black/70 border border-neutral-800 hover:border-[#ff2a2a] text-neutral-200 hover:text-white transition-colors group/item"
                      >
                        <span className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#ff2a2a] group-hover/item:scale-110 transition-transform">
                          📞
                        </span>
                        <span className="font-medium">{personalInfo.phone}</span>
                      </a>
                    )}

                    {/* Location */}
                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-black/70 border border-neutral-800 text-neutral-300">
                      <span className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#ff2a2a]">
                        📍
                      </span>
                      <span className="font-medium">{personalInfo.location}</span>
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-neutral-500 block mb-1.5 text-center">
                      Professional Networks
                    </span>
                    <div className="flex gap-2">
                      {socialLinks.github && (
                        <a
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2 text-center text-xs font-bold bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-[#ff2a2a]/60 text-white rounded-lg transition-all"
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
                          className="flex-1 py-2 text-center text-xs font-bold bg-[#ff2a2a] hover:bg-[#e02424] text-white rounded-lg shadow-md transition-all"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bottom hint */}
                  <div className="pt-2 border-t border-neutral-900 text-center">
                    <p className="text-[10px] text-neutral-400">
                      Tap anywhere to flip back to ID badge
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 mt-4 font-medium flex items-center gap-1.5">
              <span>Interactive Hanging ID Badge</span>
              <span className="text-[#ff2a2a] font-bold">↺ Click to Flip</span>
            </p>
          </div>

          {/* RIGHT: Bio & Academic Credentials */}
          <div className="lg:col-span-7 space-y-8 pt-4 lg:pt-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {aboutContent.heading}
              </h3>
              <div
                className="text-neutral-300 leading-relaxed text-base sm:text-lg"
                dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
              />
            </div>

            {/* Core Technologies */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
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

            {/* Education & Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-4 shadow-sm">
                <p className="text-neutral-500 uppercase text-[10px] font-bold tracking-wider mb-1">
                  Education
                </p>
                <p className="text-sm font-semibold text-white">{education.degree}</p>
                <p className="text-xs text-neutral-400">{education.institution}</p>
                <p className="text-xs text-neutral-500 mt-1">{education.cgpa}</p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-4 shadow-sm">
                <p className="text-neutral-500 uppercase text-[10px] font-bold tracking-wider mb-1">
                  Career Readiness
                </p>
                <p className="text-sm font-semibold text-white">Full-Stack Development</p>
                <p className="text-xs text-neutral-400">Java · SQL · Web Development</p>
                <p className="text-xs text-[#ff2a2a] mt-1 font-medium">Ready for Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
