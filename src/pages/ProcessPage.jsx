import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const steps = [
  {
    title: 'Discover',
    detail: '明确你的受众、核心卖点与业务目标，形成页面策略。',
  },
  {
    title: 'Design',
    detail: '输出品牌一致的视觉与信息结构，确保表达和转化兼顾。',
  },
  {
    title: 'Build',
    detail: '用现代前端栈快速落地，并对性能与可访问性做基础保障。',
  },
  {
    title: 'Iterate',
    detail: '基于行为数据持续优化，迭代标题、结构和关键行动路径。',
  },
]

export function ProcessPage() {
  return (
    <main className="mx-auto max-w-7xl px-8 pb-20 pt-36 lg:px-16">
      <span className="section-badge">Process</span>
      <h1 className="section-title mt-6">A clear system, not guesswork.</h1>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {steps.map((item, index) => (
          <article key={item.title} className="liquid-glass rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-white/50">Step {index + 1}</p>
            <h2 className="mt-3 font-heading text-3xl italic text-white">{item.title}</h2>
            <p className="mt-4 text-sm font-light text-white/75">{item.detail}</p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <Link to="/contact" className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white">
          Book a strategy call <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  )
}
