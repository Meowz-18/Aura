/**
 * Travel dataset loader utility with filtering, searching, and query functions
 */

import { travelDataset } from './travel-dataset'
import { additionalStates } from './travel-dataset-part2'
import type {
  TravelState,
  TravelDistrict,
  Attraction,
  FilterOptions,
  InspireOptions,
  SurpriseOptions,
  AttractionTag,
  Season,
  MoodIcon
} from './travel-types'

// Merge all states into complete dataset
const completeDataset: TravelState[] = [
  ...travelDataset.states,
  ...additionalStates
]

/**
 * Get all states in the dataset
 */
export function getAllStates(): TravelState[] {
  return completeDataset
}

/**
 * Get state by ID
 */
export function getStateById(stateId: string): TravelState | undefined {
  return completeDataset.find(state => state.id === stateId)
}

/**
 * Get district by state ID and district ID
 */
export function getDistrictById(stateId: string, districtId: string): TravelDistrict | undefined {
  const state = getStateById(stateId)
  return state?.districts.find(district => district.id === districtId)
}

/**
 * Get attraction by state ID, district ID, and attraction ID
 */
export function getAttractionById(
  stateId: string,
  districtId: string,
  attractionId: string
): Attraction | undefined {
  const district = getDistrictById(stateId, districtId)
  return district?.attractions.find(attraction => attraction.id === attractionId)
}

/**
 * Get all districts across all states
 */
export function getAllDistricts(): TravelDistrict[] {
  return completeDataset.flatMap(state => state.districts)
}

/**
 * Get all attractions across all states and districts
 */
export function getAllAttractions(): Attraction[] {
  return completeDataset.flatMap(state =>
    state.districts.flatMap(district => district.attractions)
  )
}

/**
 * Filter attractions based on multiple criteria
 */
export function filterAttractions(options: FilterOptions): Attraction[] {
  let attractions = getAllAttractions()

  // Filter by state
  if (options.stateId) {
    const state = getStateById(options.stateId)
    if (state) {
      attractions = state.districts.flatMap(district => district.attractions)
    } else {
      return []
    }
  }

  // Filter by district
  if (options.districtId && options.stateId) {
    const district = getDistrictById(options.stateId, options.districtId)
    if (district) {
      attractions = district.attractions
    } else {
      return []
    }
  }

  // Filter by tags
  if (options.tags && options.tags.length > 0) {
    attractions = attractions.filter(attraction =>
      options.tags!.some(tag => attraction.tags.includes(tag))
    )
  }

  // Filter by seasons
  if (options.seasons && options.seasons.length > 0) {
    attractions = attractions.filter(attraction =>
      options.seasons!.some(season => attraction.bestSeasons.includes(season))
    )
  }

  // Filter by moods
  if (options.moods && options.moods.length > 0) {
    attractions = attractions.filter(attraction =>
      options.moods!.some(mood => attraction.moodIcons.includes(mood))
    )
  }

  // Filter by wheelchair accessibility
  if (options.wheelchairAccessible !== undefined) {
    attractions = attractions.filter(
      attraction => attraction.accessibility.wheelchairAccessible === options.wheelchairAccessible
    )
  }

  // Search query filter
  if (options.searchQuery) {
    const query = options.searchQuery.toLowerCase()
    attractions = attractions.filter(attraction =>
      attraction.name.toLowerCase().includes(query) ||
      attraction.caption.toLowerCase().includes(query) ||
      attraction.legend.toLowerCase().includes(query) ||
      attraction.poeticCopy.toLowerCase().includes(query) ||
      attraction.storySnippet.toLowerCase().includes(query) ||
      attraction.tags.some(tag => tag.toLowerCase().includes(query)) ||
      attraction.travelTips.some(tip => tip.toLowerCase().includes(query))
    )
  }

  return attractions
}

/**
 * Get inspired attractions based on mood, season, or tags
 * Returns curated list for "Inspire Me" flow
 */
export function getInspiredAttractions(options: InspireOptions = {}): Attraction[] {
  const filterOptions: FilterOptions = {
    moods: options.mood ? [options.mood] : undefined,
    seasons: options.season ? [options.season] : undefined,
    tags: options.tags ? options.tags : undefined
  }

  let attractions = filterAttractions(filterOptions)

  // If no filters, get diverse selection
  if (!options.mood && !options.season && !options.tags) {
    attractions = getAllAttractions()
  }

  // Shuffle and limit
  const shuffled = attractions.sort(() => Math.random() - 0.5)
  const limit = options.limit || 10
  return shuffled.slice(0, limit)
}

/**
 * Get surprise attractions - random discovery
 * Returns random attractions for "Surprise Me" flow
 */
export function getSurpriseAttractions(options: SurpriseOptions = {}): Attraction[] {
  let attractions = getAllAttractions()

  // Exclude specified states
  if (options.excludeStates && options.excludeStates.length > 0) {
    attractions = attractions.filter(attraction => {
      const stateId = findStateForAttraction(attraction)?.id
      return !options.excludeStates!.includes(stateId || '')
    })
  }

  // Exclude specified districts
  if (options.excludeDistricts && options.excludeDistricts.length > 0) {
    attractions = attractions.filter(attraction => {
      const districtId = findDistrictForAttraction(attraction)?.id
      return !options.excludeDistricts!.includes(districtId || '')
    })
  }

  // Prefer certain tags if specified
  if (options.preferredTags && options.preferredTags.length > 0) {
    const preferred = attractions.filter(attraction =>
      options.preferredTags!.some(tag => attraction.tags.includes(tag))
    )
    const others = attractions.filter(attraction =>
      !options.preferredTags!.some(tag => attraction.tags.includes(tag))
    )
    // Mix: 70% preferred, 30% others
    const preferredCount = Math.ceil((options.count || 5) * 0.7)
    const othersCount = (options.count || 5) - preferredCount
    attractions = [
      ...preferred.sort(() => Math.random() - 0.5).slice(0, preferredCount),
      ...others.sort(() => Math.random() - 0.5).slice(0, othersCount)
    ]
  }

  // Shuffle and return
  const shuffled = attractions.sort(() => Math.random() - 0.5)
  const count = options.count || 5
  return shuffled.slice(0, count)
}

/**
 * Search attractions by text query
 */
export function searchAttractions(query: string): Attraction[] {
  return filterAttractions({ searchQuery: query })
}

/**
 * Get attractions by tag
 */
export function getAttractionsByTag(tag: AttractionTag): Attraction[] {
  return filterAttractions({ tags: [tag] })
}

/**
 * Get attractions by season
 */
export function getAttractionsBySeason(season: Season): Attraction[] {
  return filterAttractions({ seasons: [season] })
}

/**
 * Get attractions by mood
 */
export function getAttractionsByMood(mood: MoodIcon): Attraction[] {
  return filterAttractions({ moods: [mood] })
}

/**
 * Get wheelchair accessible attractions
 */
export function getAccessibleAttractions(): Attraction[] {
  return filterAttractions({ wheelchairAccessible: true })
}

/**
 * Find which state contains an attraction
 */
export function findStateForAttraction(attraction: Attraction): TravelState | undefined {
  return completeDataset.find(state =>
    state.districts.some(district =>
      district.attractions.some(a => a.id === attraction.id)
    )
  )
}

/**
 * Find which district contains an attraction
 */
export function findDistrictForAttraction(attraction: Attraction): TravelDistrict | undefined {
  for (const state of completeDataset) {
    const district = state.districts.find(d =>
      d.attractions.some(a => a.id === attraction.id)
    )
    if (district) return district
  }
  return undefined
}

/**
 * Get statistics about the dataset
 */
export function getDatasetStats() {
  const states = completeDataset.length
  const districts = getAllDistricts().length
  const attractions = getAllAttractions().length

  const tags = new Set<AttractionTag>()
  const seasons = new Set<Season>()
  const moods = new Set<MoodIcon>()

  getAllAttractions().forEach(attraction => {
    attraction.tags.forEach(tag => tags.add(tag))
    attraction.bestSeasons.forEach(season => seasons.add(season))
    attraction.moodIcons.forEach(mood => moods.add(mood))
  })

  const accessibleCount = getAllAttractions().filter(
    a => a.accessibility.wheelchairAccessible
  ).length

  return {
    totalStates: states,
    totalDistricts: districts,
    totalAttractions: attractions,
    uniqueTags: tags.size,
    uniqueSeasons: seasons.size,
    uniqueMoods: moods.size,
    accessibleAttractions: accessibleCount,
    accessibilityPercentage: ((accessibleCount / attractions) * 100).toFixed(1) + '%',
    tags: Array.from(tags),
    seasons: Array.from(seasons),
    moods: Array.from(moods)
  }
}

/**
 * Get attractions with specific achievements
 */
export function getAttractionsWithAchievements(): Attraction[] {
  return getAllAttractions().filter(attraction => attraction.achievements.length > 0)
}

/**
 * Get attractions by state and filter
 */
export function getStateAttractions(stateId: string, filter?: Partial<FilterOptions>): Attraction[] {
  return filterAttractions({ ...filter, stateId })
}

/**
 * Get attractions by district and filter
 */
export function getDistrictAttractions(
  stateId: string,
  districtId: string,
  filter?: Partial<FilterOptions>
): Attraction[] {
  return filterAttractions({ ...filter, stateId, districtId })
}

/**
 * Get random attraction from anywhere
 */
export function getRandomAttraction(): Attraction {
  const attractions = getAllAttractions()
  const randomIndex = Math.floor(Math.random() * attractions.length)
  return attractions[randomIndex]
}

/**
 * Get featured attractions (those with most tags or achievements)
 */
export function getFeaturedAttractions(limit: number = 10): Attraction[] {
  const attractions = getAllAttractions()
  const scored = attractions.map(attraction => ({
    attraction,
    score: attraction.tags.length + attraction.achievements.length * 2
  }))
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map(s => s.attraction)
}

/**
 * Export merged dataset for direct access if needed
 */
export { completeDataset as travelDatasetComplete }
