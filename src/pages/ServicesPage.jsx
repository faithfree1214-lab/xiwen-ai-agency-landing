import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'AI Brand Website',
    detail: '从策略到上线的一体化官网设计与开发，强调转化和品牌质感。',
  },
  {
    title: 'Conversion Optimization',
    detail: '基于行为数据持续优化页面结构与文案，提高线索与咨询率。',
  },
  {
    title: 'Content + Visual System',
    detail: '建立可复用内容模块、视觉组件与风格规范，便于长期迭代。',
  },
]

export function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-8 pb-20 pt-36 lg:px-16">
      <span className="section-badge">Services</span>
      <h1 className="section-title mt-6">What we build for growth teams.</h1>
      <p className="section-copy mt-5 max-w-3xl">
        我们把策略、设计、开发和优化打通，帮助你更快获得一个真正能带来业务结果的网站。
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((item) => (
          <article key={item.title} className="liquid-glass rounded-2xl p-6">
            <h2 className="font-heading text-3xl italic leading-[0.9] text-white">{item.title}</h2>
            <p className="mt-4 text-sm font-light text-white/75">{item.detail}</p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <Link to="/contact" className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white">
          Start your project <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  )
}
