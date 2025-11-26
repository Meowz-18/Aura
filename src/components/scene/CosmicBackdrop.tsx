import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { STAR_VERTEX, STAR_FRAGMENT, createStars } from './cosmicBackdropUtils'

interface CosmicBackdropProps {
  scrollProgress: number
  isMotionReduced: boolean
}

export const CosmicBackdrop = ({ scrollProgress, isMotionReduced }: CosmicBackdropProps) => {
  const particlesRef = useRef<THREE.Points>(null)
  const { positions, colors, count } = useMemo(() => createStars(), [])

  useFrame(() => {
    if (!particlesRef.current || isMotionReduced) return

    particlesRef.current.rotation.x += 0.00005
    particlesRef.current.rotation.y += 0.0001

    const scale = 1 + scrollProgress * 0.3
    particlesRef.current.scale.set(scale, scale, scale)
  })

  return (
    <points ref={particlesRef} position={[0, 0, -20]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aColor"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={STAR_VERTEX}
        fragmentShader={STAR_FRAGMENT}
        depthWrite={false}
        transparent
      />
    </points>
  )
}
