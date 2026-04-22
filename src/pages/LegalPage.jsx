import { Link } from 'react-router-dom'

export function LegalPage({ title }) {
  return (
    <main className="mx-auto max-w-4xl px-8 pb-20 pt-36 lg:px-16">
      <span className="section-badge">{title}</span>
      <h1 className="section-title mt-6">{title} policy</h1>
      <div className="liquid-glass mt-10 rounded-2xl p-6 text-sm font-light leading-relaxed text-white/75">
        <p>
          This is a placeholder {title.toLowerCase()} page for MVP navigation completeness. You can replace this
          content with your final legal copy at any time.
        </p>
        <p className="mt-4">
          Need immediate updates? Go to <Link to="/contact" className="underline">Contact</Link> and send your request.
        </p>
      </div>
    </main>
  )
}
