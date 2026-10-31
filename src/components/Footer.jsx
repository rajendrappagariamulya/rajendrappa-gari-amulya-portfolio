import { personalInfo, academy } from '../data/portfolioData'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-900 bg-[#0a0a0a] py-8 px-6 text-center text-sm text-neutral-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <p>
          Trained at{' '}
          <a
            href={academy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff2a2a] hover:underline font-medium"
          >
            {academy.name}
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
