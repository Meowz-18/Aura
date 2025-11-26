import { Float } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { SceneViewport } from '../components/scene/SceneViewport'
import { SceneNarrative } from '../components/scene/SceneNarrative'
import { geography, getDistrictById, getStateById } from '../data/geography'
import { useSceneStore } from '../stores/sceneStore'
import { useTheme } from '../theme/ThemeProvider'

const DistrictScene = () => {
  const setLevel = useSceneStore((state) => state.setLevel)
  const params = useParams<{ stateId: string; districtId: string }>()
  const { isMotionReduced } = useTheme()

  const state = useMemo(() => getStateById(params.stateId) ?? geography[0], [params.stateId])
  const district = useMemo(
    () => getDistrictById(state.id, params.districtId) ?? state.districts[0],
    [params.districtId, state],
  )

  useEffect(() => {
    setLevel('district', { stateId: state.id, districtId: district.id })
  }, [setLevel, state.id, district.id])

  return (
    <section className="scene-grid">
      <SceneViewport
        title={`${district.name} district`}
        description={district.spotlight}
        kicker="Stage 04"
      >
        <Float floatIntensity={isMotionReduced ? 0 : 1.6} rotationIntensity={isMotionReduced ? 0 : 0.5}>
          <mesh>
            <dodecahedronGeometry args={[1.3, 0]} />
            <meshStandardMaterial color="#8c5cf7" emissive="#8c5cf7" emissiveIntensity={0.4} />
          </mesh>
        </Float>
      </SceneViewport>

      <SceneNarrative
        kicker="Micro narrative"
        title="District telemetry"
        description="District scenes are lazy loaded so data-heavy modules stay out of the initial bundle."
        bullets={[
          'Lazy imports keep Lighthouse performance in the green.',
          'HUD breadcrumbs guide keyboard users with aria-current states.',
          'Reduced motion disables Float oscillation automatically.',
        ]}
      />
    </section>
  )
}

export default DistrictScene
