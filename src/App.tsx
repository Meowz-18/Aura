import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SceneLayout } from './components/layout/SceneLayout'

const GlobeScene = lazy(() => import('./routes/GlobeScene'))
const IndiaScene = lazy(() => import('./routes/IndiaScene'))
const StateScene = lazy(() => import('./routes/StateScene'))
const DistrictScene = lazy(() => import('./routes/DistrictScene'))
const AttractionDetail = lazy(() => import('./routes/AttractionDetail'))

const SceneFallback = () => (
  <section className="surface-card" data-animate="fade">
    <small>Loading scene</small>
    <h2>Assembling assets…</h2>
    <p>Lazy-loaded scenes keep the immersive stack responsive. Sit tight.</p>
  </section>
)

function App() {
  return (
    <SceneLayout>
      <Suspense fallback={<SceneFallback />}>
        <Routes>
          <Route path="/" element={<GlobeScene />} />
          <Route path="/india" element={<IndiaScene />} />
          <Route path="/india/:stateId" element={<StateScene />} />
          <Route path="/india/:stateId/:districtId" element={<DistrictScene />} />
          <Route path="/india/:stateId/:districtId/:attractionId" element={<AttractionDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </SceneLayout>
  )
}

export default App
