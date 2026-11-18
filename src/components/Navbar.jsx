import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isOpen
          ? 'bg-[#ff2a2a] py-4'
          : `bg-transparent ${isScrolled ? 'py-4 backdrop-blur-md bg-black/40' : 'py-6'}`
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left: Brand logo */}
        <a
          href="#home"
          aria-label={`${personalInfo.brandName} Home`}
          className="text-white text-2xl font-black tracking-tight"
        >
          {personalInfo.brandName}
          <span className="text-[#ff2a2a]">.</span>
        </a>

        {/* Centre: Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group text-white/80 hover:text-white font-medium transition-colors py-1"
            >
              <span>{link}</span>
              <span className="absolute -bottom-1 left-0 h-0.5 bg-red-500 w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Right: Hire Me pill button */}
        <div className="hidden md:block">
          <a
            href={hireMeMailto}
            className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all inline-block cursor-pointer"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-1.5 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-300 bg-[#ff2a2a] shadow-2xl md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link} className="border-b border-white/20 pb-2">
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-white font-bold text-lg hover:text-black transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={hireMeMailto}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 bg-white text-[#ff2a2a] font-bold rounded-full shadow-md hover:bg-neutral-100 transition-colors"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
