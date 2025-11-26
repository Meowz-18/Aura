import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { SHADER_VERTEX, SHADER_FRAGMENT } from './heroGlobeUtils'

interface HeroGlobeProps {
  scrollProgress: number
  isMotionReduced: boolean
}

export const HeroGlobe = ({ scrollProgress, isMotionReduced }: HeroGlobeProps) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current || isMotionReduced) return

    const currentTime = clock.getElapsedTime()

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = currentTime
    }

    meshRef.current.rotation.y += 0.0005
    const rotationX = (scrollProgress * Math.PI) / 3
    meshRef.current.rotation.x = rotationX * 0.1
  })

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      userData={{
        role: 'img',
        ariaLabel: 'Animated 3D globe representing India with flowing teal and blue colors',
      }}
    >
      <icosahedronGeometry args={[2, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={SHADER_VERTEX}
        fragmentShader={SHADER_FRAGMENT}
        uniforms={{
          uTime: { value: 0 },
          uWaveAmplitude: { value: 0.08 },
        }}
        transparent
        wireframe={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
