const testimonials = [
  {
    quote:
      "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote:
      "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
  },
  {
    quote:
      "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
  },
]

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
      <div className="text-center">
        <span className="section-badge">What They Say</span>
        <h2 className="section-title mt-6">Don't take our word for it.</h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="liquid-glass rounded-2xl p-8">
            <p className="text-sm italic font-body font-light text-white/80">“{item.quote}”</p>
            <p className="mt-8 text-sm font-body font-medium text-white">{item.name}</p>
            <p className="mt-1 text-xs font-body font-light text-white/50">{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
