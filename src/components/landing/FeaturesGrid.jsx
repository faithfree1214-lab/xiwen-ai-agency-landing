import { Zap, Palette, BarChart3, Shield } from 'lucide-react'

const cards = [
  {
    icon: Zap,
    title: 'Days, Not Months',
    body: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy.",
  },
  {
    icon: Palette,
    title: 'Obsessively Crafted',
    body: 'Every detail considered. Every element refined. Design so precise, it feels inevitable.',
  },
  {
    icon: BarChart3,
    title: 'Built to Convert',
    body: 'Layouts informed by data. Decisions backed by performance. Results you can measure.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    body: 'Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.',
  },
]

export function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
      <div className="text-center">
        <span className="section-badge">Why Us</span>
        <h2 className="section-title mt-6">The difference is everything.</h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <article key={card.title} className="liquid-glass rounded-2xl p-6">
              <div className="liquid-glass-strong mb-5 flex h-10 w-10 items-center justify-center rounded-full">
                <Icon className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-xl font-heading italic text-white">{card.title}</h3>
              <p className="section-copy mt-3">{card.body}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
