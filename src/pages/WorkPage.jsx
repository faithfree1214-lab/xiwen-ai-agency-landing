import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const works = [
  {
    title: 'MedTech Growth Site',
    summary: '重构品牌叙事与咨询漏斗，60 天内线索质量显著提升。',
    result: '+42% qualified leads',
  },
  {
    title: 'SaaS Product Launch',
    summary: '围绕发布节奏搭建单页 + 定价页 + FAQ，支撑新品首发转化。',
    result: '+31% trial signup',
  },
  {
    title: 'Founder Personal Brand',
    summary: '把创始人内容资产整合为官网体系，提升信任与商务机会。',
    result: '+2.4x inbound inquiries',
  },
]

export function WorkPage() {
  return (
    <main className="mx-auto max-w-7xl px-8 pb-20 pt-36 lg:px-16">
      <span className="section-badge">Work</span>
      <h1 className="section-title mt-6">Proof over promises.</h1>
      <p className="section-copy mt-5 max-w-3xl">以下是我们常见的项目类型与结果呈现方式，便于你快速评估合作价值。</p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {works.map((item) => (
          <article key={item.title} className="liquid-glass rounded-2xl p-6">
            <h2 className="font-heading text-3xl italic leading-[0.9] text-white">{item.title}</h2>
            <p className="mt-4 text-sm font-light text-white/75">{item.summary}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.12em] text-white/55">{item.result}</p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <Link to="/contact" className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white">
          Discuss your case <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  )
}
