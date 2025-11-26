/**
 * Main export file for travel dataset module
 * 
 * This module provides comprehensive travel data for India covering:
 * - 8+ states with detailed information
 * - 3+ districts per state
 * - 2-3 attractions per district
 * - Complete metadata including captions, legends, coordinates, stories, etc.
 * - Accessibility information
 * - Cultural and historical context
 * 
 * Usage:
 * ```typescript
 * import { 
 *   getAllStates, 
 *   filterAttractions, 
 *   getInspiredAttractions 
 * } from '@/data'
 * 
 * // Get all states
 * const states = getAllStates()
 * 
 * // Filter attractions
 * const beachAttractions = filterAttractions({ tags: ['beach'] })
 * 
 * // Get inspired for travel
 * const inspiration = getInspiredAttractions({ mood: 'romantic', limit: 5 })
 * ```
 */

// Export types
export type {
  Coordinates,
  PostcardMetadata,
  AudioDescription,
  CulturalPulseEvent,
  WeatherInsight,
  MoodIcon,
  Season,
  AttractionTag,
  Achievement,
  Attraction,
  TravelDistrict,
  TravelState,
  TravelDataset,
  FilterOptions,
  InspireOptions,
  SurpriseOptions
} from './travel-types'

// Export loader functions
export {
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
  getFeaturedAttractions,
  travelDatasetComplete
} from './travel-loader'

// Re-export the existing geography data for backward compatibility
export { geography, navigationLinks, getStateById as getGeographyStateById, getDistrictById as getGeographyDistrictById } from './geography'
