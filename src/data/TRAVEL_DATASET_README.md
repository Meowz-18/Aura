# India Travel Dataset

Comprehensive travel dataset covering 8 states of India with detailed attraction information, accessibility data, and rich cultural context.

## Overview

This dataset provides structured data for travel applications, including:

- **8 States**: Rajasthan, Kerala, Goa, Tamil Nadu, Uttarakhand, Maharashtra, West Bengal, Karnataka
- **24+ Districts**: Each state has 3 or more districts
- **60+ Attractions**: Each district has 2-3 attractions with complete metadata

## Data Structure

### State
- `id`: Unique state identifier
- `name`: State name
- `description`: Brief state description
- `coordinates`: Geographic coordinates
- `districts`: Array of districts

### District
- `id`: Unique district identifier
- `name`: District name
- `description`: Brief district description
- `coordinates`: Geographic coordinates
- `attractions`: Array of attractions

### Attraction
Each attraction includes:
- **Basic Info**: ID, name, caption, legend
- **Narrative**: Poetic copy, story snippet
- **Location**: Coordinates (latitude/longitude)
- **Categories**: Tags, seasons, mood icons
- **Practical**: Travel tips, sustainability tips
- **Context**: Weather insights, cultural pulse timeline
- **Engagement**: Achievements, postcard metadata
- **Accessibility**: Wheelchair access, facilities, alt text
- **Audio**: Audio description with transcript

## Usage Examples

### Get All States
```typescript
import { getAllStates } from '@/data'

const states = getAllStates()
console.log(`Total states: ${states.length}`)
```

### Query Specific Location
```typescript
import { getStateById, getDistrictById, getAttractionById } from '@/data'

const rajasthan = getStateById('rajasthan')
const jaipur = getDistrictById('rajasthan', 'jaipur')
const amberFort = getAttractionById('rajasthan', 'jaipur', 'amber-fort')
```

### Filter Attractions
```typescript
import { filterAttractions } from '@/data'

// Filter by tags
const heritageAttractions = filterAttractions({ tags: ['heritage'] })

// Filter by season
const winterDestinations = filterAttractions({ seasons: ['winter'] })

// Filter by mood
const romanticSpots = filterAttractions({ moods: ['romantic'] })

// Wheelchair accessible only
const accessiblePlaces = filterAttractions({ wheelchairAccessible: true })

// Search by text
const searchResults = filterAttractions({ searchQuery: 'beach' })

// Combined filters
const filtered = filterAttractions({
  stateId: 'kerala',
  tags: ['nature', 'beach'],
  seasons: ['winter'],
  moods: ['peaceful']
})
```

### Inspire Flow
```typescript
import { getInspiredAttractions } from '@/data'

// Get random inspiration
const inspiration = getInspiredAttractions()

// Get inspiration by mood
const adventureTrips = getInspiredAttractions({ 
  mood: 'adventure', 
  limit: 5 
})

// Get inspiration by season
const summerTrips = getInspiredAttractions({ 
  season: 'summer', 
  limit: 10 
})
```

### Surprise Flow
```typescript
import { getSurpriseAttractions } from '@/data'

// Get random surprises
const surprises = getSurpriseAttractions()

// Exclude certain states
const surprisesWithoutRajasthan = getSurpriseAttractions({
  excludeStates: ['rajasthan'],
  count: 3
})

// Prefer certain tags
const surpriseAdventures = getSurpriseAttractions({
  preferredTags: ['adventure', 'nature'],
  count: 5
})
```

### Specialized Queries
```typescript
import { 
  getAttractionsByTag,
  getAttractionsBySeason,
  getAttractionsByMood,
  getAccessibleAttractions,
  searchAttractions
} from '@/data'

// Get all beaches
const beaches = getAttractionsByTag('beach')

// Get monsoon destinations
const monsoonSpots = getAttractionsBySeason('monsoon')

// Get spiritual places
const spiritualPlaces = getAttractionsByMood('spiritual')

// Get wheelchair accessible attractions
const accessible = getAccessibleAttractions()

// Search
const searchResults = searchAttractions('temple')
```

### Dataset Statistics
```typescript
import { getDatasetStats } from '@/data'

const stats = getDatasetStats()
console.log(stats)
// {
//   totalStates: 8,
//   totalDistricts: 24,
//   totalAttractions: 60+,
//   uniqueTags: 19,
//   uniqueSeasons: 5,
//   uniqueMoods: 10,
//   accessibleAttractions: 40+,
//   accessibilityPercentage: "65%",
//   tags: [...],
//   seasons: [...],
//   moods: [...]
// }
```

## Data Fields Reference

### Tags (AttractionTag)
- `heritage`, `nature`, `wildlife`, `beach`, `mountain`
- `spiritual`, `adventure`, `cultural`, `food`, `shopping`
- `architecture`, `waterfall`, `temple`, `fort`, `museum`
- `park`, `lake`, `backwaters`, `hillstation`

### Seasons
- `spring`, `summer`, `monsoon`, `autumn`, `winter`

### Mood Icons
- `serene`, `vibrant`, `adventure`, `spiritual`, `historic`
- `cultural`, `nature`, `romantic`, `family`, `peaceful`

### Weather Insight Fields
- `month`: Month name
- `temperature`: { min, max, unit: 'celsius' }
- `rainfall`: Description (e.g., "Low", "Heavy")
- `conditions`: Description of weather conditions

### Accessibility Fields
- `wheelchairAccessible`: Boolean
- `visuallyImpairedFriendly`: Boolean
- `hearingImpairedFriendly`: Boolean
- `facilities`: Array of facility descriptions
- `notes`: Additional accessibility information

### Postcard Metadata
- `imageUrl`: Main image path
- `altText`: Detailed alt text for accessibility
- `thumbnailUrl`: Thumbnail image path
- `aspectRatio`: '16:9' | '4:3' | '1:1' | '3:2'

### Audio Description
- `url`: Audio file path
- `duration`: Duration in seconds
- `transcript`: Full audio transcript
- `language`: 'en' | 'hi' | 'regional'

## Testing

Run tests to verify schema integrity:

```bash
npm test src/data/travel-loader.test.ts
```

Tests verify:
- Schema structure integrity
- Required fields presence
- Data quality (unique IDs, valid coordinates, etc.)
- Loader functionality
- Filter and search operations
- Inspire and surprise flows

## Design Principles

1. **Accessibility First**: Every attraction includes comprehensive accessibility information
2. **Rich Context**: Multiple narrative layers (caption, legend, poetic copy, story)
3. **Practical Information**: Travel tips, sustainability tips, weather insights
4. **Cultural Depth**: Historical timelines, cultural significance
5. **Engagement**: Achievements, interactive elements
6. **Searchability**: Multiple filtering and search options
7. **Type Safety**: Full TypeScript type coverage

## Data Quality Standards

- All attractions have 100% field completion
- Alt text for all images (accessibility)
- Audio descriptions with transcripts
- Coordinate validation
- Temperature range validation
- Unique ID enforcement
- Minimum content requirements (3 districts per state, 2 attractions per district)

## Future Enhancements

Potential additions:
- More states (targeting 28 states eventually)
- User reviews and ratings
- Real-time weather integration
- Booking integration
- User-generated content
- Multilingual support
- AR/VR experiences
- Social features

## Contributing

When adding new attractions, ensure:
1. All required fields are populated
2. Alt text is descriptive and accessibility-friendly
3. Coordinates are accurate
4. Travel tips are practical and current
5. Sustainability tips promote responsible tourism
6. Cultural information is accurate and respectful
7. Tests pass with new data

## License

This dataset is part of the project codebase. Refer to project license for usage terms.
