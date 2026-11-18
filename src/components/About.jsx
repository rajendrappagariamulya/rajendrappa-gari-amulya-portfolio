import { useState } from 'react'
import { aboutContent, personalInfo, education, socialLinks } from '../data/portfolioData'
import profileImg from '../assets/about/profile.png'

function About() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section id="about" className="py-24 bg-[#ff2a2a] text-white px-4 sm:px-6 overflow-hidden relative">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-black text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
            Discover
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 drop-shadow-md">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ================= LEFT COLUMN: Hanging Tilted ID Badge Visiting Card ================= */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            {/* Black Hanging String & Metal Clasp Assembly */}
            <div className="flex flex-col items-center z-20 -mb-4 pointer-events-none">
              {/* Solid Black Hanging String / Lanyard */}
              <div className="w-3 sm:w-3.5 h-16 sm:h-20 bg-black shadow-2xl relative rounded-t-sm flex items-center justify-center">
                <div className="w-0.5 h-full bg-neutral-800" />
              </div>

              {/* Metallic Ring / Loop */}
              <div className="w-6 h-6 rounded-full border-2 border-neutral-700 bg-gradient-to-tr from-neutral-800 via-neutral-300 to-neutral-700 shadow-md flex items-center justify-center -my-1 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-black border border-neutral-600" />
              </div>

              {/* Metal Badge Clip entering punch hole */}
              <div className="w-5 h-7 bg-gradient-to-b from-neutral-300 via-neutral-100 to-neutral-400 rounded-b-md shadow-xl border border-neutral-600 flex items-end justify-center pb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-black border border-neutral-500 shadow-inner" />
              </div>
            </div>

            {/* Flip Card Wrapper with slight tilted angle */}
            <div
              className="group cursor-pointer select-none w-full max-w-[340px] sm:max-w-[380px] -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out"
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
                className="relative w-full h-[580px] sm:h-[610px] rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* -------------------- FRONT SIDE: Hanging ID Badge Frame -------------------- */}
                <div
                  className="absolute inset-0 w-full h-full rounded-[32px] p-6 bg-white text-black border-[6px] border-black flex flex-col justify-between shadow-2xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  {/* Punch Hole & Top Header */}
                  <div className="flex flex-col items-center">
                    {/* Oval Punch Hole where black clip hangs */}
                    <div className="w-14 h-3.5 rounded-full bg-black border-2 border-neutral-700 shadow-inner mb-3" />

                    <div className="w-full flex items-center justify-between pb-2 border-b-2 border-black/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a] animate-ping" />
                        <span className="text-[10px] font-mono font-black tracking-widest text-black uppercase">
                          OFFICIAL ID BADGE
                        </span>
                      </div>
                      <span className="text-[10px] font-black text-white bg-black px-2.5 py-0.5 rounded-full">
                        TAP TO FLIP ↺
                      </span>
                    </div>
                  </div>

                  {/* Profile Photo in Large Frame */}
                  <div className="flex flex-col items-center text-center my-auto">
                    <div className="relative mb-4 group/photo">
                      {/* Glow & Thick Border Frame */}
                      <div className="w-44 h-52 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border-4 border-black bg-black shadow-2xl">
                        <img
                          src={profileImg}
                          alt="RAJENDRAPPA GARI AMULYA — Java Full Stack Developer, TAP Academy student"
                          className="w-full h-full object-cover object-top"
                          loading="eager"
                        />
                      </div>
                    </div>

                    {/* Name & Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight uppercase leading-snug">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-black text-[#ff2a2a] tracking-wider uppercase mt-1">
                      {personalInfo.title}
                    </p>
                    <p className="text-xs text-neutral-600 mt-1 font-bold flex items-center gap-1 justify-center">
                      <span>📍</span>
                      <span>{personalInfo.location}</span>
                    </p>
                  </div>

                  {/* ID Badge Footer: Barcode & Security Chip */}
                  <div className="pt-3 border-t-2 border-black/10">
                    <div className="flex items-center justify-between bg-neutral-100 border-2 border-black px-3.5 py-2 rounded-xl mb-2.5">
                      <div className="text-left">
                        <p className="text-[8px] text-neutral-500 font-mono uppercase font-bold tracking-wider">
                          ENGINEER ACCESS
                        </p>
                        <p className="text-[11px] text-black font-mono font-black tracking-wider">
                          PASS #2026-JAVA-FS
                        </p>
                      </div>
                      {/* Gold Chip */}
                      <div className="w-8 h-6 rounded bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 border border-amber-600 shadow-md flex items-center justify-center">
                        <div className="w-6 h-4 border border-amber-700/60 rounded-sm" />
                      </div>
                    </div>

                    {/* Realistic Barcode */}
                    <div className="flex items-center justify-center gap-0.5 h-4">
                      {[2, 3, 1, 4, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 3, 2, 4, 1, 3, 2, 4].map((w, i) => (
                        <span
                          key={i}
                          className="bg-black h-full"
                          style={{ width: `${w}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* -------------------- BACK SIDE: Black Digital Visiting Card -------------------- */}
                <div
                  className="absolute inset-0 w-full h-full rounded-[32px] p-6 bg-black text-white border-[6px] border-black ring-2 ring-[#ff2a2a]/60 shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  {/* Punch Hole & Top Header */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-3.5 rounded-full bg-neutral-900 border-2 border-neutral-700 shadow-inner mb-3" />

                    <div className="w-full flex items-center justify-between pb-2 border-b border-neutral-800">
                      <span className="text-[10px] font-mono font-black tracking-widest text-[#ff2a2a] uppercase">
                        DIGITAL VISITING CARD
                      </span>
                      <span className="text-[10px] font-bold text-neutral-300 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-full">
                        FLIP BACK ↻
                      </span>
                    </div>
                  </div>

                  {/* Name & Title Header */}
                  <div className="text-center pt-1">
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight uppercase">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-extrabold text-[#ff2a2a] tracking-wider uppercase mt-0.5">
                      {personalInfo.title}
                    </p>
                  </div>

                  {/* QR Code */}
                  <div className="flex flex-col items-center justify-center my-1">
                    <div className="p-3 bg-white rounded-2xl shadow-2xl border-2 border-[#ff2a2a]">
                      <svg
                        className="w-24 h-24 sm:w-28 sm:h-28"
                        viewBox="0 0 100 100"
                        fill="black"
                      >
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
                    <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 mt-1 font-bold">
                      SCAN FOR CONTACT
                    </span>
                  </div>

                  {/* Contact Links */}
                  <div className="space-y-2 text-xs">
                    <a
                      href={`mailto:${personalInfo.emails.primary}`}
                      aria-label={`Send email to ${personalInfo.emails.primary}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-3 p-2 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-[#ff2a2a] text-neutral-200 hover:text-white transition-all group/item"
                    >
                      <span className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#ff2a2a] group-hover/item:scale-110 transition-transform">
                        ✉
                      </span>
                      <span className="truncate font-medium">{personalInfo.emails.primary}</span>
                    </a>

                    {personalInfo.phone && (
                      <a
                        href={`tel:${personalInfo.phone}`}
                        aria-label={`Call ${personalInfo.phone}`}
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
                          aria-label="GitHub Profile"
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
                          aria-label="LinkedIn Profile"
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

            {/* Tap prompt below the card */}
            <div className="mt-5 inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full border-2 border-black shadow-xl text-xs sm:text-sm font-bold tracking-wide">
              <span className="text-[#ff2a2a] animate-spin" style={{ animationDuration: '3s' }}>
                ↺
              </span>
              <span>Tap the card to flip</span>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: High-Contrast Black Cards for Bio, Tech & Credentials ================= */}
          <div className="lg:col-span-7 space-y-6 pt-4 lg:pt-0">
            {/* Bio Card */}
            <div className="bg-black text-white p-6 sm:p-8 rounded-3xl border-4 border-black shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                {aboutContent.heading}
              </h3>
              <div
                className="text-neutral-300 leading-relaxed text-base sm:text-lg"
                dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
              />
            </div>

            {/* Core Technologies */}
            <div className="bg-black text-white p-6 rounded-3xl border-4 border-black shadow-2xl">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#ff2a2a] mb-3">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {aboutContent.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 hover:border-[#ff2a2a] rounded-xl text-sm font-semibold text-neutral-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Credentials & Readiness */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black text-white border-4 border-black rounded-3xl p-5 shadow-2xl">
                <p className="text-neutral-500 uppercase text-[10px] font-mono font-black tracking-wider mb-1">
                  Academic Background
                </p>
                <p className="text-sm font-bold text-white">{education.degree}</p>
                <p className="text-xs text-neutral-400 mt-0.5">{education.institution}</p>
                <p className="text-xs text-[#ff2a2a] font-mono font-bold mt-2">{education.cgpa}</p>
              </div>

              <div className="bg-black text-white border-4 border-black rounded-3xl p-5 shadow-2xl">
                <p className="text-neutral-500 uppercase text-[10px] font-mono font-black tracking-wider mb-1">
                  Professional Focus
                </p>
                <p className="text-sm font-bold text-white">Full-Stack Development</p>
                <p className="text-xs text-neutral-400 mt-0.5">Core Java · SQL · Modern Web</p>
                <p className="text-xs text-[#ff2a2a] mt-2 font-bold uppercase tracking-wider">Trained &amp; Ready to Deploy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
