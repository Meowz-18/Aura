import { Suspense } from 'react'
import type { ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'

interface HeroViewportProps {
  children: ReactNode
  isWebGLSupported: boolean
}

export const HeroViewport = ({ children, isWebGLSupported }: HeroViewportProps) => {
  if (!isWebGLSupported) {
    return (
      <div
        className="hero-viewport hero-viewport--fallback"
        role="region"
        aria-label="Hero section with globe visualization"
      >
        <div className="hero-viewport__fallback">
          <h1>Explore India, one district at a time.</h1>
          <p>Your browser doesn't fully support 3D graphics. The experience is still available in 2D.</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="hero-viewport"
      role="region"
      aria-label="Interactive 3D hero section with animated globe and cosmic background"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60, far: 1000 }}
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  )
}
