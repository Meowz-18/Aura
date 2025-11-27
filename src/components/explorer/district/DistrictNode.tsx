import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useNavigate } from 'react-router-dom'
import type { Mesh } from 'three'
import type { TravelDistrict } from '../../../data/travel-types'
import { useDistrictExplorerStore } from '../../../stores/districtExplorerStore'

interface DistrictNodeProps {
  district: TravelDistrict
  stateId: string
  position: [number, number, number]
}

export const DistrictNode = ({ district, stateId, position }: DistrictNodeProps) => {
  const meshRef = useRef<Mesh>(null)
  const navigate = useNavigate()
  const { hoveredDistrictId, setHoveredDistrictId } = useDistrictExplorerStore()

  const isHovered = hoveredDistrictId === district.id

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.1
    
    if (isHovered) {
      meshRef.current.scale.setScalar(1.2)
    } else {
      meshRef.current.scale.setScalar(1)
    }
  })

  const handleClick = () => {
    navigate(`/india/${stateId}/${district.id}`)
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={handleClick}
      onPointerEnter={() => setHoveredDistrictId(district.id)}
      onPointerLeave={() => setHoveredDistrictId(null)}
    >
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial
        color={isHovered ? '#ffd60a' : '#06ffa5'}
        emissive={isHovered ? '#ffd60a' : '#06ffa5'}
        emissiveIntensity={isHovered ? 0.8 : 0.4}
        metalness={0.3}
        roughness={0.2}
      />
    </mesh>
  )
}
