import { useState } from 'react'
import { aboutContent, personalInfo, education, socialLinks } from '../data/portfolioData'
import profileImg from '../assets/about/profile.png'

function About() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] text-white px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ff2a2a]">
            Discover
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ================= LEFT COLUMN: Large Hanging ID Badge Visiting Card ================= */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Realistic Hanging String & Metal Swivel Clip */}
            <div className="flex flex-col items-center z-20 -mb-4 pointer-events-none">
              {/* Dual Hanging Strings from Top */}
              <div className="flex items-center gap-1.5 h-14">
                <div className="w-1 h-full bg-gradient-to-b from-neutral-800 via-[#ff2a2a] to-neutral-700 shadow-sm" />
                <div className="w-1 h-full bg-gradient-to-b from-neutral-800 via-[#ff2a2a] to-neutral-700 shadow-sm" />
              </div>

              {/* Metallic Ring Connector */}
              <div className="w-6 h-6 rounded-full border-2 border-neutral-300 bg-gradient-to-tr from-neutral-500 via-neutral-200 to-neutral-400 shadow-md flex items-center justify-center -my-1">
                <div className="w-3 h-3 rounded-full bg-neutral-900 border border-neutral-600" />
              </div>

              {/* Metal Badge Clip / Hook */}
              <div className="w-4 h-7 bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-300 rounded-b-md shadow-lg border border-neutral-500 flex items-end justify-center pb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-500 shadow-inner" />
              </div>
            </div>

            {/* Flip Card Container */}
            <div
              className="group cursor-pointer select-none w-full max-w-[360px] sm:max-w-[390px]"
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
              aria-label="Interactive hanging ID badge. Click to flip between ID card and visiting card."
            >
              <div
                className="relative w-full h-[580px] sm:h-[600px] rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* -------------------- FRONT SIDE: Stylish Hanging ID Card -------------------- */}
                <div
                  className="absolute inset-0 w-full h-full rounded-3xl p-6 bg-gradient-to-b from-neutral-900 via-[#0d0d0d] to-black border-2 border-neutral-700/80 flex flex-col justify-between shadow-2xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  {/* Badge Header & Slot Punch */}
                  <div className="flex flex-col items-center">
                    {/* Oval Punch Hole with metallic rim */}
                    <div className="w-14 h-3 rounded-full bg-neutral-950 border-2 border-neutral-600 shadow-inner mb-3" />

                    {/* Header Strip */}
                    <div className="w-full flex items-center justify-between pb-2 border-b border-neutral-800">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a] animate-pulse" />
                        <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-300 uppercase">
                          OFFICIAL ID BADGE
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 px-2 py-0.5 rounded-full">
                        TAP TO FLIP ↺
                      </span>
                    </div>
                  </div>

                  {/* Profile Photo in Large Stylish Frame */}
                  <div className="flex flex-col items-center text-center my-auto">
                    <div className="relative group/frame mb-4">
                      {/* Glow outline */}
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#ff2a2a] via-red-600 to-neutral-700 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
                      <div className="relative w-44 h-48 sm:w-48 sm:h-52 rounded-2xl overflow-hidden border-2 border-white/30 bg-black shadow-2xl">
                        <img
                          src={profileImg}
                          alt={personalInfo.name}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                    </div>

                    {/* Name & Designation */}
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase leading-snug">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-extrabold text-[#ff2a2a] tracking-wider uppercase mt-1">
                      {personalInfo.title}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1 font-medium flex items-center gap-1 justify-center">
                      <span>📍</span>
                      <span>{personalInfo.location}</span>
                    </p>
                  </div>

                  {/* Card Bottom: Chip, Pass Number, and Security Barcode */}
                  <div className="pt-3 border-t border-neutral-800">
                    <div className="flex items-center justify-between bg-black/60 border border-neutral-800 px-3.5 py-2 rounded-xl mb-2.5">
                      <div className="text-left">
                        <p className="text-[8px] text-neutral-500 font-mono uppercase font-bold tracking-wider">
                          ENGINEER ACCESS
                        </p>
                        <p className="text-[11px] text-neutral-200 font-mono font-extrabold tracking-wider">
                          PASS #2026-JAVA-FS
                        </p>
                      </div>
                      {/* Holographic Security Chip */}
                      <div className="w-8 h-6 rounded bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 border border-amber-300/80 shadow-md flex items-center justify-center">
                        <div className="w-6 h-4 border border-amber-700/50 rounded-sm" />
                      </div>
                    </div>

                    {/* Barcode graphic */}
                    <div className="flex items-center justify-center gap-0.5 h-4 opacity-80">
                      {[1, 3, 2, 4, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 3, 2, 4, 1, 3].map((w, i) => (
                        <span
                          key={i}
                          className="bg-white h-full"
                          style={{ width: `${w}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* -------------------- BACK SIDE: Black Digital Visiting Card -------------------- */}
                <div
                  className="absolute inset-0 w-full h-full rounded-3xl p-6 bg-black border-2 border-[#ff2a2a]/70 shadow-[0_25px_60px_rgba(255,42,42,0.2)] flex flex-col justify-between"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  {/* Badge Header & Slot Punch */}
                  <div className="flex flex-col items-center">
                    {/* Matching Punch Hole */}
                    <div className="w-14 h-3 rounded-full bg-neutral-950 border-2 border-neutral-600 shadow-inner mb-3" />

                    <div className="w-full flex items-center justify-between pb-2 border-b border-neutral-800">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#ff2a2a] uppercase">
                        DIGITAL VISITING CARD
                      </span>
                      <span className="text-[10px] font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-full">
                        FLIP BACK ↻
                      </span>
                    </div>
                  </div>

                  {/* Header Info */}
                  <div className="text-center pt-1">
                    <h3 className="text-lg font-black text-white tracking-tight uppercase">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-bold text-[#ff2a2a] tracking-wider uppercase mt-0.5">
                      {personalInfo.title}
                    </p>
                  </div>

                  {/* QR Code Section */}
                  <div className="flex flex-col items-center justify-center my-1">
                    <div className="p-3 bg-white rounded-2xl shadow-xl border-2 border-[#ff2a2a]">
                      {/* Crisp Authentic SVG QR Code for Contact / Portfolio */}
                      <svg
                        className="w-24 h-24 sm:w-28 sm:h-28"
                        viewBox="0 0 100 100"
                        fill="black"
                      >
                        {/* Background */}
                        <rect width="100" height="100" fill="white" />
                        {/* Top-Left Position Marker */}
                        <rect x="6" y="6" width="28" height="28" fill="#ff2a2a" rx="4" />
                        <rect x="10" y="10" width="20" height="20" fill="white" rx="2" />
                        <rect x="14" y="14" width="12" height="12" fill="black" rx="1" />
                        {/* Top-Right Position Marker */}
                        <rect x="66" y="6" width="28" height="28" fill="#ff2a2a" rx="4" />
                        <rect x="70" y="10" width="20" height="20" fill="white" rx="2" />
                        <rect x="74" y="14" width="12" height="12" fill="black" rx="1" />
                        {/* Bottom-Left Position Marker */}
                        <rect x="6" y="66" width="28" height="28" fill="#ff2a2a" rx="4" />
                        <rect x="10" y="70" width="20" height="20" fill="white" rx="2" />
                        <rect x="14" y="74" width="12" height="12" fill="black" rx="1" />
                        {/* Alignment Pattern */}
                        <rect x="68" y="68" width="16" height="16" fill="black" rx="2" />
                        <rect x="72" y="72" width="8" height="8" fill="white" />
                        <rect x="75" y="75" width="2" height="2" fill="black" />
                        {/* Data Modules */}
                        <rect x="38" y="8" width="5" height="5" />
                        <rect x="46" y="8" width="5" height="5" />
                        <rect x="54" y="8" width="5" height="5" />
                        <rect x="38" y="16" width="5" height="5" />
                        <rect x="54" y="16" width="5" height="5" />
                        <rect x="46" y="24" width="5" height="5" />
                        <rect x="8" y="38" width="5" height="5" />
                        <rect x="16" y="46" width="5" height="5" />
                        <rect x="24" y="38" width="5" height="5" />
                        <rect x="24" y="54" width="5" height="5" />
                        <rect x="38" y="38" width="5" height="5" />
                        <rect x="46" y="38" width="5" height="5" />
                        <rect x="54" y="46" width="5" height="5" />
                        <rect x="38" y="54" width="5" height="5" />
                        <rect x="46" y="62" width="5" height="5" />
                        <rect x="62" y="38" width="5" height="5" />
                        <rect x="70" y="46" width="5" height="5" />
                        <rect x="78" y="38" width="5" height="5" />
                        <rect x="86" y="46" width="5" height="5" />
                        <rect x="62" y="54" width="5" height="5" />
                        <rect x="86" y="54" width="5" height="5" />
                        <rect x="38" y="70" width="5" height="5" />
                        <rect x="46" y="78" width="5" height="5" />
                        <rect x="54" y="70" width="5" height="5" />
                        <rect x="38" y="86" width="5" height="5" />
                        <rect x="54" y="86" width="5" height="5" />
                      </svg>
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 mt-1 font-semibold">
                      SCAN FOR CONTACT
                    </span>
                  </div>

                  {/* Contact Links */}
                  <div className="space-y-2 text-xs">
                    {/* Email */}
                    <a
                      href={`mailto:${personalInfo.emails.primary}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-3 p-2 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-[#ff2a2a] text-neutral-200 hover:text-white transition-all group/item"
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
                        className="flex items-center gap-3 p-2 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-[#ff2a2a] text-neutral-200 hover:text-white transition-all group/item"
                      >
                        <span className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#ff2a2a] group-hover/item:scale-110 transition-transform">
                          📞
                        </span>
                        <span className="font-medium">{personalInfo.phone}</span>
                      </a>
                    )}
                  </div>

                  {/* Social Buttons */}
                  <div className="pt-1">
                    <div className="flex gap-2.5">
                      {socialLinks.github && (
                        <a
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2 text-center text-xs font-bold bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-[#ff2a2a] text-white rounded-xl transition-all"
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
                          className="flex-1 py-2 text-center text-xs font-bold bg-[#ff2a2a] hover:bg-[#e02424] text-white rounded-xl shadow-lg transition-all"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt text below the card */}
            <p className="text-xs sm:text-sm text-neutral-400 mt-4 font-semibold flex items-center gap-2">
              <span className="text-[#ff2a2a]">↺</span>
              <span>Tap the card to flip</span>
            </p>
          </div>

          {/* ================= RIGHT COLUMN: Bio, Core Tech, & Credentials ================= */}
          <div className="lg:col-span-7 space-y-8 pt-4 lg:pt-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
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
                    className="px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Credentials & Readiness */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-5 shadow-sm">
                <p className="text-neutral-500 uppercase text-[10px] font-bold tracking-wider mb-1">
                  Academic Background
                </p>
                <p className="text-sm font-semibold text-white">{education.degree}</p>
                <p className="text-xs text-neutral-400">{education.institution}</p>
                <p className="text-xs text-neutral-500 mt-1">{education.cgpa}</p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-5 shadow-sm">
                <p className="text-neutral-500 uppercase text-[10px] font-bold tracking-wider mb-1">
                  Professional Focus
                </p>
                <p className="text-sm font-semibold text-white">Full-Stack Development</p>
                <p className="text-xs text-neutral-400">Core Java · SQL · Modern Web</p>
                <p className="text-xs text-[#ff2a2a] mt-1 font-semibold">Trained &amp; Ready to Deploy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
