import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from '../../theme/ThemeProvider'

gsap.registerPlugin(ScrollTrigger)

interface ScrollSequenceProps {
  children: React.ReactNode
}

export const ScrollSequence = ({ children }: ScrollSequenceProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const { isMotionReduced } = useTheme()

  useEffect(() => {
    if (isMotionReduced || !containerRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          markers: false,
        },
      })

      timeline
        .to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
        }, 0)
        .to(
          contentRef.current,
          {
            scale: 1,
            duration: 1,
          },
          0
        )
    }, containerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isMotionReduced])

  return (
    <div ref={containerRef} className="scroll-sequence">
      <div
        ref={contentRef}
        className="scroll-sequence__content"
        style={{
          opacity: isMotionReduced ? 1 : 0,
          y: isMotionReduced ? 0 : 20,
          scale: isMotionReduced ? 1 : 0.95,
        }}
      >
        {children}
      </div>
    </div>
  )
}
