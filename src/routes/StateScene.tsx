import { Float } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { SceneViewport } from '../components/scene/SceneViewport'
import { SceneNarrative } from '../components/scene/SceneNarrative'
import { geography, getStateById } from '../data/geography'
import { useSceneStore } from '../stores/sceneStore'
import { useTheme } from '../theme/ThemeProvider'

const StateScene = () => {
  const setLevel = useSceneStore((state) => state.setLevel)
  const params = useParams<{ stateId: string }>()
  const { isMotionReduced } = useTheme()

  const state = useMemo(() => getStateById(params.stateId) ?? geography[0], [params.stateId])

  useEffect(() => {
    setLevel('state', { stateId: state.id })
  }, [setLevel, state.id])

  return (
    <section className="scene-grid">
      <SceneViewport
        title={`${state.name} atmosphere`}
        description={state.climateTone}
        kicker="Stage 03"
      >
        <Float floatIntensity={isMotionReduced ? 0 : 1.2} rotationIntensity={isMotionReduced ? 0 : 0.4}>
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 128, 32]} />
            <meshStandardMaterial color="#ef476f" metalness={0.2} roughness={0.1} />
          </mesh>
        </Float>
      </SceneViewport>

      <SceneNarrative
        kicker="District queue"
        title="Choose a district"
        description="Each district inherits the state context so transitions stay smooth when code-splitting."
        bullets={state.districts.map((district) => `${district.name} — ${district.spotlight}`)}
      />
    </section>
  )
}

export default StateScene
