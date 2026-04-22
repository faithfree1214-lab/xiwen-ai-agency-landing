import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { VideoBackground } from '@/components/landing/VideoBackground'

export function StartSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <VideoBackground src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8" topFade={200} bottomFade={200} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl flex-col items-center justify-center px-8 py-24 text-center lg:px-16">
        <span className="section-badge">How It Works</span>
        <h2 className="section-title mt-6">You dream it. We ship it.</h2>
        <p className="section-copy mt-5 max-w-2xl">
          Share your vision. Our AI handles the rest--wireframes, design, code, launch. All in days, not quarters.
        </p>
        <Link to="/contact" className="liquid-glass-strong mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white">
          Get Started <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
