import { Float } from '@react-three/drei'
import { useEffect } from 'react'
import { SceneViewport } from '../components/scene/SceneViewport'
import { SceneNarrative } from '../components/scene/SceneNarrative'
import { geography } from '../data/geography'
import { useSceneStore } from '../stores/sceneStore'
import { useTheme } from '../theme/ThemeProvider'

const IndiaScene = () => {
  const setLevel = useSceneStore((state) => state.setLevel)
  const { isMotionReduced } = useTheme()

  useEffect(() => {
    setLevel('india')
  }, [setLevel])

  return (
    <section className="scene-grid">
      <SceneViewport
        title="India spotlight"
        description="Luminous landmass framing the upcoming drill-down into states and districts."
        kicker="Stage 02"
      >
        <Float
          floatIntensity={isMotionReduced ? 0 : 1}
          rotationIntensity={isMotionReduced ? 0 : 0.2}
          position={[0, 0, 0]}
        >
          <mesh rotation={[0.3, 0.6, 0]}>
            <icosahedronGeometry args={[1.5, 1]} />
            <meshStandardMaterial color="#ffd166" opacity={0.8} transparent />
          </mesh>
        </Float>
      </SceneViewport>

      <SceneNarrative
        kicker="National cues"
        title="Data scaffolding"
        description="State data is hydrated from a lightweight dataset so routing + scene state stay in sync."
        bullets={[
          `${geography.length} featured states with boutique descriptions.`,
          'Layout primitives (stack + cluster) keep copy and controls aligned.',
          'Scene HUD mirrors router state for keyboard + screen reader clarity.',
        ]}
      />
    </section>
  )
}

export default IndiaScene
