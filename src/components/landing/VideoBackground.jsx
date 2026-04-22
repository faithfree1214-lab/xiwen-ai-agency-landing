import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export function VideoBackground({
  src,
  className = '',
  saturateZero = false,
  topFade = 200,
  bottomFade = 200,
}) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !src) return

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)

      return () => {
        hls.destroy()
      }
    }

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
    }
  }, [src])

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 h-full w-full object-cover ${saturateZero ? 'saturate-0' : ''} ${className}`}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-[1]"
        style={{ height: `${topFade}px`, background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1]"
        style={{ height: `${bottomFade}px`, background: 'linear-gradient(to top, black, transparent)' }}
      />
    </>
  )
}
