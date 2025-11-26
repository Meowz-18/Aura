import { Float } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { SceneViewport } from '../components/scene/SceneViewport'
import { SceneNarrative } from '../components/scene/SceneNarrative'
import { StateBreadcrumb } from '../components/explorer'
import { geography, getStateById } from '../data/geography'
import { getStateById as getTravelStateById } from '../data/travel-loader'
import { useSceneStore } from '../stores/sceneStore'
import { useTheme } from '../theme/ThemeProvider'

const StateScene = () => {
  const setLevel = useSceneStore((state) => state.setLevel)
  const params = useParams<{ stateId: string }>()
  const { isMotionReduced } = useTheme()

  const state = useMemo(() => getStateById(params.stateId) ?? geography[0], [params.stateId])
  const travelState = useMemo(
    () => (params.stateId ? getTravelStateById(params.stateId) : null),
    [params.stateId]
  )

  useEffect(() => {
    setLevel('state', { stateId: state.id })
  }, [setLevel, state.id])

  return (
    <section className="scene-shell">
      <StateBreadcrumb />
      
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
          title={travelState ? `Explore ${travelState.name}` : 'Choose a district'}
          description={travelState?.description ?? state.climateTone}
          bullets={state.districts.map((district) => `${district.name} — ${district.spotlight}`)}
        />
      </section>
    </section>
  )
}

export default StateScene
