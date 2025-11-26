import { Float } from '@react-three/drei'
import { useEffect } from 'react'
import { SceneViewport } from '../components/scene/SceneViewport'
import { SceneNarrative } from '../components/scene/SceneNarrative'
import { useSceneStore } from '../stores/sceneStore'
import { useTheme } from '../theme/ThemeProvider'

const GlobeScene = () => {
  const setLevel = useSceneStore((state) => state.setLevel)
  const { isMotionReduced } = useTheme()

  useEffect(() => {
    setLevel('globe')
  }, [setLevel])

  return (
    <section className="scene-grid">
      <SceneViewport
        title="Planetary heartbeat"
        description="A minimal globe that orbits gently to anchor the journey."
        kicker="Stage 01"
      >
        <Float floatIntensity={isMotionReduced ? 0 : 1.5} rotationIntensity={isMotionReduced ? 0 : 0.25}>
          <mesh>
            <sphereGeometry args={[1.8, 64, 64]} />
            <meshStandardMaterial color="#2ec4b6" wireframe transparent opacity={0.65} />
          </mesh>
        </Float>
      </SceneViewport>

      <SceneNarrative
        kicker="Overview"
        title="Globe → India"
        description="We start from a calm orbital view and descend into India with scroll-triggered cues."
        bullets={[
          'Scroll progress synced with GSAP + ScrollTrigger.',
          'Responsive grid keeps the viewport cinematic on any device.',
          'Theme + reduced motion toggles respect OS-level preferences.',
        ]}
      />
    </section>
  )
}

export default GlobeScene
