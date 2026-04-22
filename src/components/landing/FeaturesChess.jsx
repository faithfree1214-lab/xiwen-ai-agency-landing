import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import feature1 from '@/assets/feature-1.gif'
import feature2 from '@/assets/feature-2.gif'

const rows = [
  {
    title: 'Designed to convert. Built to perform.',
    body: "Every pixel is intentional. Our AI studies what works across thousands of top sites--then builds yours to outperform them all.",
    button: 'Learn more',
    image: feature1,
    reverse: false,
  },
  {
    title: 'It gets smarter. Automatically.',
    body: 'Your site evolves on its own. AI monitors every click, scroll, and conversion--then optimizes in real time. No manual updates. Ever.',
    button: 'See how it works',
    image: feature2,
    reverse: true,
  },
]

export function FeaturesChess() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
      <div className="text-center">
        <span className="section-badge">Capabilities</span>
        <h2 className="section-title mt-6">Pro features. Zero complexity.</h2>
      </div>

      <div className="mt-16 space-y-14">
        {rows.map((row) => (
          <div
            key={row.title}
            className={`flex flex-col items-center gap-10 ${row.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-[0.9]">{row.title}</h3>
              <p className="section-copy mt-5 max-w-xl">{row.body}</p>
              <Link to="/contact" className="liquid-glass-strong mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white">
                {row.button} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="liquid-glass overflow-hidden rounded-2xl">
                <img src={row.image} alt={row.title} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
