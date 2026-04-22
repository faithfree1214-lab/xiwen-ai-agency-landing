import { VideoBackground } from '@/components/landing/VideoBackground'

const stats = [
  { value: '200+', label: 'Sites launched' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '3.2x', label: 'More conversions' },
  { value: '5 days', label: 'Average delivery' },
]

export function StatsSection() {
  return (
    <section className="relative overflow-hidden px-8 py-24 lg:px-16">
      <div className="absolute inset-0 z-0">
        <VideoBackground
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
          topFade={200}
          bottomFade={200}
          saturateZero
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">{item.value}</p>
                <p className="mt-3 text-sm font-body font-light text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
