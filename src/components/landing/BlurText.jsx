import { useEffect, useRef, useState } from 'react'
import { motion as Motion } from 'motion/react'

export function BlurText({
  text,
  mode = 'word',
  direction = 'bottom',
  delay = 100,
  className = '',
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const items = mode === 'letter' ? text.split('') : text.split(' ')

  const axisByDirection = {
    bottom: { x: 0, y: 50 },
    top: { x: 0, y: -50 },
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
  }

  const axis = axisByDirection[direction] || axisByDirection.bottom

  return (
    <h1 ref={ref} className={className}>
      {items.map((item, index) => {
        const key = `${item}-${index}`
        const suffix = mode === 'word' ? ' ' : ''

        return (
          <Motion.span
            key={key}
            className="inline-block"
            initial={{ filter: 'blur(10px)', opacity: 0, x: axis.x, y: axis.y }}
            animate={
              inView
                ? {
                    filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                    opacity: [0, 0.5, 1],
                    x: [axis.x, 0, 0],
                    y: [axis.y, -5, 0],
                  }
                : undefined
            }
            transition={{
              duration: 1.05,
              times: [0, 0.5, 1],
              ease: 'easeOut',
              delay: (delay * index) / 1000,
            }}
          >
            {item}
            {suffix}
          </Motion.span>
        )
      })}
    </h1>
  )
}
