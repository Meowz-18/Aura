import { Link } from 'react-router-dom'
import { getDistrictById, getStateById } from '../../data/geography'
import { useSceneStore } from '../../stores/sceneStore'
import { Cluster, Stack } from '../layout/Primitives'

export const SceneHUD = () => {
  const { level, stateId, districtId } = useSceneStore()
  const activeState = getStateById(stateId)
  const activeDistrict = getDistrictById(stateId, districtId)

  return (
    <section className="scene-hud surface-card" aria-live="polite" data-animate="fade">
      <Stack gap="xs">
        <small>Scene focus</small>
        <Cluster>
          <Link to="/">Globe</Link>
          <span aria-hidden="true">→</span>
          <Link to="/india" aria-current={level === 'india' ? 'location' : undefined}>
            India
          </Link>
          {activeState && (
            <>
              <span aria-hidden="true">→</span>
              <Link to={`/india/${activeState.id}`} aria-current={level === 'state' ? 'location' : undefined}>
                {activeState.name}
              </Link>
            </>
          )}
          {activeDistrict && (
            <>
              <span aria-hidden="true">→</span>
              <Link
                to={`/india/${activeState?.id}/${activeDistrict.id}`}
                aria-current={level === 'district' ? 'location' : undefined}
              >
                {activeDistrict.name}
              </Link>
            </>
          )}
        </Cluster>
      </Stack>
      <p className="scene-hud__description">
        {activeDistrict?.spotlight ?? activeState?.climateTone ?? 'Glide from the orbital overview into India, states, and districts with keyboard-friendly breadcrumbs.'}
      </p>
    </section>
  )
}
