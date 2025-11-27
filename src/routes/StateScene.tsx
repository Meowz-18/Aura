import { Float } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { SceneViewport } from '../components/scene/SceneViewport'
import { StateBreadcrumb } from '../components/explorer'
import { geography, getStateById } from '../data/geography'
import { getStateById as getTravelStateById } from '../data/travel-loader'
import { useSceneStore } from '../stores/sceneStore'
import { useTheme } from '../theme/ThemeProvider'
import { DistrictExplorer } from '../components/explorer/district/DistrictExplorer'
import { DistrictNodes } from '../components/explorer/district/DistrictNodes'

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
      
      {travelState && (
        <>
          <section className="scene-grid">
            <SceneViewport
              title={`${state.name} districts`}
              description={travelState.description}
              kicker="Stage 03"
            >
              <Float floatIntensity={isMotionReduced ? 0 : 1.2} rotationIntensity={isMotionReduced ? 0 : 0.4}>
                <group>
                  <mesh>
                    <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                    <meshStandardMaterial color="#ef476f" metalness={0.2} roughness={0.1} />
                  </mesh>
                  <DistrictNodes districts={travelState.districts} stateId={state.id} />
                </group>
              </Float>
            </SceneViewport>
          </section>

          <DistrictExplorer travelState={travelState} />
        </>
      )}
    </section>
  )
}

export default StateScene
