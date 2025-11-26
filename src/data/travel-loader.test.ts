/**
 * Unit tests for travel dataset loader and schema integrity
 */

import { describe, it, expect } from 'vitest'
import {
  getAllStates,
  getStateById,
  getDistrictById,
  getAttractionById,
  getAllDistricts,
  getAllAttractions,
  filterAttractions,
  getInspiredAttractions,
  getSurpriseAttractions,
  searchAttractions,
  getAttractionsByTag,
  getAttractionsBySeason,
  getAttractionsByMood,
  getAccessibleAttractions,
  findStateForAttraction,
  findDistrictForAttraction,
  getDatasetStats,
  getAttractionsWithAchievements,
  getStateAttractions,
  getDistrictAttractions,
  getRandomAttraction,
  getFeaturedAttractions
} from './travel-loader'

describe('Travel Dataset Schema Integrity', () => {
  it('should have at least 8 states', () => {
    const states = getAllStates()
    expect(states.length).toBeGreaterThanOrEqual(8)
  })

  it('should have valid state structure', () => {
    const states = getAllStates()
    states.forEach(state => {
      expect(state).toHaveProperty('id')
      expect(state).toHaveProperty('name')
      expect(state).toHaveProperty('description')
      expect(state).toHaveProperty('coordinates')
      expect(state).toHaveProperty('districts')
      expect(state.id).toBeTruthy()
      expect(state.name).toBeTruthy()
      expect(state.description).toBeTruthy()
      expect(state.coordinates).toHaveProperty('latitude')
      expect(state.coordinates).toHaveProperty('longitude')
      expect(Array.isArray(state.districts)).toBe(true)
    })
  })

  it('each state should have at least 3 districts', () => {
    const states = getAllStates()
    states.forEach(state => {
      expect(state.districts.length).toBeGreaterThanOrEqual(3)
    })
  })

  it('should have valid district structure', () => {
    const districts = getAllDistricts()
    districts.forEach(district => {
      expect(district).toHaveProperty('id')
      expect(district).toHaveProperty('name')
      expect(district).toHaveProperty('description')
      expect(district).toHaveProperty('coordinates')
      expect(district).toHaveProperty('attractions')
      expect(district.id).toBeTruthy()
      expect(district.name).toBeTruthy()
      expect(district.description).toBeTruthy()
      expect(Array.isArray(district.attractions)).toBe(true)
    })
  })

  it('each district should have at least 2 attractions', () => {
    const districts = getAllDistricts()
    districts.forEach(district => {
      expect(district.attractions.length).toBeGreaterThanOrEqual(2)
    })
  })

  it('should have valid attraction structure with all required fields', () => {
    const attractions = getAllAttractions()
    attractions.forEach(attraction => {
      // Basic fields
      expect(attraction).toHaveProperty('id')
      expect(attraction).toHaveProperty('name')
      expect(attraction).toHaveProperty('caption')
      expect(attraction).toHaveProperty('legend')
      expect(attraction).toHaveProperty('poeticCopy')
      expect(attraction).toHaveProperty('storySnippet')
      expect(attraction).toHaveProperty('coordinates')
      expect(attraction).toHaveProperty('tags')
      expect(attraction).toHaveProperty('bestSeasons')
      expect(attraction).toHaveProperty('moodIcons')
      expect(attraction).toHaveProperty('travelTips')
      expect(attraction).toHaveProperty('sustainabilityTips')
      expect(attraction).toHaveProperty('weatherInsights')
      expect(attraction).toHaveProperty('culturalPulseTimeline')
      expect(attraction).toHaveProperty('achievements')
      expect(attraction).toHaveProperty('postcardMetadata')
      expect(attraction).toHaveProperty('audioDescription')
      expect(attraction).toHaveProperty('accessibility')

      // Verify non-empty strings
      expect(attraction.id).toBeTruthy()
      expect(attraction.name).toBeTruthy()
      expect(attraction.caption).toBeTruthy()
      expect(attraction.legend).toBeTruthy()
      expect(attraction.poeticCopy).toBeTruthy()
      expect(attraction.storySnippet).toBeTruthy()

      // Verify coordinates
      expect(typeof attraction.coordinates.latitude).toBe('number')
      expect(typeof attraction.coordinates.longitude).toBe('number')

      // Verify arrays
      expect(Array.isArray(attraction.tags)).toBe(true)
      expect(attraction.tags.length).toBeGreaterThan(0)
      expect(Array.isArray(attraction.bestSeasons)).toBe(true)
      expect(attraction.bestSeasons.length).toBeGreaterThan(0)
      expect(Array.isArray(attraction.moodIcons)).toBe(true)
      expect(attraction.moodIcons.length).toBeGreaterThan(0)
      expect(Array.isArray(attraction.travelTips)).toBe(true)
      expect(attraction.travelTips.length).toBeGreaterThan(0)
      expect(Array.isArray(attraction.sustainabilityTips)).toBe(true)
      expect(attraction.sustainabilityTips.length).toBeGreaterThan(0)
      expect(Array.isArray(attraction.weatherInsights)).toBe(true)
      expect(attraction.weatherInsights.length).toBeGreaterThan(0)
      expect(Array.isArray(attraction.culturalPulseTimeline)).toBe(true)
      expect(Array.isArray(attraction.achievements)).toBe(true)

      // Verify postcard metadata
      expect(attraction.postcardMetadata).toHaveProperty('imageUrl')
      expect(attraction.postcardMetadata).toHaveProperty('altText')
      expect(attraction.postcardMetadata).toHaveProperty('thumbnailUrl')
      expect(attraction.postcardMetadata).toHaveProperty('aspectRatio')
      expect(attraction.postcardMetadata.altText).toBeTruthy()

      // Verify audio description
      expect(attraction.audioDescription).toHaveProperty('url')
      expect(attraction.audioDescription).toHaveProperty('duration')
      expect(attraction.audioDescription).toHaveProperty('transcript')
      expect(attraction.audioDescription).toHaveProperty('language')
      expect(attraction.audioDescription.transcript).toBeTruthy()

      // Verify accessibility
      expect(attraction.accessibility).toHaveProperty('wheelchairAccessible')
      expect(attraction.accessibility).toHaveProperty('visuallyImpairedFriendly')
      expect(attraction.accessibility).toHaveProperty('hearingImpairedFriendly')
      expect(attraction.accessibility).toHaveProperty('facilities')
      expect(attraction.accessibility).toHaveProperty('notes')
      expect(typeof attraction.accessibility.wheelchairAccessible).toBe('boolean')
      expect(Array.isArray(attraction.accessibility.facilities)).toBe(true)
      expect(attraction.accessibility.notes).toBeTruthy()
    })
  })

  it('weather insights should have valid structure', () => {
    const attractions = getAllAttractions()
    attractions.forEach(attraction => {
      attraction.weatherInsights.forEach(insight => {
        expect(insight).toHaveProperty('month')
        expect(insight).toHaveProperty('temperature')
        expect(insight).toHaveProperty('rainfall')
        expect(insight).toHaveProperty('conditions')
        expect(insight.temperature).toHaveProperty('min')
        expect(insight.temperature).toHaveProperty('max')
        expect(insight.temperature).toHaveProperty('unit')
        expect(insight.temperature.unit).toBe('celsius')
        expect(typeof insight.temperature.min).toBe('number')
        expect(typeof insight.temperature.max).toBe('number')
      })
    })
  })

  it('cultural pulse timeline should have valid structure', () => {
    const attractions = getAllAttractions()
    attractions.forEach(attraction => {
      attraction.culturalPulseTimeline.forEach(event => {
        expect(event).toHaveProperty('year')
        expect(event).toHaveProperty('event')
        expect(event).toHaveProperty('significance')
        expect(typeof event.year).toBe('number')
        expect(event.event).toBeTruthy()
        expect(event.significance).toBeTruthy()
      })
    })
  })

  it('achievements should have valid structure', () => {
    const attractions = getAllAttractions()
    const attractionsWithAchievements = attractions.filter(a => a.achievements.length > 0)
    attractionsWithAchievements.forEach(attraction => {
      attraction.achievements.forEach(achievement => {
        expect(achievement).toHaveProperty('title')
        expect(achievement).toHaveProperty('description')
        expect(achievement).toHaveProperty('icon')
        expect(achievement).toHaveProperty('criteria')
        expect(achievement.title).toBeTruthy()
        expect(achievement.description).toBeTruthy()
        expect(achievement.icon).toBeTruthy()
        expect(achievement.criteria).toBeTruthy()
      })
    })
  })
})

describe('Loader Basic Functions', () => {
  it('getStateById should return correct state', () => {
    const state = getStateById('rajasthan')
    expect(state).toBeDefined()
    expect(state?.name).toBe('Rajasthan')
  })

  it('getStateById should return undefined for invalid id', () => {
    const state = getStateById('invalid-state')
    expect(state).toBeUndefined()
  })

  it('getDistrictById should return correct district', () => {
    const district = getDistrictById('rajasthan', 'jaipur')
    expect(district).toBeDefined()
    expect(district?.name).toBe('Jaipur')
  })

  it('getDistrictById should return undefined for invalid ids', () => {
    const district = getDistrictById('invalid-state', 'invalid-district')
    expect(district).toBeUndefined()
  })

  it('getAttractionById should return correct attraction', () => {
    const attraction = getAttractionById('rajasthan', 'jaipur', 'amber-fort')
    expect(attraction).toBeDefined()
    expect(attraction?.name).toBe('Amber Fort')
  })

  it('getAllDistricts should return all districts', () => {
    const districts = getAllDistricts()
    expect(districts.length).toBeGreaterThan(0)
    expect(districts.every(d => d.id && d.name)).toBe(true)
  })

  it('getAllAttractions should return all attractions', () => {
    const attractions = getAllAttractions()
    expect(attractions.length).toBeGreaterThan(0)
    expect(attractions.every(a => a.id && a.name)).toBe(true)
  })
})

describe('Filtering Functions', () => {
  it('filterAttractions by stateId should work', () => {
    const attractions = filterAttractions({ stateId: 'rajasthan' })
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      const state = findStateForAttraction(attraction)
      expect(state?.id).toBe('rajasthan')
    })
  })

  it('filterAttractions by districtId should work', () => {
    const attractions = filterAttractions({ 
      stateId: 'rajasthan', 
      districtId: 'jaipur' 
    })
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      const district = findDistrictForAttraction(attraction)
      expect(district?.id).toBe('jaipur')
    })
  })

  it('filterAttractions by tags should work', () => {
    const attractions = filterAttractions({ tags: ['heritage'] })
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      expect(attraction.tags).toContain('heritage')
    })
  })

  it('filterAttractions by seasons should work', () => {
    const attractions = filterAttractions({ seasons: ['winter'] })
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      expect(attraction.bestSeasons).toContain('winter')
    })
  })

  it('filterAttractions by moods should work', () => {
    const attractions = filterAttractions({ moods: ['spiritual'] })
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      expect(attraction.moodIcons).toContain('spiritual')
    })
  })

  it('filterAttractions by wheelchair accessibility should work', () => {
    const attractions = filterAttractions({ wheelchairAccessible: true })
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      expect(attraction.accessibility.wheelchairAccessible).toBe(true)
    })
  })

  it('filterAttractions by search query should work', () => {
    const attractions = searchAttractions('fort')
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      const searchableText = (
        attraction.name +
        attraction.caption +
        attraction.legend +
        attraction.poeticCopy +
        attraction.storySnippet +
        attraction.tags.join(' ') +
        attraction.travelTips.join(' ')
      ).toLowerCase()
      expect(searchableText).toContain('fort')
    })
  })

  it('filterAttractions with multiple filters should work', () => {
    const attractions = filterAttractions({
      tags: ['heritage'],
      seasons: ['winter'],
      moods: ['historic']
    })
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      expect(attraction.tags).toContain('heritage')
      expect(attraction.bestSeasons).toContain('winter')
      expect(attraction.moodIcons).toContain('historic')
    })
  })
})

describe('Specialized Query Functions', () => {
  it('getAttractionsByTag should return filtered results', () => {
    const attractions = getAttractionsByTag('beach')
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      expect(attraction.tags).toContain('beach')
    })
  })

  it('getAttractionsBySeason should return filtered results', () => {
    const attractions = getAttractionsBySeason('monsoon')
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      expect(attraction.bestSeasons).toContain('monsoon')
    })
  })

  it('getAttractionsByMood should return filtered results', () => {
    const attractions = getAttractionsByMood('romantic')
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      expect(attraction.moodIcons).toContain('romantic')
    })
  })

  it('getAccessibleAttractions should return only wheelchair accessible', () => {
    const attractions = getAccessibleAttractions()
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      expect(attraction.accessibility.wheelchairAccessible).toBe(true)
    })
  })

  it('getStateAttractions should return attractions for state', () => {
    const attractions = getStateAttractions('kerala')
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      const state = findStateForAttraction(attraction)
      expect(state?.id).toBe('kerala')
    })
  })

  it('getDistrictAttractions should return attractions for district', () => {
    const attractions = getDistrictAttractions('goa', 'north-goa')
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      const district = findDistrictForAttraction(attraction)
      expect(district?.id).toBe('north-goa')
    })
  })
})

describe('Inspire and Surprise Functions', () => {
  it('getInspiredAttractions should return results', () => {
    const attractions = getInspiredAttractions()
    expect(attractions.length).toBeGreaterThan(0)
    expect(attractions.length).toBeLessThanOrEqual(10)
  })

  it('getInspiredAttractions with mood should filter', () => {
    const attractions = getInspiredAttractions({ mood: 'adventure' })
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      expect(attraction.moodIcons).toContain('adventure')
    })
  })

  it('getInspiredAttractions with season should filter', () => {
    const attractions = getInspiredAttractions({ season: 'winter' })
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      expect(attraction.bestSeasons).toContain('winter')
    })
  })

  it('getInspiredAttractions with limit should respect limit', () => {
    const attractions = getInspiredAttractions({ limit: 5 })
    expect(attractions.length).toBeLessThanOrEqual(5)
  })

  it('getSurpriseAttractions should return results', () => {
    const attractions = getSurpriseAttractions()
    expect(attractions.length).toBeGreaterThan(0)
    expect(attractions.length).toBeLessThanOrEqual(5)
  })

  it('getSurpriseAttractions should exclude states', () => {
    const attractions = getSurpriseAttractions({ excludeStates: ['rajasthan'] })
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      const state = findStateForAttraction(attraction)
      expect(state?.id).not.toBe('rajasthan')
    })
  })

  it('getSurpriseAttractions with count should respect count', () => {
    const attractions = getSurpriseAttractions({ count: 3 })
    expect(attractions.length).toBeLessThanOrEqual(3)
  })
})

describe('Utility Functions', () => {
  it('findStateForAttraction should find correct state', () => {
    const attraction = getAttractionById('kerala', 'alappuzha', 'alleppey-backwaters')
    expect(attraction).toBeDefined()
    const state = findStateForAttraction(attraction!)
    expect(state?.id).toBe('kerala')
  })

  it('findDistrictForAttraction should find correct district', () => {
    const attraction = getAttractionById('kerala', 'alappuzha', 'alleppey-backwaters')
    expect(attraction).toBeDefined()
    const district = findDistrictForAttraction(attraction!)
    expect(district?.id).toBe('alappuzha')
  })

  it('getDatasetStats should return valid statistics', () => {
    const stats = getDatasetStats()
    expect(stats.totalStates).toBeGreaterThanOrEqual(8)
    expect(stats.totalDistricts).toBeGreaterThan(0)
    expect(stats.totalAttractions).toBeGreaterThan(0)
    expect(stats.uniqueTags).toBeGreaterThan(0)
    expect(stats.uniqueSeasons).toBeGreaterThan(0)
    expect(stats.uniqueMoods).toBeGreaterThan(0)
    expect(stats.accessibleAttractions).toBeGreaterThan(0)
    expect(Array.isArray(stats.tags)).toBe(true)
    expect(Array.isArray(stats.seasons)).toBe(true)
    expect(Array.isArray(stats.moods)).toBe(true)
  })

  it('getAttractionsWithAchievements should return attractions with achievements', () => {
    const attractions = getAttractionsWithAchievements()
    expect(attractions.length).toBeGreaterThan(0)
    attractions.forEach(attraction => {
      expect(attraction.achievements.length).toBeGreaterThan(0)
    })
  })

  it('getRandomAttraction should return a valid attraction', () => {
    const attraction = getRandomAttraction()
    expect(attraction).toBeDefined()
    expect(attraction.id).toBeTruthy()
    expect(attraction.name).toBeTruthy()
  })

  it('getFeaturedAttractions should return featured attractions', () => {
    const attractions = getFeaturedAttractions(5)
    expect(attractions.length).toBeGreaterThan(0)
    expect(attractions.length).toBeLessThanOrEqual(5)
  })
})

describe('Data Quality Checks', () => {
  it('all attraction IDs should be unique', () => {
    const attractions = getAllAttractions()
    const ids = attractions.map(a => a.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('all state IDs should be unique', () => {
    const states = getAllStates()
    const ids = states.map(s => s.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('all district IDs within a state should be unique', () => {
    const states = getAllStates()
    states.forEach(state => {
      const ids = state.districts.map(d => d.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })
  })

  it('all coordinates should be valid', () => {
    const attractions = getAllAttractions()
    attractions.forEach(attraction => {
      expect(attraction.coordinates.latitude).toBeGreaterThanOrEqual(-90)
      expect(attraction.coordinates.latitude).toBeLessThanOrEqual(90)
      expect(attraction.coordinates.longitude).toBeGreaterThanOrEqual(-180)
      expect(attraction.coordinates.longitude).toBeLessThanOrEqual(180)
    })
  })

  it('all temperatures should be reasonable', () => {
    const attractions = getAllAttractions()
    attractions.forEach(attraction => {
      attraction.weatherInsights.forEach(insight => {
        expect(insight.temperature.min).toBeGreaterThan(-20)
        expect(insight.temperature.min).toBeLessThan(50)
        expect(insight.temperature.max).toBeGreaterThan(-10)
        expect(insight.temperature.max).toBeLessThan(60)
        expect(insight.temperature.max).toBeGreaterThanOrEqual(insight.temperature.min)
      })
    })
  })

  it('all audio descriptions should have positive duration', () => {
    const attractions = getAllAttractions()
    attractions.forEach(attraction => {
      expect(attraction.audioDescription.duration).toBeGreaterThan(0)
    })
  })

  it('all aspect ratios should be valid', () => {
    const attractions = getAllAttractions()
    const validRatios = ['16:9', '4:3', '1:1', '3:2']
    attractions.forEach(attraction => {
      expect(validRatios).toContain(attraction.postcardMetadata.aspectRatio)
    })
  })
})
