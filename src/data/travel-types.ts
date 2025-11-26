/**
 * Comprehensive TypeScript type definitions for the India travel dataset
 */

export interface Coordinates {
  latitude: number
  longitude: number
}

export interface PostcardMetadata {
  imageUrl: string
  altText: string
  thumbnailUrl: string
  aspectRatio: '16:9' | '4:3' | '1:1' | '3:2'
}

export interface AudioDescription {
  url: string
  duration: number // in seconds
  transcript: string
  language: 'en' | 'hi' | 'regional'
}

export interface CulturalPulseEvent {
  year: number
  event: string
  significance: string
}

export interface WeatherInsight {
  month: string
  temperature: {
    min: number
    max: number
    unit: 'celsius'
  }
  rainfall: string
  conditions: string
}

export type MoodIcon = 
  | 'serene' 
  | 'vibrant' 
  | 'adventure' 
  | 'spiritual' 
  | 'historic' 
  | 'cultural' 
  | 'nature' 
  | 'romantic'
  | 'family'
  | 'peaceful'

export type Season = 'spring' | 'summer' | 'monsoon' | 'autumn' | 'winter'

export type AttractionTag = 
  | 'heritage'
  | 'nature'
  | 'wildlife'
  | 'beach'
  | 'mountain'
  | 'spiritual'
  | 'adventure'
  | 'cultural'
  | 'food'
  | 'shopping'
  | 'architecture'
  | 'waterfall'
  | 'temple'
  | 'fort'
  | 'museum'
  | 'park'
  | 'lake'
  | 'backwaters'
  | 'hillstation'
  | 'family'
  | 'romantic'
  | 'peaceful'
  | 'historic'
  | 'vibrant'

export interface Achievement {
  title: string
  description: string
  icon: string
  criteria: string
}

export interface Attraction {
  id: string
  name: string
  caption: string
  legend: string
  poeticCopy: string
  storySnippet: string
  coordinates: Coordinates
  tags: AttractionTag[]
  bestSeasons: Season[]
  moodIcons: MoodIcon[]
  travelTips: string[]
  sustainabilityTips: string[]
  weatherInsights: WeatherInsight[]
  culturalPulseTimeline: CulturalPulseEvent[]
  achievements: Achievement[]
  postcardMetadata: PostcardMetadata
  audioDescription: AudioDescription
  accessibility: {
    wheelchairAccessible: boolean
    visuallyImpairedFriendly: boolean
    hearingImpairedFriendly: boolean
    facilities: string[]
    notes: string
  }
}

export interface TravelDistrict {
  id: string
  name: string
  description: string
  coordinates: Coordinates
  attractions: Attraction[]
}

export interface TravelState {
  id: string
  name: string
  description: string
  coordinates: Coordinates
  districts: TravelDistrict[]
}

export interface TravelDataset {
  states: TravelState[]
}

export interface FilterOptions {
  stateId?: string
  districtId?: string
  tags?: AttractionTag[]
  seasons?: Season[]
  moods?: MoodIcon[]
  wheelchairAccessible?: boolean
  searchQuery?: string
}

export interface InspireOptions {
  mood?: MoodIcon
  season?: Season
  tags?: AttractionTag[]
  limit?: number
}

export interface SurpriseOptions {
  excludeStates?: string[]
  excludeDistricts?: string[]
  preferredTags?: AttractionTag[]
  count?: number
}
