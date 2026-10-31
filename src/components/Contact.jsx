import { useState } from 'react'
import { personalInfo, socialLinks } from '../data/portfolioData'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open user's email client with prefilled details
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${personalInfo.emails.primary}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ff2a2a]">
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Get In Touch
          </h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">
            Have a question, an opportunity, or want to collaborate? I would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Direct contact info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#ff2a2a] shrink-0">
                  ✉
                </span>
                <div>
                  <p className="text-xs uppercase font-semibold text-neutral-500">Email</p>
                  <a
                    href={`mailto:${personalInfo.emails.primary}`}
                    className="text-neutral-200 hover:text-[#ff2a2a] transition-colors text-sm break-all"
                  >
                    {personalInfo.emails.primary}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#ff2a2a] shrink-0">
                  📍
                </span>
                <div>
                  <p className="text-xs uppercase font-semibold text-neutral-500">Location</p>
                  <p className="text-neutral-200 text-sm">{personalInfo.location}</p>
                </div>
              </div>

              {personalInfo.phone && (
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#ff2a2a] shrink-0">
                    📞
                  </span>
                  <div>
                    <p className="text-xs uppercase font-semibold text-neutral-500">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-neutral-200 hover:text-[#ff2a2a] transition-colors text-sm"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4">
              <p className="text-xs uppercase font-semibold text-neutral-500 mb-3">
                Social Profiles
              </p>
              <div className="flex gap-3">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-xs font-medium text-neutral-200 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-xs font-medium text-neutral-200 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Quick contact form */}
          <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-4">Send a Message</h3>
            {submitted ? (
              <div className="p-4 bg-green-950/40 border border-green-800 text-green-300 rounded-lg text-sm text-center">
                Your email client has been opened with your message. Thank you for reaching out!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-neutral-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#ff2a2a] transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-neutral-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#ff2a2a] transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-neutral-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#ff2a2a] transition-colors resize-none"
                    placeholder="Hello Amulya, I would like to discuss..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#ff2a2a] hover:bg-[#e02424] text-white font-semibold rounded-lg text-sm shadow-md transition-all cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
