import { skillsContent } from '../data/portfolioData'

function Process() {
  return (
    <section id="process" className="py-24 bg-[#0a0a0a] text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ff2a2a]">
            {skillsContent.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            {skillsContent.heading}
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
            {skillsContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillsContent.cards.map((card) => (
            <div
              key={card.number}
              className="bg-black border border-neutral-800 rounded-xl p-6 relative group hover:border-[#ff2a2a]/50 transition-colors"
            >
              <span className="text-3xl font-black text-neutral-800 group-hover:text-[#ff2a2a]/40 transition-colors block mb-4">
                {card.number}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <span className="inline-block px-5 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-full">
            {skillsContent.endText}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Process
