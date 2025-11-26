export type SceneLevel = 'globe' | 'india' | 'state' | 'district'

export interface District {
  id: string
  name: string
  spotlight: string
}

export interface IndiaState {
  id: string
  name: string
  climateTone: string
  districts: District[]
}

export const geography: IndiaState[] = [
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    climateTone: 'Western ghats humidity meeting Deccan heat.',
    districts: [
      { id: 'mumbai', name: 'Mumbai', spotlight: 'Financial coastline, tidal breathing with the Arabian Sea.' },
      { id: 'pune', name: 'Pune', spotlight: 'Education capital where tech valleys meet monsoon walls.' },
      { id: 'nagpur', name: 'Nagpur', spotlight: 'Central spice junction radiating freight to every corridor.' },
    ],
  },
  {
    id: 'kerala',
    name: 'Kerala',
    climateTone: 'Backwater twilight and evergreen rainforest canopy.',
    districts: [
      { id: 'ernakulam', name: 'Ernakulam', spotlight: 'Harbor constellation with layered spice markets.' },
      { id: 'kozhikode', name: 'Kozhikode', spotlight: 'Historic maritime runway for the Malabar coast.' },
      { id: 'idukki', name: 'Idukki', spotlight: 'Granite ridges carved by fog and tea terraces.' },
    ],
  },
  {
    id: 'assam',
    name: 'Assam',
    climateTone: 'Monsoon rivers braided across tea estates.',
    districts: [
      { id: 'guwahati', name: 'Guwahati', spotlight: 'Brahmaputra guardian and gateway to the northeast.' },
      { id: 'jorhat', name: 'Jorhat', spotlight: 'Heritage tea bungalows under golden hour haze.' },
      { id: 'dibrugarh', name: 'Dibrugarh', spotlight: 'Frontier delta balancing refineries and rainforest.' },
    ],
  },
]

export const navigationLinks: Array<{ path: string; label: string; level: SceneLevel }> = [
  { path: '/', label: 'Globe', level: 'globe' },
  { path: '/india', label: 'India', level: 'india' },
  { path: '/india/maharashtra', label: 'State', level: 'state' },
  { path: '/india/maharashtra/mumbai', label: 'District', level: 'district' },
]

export const getStateById = (stateId?: string) =>
  geography.find((state) => state.id === stateId)

export const getDistrictById = (stateId?: string, districtId?: string) =>
  getStateById(stateId)?.districts.find((district) => district.id === districtId)
