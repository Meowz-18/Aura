import type { TravelDistrict } from '../../../data/travel-types'
import { DistrictNode } from './DistrictNode'

interface DistrictNodesProps {
  districts: TravelDistrict[]
  stateId: string
}

export const DistrictNodes = ({ districts, stateId }: DistrictNodesProps) => {
  return (
    <group>
      {districts.map((district, index) => (
        <DistrictNode
          key={district.id}
          district={district}
          stateId={stateId}
          position={[index * 1.5 - districts.length * 0.75, 0, Math.sin(index) * 0.5]}
        />
      ))}
    </group>
  )
}
