import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { VideoBackground } from '@/components/landing/VideoBackground'

const footerLinks = [
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Contact', to: '/contact' },
]

export function CtaFooter() {
  return (
    <section className="relative overflow-hidden px-8 pb-10 pt-24 lg:px-16">
      <div className="absolute inset-0 z-0">
        <VideoBackground src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8" topFade={200} bottomFade={200} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85] text-white">
          Your next website starts here.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm md:text-base font-body font-light text-white/70">
          Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just
          possibilities.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact" className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white">
            Book a Call <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/pricing" className="rounded-full bg-white px-6 py-3 text-sm text-black">
            View Pricing
          </Link>
        </div>

        <div className="mt-32 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <p>(c) 2026 Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {footerLinks.map((item) => (
              <Link key={item.label} to={item.to} className="hover:text-white/60">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
