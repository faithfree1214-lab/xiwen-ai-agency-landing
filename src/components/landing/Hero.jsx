 import { Link } from 'react-router-dom'
  import { motion as Motion } from 'motion/react'
  import { ArrowUpRight, Play } from 'lucide-react'
  import { BlurText } from '@/components/landing/BlurText'

  const partners = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma']

  export function Hero() {
    return (
      <section className="relative h-[1000px] overflow-visible">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={`${import.meta.env.BASE_URL}images/hero_bg.jpeg`}
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source
            src={`${import.meta.env.BASE_URL}images/hero_bg.mp4`}
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 z-0 bg-black/5" />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1]"
          style={{ height: '300px', background: 'linear-gradient(to bottom,
  transparent, black)' }}
        />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col
  px-8 pt-[150px] lg:px-16">
          <div className="liquid-glass inline-flex w-fit items-center gap-2
  rounded-full px-1 py-1">
            <span className="rounded-full bg-white px-3 py-1 text-xs
  font-semibold text-black">New</span>
            <span className="pr-2 text-xs font-body text-white">Introducing
  AI-powered web design.</span>
          </div>

          <div className="mt-8">
            <BlurText
              text="The Website Your Brand Deserves"
              mode="word"
              direction="bottom"
              delay={100}
              className="max-w-2xl text-6xl font-heading italic leading-[0.8]
  tracking-[-4px] text-foreground md:text-7xl lg:text-[5.5rem]"
            />
          </div>

          <Motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
            className="mt-6 max-w-xl text-sm font-body font-light leading-tight
  text-white md:text-base"
          >
            Stunning design. Blazing performance. Built by AI, refined by
  experts. This is web design, wildly
            reimagined.
          </Motion.p>

          <Motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: 'easeOut' }}
            className="mt-8 flex items-center gap-6"
          >
            <Link to="/contact" className="liquid-glass-strong inline-flex
  items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white">
              Get Started <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm
  text-white">
              <Play className="h-4 w-4 fill-white" /> Watch the Film
            </Link>
          </Motion.div>

          <div className="mt-auto pb-8 pt-16">
            <span className="liquid-glass mb-6 inline-flex rounded-full px-3.5
  py-1 text-xs text-white/90">
              Trusted by the teams behind
            </span>
            <div className="flex flex-wrap items-center gap-12 md:gap-16">
              {partners.map((name) => (
                <span key={name} className="text-2xl font-heading italic
  text-white md:text-3xl">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }                                        
                  
