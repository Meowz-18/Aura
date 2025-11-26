import { Suspense } from 'react'
import type { ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

interface SceneViewportProps {
  title: string
  description: string
  kicker?: string
  children: ReactNode
}

export const SceneViewport = ({ title, description, kicker, children }: SceneViewportProps) => (
  <div className="scene-viewport" data-animate="fade">
    <Canvas camera={{ position: [0, 0, 6], fov: 48 }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 4, 5]} intensity={1} />
      <Suspense fallback={null}>{children}</Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
    <div className="scene-viewport__hud">
      <div className="scene-info">
        {kicker && <small className="scene-info__meta">{kicker}</small>}
        <p className="scene-info__title">{title}</p>
        <p className="scene-info__body">{description}</p>
      </div>
    </div>
  </div>
)
