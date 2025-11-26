/**
 * Example usage of the travel dataset loader
 * 
 * This file demonstrates various ways to use the travel dataset module
 * Run this to see sample output: `npx tsx src/data/example-usage.ts`
 */

import {
  getAllStates,
  getStateById,
  filterAttractions,
  getInspiredAttractions,
  getSurpriseAttractions,
  searchAttractions,
  getAccessibleAttractions,
  getDatasetStats,
  getAttractionsByTag
} from './travel-loader'

console.log('=== Travel Dataset Examples ===\n')

// Example 1: Get all states
console.log('1. All States:')
const states = getAllStates()
console.log(`Total states: ${states.length}`)
states.forEach(state => {
  console.log(`  - ${state.name} (${state.districts.length} districts)`)
})
console.log()

// Example 2: Get specific state details
console.log('2. Rajasthan Details:')
const rajasthan = getStateById('rajasthan')
if (rajasthan) {
  console.log(`Name: ${rajasthan.name}`)
  console.log(`Description: ${rajasthan.description}`)
  console.log(`Districts: ${rajasthan.districts.map(d => d.name).join(', ')}`)
}
console.log()

// Example 3: Filter attractions by tags
console.log('3. Beach Destinations:')
const beaches = getAttractionsByTag('beach')
console.log(`Found ${beaches.length} beach attractions:`)
beaches.slice(0, 3).forEach(attraction => {
  console.log(`  - ${attraction.name}`)
})
console.log()

// Example 4: Search attractions
console.log('4. Search Results for "temple":')
const templeResults = searchAttractions('temple')
console.log(`Found ${templeResults.length} results:`)
templeResults.slice(0, 3).forEach(attraction => {
  console.log(`  - ${attraction.name}`)
})
console.log()

// Example 5: Get inspired attractions
console.log('5. Inspired by Adventure:')
const adventures = getInspiredAttractions({ mood: 'adventure', limit: 3 })
adventures.forEach(attraction => {
  console.log(`  - ${attraction.name}`)
  console.log(`    ${attraction.caption}`)
})
console.log()

// Example 6: Surprise me!
console.log('6. Surprise Destinations:')
const surprises = getSurpriseAttractions({ count: 3 })
surprises.forEach(attraction => {
  console.log(`  - ${attraction.name}`)
})
console.log()

// Example 7: Wheelchair accessible attractions
console.log('7. Wheelchair Accessible Attractions:')
const accessible = getAccessibleAttractions()
console.log(`Found ${accessible.length} accessible attractions`)
accessible.slice(0, 3).forEach(attraction => {
  console.log(`  - ${attraction.name}`)
})
console.log()

// Example 8: Filter by multiple criteria
console.log('8. Heritage Sites Best in Winter:')
const winterHeritage = filterAttractions({
  tags: ['heritage'],
  seasons: ['winter']
})
console.log(`Found ${winterHeritage.length} attractions:`)
winterHeritage.slice(0, 3).forEach(attraction => {
  console.log(`  - ${attraction.name}`)
})
console.log()

// Example 9: Dataset statistics
console.log('9. Dataset Statistics:')
const stats = getDatasetStats()
console.log(`  Total States: ${stats.totalStates}`)
console.log(`  Total Districts: ${stats.totalDistricts}`)
console.log(`  Total Attractions: ${stats.totalAttractions}`)
console.log(`  Unique Tags: ${stats.uniqueTags}`)
console.log(`  Accessible: ${stats.accessibilityPercentage}`)
console.log(`  Tags: ${stats.tags.slice(0, 5).join(', ')}...`)
console.log()

// Example 10: Get attraction with full details
console.log('10. Sample Attraction Details (Amber Fort):')
const amberFort = filterAttractions({ searchQuery: 'Amber Fort' })[0]
if (amberFort) {
  console.log(`  Name: ${amberFort.name}`)
  console.log(`  Caption: ${amberFort.caption}`)
  console.log(`  Tags: ${amberFort.tags.join(', ')}`)
  console.log(`  Best Seasons: ${amberFort.bestSeasons.join(', ')}`)
  console.log(`  Mood Icons: ${amberFort.moodIcons.join(', ')}`)
  console.log(`  Travel Tips: ${amberFort.travelTips.length} tips available`)
  console.log(`  Achievements: ${amberFort.achievements.length} available`)
  console.log(`  Wheelchair Accessible: ${amberFort.accessibility.wheelchairAccessible}`)
}

console.log('\n=== End of Examples ===')
