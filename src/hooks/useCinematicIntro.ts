import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from '../theme/ThemeProvider'

let isRegistered = false

export const useCinematicIntro = (containerRef: React.RefObject<HTMLElement | null>) => {
  const { isMotionReduced } = useTheme()

  useLayoutEffect(() => {
    if (!containerRef.current || typeof window === 'undefined' || isMotionReduced) {
      return
    }

    if (!isRegistered) {
      gsap.registerPlugin(ScrollTrigger)
      isRegistered = true
    }

    const ctx = gsap.context(() => {
      const fadeTargets = containerRef.current?.querySelectorAll('[data-animate="fade"]')

      if (fadeTargets?.length) {
        gsap.fromTo(
          fadeTargets,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.08,
          },
        )
      }

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: ({ progress }) => {
          gsap.to(containerRef.current, {
            '--scene-progress': progress.toFixed(2),
            duration: 0.2,
            overwrite: true,
          })
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [containerRef, isMotionReduced])
}
