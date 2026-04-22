import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '¥18,000+',
    desc: '适合快速上线的品牌展示型官网。',
    items: ['Single landing page', 'Core copywriting', 'Responsive delivery'],
  },
  {
    name: 'Growth',
    price: '¥36,000+',
    desc: '适合有明确获客需求的增长团队。',
    items: ['Multi-page structure', 'Conversion-focused flow', '30-day optimization support'],
  },
  {
    name: 'Custom',
    price: 'Custom',
    desc: '适合复杂业务或长期品牌建设。',
    items: ['Custom scope', 'Priority delivery', 'Retainer collaboration'],
  },
]

export function PricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-8 pb-20 pt-36 lg:px-16">
      <span className="section-badge">Pricing</span>
      <h1 className="section-title mt-6">Simple tiers. Clear outcomes.</h1>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="liquid-glass rounded-2xl p-6">
            <h2 className="font-heading text-3xl italic text-white">{plan.name}</h2>
            <p className="mt-3 text-2xl text-white">{plan.price}</p>
            <p className="mt-4 text-sm font-light text-white/75">{plan.desc}</p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              {plan.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <Link to="/contact" className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white">
          Get custom quote <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  )
}
