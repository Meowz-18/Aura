/**
 * Comprehensive travel dataset covering 8 states of India
 * with detailed information about attractions, districts, and cultural insights
 */

import type { TravelDataset } from './travel-types'

export const travelDataset: TravelDataset = {
  states: [
    // State 1: Rajasthan
    {
      id: 'rajasthan',
      name: 'Rajasthan',
      description: 'Land of kings, desert fortresses, and vibrant culture where golden sands meet royal heritage.',
      coordinates: { latitude: 27.0238, longitude: 74.2179 },
      districts: [
        {
          id: 'jaipur',
          name: 'Jaipur',
          description: 'The Pink City, where royal architecture blends with bustling bazaars.',
          coordinates: { latitude: 26.9124, longitude: 75.7873 },
          attractions: [
            {
              id: 'amber-fort',
              name: 'Amber Fort',
              caption: 'Majestic hilltop fortress with intricate mirror work and sweeping valley views',
              legend: 'Built in 1592 by Raja Man Singh I, this fort was the royal residence until Jaipur city was established',
              poeticCopy: 'Where sandstone whispers tales of maharajas, and mirror mosaics capture the sun\'s ancient dance across ramparts that have watched empires rise and fade.',
              storySnippet: 'As dawn breaks over the Aravalli hills, the amber stones glow with warmth. Elephants once carried kings through these gates; now they carry dreams of travelers who climb to touch history.',
              coordinates: { latitude: 26.9855, longitude: 75.8513 },
              tags: ['heritage', 'fort', 'architecture', 'cultural'],
              bestSeasons: ['winter', 'autumn'],
              moodIcons: ['historic', 'cultural', 'adventure'],
              travelTips: [
                'Visit early morning to avoid crowds and heat',
                'Book elephant ride tickets in advance during peak season',
                'Wear comfortable shoes for climbing',
                'Carry water and sun protection'
              ],
              sustainabilityTips: [
                'Use shuttle buses instead of private vehicles',
                'Avoid feeding wild animals',
                'Dispose of waste in designated bins only',
                'Support local artisan cooperatives'
              ],
              weatherInsights: [
                {
                  month: 'January',
                  temperature: { min: 8, max: 22, unit: 'celsius' },
                  rainfall: 'Minimal',
                  conditions: 'Clear and pleasant, perfect for exploration'
                },
                {
                  month: 'July',
                  temperature: { min: 25, max: 35, unit: 'celsius' },
                  rainfall: 'Moderate',
                  conditions: 'Monsoon freshness, lush surroundings'
                }
              ],
              culturalPulseTimeline: [
                { year: 1592, event: 'Fort construction completed', significance: 'Established as Kachwaha Rajput capital' },
                { year: 1727, event: 'Capital moved to Jaipur', significance: 'Fort became ceremonial residence' },
                { year: 2013, event: 'UNESCO World Heritage designation', significance: 'Global recognition of architectural marvel' }
              ],
              achievements: [
                {
                  title: 'Heritage Explorer',
                  description: 'Visited Amber Fort during golden hour',
                  icon: '🏰',
                  criteria: 'Visit between 5-7 AM or 5-7 PM'
                },
                {
                  title: 'Mirror Master',
                  description: 'Discovered the Sheesh Mahal secrets',
                  icon: '✨',
                  criteria: 'Complete the guided tour of mirror palace'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/amber-fort-main.jpg',
                altText: 'Amber Fort perched on hilltop with golden sandstone walls reflecting morning sun, surrounded by Aravalli hills',
                thumbnailUrl: '/assets/attractions/amber-fort-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/amber-fort-en.mp3',
                duration: 180,
                transcript: 'Welcome to Amber Fort, a magnificent example of Rajput architecture. As you approach, notice the imposing walls that merge seamlessly with the rocky hillside. The fort features four main courtyards, each revealing layers of royal life...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: false,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Audio guides', 'Tactile exhibits in museum', 'Rest areas'],
                notes: 'Limited wheelchair access due to steep stairs; elephant rides and jeep services available for mobility assistance'
              }
            },
            {
              id: 'hawa-mahal',
              name: 'Hawa Mahal',
              caption: 'The Palace of Winds with 953 intricately carved windows',
              legend: 'Constructed in 1799 to allow royal ladies to observe street life without being seen',
              poeticCopy: 'A coral-pink symphony of honeycomb windows where breezes pirouette through centuries-old jalousies, breathing secrets of sequestered queens into the bustling streets below.',
              storySnippet: 'Built like a crown atop the city bazaar, this five-story facade is more poetry than palace. Each window frames a different angle of Jaipur\'s soul, from festival processions to everyday rhythms.',
              coordinates: { latitude: 26.9239, longitude: 75.8267 },
              tags: ['heritage', 'architecture', 'cultural', 'museum'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['historic', 'cultural', 'romantic'],
              travelTips: [
                'Best photographed from across the street in early morning',
                'Visit the museum inside for full context',
                'Combine with City Palace visit nearby',
                'Explore Johari Bazaar afterward'
              ],
              sustainabilityTips: [
                'Walk or cycle from nearby attractions',
                'Buy handmade crafts from street vendors',
                'Use reusable water bottles',
                'Respect historical structure - no graffiti or damage'
              ],
              weatherInsights: [
                {
                  month: 'March',
                  temperature: { min: 15, max: 30, unit: 'celsius' },
                  rainfall: 'Very low',
                  conditions: 'Warm and dry, ideal for photography'
                }
              ],
              culturalPulseTimeline: [
                { year: 1799, event: 'Palace completed', significance: 'Maharaja Sawai Pratap Singh commissioned for royal women' },
                { year: 1950, event: 'Opened to public', significance: 'Became major tourist attraction' }
              ],
              achievements: [
                {
                  title: 'Pink City Pioneer',
                  description: 'Captured the perfect sunrise shot of Hawa Mahal',
                  icon: '📸',
                  criteria: 'Visit during sunrise hours'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/hawa-mahal-main.jpg',
                altText: 'Pink sandstone facade of Hawa Mahal with hundreds of ornate windows arranged in honeycomb pattern',
                thumbnailUrl: '/assets/attractions/hawa-mahal-thumb.jpg',
                aspectRatio: '3:2'
              },
              audioDescription: {
                url: '/assets/audio/hawa-mahal-en.mp3',
                duration: 120,
                transcript: 'The Hawa Mahal, or Palace of Winds, stands as an architectural marvel with its distinctive pink facade. Its 953 small windows, called jharokhas, allowed cool air to circulate...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Ramps', 'Elevators', 'Audio guides', 'Braille signage'],
                notes: 'Ground floor and museum area fully accessible'
              }
            }
          ]
        },
        {
          id: 'jodhpur',
          name: 'Jodhpur',
          description: 'The Blue City, dominated by the mighty Mehrangarh Fort and azure-painted houses.',
          coordinates: { latitude: 26.2389, longitude: 73.0243 },
          attractions: [
            {
              id: 'mehrangarh-fort',
              name: 'Mehrangarh Fort',
              caption: 'One of India\'s largest forts, towering 410 feet above the blue city',
              legend: 'Founded by Rao Jodha in 1459, it houses palaces with intricate carvings and expansive courtyards',
              poeticCopy: 'A titan of stone rising from the Thar\'s edge, where falcon shadows sweep across battlements that have never fallen, guarding memories of valor written in sandstone and song.',
              storySnippet: 'From the fort\'s heights, Jodhpur spreads below like a blue ocean frozen in time. The thick walls have witnessed centuries of Rajput pride, and within its museums lie treasures that speak of artistic excellence.',
              coordinates: { latitude: 26.2985, longitude: 73.0186 },
              tags: ['heritage', 'fort', 'architecture', 'museum', 'cultural'],
              bestSeasons: ['winter', 'autumn'],
              moodIcons: ['historic', 'adventure', 'cultural'],
              travelTips: [
                'Allocate at least 3 hours for thorough exploration',
                'Wear sturdy shoes for walking ramparts',
                'Don\'t miss the museum\'s collection of royal palanquins',
                'Try the fort café for panoramic lunch views'
              ],
              sustainabilityTips: [
                'Take the zipline tour for eco-adventure',
                'Support the fort\'s conservation efforts with donations',
                'Purchase from fort\'s handicraft center supporting local artisans',
                'Follow designated paths to preserve structure'
              ],
              weatherInsights: [
                {
                  month: 'December',
                  temperature: { min: 10, max: 24, unit: 'celsius' },
                  rainfall: 'None',
                  conditions: 'Cool and comfortable, excellent visibility'
                }
              ],
              culturalPulseTimeline: [
                { year: 1459, event: 'Fort founded', significance: 'Birth of Jodhpur city around the fort' },
                { year: 1806, event: 'Zenana Mahal added', significance: 'Expansion of royal residence' },
                { year: 2008, event: 'Won UNESCO recognition', significance: 'Part of Hill Forts of Rajasthan'  }
              ],
              achievements: [
                {
                  title: 'Fort Conqueror',
                  description: 'Explored all seven gates of Mehrangarh',
                  icon: '⚔️',
                  criteria: 'Visit all gates including Jayapol and Fatehpol'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/mehrangarh-fort-main.jpg',
                altText: 'Massive Mehrangarh Fort with red sandstone walls rising from rocky cliff, overlooking blue houses of Jodhpur',
                thumbnailUrl: '/assets/attractions/mehrangarh-fort-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/mehrangarh-fort-en.mp3',
                duration: 240,
                transcript: 'Mehrangarh Fort stands as one of the most formidable fortresses in India. Built on a perpendicular cliff, its walls rise 120 feet high...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Elevator to main courtyards', 'Audio guides', 'Wheelchair rentals', 'Accessible restrooms'],
                notes: 'Most main areas accessible; some ramparts have steep sections'
              }
            },
            {
              id: 'umaid-bhawan',
              name: 'Umaid Bhawan Palace',
              caption: 'Living palace combining royal residence, luxury hotel, and museum',
              legend: 'Built between 1928-1943 during a famine as an employment generation project',
              poeticCopy: 'Where Art Deco dreams merged with Rajput grandeur, creating a golden-sandstone marvel that bridges colonial elegance and timeless royalty, still home to living heritage.',
              storySnippet: 'This palace took 15 years and employed thousands. Today, one wing houses the royal family, another a five-star hotel, and the third a museum. It\'s a living monument to resilience and beauty.',
              coordinates: { latitude: 26.2867, longitude: 73.0371 },
              tags: ['heritage', 'architecture', 'museum', 'cultural'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['historic', 'romantic', 'cultural'],
              travelTips: [
                'Museum visit requires separate ticket',
                'Photography restrictions in some areas',
                'Hotel afternoon tea offers palace glimpse',
                'Visit the vintage car collection'
              ],
              sustainabilityTips: [
                'Respect royal family privacy in residence areas',
                'Support museum conservation fund',
                'Use palace\'s eco-friendly transport options',
                'Avoid touching vintage artifacts'
              ],
              weatherInsights: [
                {
                  month: 'February',
                  temperature: { min: 12, max: 26, unit: 'celsius' },
                  rainfall: 'Minimal',
                  conditions: 'Pleasant weather for garden walks'
                }
              ],
              culturalPulseTimeline: [
                { year: 1943, event: 'Palace completed', significance: 'Largest private residence in India' },
                { year: 2005, event: 'Opened luxury hotel wing', significance: 'Ranked among world\'s best hotels' }
              ],
              achievements: [
                {
                  title: 'Royal Observer',
                  description: 'Explored the museum and royal clock collection',
                  icon: '👑',
                  criteria: 'Complete museum tour'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/umaid-bhawan-main.jpg',
                altText: 'Grand Umaid Bhawan Palace with yellow sandstone facade, central dome, and Art Deco architecture set in manicured gardens',
                thumbnailUrl: '/assets/attractions/umaid-bhawan-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/umaid-bhawan-en.mp3',
                duration: 150,
                transcript: 'Umaid Bhawan Palace represents a unique blend of eastern and western architectural influences. Commissioned by Maharaja Umaid Singh...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Ramps throughout', 'Elevators', 'Accessible museum areas', 'Guided tours available'],
                notes: 'Museum section fully accessible'
              }
            },
            {
              id: 'clock-tower-market',
              name: 'Clock Tower & Sardar Market',
              caption: 'Bustling marketplace around historic clock tower, heart of old city commerce',
              legend: 'Built by Maharaja Sardar Singh in the 1910s, the clock tower remains Jodhpur\'s iconic landmark',
              poeticCopy: 'Where time ticks to the rhythm of haggling voices, spice aromas spiral through narrow lanes, and every corner reveals treasures - from silver bangles to indigo textiles.',
              storySnippet: 'As the clock chimes, vendors call out their wares. This is Jodhpur\'s beating heart - a sensory explosion of colors, sounds, and scents that has drawn traders for over a century.',
              coordinates: { latitude: 26.2929, longitude: 73.0200 },
              tags: ['cultural', 'shopping', 'food', 'heritage'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['vibrant', 'cultural', 'adventure'],
              travelTips: [
                'Visit in evening for best atmosphere',
                'Practice bargaining skills',
                'Try local Makhaniya lassi',
                'Keep valuables secure in crowds'
              ],
              sustainabilityTips: [
                'Carry cloth bags for shopping',
                'Buy directly from artisans',
                'Refuse plastic bags',
                'Support traditional craftsmen'
              ],
              weatherInsights: [
                {
                  month: 'November',
                  temperature: { min: 14, max: 28, unit: 'celsius' },
                  rainfall: 'None',
                  conditions: 'Perfect for market exploration'
                }
              ],
              culturalPulseTimeline: [
                { year: 1910, event: 'Clock tower erected', significance: 'Became central meeting point' },
                { year: 2000, event: 'Market restoration', significance: 'Preserved heritage market character' }
              ],
              achievements: [
                {
                  title: 'Market Master',
                  description: 'Successfully bargained at Sardar Market',
                  icon: '🛍️',
                  criteria: 'Purchase items from 5 different vendors'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/clock-tower-main.jpg',
                altText: 'Historic clock tower rising above crowded Sardar Market with colorful stalls and bustling shoppers',
                thumbnailUrl: '/assets/attractions/clock-tower-thumb.jpg',
                aspectRatio: '4:3'
              },
              audioDescription: {
                url: '/assets/audio/clock-tower-en.mp3',
                duration: 90,
                transcript: 'The Ghanta Ghar, or Clock Tower, marks the entrance to Sardar Market, one of Jodhpur\'s oldest markets. Listen to the sounds of vendors...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: false,
                visuallyImpairedFriendly: false,
                hearingImpairedFriendly: true,
                facilities: ['Rest seating areas'],
                notes: 'Narrow lanes and crowds make wheelchair access difficult; guided assistance recommended'
              }
            }
          ]
        },
        {
          id: 'udaipur',
          name: 'Udaipur',
          description: 'The City of Lakes, renowned for romantic palaces floating on shimmering waters.',
          coordinates: { latitude: 24.5854, longitude: 73.7125 },
          attractions: [
            {
              id: 'city-palace-udaipur',
              name: 'City Palace Udaipur',
              caption: 'Sprawling palace complex overlooking Lake Pichola with blend of Rajasthani and Mughal architecture',
              legend: 'Built over 400 years by successive rulers, it remains Rajasthan\'s largest palace complex',
              poeticCopy: 'Marble and mirror work dance with light over crystal courtyards, where every balcony frames liquid poetry - the lake that cradles reflections of dynasties.',
              storySnippet: 'Built over centuries, each maharaja added his vision to this white marble dream. From zenana courtyards to the crystal gallery, every room tells tales of love, war, and artistic devotion.',
              coordinates: { latitude: 24.5766, longitude: 73.6835 },
              tags: ['heritage', 'architecture', 'museum', 'cultural'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['historic', 'romantic', 'cultural'],
              travelTips: [
                'Book tickets online to skip queues',
                'Hire audio guide for rich historical context',
                'Visit Crystal Gallery with separate ticket',
                'Best views of Lake Pichola from palace terraces'
              ],
              sustainabilityTips: [
                'Respect conservation guidelines',
                'Don\'t touch historic paintings and artifacts',
                'Use designated walkways only',
                'Support palace preservation fund'
              ],
              weatherInsights: [
                {
                  month: 'January',
                  temperature: { min: 10, max: 24, unit: 'celsius' },
                  rainfall: 'None',
                  conditions: 'Clear skies perfect for palace exploration'
                }
              ],
              culturalPulseTimeline: [
                { year: 1559, event: 'Foundation laid', significance: 'Udai Singh II established the palace' },
                { year: 1974, event: 'Museum opened', significance: 'Sections opened to public viewing' }
              ],
              achievements: [
                {
                  title: 'Palace Perfectionist',
                  description: 'Explored all major sections of City Palace',
                  icon: '🏛️',
                  criteria: 'Visit all galleries and courtyards'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/city-palace-udaipur-main.jpg',
                altText: 'White marble City Palace complex rising above Lake Pichola with ornate balconies and domes',
                thumbnailUrl: '/assets/attractions/city-palace-udaipur-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/city-palace-udaipur-en.mp3',
                duration: 210,
                transcript: 'Welcome to the City Palace of Udaipur, a monument to Mewar dynasty legacy. As you enter through the Badi Pol gate...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Ramps in main areas', 'Elevators available', 'Audio guides', 'Rest areas'],
                notes: 'Most galleries accessible; some upper terraces require stairs'
              }
            },
            {
              id: 'lake-pichola',
              name: 'Lake Pichola',
              caption: 'Artificial freshwater lake with island palaces and ethereal sunset views',
              legend: 'Created in 1362 AD and later expanded, it became the heart of Udaipur\'s royal landscape',
              poeticCopy: 'Where water mirrors sky and palaces float like dreams, each ripple carries whispers of romance, each sunset paints the Aravalli hills in amber and gold.',
              storySnippet: 'Board a boat at dusk and glide past Jag Mandir and Lake Palace. The water shimmers with reflected lights, the hills frame the horizon, and time seems to pause in the beauty of this moment.',
              coordinates: { latitude: 24.5739, longitude: 73.6784 },
              tags: ['nature', 'romantic', 'cultural', 'lake'],
              bestSeasons: ['winter', 'autumn', 'spring', 'monsoon'],
              moodIcons: ['romantic', 'peaceful', 'serene'],
              travelTips: [
                'Sunset boat rides are most popular - book early',
                'Morning rides offer serene, less crowded experience',
                'Carry camera for palace photography',
                'Respect lake cleanliness - no littering'
              ],
              sustainabilityTips: [
                'Choose eco-friendly boat operators',
                'No feeding fish or birds',
                'Don\'t throw anything in the water',
                'Support lake conservation initiatives'
              ],
              weatherInsights: [
                {
                  month: 'October',
                  temperature: { min: 18, max: 32, unit: 'celsius' },
                  rainfall: 'Low',
                  conditions: 'Post-monsoon freshness, lake at full capacity'
                }
              ],
              culturalPulseTimeline: [
                { year: 1362, event: 'Lake created', significance: 'Provided water reservoir for city' },
                { year: 1746, event: 'Lake Palace built', significance: 'Jag Niwas island palace construction' }
              ],
              achievements: [
                {
                  title: 'Sunset Seeker',
                  description: 'Witnessed golden hour over Lake Pichola',
                  icon: '🌅',
                  criteria: 'Take boat ride during sunset'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/lake-pichola-main.jpg',
                altText: 'Tranquil Lake Pichola at sunset with City Palace and Lake Palace reflected in calm waters, hills in background',
                thumbnailUrl: '/assets/attractions/lake-pichola-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/lake-pichola-en.mp3',
                duration: 120,
                transcript: 'Lake Pichola stretches before you, an artificial lake that has become the soul of Udaipur. Created in 1362...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Accessible boat boarding', 'Staff assistance available'],
                notes: 'Boat rides accommodate wheelchairs with advance notice'
              }
            }
          ]
        }
      ]
    },
    // State 2: Kerala
    {
      id: 'kerala',
      name: 'Kerala',
      description: 'God\'s Own Country, where backwaters meander through lush greenery and spices perfume the air.',
      coordinates: { latitude: 10.8505, longitude: 76.2711 },
      districts: [
        {
          id: 'alappuzha',
          name: 'Alappuzha',
          description: 'Venice of the East, famous for backwaters, houseboats, and pristine beaches.',
          coordinates: { latitude: 9.4981, longitude: 76.3388 },
          attractions: [
            {
              id: 'alleppey-backwaters',
              name: 'Alleppey Backwaters',
              caption: 'Serene network of lagoons, canals, and lakes lined with coconut groves',
              legend: 'Ancient waterways that have been lifelines of Kerala for centuries',
              poeticCopy: 'Where water weaves through emerald rice paddies, and kettuvallams glide like floating mansions through liquid serenity, time flows at the pace of gentle currents.',
              storySnippet: 'Board a traditional houseboat and drift through narrow canals where village life unfolds on water\'s edge. Children wave from tiny bridges, fishermen cast nets, and the world slows to nature\'s rhythm.',
              coordinates: { latitude: 9.4981, longitude: 76.3388 },
              tags: ['backwaters', 'nature', 'cultural', 'romantic'],
              bestSeasons: ['winter', 'autumn'],
              moodIcons: ['serene', 'peaceful', 'romantic'],
              travelTips: [
                'Book houseboat 2-3 weeks in advance',
                'Overnight stay offers best experience',
                'Try traditional Kerala meals onboard',
                'Carry mosquito repellent'
              ],
              sustainabilityTips: [
                'Choose solar-powered houseboats',
                'No plastic waste in waterways',
                'Support local fishermen cooperatives',
                'Respect aquatic ecosystem'
              ],
              weatherInsights: [
                {
                  month: 'December',
                  temperature: { min: 22, max: 31, unit: 'celsius' },
                  rainfall: 'Low',
                  conditions: 'Pleasant with cool breezes'
                },
                {
                  month: 'August',
                  temperature: { min: 24, max: 29, unit: 'celsius' },
                  rainfall: 'Heavy',
                  conditions: 'Monsoon lushness, dramatic skies'
                }
              ],
              culturalPulseTimeline: [
                { year: 1000, event: 'Trade routes established', significance: 'Backwaters became spice trade corridor' },
                { year: 1990, event: 'Houseboat tourism began', significance: 'Transformed rice barges into tourist attractions' }
              ],
              achievements: [
                {
                  title: 'Backwater Voyager',
                  description: 'Completed overnight houseboat journey',
                  icon: '⛵',
                  criteria: 'Stay overnight in traditional kettuvallam'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/alleppey-backwaters-main.jpg',
                altText: 'Traditional Kerala houseboat cruising through narrow palm-lined canal with reflection in still water',
                thumbnailUrl: '/assets/attractions/alleppey-backwaters-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/alleppey-backwaters-en.mp3',
                duration: 150,
                transcript: 'The Alleppey backwaters form an intricate network of waterways. As you cruise along, observe the unique ecosystem...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Modified houseboats with ramps', 'Accessible cabins', 'Staff assistance'],
                notes: 'Special accessible houseboats available on request'
              }
            },
            {
              id: 'marari-beach',
              name: 'Marari Beach',
              caption: 'Pristine, uncommercialised beach with golden sands and swaying palms',
              legend: 'Traditional fishing village beach discovered by travelers seeking tranquility',
              poeticCopy: 'Where Arabian waves kiss virgin sands, and fishing boats paint horizons at dawn, this is paradise before tourism touched it - raw, real, and breathtakingly pure.',
              storySnippet: 'Unlike crowded beaches, Marari remains authentic. Fishermen haul nets at sunrise, children play in shallow pools, and the only sounds are waves and wind through coconut fronds.',
              coordinates: { latitude: 9.6016, longitude: 76.3096 },
              tags: ['beach', 'nature', 'peaceful'],
              bestSeasons: ['winter', 'autumn'],
              moodIcons: ['peaceful', 'serene', 'romantic'],
              travelTips: [
                'Visit early morning for solitude',
                'Respect fishing community space',
                'Hire bicycle to explore village',
                'Try fresh seafood at beach shacks'
              ],
              sustainabilityTips: [
                'Carry reusable water bottles',
                'Clean up after yourself',
                'No disturbing turtle nesting sites',
                'Support local fishermen directly'
              ],
              weatherInsights: [
                {
                  month: 'November',
                  temperature: { min: 24, max: 31, unit: 'celsius' },
                  rainfall: 'Minimal',
                  conditions: 'Perfect beach weather, calm seas'
                }
              ],
              culturalPulseTimeline: [
                { year: 2000, event: 'Eco-tourism initiatives', significance: 'Sustainable beach development started' }
              ],
              achievements: [
                {
                  title: 'Beach Wanderer',
                  description: 'Witnessed sunrise at Marari Beach',
                  icon: '🏖️',
                  criteria: 'Visit beach before 7 AM'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/marari-beach-main.jpg',
                altText: 'Pristine Marari Beach with golden sand, coconut palms leaning over shore, and calm Arabian Sea',
                thumbnailUrl: '/assets/attractions/marari-beach-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/marari-beach-en.mp3',
                duration: 90,
                transcript: 'Marari Beach represents Kerala\'s unspoiled coastal beauty. The name derives from Mararikulam village...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: false,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Sandy paths may be challenging', 'Some resorts have beach wheelchairs'],
                notes: 'Sand makes wheelchair access difficult; assistance required'
              }
            }
          ]
        },
        {
          id: 'munnar',
          name: 'Munnar',
          description: 'Hill station paradise with rolling tea plantations and mist-covered peaks.',
          coordinates: { latitude: 10.0889, longitude: 77.0595 },
          attractions: [
            {
              id: 'tea-gardens',
              name: 'Munnar Tea Gardens',
              caption: 'Endless rolling hills carpeted in emerald tea bushes',
              legend: 'British established these plantations in the 1870s, now producing some of India\'s finest teas',
              poeticCopy: 'Where green velvet unfurls to the horizon, and mist wraps the morning in mystery, tea pickers become dancers in an ancient choreography of leaf and basket.',
              storySnippet: 'Walk through manicured rows of tea bushes as far as eyes can see. Visit a tea factory to watch processing - from plucking to drying to tasting. The air itself smells of fresh leaves.',
              coordinates: { latitude: 10.0889, longitude: 77.0595 },
              tags: ['nature', 'hillstation', 'cultural'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['peaceful', 'nature', 'serene'],
              travelTips: [
                'Take guided factory tour for tea-making insights',
                'Early morning offers best mist-covered views',
                'Buy fresh tea directly from estates',
                'Wear layers - temperature varies greatly'
              ],
              sustainabilityTips: [
                'Stay on designated paths',
                'Don\'t pluck tea leaves',
                'Support organic tea estates',
                'Respect plantation workers'
              ],
              weatherInsights: [
                {
                  month: 'January',
                  temperature: { min: 10, max: 20, unit: 'celsius' },
                  rainfall: 'Low',
                  conditions: 'Crisp and clear, excellent for trekking'
                },
                {
                  month: 'July',
                  temperature: { min: 15, max: 22, unit: 'celsius' },
                  rainfall: 'Very high',
                  conditions: 'Monsoon magic, lush greenery'
                }
              ],
              culturalPulseTimeline: [
                { year: 1870, event: 'First tea plantations', significance: 'British established tea cultivation' },
                { year: 2005, event: 'Organic tea movement', significance: 'Shift toward sustainable practices' }
              ],
              achievements: [
                {
                  title: 'Tea Connoisseur',
                  description: 'Completed tea factory tour and tasting',
                  icon: '🍵',
                  criteria: 'Visit tea factory and attend tasting session'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/tea-gardens-main.jpg',
                altText: 'Misty rolling hills covered in bright green tea plantations with winding paths through estates',
                thumbnailUrl: '/assets/attractions/tea-gardens-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/tea-gardens-en.mp3',
                duration: 180,
                transcript: 'Munnar\'s tea gardens stretch across mountains like a green quilt. The British discovered these hills perfect for tea cultivation...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: false,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Some estates have paved paths', 'Factory tours accessible'],
                notes: 'Steep terrain limits wheelchair access; viewpoints and factories more accessible'
              }
            },
            {
              id: 'eravikulam-national-park',
              name: 'Eravikulam National Park',
              caption: 'Home to endangered Nilgiri Tahr with stunning Anamudi Peak backdrop',
              legend: 'Established in 1978 to protect the Nilgiri Tahr, this park showcases Shola grasslands',
              poeticCopy: 'Where endangered mountain goats leap across cliffs with balletic grace, and meadows bloom with Neelakurinji once every twelve years, painting mountains purple.',
              storySnippet: 'Trek through grasslands where Nilgiri Tahrs graze fearlessly. The Anamudi Peak, South India\'s highest, towers above. If lucky, witness the rare Neelakurinji flower bloom.',
              coordinates: { latitude: 10.1194, longitude: 77.0635 },
              tags: ['wildlife', 'nature', 'adventure', 'park'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['adventure', 'nature', 'peaceful'],
              travelTips: [
                'Park closes during Tahr breeding season (Feb-March)',
                'Book entry tickets online',
                'Wear comfortable trekking shoes',
                'Binoculars recommended for wildlife spotting'
              ],
              sustainabilityTips: [
                'Follow park rangers\' instructions strictly',
                'No feeding wildlife',
                'Stay on marked trails',
                'Zero plastic policy - carry reusables'
              ],
              weatherInsights: [
                {
                  month: 'December',
                  temperature: { min: 5, max: 15, unit: 'celsius' },
                  rainfall: 'Very low',
                  conditions: 'Cold and clear, excellent wildlife visibility'
                }
              ],
              culturalPulseTimeline: [
                { year: 1978, event: 'Park established', significance: 'Protected Nilgiri Tahr habitat' },
                { year: 2006, event: 'Neelakurinji bloom', significance: 'Rare flower bloom attracts global attention' }
              ],
              achievements: [
                {
                  title: 'Wildlife Spotter',
                  description: 'Spotted Nilgiri Tahr in natural habitat',
                  icon: '🦌',
                  criteria: 'Photograph Nilgiri Tahr during park visit'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/eravikulam-main.jpg',
                altText: 'Nilgiri Tahr standing on rocky outcrop in Eravikulam National Park with rolling grasslands and Anamudi Peak',
                thumbnailUrl: '/assets/attractions/eravikulam-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/eravikulam-en.mp3',
                duration: 150,
                transcript: 'Eravikulam National Park, home to the endangered Nilgiri Tahr, spans 97 square kilometers. The park\'s diverse ecosystem...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: false,
                visuallyImpairedFriendly: false,
                hearingImpairedFriendly: true,
                facilities: ['Visitor center accessible', 'Bus tours available for limited mobility'],
                notes: 'Trekking trails not wheelchair accessible; bus tour covers main viewing areas'
              }
            },
            {
              id: 'mattupetty-dam',
              name: 'Mattupetty Dam',
              caption: 'Scenic reservoir surrounded by hills, perfect for boating and picnics',
              legend: 'Built in 1940s for hydroelectric power and water storage',
              poeticCopy: 'Where still waters mirror cloud-kissed peaks, and small boats trace gentle arcs across liquid mirrors, peace descends like the evening mist.',
              storySnippet: 'Rent a pedal boat or simply sit by the reservoir watching clouds play across water. Nearby is the Indo-Swiss dairy farm, another unique attraction.',
              coordinates: { latitude: 10.1196, longitude: 77.1172 },
              tags: ['nature', 'lake', 'family'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['peaceful', 'family', 'nature'],
              travelTips: [
                'Best visited in afternoon',
                'Combine with Echo Point nearby',
                'Boating available but check timings',
                'Carry light snacks for picnic'
              ],
              sustainabilityTips: [
                'Dispose waste in bins only',
                'No littering in water',
                'Keep volume low to preserve serenity',
                'Respect safety barriers'
              ],
              weatherInsights: [
                {
                  month: 'February',
                  temperature: { min: 10, max: 20, unit: 'celsius' },
                  rainfall: 'Low',
                  conditions: 'Clear skies, perfect for boating'
                }
              ],
              culturalPulseTimeline: [
                { year: 1940, event: 'Dam construction', significance: 'Provided hydroelectric power to region' }
              ],
              achievements: [
                {
                  title: 'Lake Explorer',
                  description: 'Enjoyed boating at Mattupetty Dam',
                  icon: '🚣',
                  criteria: 'Complete boating experience'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/mattupetty-dam-main.jpg',
                altText: 'Mattupetty Dam reservoir with calm blue water surrounded by green hills and misty peaks',
                thumbnailUrl: '/assets/attractions/mattupetty-dam-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/mattupetty-dam-en.mp3',
                duration: 90,
                transcript: 'Mattupetty Dam and reservoir offer a peaceful retreat in the hills. Built for water storage and power generation...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Paved viewing areas', 'Accessible parking', 'Benches'],
                notes: 'Dam viewpoints accessible; boating may require assistance'
              }
            }
          ]
        },
        {
          id: 'wayanad',
          name: 'Wayanad',
          description: 'Lush green district with waterfalls, wildlife sanctuaries, and ancient caves.',
          coordinates: { latitude: 11.6854, longitude: 76.1320 },
          attractions: [
            {
              id: 'chembra-peak',
              name: 'Chembra Peak',
              caption: 'Wayanad\'s highest peak with heart-shaped lake midway',
              legend: 'At 2,100 meters, it offers panoramic views of Western Ghats',
              poeticCopy: 'Climb through spice plantations and mist to reach a heart-shaped lake that legends say never dries - a jewel cradled by clouds.',
              storySnippet: 'The trek to Chembra tests your stamina but rewards with breathtaking vistas. The heart-shaped lake, believed to never dry up, sits at the halfway point like nature\'s valentine.',
              coordinates: { latitude: 11.5686, longitude: 76.1320 },
              tags: ['adventure', 'mountain', 'nature', 'hillstation'],
              bestSeasons: ['winter', 'autumn'],
              moodIcons: ['adventure', 'nature', 'peaceful'],
              travelTips: [
                'Trek permit required - book in advance',
                'Start early (by 7 AM) to avoid afternoon heat',
                'Carry sufficient water and energy snacks',
                'Guide mandatory for safety'
              ],
              sustainabilityTips: [
                'Carry back all waste',
                'Follow guide instructions strictly',
                'No littering on trails',
                'Respect protected forest area'
              ],
              weatherInsights: [
                {
                  month: 'December',
                  temperature: { min: 12, max: 25, unit: 'celsius' },
                  rainfall: 'Minimal',
                  conditions: 'Clear views, comfortable trekking weather'
                }
              ],
              culturalPulseTimeline: [
                { year: 1990, event: 'Trekking routes formalized', significance: 'Became popular adventure destination' }
              ],
              achievements: [
                {
                  title: 'Peak Conqueror',
                  description: 'Reached Chembra Peak summit',
                  icon: '⛰️',
                  criteria: 'Complete the full trek to summit'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/chembra-peak-main.jpg',
                altText: 'Heart-shaped lake nestled in green hills with misty Chembra Peak rising behind',
                thumbnailUrl: '/assets/attractions/chembra-peak-thumb.jpg',
                aspectRatio: '4:3'
              },
              audioDescription: {
                url: '/assets/audio/chembra-peak-en.mp3',
                duration: 120,
                transcript: 'Chembra Peak, the highest point in Wayanad at 2,100 meters, offers one of the region\'s most popular treks...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: false,
                visuallyImpairedFriendly: false,
                hearingImpairedFriendly: true,
                facilities: ['Base camp rest area'],
                notes: 'Steep trek not suitable for mobility challenges'
              }
            },
            {
              id: 'edakkal-caves',
              name: 'Edakkal Caves',
              caption: 'Prehistoric caves with Stone Age petroglyphs dating back 8,000 years',
              legend: 'Ancient rock carvings reveal human civilization from Neolithic era',
              poeticCopy: 'Where Stone Age artists etched their dreams on rock walls, creating a time capsule that speaks across millennia of humanity\'s earliest expressions.',
              storySnippet: 'Climb 1,000 feet to caves formed by a unique geological formation. Inside, ancient petroglyphs depict human figures, animals, and symbols - messages from our ancestors.',
              coordinates: { latitude: 11.6764, longitude: 76.0728 },
              tags: ['heritage', 'adventure', 'cultural', 'historic'],
              bestSeasons: ['winter', 'autumn'],
              moodIcons: ['historic', 'adventure', 'cultural'],
              travelTips: [
                'Climb of 375 steps to reach caves',
                'Carry water bottle',
                'Photography allowed',
                'Visit early to avoid crowds'
              ],
              sustainabilityTips: [
                'Do not touch cave walls or carvings',
                'No graffiti or vandalism',
                'Dispose waste properly',
                'Respect archaeological site'
              ],
              weatherInsights: [
                {
                  month: 'January',
                  temperature: { min: 15, max: 28, unit: 'celsius' },
                  rainfall: 'Very low',
                  conditions: 'Pleasant for climbing'
                }
              ],
              culturalPulseTimeline: [
                { year: -6000, event: 'Petroglyphs created', significance: 'Evidence of Neolithic civilization' },
                { year: 1890, event: 'Modern discovery', significance: 'British surveyor Fred Fawcett documented' }
              ],
              achievements: [
                {
                  title: 'Ancient Explorer',
                  description: 'Discovered Edakkal Caves petroglyphs',
                  icon: '🗿',
                  criteria: 'Visit and document the rock art'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/edakkal-caves-main.jpg',
                altText: 'Ancient petroglyphs carved on cave walls showing human and animal figures from Stone Age',
                thumbnailUrl: '/assets/attractions/edakkal-caves-thumb.jpg',
                aspectRatio: '4:3'
              },
              audioDescription: {
                url: '/assets/audio/edakkal-caves-en.mp3',
                duration: 180,
                transcript: 'The Edakkal Caves are not true caves but rather a cleft formed by a massive boulder. The site contains pictorial writings...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: false,
                visuallyImpairedFriendly: false,
                hearingImpairedFriendly: true,
                facilities: ['Rest areas along climb'],
                notes: '375 steps make this challenging for mobility impairments'
              }
            }
          ]
        }
      ]
    },
    // State 3: Goa
    {
      id: 'goa',
      name: 'Goa',
      description: 'Coastal paradise with Portuguese heritage, golden beaches, and vibrant nightlife.',
      coordinates: { latitude: 15.2993, longitude: 74.1240 },
      districts: [
        {
          id: 'north-goa',
          name: 'North Goa',
          description: 'Vibrant hub of beaches, markets, and nightlife.',
          coordinates: { latitude: 15.5491, longitude: 73.7639 },
          attractions: [
            {
              id: 'baga-beach',
              name: 'Baga Beach',
              caption: 'Popular beach known for water sports, shacks, and nightlife',
              legend: 'Named after Baga Creek flowing into Arabian Sea',
              poeticCopy: 'Where golden sands meet turquoise waves, and beach shacks pulse with music as sun-kissed travelers dance between sea and sky.',
              storySnippet: 'By day, water sports rule - parasailing, jet skiing, banana boat rides. By night, beach shacks transform into party venues where music and waves compete for attention.',
              coordinates: { latitude: 15.5550, longitude: 73.7516 },
              tags: ['beach', 'adventure', 'vibrant'],
              bestSeasons: ['winter', 'autumn'],
              moodIcons: ['vibrant', 'adventure', 'family'],
              travelTips: [
                'Best visited October to March',
                'Negotiate water sports prices',
                'Try seafood at beach shacks',
                'Sunset time gets very crowded'
              ],
              sustainabilityTips: [
                'Use reef-safe sunscreen',
                'Don\'t litter on beach',
                'Support local vendors',
                'Respect marine life'
              ],
              weatherInsights: [
                {
                  month: 'December',
                  temperature: { min: 20, max: 32, unit: 'celsius' },
                  rainfall: 'None',
                  conditions: 'Perfect beach weather, calm seas'
                }
              ],
              culturalPulseTimeline: [
                { year: 1960, event: 'Tourism emergence', significance: 'Hippie trail made Goa famous' },
                { year: 2000, event: 'Water sports boom', significance: 'Adventure tourism established' }
              ],
              achievements: [
                {
                  title: 'Water Warrior',
                  description: 'Tried water sports at Baga Beach',
                  icon: '🏄',
                  criteria: 'Participate in any water sport activity'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/baga-beach-main.jpg',
                altText: 'Bustling Baga Beach with colorful beach shacks, people enjoying water sports, and azure Arabian Sea',
                thumbnailUrl: '/assets/attractions/baga-beach-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/baga-beach-en.mp3',
                duration: 120,
                transcript: 'Baga Beach represents Goa\'s vibrant coastal culture. The sounds of waves mix with music from beach shacks...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Beach wheelchairs available', 'Accessible shacks', 'Lifeguard assistance'],
                notes: 'Sandy areas challenging; boardwalks and staff assistance available'
              }
            },
            {
              id: 'fort-aguada',
              name: 'Fort Aguada',
              caption: '17th-century Portuguese fort with lighthouse overlooking Arabian Sea',
              legend: 'Built in 1612 to defend against Dutch and Marathas',
              poeticCopy: 'Where red laterite walls guard centuries of secrets, and the lighthouse beam sweeps across time, illuminating tales of colonial power and maritime glory.',
              storySnippet: 'This well-preserved fort once stored freshwater for ships. Its lighthouse, still operational, offers panoramic views of the coastline. Walk the ramparts and feel history beneath your feet.',
              coordinates: { latitude: 15.4909, longitude: 73.7735 },
              tags: ['heritage', 'fort', 'architecture', 'historic'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['historic', 'adventure', 'cultural'],
              travelTips: [
                'Visit during sunset for best views',
                'Combine with nearby Sinquerim Beach',
                'Photography allowed',
                'Wear sun protection'
              ],
              sustainabilityTips: [
                'Stay on designated paths',
                'Don\'t damage fort walls',
                'Proper waste disposal',
                'Respect heritage site'
              ],
              weatherInsights: [
                {
                  month: 'November',
                  temperature: { min: 22, max: 32, unit: 'celsius' },
                  rainfall: 'Very low',
                  conditions: 'Clear skies, excellent visibility'
                }
              ],
              culturalPulseTimeline: [
                { year: 1612, event: 'Fort completed', significance: 'Major Portuguese defensive structure' },
                { year: 1961, event: 'Indian Independence', significance: 'Fort came under Indian control' }
              ],
              achievements: [
                {
                  title: 'Fort Guardian',
                  description: 'Explored Fort Aguada lighthouse',
                  icon: '🏛️',
                  criteria: 'Visit lighthouse and ramparts'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/fort-aguada-main.jpg',
                altText: 'Historic Fort Aguada with red laterite walls and white lighthouse against blue sky and Arabian Sea',
                thumbnailUrl: '/assets/attractions/fort-aguada-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/fort-aguada-en.mp3',
                duration: 150,
                transcript: 'Fort Aguada stands as one of the most well-preserved Portuguese fortifications in Goa. Built in 1612...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: false,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Partial access to lower areas', 'Audio guides'],
                notes: 'Fort ramparts have steep sections; lighthouse area not wheelchair accessible'
              }
            },
            {
              id: 'anjuna-flea-market',
              name: 'Anjuna Flea Market',
              caption: 'Vibrant weekly market with handicrafts, clothes, and live music',
              legend: 'Started in the 1960s by hippie travelers selling belongings',
              poeticCopy: 'Where every Wednesday becomes a carnival of colors, trinkets, and treasures - a bazaar that dances to its own bohemian rhythm.',
              storySnippet: 'From Kashmiri shawls to Tibetan jewelry, Rajasthani puppets to Goan cashews - this market is a sensory explosion. Bargain hard, shop longer, and soak in the eclectic vibe.',
              coordinates: { latitude: 15.5739, longitude: 73.7402 },
              tags: ['shopping', 'cultural', 'vibrant'],
              bestSeasons: ['winter', 'autumn'],
              moodIcons: ['vibrant', 'cultural', 'adventure'],
              travelTips: [
                'Open only on Wednesdays',
                'Arrive early for best selection',
                'Bargaining expected',
                'Carry cash and small denominations'
              ],
              sustainabilityTips: [
                'Bring cloth bags for shopping',
                'Support local artisans',
                'Avoid single-use plastics',
                'Buy authentic handmade items'
              ],
              weatherInsights: [
                {
                  month: 'January',
                  temperature: { min: 19, max: 31, unit: 'celsius' },
                  rainfall: 'None',
                  conditions: 'Pleasant for outdoor market browsing'
                }
              ],
              culturalPulseTimeline: [
                { year: 1968, event: 'Market inception', significance: 'Hippie travelers started tradition' },
                { year: 1990, event: 'Tourism expansion', significance: 'Became major Goa attraction' }
              ],
              achievements: [
                {
                  title: 'Market Maven',
                  description: 'Successfully bargained at Anjuna Market',
                  icon: '🛍️',
                  criteria: 'Purchase items from 3 different vendors'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/anjuna-market-main.jpg',
                altText: 'Colorful Anjuna Flea Market with stalls selling handicrafts, clothes, and jewelry under blue sky',
                thumbnailUrl: '/assets/attractions/anjuna-market-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/anjuna-market-en.mp3',
                duration: 90,
                transcript: 'Anjuna Flea Market is a kaleidoscope of Goan culture. Every Wednesday, vendors from across India gather...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: false,
                visuallyImpairedFriendly: false,
                hearingImpairedFriendly: true,
                facilities: ['Narrow lanes', 'Crowded spaces'],
                notes: 'Uneven ground and crowds make wheelchair access difficult'
              }
            }
          ]
        },
        {
          id: 'south-goa',
          name: 'South Goa',
          description: 'Quieter, more serene beaches and Portuguese heritage sites.',
          coordinates: { latitude: 15.2222, longitude: 73.9976 },
          attractions: [
            {
              id: 'palolem-beach',
              name: 'Palolem Beach',
              caption: 'Crescent-shaped beach with calm waters and swaying palms',
              legend: 'Known as Paradise Beach, popular with both families and backpackers',
              poeticCopy: 'Where coconut palms frame a perfect crescent of sand, and gentle waves lap shores unspoiled by frenzy - this is Goa\'s tranquil soul.',
              storySnippet: 'Unlike bustling North Goa, Palolem offers serenity. Kayak to nearby islands, spot dolphins on morning boat trips, or simply read a book under palm shade.',
              coordinates: { latitude: 15.0099, longitude: 74.0233 },
              tags: ['beach', 'nature', 'family', 'peaceful'],
              bestSeasons: ['winter', 'autumn'],
              moodIcons: ['peaceful', 'serene', 'family'],
              travelTips: [
                'Book beach huts early during peak season',
                'Excellent for swimming - calm waters',
                'Dolphin spotting trips available early morning',
                'Less commercial than North Goa beaches'
              ],
              sustainabilityTips: [
                'Eco-friendly beach huts available',
                'No plastic policy enforced',
                'Support turtle conservation efforts',
                'Clean beach initiatives'
              ],
              weatherInsights: [
                {
                  month: 'November',
                  temperature: { min: 22, max: 31, unit: 'celsius' },
                  rainfall: 'Minimal',
                  conditions: 'Calm seas, perfect for swimming'
                }
              ],
              culturalPulseTimeline: [
                { year: 1990, event: 'Discovery by tourists', significance: 'Became popular backpacker destination' },
                { year: 2010, event: 'Sustainable tourism push', significance: 'Eco-friendly development initiatives' }
              ],
              achievements: [
                {
                  title: 'Dolphin Spotter',
                  description: 'Saw dolphins at Palolem Beach',
                  icon: '🐬',
                  criteria: 'Take early morning dolphin spotting tour'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/palolem-beach-main.jpg',
                altText: 'Perfect crescent Palolem Beach with palm trees, calm turquoise water, and beach huts along shore',
                thumbnailUrl: '/assets/attractions/palolem-beach-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/palolem-beach-en.mp3',
                duration: 120,
                transcript: 'Palolem Beach, shaped like a perfect crescent, embodies South Goa\'s peaceful character...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Beach wheelchairs', 'Accessible shacks', 'Flat sandy areas'],
                notes: 'Better beach accessibility than North Goa; assistance available'
              }
            },
            {
              id: 'dudhsagar-falls',
              name: 'Dudhsagar Falls',
              caption: 'Four-tiered waterfall cascading 310 meters through dense forest',
              legend: 'Name means "Sea of Milk" - waters appear milky white while falling',
              poeticCopy: 'Where mountain tears plunge through jungle veils in a thunderous cascade of white, and rainbow mist crowns the pools below with liquid light.',
              storySnippet: 'India\'s fifth-tallest waterfall crashes down in four tiers through the Western Ghats. Trek through Bhagwan Mahavir Sanctuary or take a jeep safari to reach this natural wonder.',
              coordinates: { latitude: 15.3144, longitude: 74.3144 },
              tags: ['waterfall', 'nature', 'adventure', 'wildlife'],
              bestSeasons: ['monsoon', 'winter'],
              moodIcons: ['adventure', 'nature', 'vibrant'],
              travelTips: [
                'Monsoon offers maximum water flow but can be dangerous',
                'Jeep safari needs advance booking',
                'Trekking option available for adventurous',
                'Carry waterproof bag for electronics'
              ],
              sustainabilityTips: [
                'Stay on designated trails',
                'No swimming during high water flow',
                'Respect wildlife sanctuary rules',
                'Carry back all waste'
              ],
              weatherInsights: [
                {
                  month: 'August',
                  temperature: { min: 22, max: 28, unit: 'celsius' },
                  rainfall: 'Very heavy',
                  conditions: 'Maximum waterfall flow, misty and dramatic'
                },
                {
                  month: 'November',
                  temperature: { min: 20, max: 30, unit: 'celsius' },
                  rainfall: 'Low',
                  conditions: 'Good flow with better accessibility'
                }
              ],
              culturalPulseTimeline: [
                { year: 1961, event: 'Sanctuary established', significance: 'Protected area created' },
                { year: 2000, event: 'Tourism regulation', significance: 'Controlled access to protect ecosystem' }
              ],
              achievements: [
                {
                  title: 'Waterfall Chaser',
                  description: 'Reached Dudhsagar Falls base',
                  icon: '💦',
                  criteria: 'Complete journey to waterfall base'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/dudhsagar-falls-main.jpg',
                altText: 'Magnificent Dudhsagar waterfall cascading down in milky white tiers through lush green Western Ghats forest',
                thumbnailUrl: '/assets/attractions/dudhsagar-falls-thumb.jpg',
                aspectRatio: '3:2'
              },
              audioDescription: {
                url: '/assets/audio/dudhsagar-falls-en.mp3',
                duration: 150,
                transcript: 'Dudhsagar Falls, meaning Sea of Milk, is one of India\'s tallest waterfalls at 310 meters. Located on the Goa-Karnataka border...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: false,
                visuallyImpairedFriendly: false,
                hearingImpairedFriendly: true,
                facilities: ['Jeep safari more accessible than trek'],
                notes: 'Challenging terrain; jeep safari recommended for limited mobility'
              }
            }
          ]
        },
        {
          id: 'panaji',
          name: 'Panaji',
          description: 'Capital city with Portuguese architecture and Latin Quarter charm.',
          coordinates: { latitude: 15.4909, longitude: 73.8278 },
          attractions: [
            {
              id: 'fontainhas',
              name: 'Fontainhas Latin Quarter',
              caption: 'Colorful Portuguese neighborhood with narrow winding streets',
              legend: 'Oldest Latin Quarter in Asia, preserved since 18th century',
              poeticCopy: 'Where ochre, blue, and green facades whisper of Lisbon, and azulejo tiles frame windows through which time travels slowly, preserved in pastel perfection.',
              storySnippet: 'Wander cobblestone lanes past Portuguese-style houses with overhanging balconies. Art galleries, cafés, and heritage homes create a living museum of Goan-Portuguese culture.',
              coordinates: { latitude: 15.4952, longitude: 73.8294 },
              tags: ['heritage', 'cultural', 'architecture'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['cultural', 'romantic', 'peaceful'],
              travelTips: [
                'Best explored on foot',
                'Morning walks offer soft lighting for photography',
                'Visit Gitanjali Gallery',
                'Try Portuguese pastries at local bakeries'
              ],
              sustainabilityTips: [
                'Respect residents\' privacy',
                'No loud noise',
                'Support local artists and businesses',
                'Don\'t lean on heritage walls'
              ],
              weatherInsights: [
                {
                  month: 'December',
                  temperature: { min: 21, max: 32, unit: 'celsius' },
                  rainfall: 'None',
                  conditions: 'Perfect for walking tours'
                }
              ],
              culturalPulseTimeline: [
                { year: 1760, event: 'Quarter established', significance: 'Portuguese settlers created distinct neighborhood' },
                { year: 1984, event: 'Heritage zone declared', significance: 'Protection of architectural character' }
              ],
              achievements: [
                {
                  title: 'Heritage Walker',
                  description: 'Explored Fontainhas on foot',
                  icon: '🏘️',
                  criteria: 'Walk through entire Latin Quarter'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/fontainhas-main.jpg',
                altText: 'Colorful Portuguese-style houses with red-tiled roofs and painted walls along narrow Fontainhas street',
                thumbnailUrl: '/assets/attractions/fontainhas-thumb.jpg',
                aspectRatio: '4:3'
              },
              audioDescription: {
                url: '/assets/audio/fontainhas-en.mp3',
                duration: 180,
                transcript: 'Fontainhas, Panaji\'s Latin Quarter, is a step back in time. The Portuguese established this area in the 18th century...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: false,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Narrow streets', 'Some steep lanes', 'Guided tours available'],
                notes: 'Cobblestone streets challenging for wheelchairs; assistance recommended'
              }
            },
            {
              id: 'our-lady-immaculate-conception',
              name: 'Church of Our Lady of Immaculate Conception',
              caption: 'Iconic white church with zigzag staircase in heart of Panaji',
              legend: 'Built in 1541, served as landmark for sailors arriving from Lisbon',
              poeticCopy: 'Where baroque white towers pierce blue tropical sky, and bells summon faithful to pray in the same pews where Portuguese sailors once gave thanks for safe voyages.',
              storySnippet: 'Climb the distinctive zigzag stairs to reach this gleaming church. Inside, the golden altar and Portuguese tiles create an atmosphere of serene devotion.',
              coordinates: { latitude: 15.4950, longitude: 73.8266 },
              tags: ['heritage', 'spiritual', 'architecture'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['spiritual', 'cultural', 'peaceful'],
              travelTips: [
                'Visit during evening for illumination',
                'Modest dress required',
                'Check mass timings if interested',
                'Combine with nearby Municipal Garden'
              ],
              sustainabilityTips: [
                'Respect worship space',
                'Silence inside church',
                'No flash photography during services',
                'Donate to maintenance fund'
              ],
              weatherInsights: [
                {
                  month: 'February',
                  temperature: { min: 21, max: 31, unit: 'celsius' },
                  rainfall: 'Very low',
                  conditions: 'Clear weather highlights white facade'
                }
              ],
              culturalPulseTimeline: [
                { year: 1541, event: 'Church built', significance: 'Landmark for Portuguese sailors' },
                { year: 1871, event: 'Bell added', significance: 'Church bell from Augustinian ruins' }
              ],
              achievements: [
                {
                  title: 'Faithful Visitor',
                  description: 'Visited iconic Panaji church',
                  icon: '⛪',
                  criteria: 'Visit and explore church interior'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/church-immaculate-conception-main.jpg',
                altText: 'White baroque Church of Our Lady of Immaculate Conception with distinctive zigzag staircase against blue sky',
                thumbnailUrl: '/assets/attractions/church-immaculate-conception-thumb.jpg',
                aspectRatio: '3:2'
              },
              audioDescription: {
                url: '/assets/audio/church-immaculate-conception-en.mp3',
                duration: 120,
                transcript: 'The Church of Our Lady of Immaculate Conception is Panaji\'s most recognizable landmark. Originally built in 1541...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: false,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Many steps to entrance', 'Church interior accessible once inside'],
                notes: 'Zigzag stairs challenging; assistance needed for wheelchair users'
              }
            }
          ]
        }
      ]
    },
    // State 4: Tamil Nadu
    {
      id: 'tamil-nadu',
      name: 'Tamil Nadu',
      description: 'Land of magnificent temples, classical arts, and ancient Dravidian heritage.',
      coordinates: { latitude: 11.1271, longitude: 78.6569 },
      districts: [
        {
          id: 'chennai',
          name: 'Chennai',
          description: 'Capital city blending tradition with cosmopolitan vibrancy.',
          coordinates: { latitude: 13.0827, longitude: 80.2707 },
          attractions: [
            {
              id: 'marina-beach',
              name: 'Marina Beach',
              caption: 'India\'s longest natural urban beach stretching 13 kilometers',
              legend: 'Second longest beach in the world, iconic Chennai landmark since British era',
              poeticCopy: 'Where Bay of Bengal waves meet the city\'s pulse, and sunrise walkers trace poetry in sand beside fishermen hauling nets heavy with silver dreams.',
              storySnippet: 'Early morning or evening, Marina comes alive. Families fly kites, vendors sell sundal and bajji, and the sea breeze carries away city stress. It\'s Chennai\'s communal living room.',
              coordinates: { latitude: 13.0499, longitude: 80.2821 },
              tags: ['beach', 'cultural', 'family'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['vibrant', 'family', 'peaceful'],
              travelTips: [
                'Best time: early morning or after 4 PM',
                'Try local street food',
                'Swimming not recommended due to strong currents',
                'Visit memorials of freedom fighters along beach'
              ],
              sustainabilityTips: [
                'Participate in beach cleanup drives',
                'Use designated waste bins',
                'No plastic on beach',
                'Support conservation awareness'
              ],
              weatherInsights: [
                {
                  month: 'January',
                  temperature: { min: 20, max: 29, unit: 'celsius' },
                  rainfall: 'Low',
                  conditions: 'Pleasant sea breeze, ideal for evening walks'
                }
              ],
              culturalPulseTimeline: [
                { year: 1884, event: 'Beach promenade developed', significance: 'British transformed shoreline' },
                { year: 1991, event: 'Rajiv Gandhi Memorial', significance: 'Added historical significance' }
              ],
              achievements: [
                {
                  title: 'Beach Wanderer',
                  description: 'Walked Marina Beach at sunrise',
                  icon: '🌅',
                  criteria: 'Visit beach before 7 AM'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/marina-beach-main.jpg',
                altText: 'Expansive Marina Beach with people walking along shore, Bay of Bengal waves, and Chennai lighthouse in distance',
                thumbnailUrl: '/assets/attractions/marina-beach-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/marina-beach-en.mp3',
                duration: 120,
                transcript: 'Marina Beach, stretching 13 kilometers along Chennai\'s coast, is India\'s longest natural urban beach...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Paved promenade', 'Accessible restrooms', 'Wheelchair-friendly paths'],
                notes: 'Beach promenade fully accessible; sand areas require assistance'
              }
            },
            {
              id: 'kapaleeshwarar-temple',
              name: 'Kapaleeshwarar Temple',
              caption: 'Ancient Dravidian temple dedicated to Lord Shiva with towering gopuram',
              legend: 'Built in 7th century, showcases classic Dravidian architecture',
              poeticCopy: 'Where granite deities dream in sculpted grace, and gopuram towers pierce heaven with cascading stories of mythology painted in stone.',
              storySnippet: 'Enter through the intricately carved gopuram into a world where devotion meets art. The tank, temple rituals, and Mylapore neighborhood create timeless Chennai.',
              coordinates: { latitude: 13.0337, longitude: 80.2689 },
              tags: ['spiritual', 'heritage', 'temple', 'architecture'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['spiritual', 'cultural', 'peaceful'],
              travelTips: [
                'Remove footwear before entering',
                'Modest dress required',
                'Visit during evening aarti for atmosphere',
                'Explore Mylapore neighborhood around temple'
              ],
              sustainabilityTips: [
                'Respect worship practices',
                'No photography inside sanctum',
                'Donate for temple maintenance',
                'Avoid disturbing rituals'
              ],
              weatherInsights: [
                {
                  month: 'December',
                  temperature: { min: 21, max: 29, unit: 'celsius' },
                  rainfall: 'Moderate',
                  conditions: 'Comfortable for temple visits'
                }
              ],
              culturalPulseTimeline: [
                { year: 700, event: 'Original temple built', significance: 'Pallava dynasty construction' },
                { year: 1566, event: 'Rebuilt by Portuguese', significance: 'After destruction' }
              ],
              achievements: [
                {
                  title: 'Temple Explorer',
                  description: 'Witnessed evening aarti at Kapaleeshwarar',
                  icon: '🛕',
                  criteria: 'Attend evening prayer ceremony'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/kapaleeshwarar-temple-main.jpg',
                altText: 'Ornate Kapaleeshwarar Temple gopuram with colorful sculptures of deities and traditional Dravidian architecture',
                thumbnailUrl: '/assets/attractions/kapaleeshwarar-temple-thumb.jpg',
                aspectRatio: '3:2'
              },
              audioDescription: {
                url: '/assets/audio/kapaleeshwarar-temple-en.mp3',
                duration: 180,
                transcript: 'Kapaleeshwarar Temple, a masterpiece of Dravidian architecture, dates back to the 7th century...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Ramps available', 'Accessible entrances', 'Audio guides'],
                notes: 'Main areas accessible; some inner sanctums have steps'
              }
            }
          ]
        },
        {
          id: 'madurai',
          name: 'Madurai',
          description: 'Ancient temple city, cultural capital with 2,500-year history.',
          coordinates: { latitude: 9.9252, longitude: 78.1198 },
          attractions: [
            {
              id: 'meenakshi-temple',
              name: 'Meenakshi Amman Temple',
              caption: 'Magnificent temple with 14 towering gopurams adorned with thousands of sculptures',
              legend: 'Dedicated to Goddess Meenakshi, one of India\'s most important pilgrimage sites',
              poeticCopy: 'Where rainbow gopurams soar toward clouds, each sculpture tells epics in stone, and devotion flows like the Vaigai river through corridors of divine artistry.',
              storySnippet: 'Step into a universe of color and devotion. Fourteen gopurams rise like mountains carved with 33,000 sculptures. The hall of thousand pillars resonates with ancient music.',
              coordinates: { latitude: 9.9195, longitude: 78.1193 },
              tags: ['spiritual', 'heritage', 'temple', 'architecture', 'cultural'],
              bestSeasons: ['winter', 'autumn'],
              moodIcons: ['spiritual', 'cultural', 'vibrant'],
              travelTips: [
                'Allocate 3-4 hours minimum',
                'Hire audio guide for rich history',
                'Visit during evening ceremony',
                'Dress modestly - traditional wear preferred'
              ],
              sustainabilityTips: [
                'Respect sanctity of space',
                'No leather items inside',
                'Follow photography restrictions',
                'Support temple preservation'
              ],
              weatherInsights: [
                {
                  month: 'January',
                  temperature: { min: 20, max: 30, unit: 'celsius' },
                  rainfall: 'Low',
                  conditions: 'Pleasant for temple exploration'
                }
              ],
              culturalPulseTimeline: [
                { year: -600, event: 'Ancient temple founded', significance: 'One of India\'s oldest temples' },
                { year: 1623, event: 'Present structure completed', significance: 'Nayak dynasty reconstruction' }
              ],
              achievements: [
                {
                  title: 'Pilgrimage Complete',
                  description: 'Visited all four gopurams of Meenakshi Temple',
                  icon: '🕉️',
                  criteria: 'Explore all major gopurams'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/meenakshi-temple-main.jpg',
                altText: 'Spectacular Meenakshi Temple gopuram covered in colorful sculptures of gods and goddesses in intricate detail',
                thumbnailUrl: '/assets/attractions/meenakshi-temple-thumb.jpg',
                aspectRatio: '3:2'
              },
              audioDescription: {
                url: '/assets/audio/meenakshi-temple-en.mp3',
                duration: 240,
                transcript: 'The Meenakshi Amman Temple is a testament to Dravidian architecture at its finest. With 14 gopurams reaching heights of 50 meters...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Wheelchair rental', 'Accessible paths', 'Volunteer assistance'],
                notes: 'Most areas accessible; some shrines have steps'
              }
            },
            {
              id: 'thirumalai-nayak-palace',
              name: 'Thirumalai Nayakkar Palace',
              caption: 'Indo-Saracenic palace with massive pillars and grand courtyard',
              legend: 'Built in 1636 by King Thirumalai Nayak, blend of Dravidian and Islamic architecture',
              poeticCopy: 'Where massive columns hold up history, and evening light shows dance across arches that once echoed with royal proclamations and courtly splendor.',
              storySnippet: 'This palace was four times its current size. The Swarga Vilasam (Celestial Pavilion) features 12-meter-high pillars and hosts sound-and-light shows narrating palace history.',
              coordinates: { latitude: 9.9171, longitude: 78.1207 },
              tags: ['heritage', 'architecture', 'museum', 'cultural'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['historic', 'cultural', 'adventure'],
              travelTips: [
                'Evening sound-and-light show highly recommended',
                'Photography allowed',
                'Combine with nearby Meenakshi Temple visit',
                'Museum has royal artifacts'
              ],
              sustainabilityTips: [
                'Respect heritage structure',
                'No touching palace walls',
                'Proper waste disposal',
                'Support conservation donations'
              ],
              weatherInsights: [
                {
                  month: 'February',
                  temperature: { min: 21, max: 32, unit: 'celsius' },
                  rainfall: 'Very low',
                  conditions: 'Comfortable for palace exploration'
                }
              ],
              culturalPulseTimeline: [
                { year: 1636, event: 'Palace completed', significance: 'Nayak dynasty royal residence' },
                { year: 1858, event: 'British occupation', significance: 'Used as government offices' }
              ],
              achievements: [
                {
                  title: 'Palace Patron',
                  description: 'Attended sound-and-light show',
                  icon: '🏰',
                  criteria: 'Watch evening cultural program'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/thirumalai-palace-main.jpg',
                altText: 'Grand courtyard of Thirumalai Nayakkar Palace with massive white pillars and Indo-Saracenic arches',
                thumbnailUrl: '/assets/attractions/thirumalai-palace-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/thirumalai-palace-en.mp3',
                duration: 150,
                transcript: 'Thirumalai Nayakkar Palace stands as a magnificent example of Indo-Saracenic architecture. Built in 1636...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: false,
                facilities: ['Ramps', 'Accessible entrances', 'Seating for shows'],
                notes: 'Main courtyard fully accessible'
              }
            },
            {
              id: 'gandhi-museum-madurai',
              name: 'Gandhi Museum',
              caption: 'Museum chronicling Mahatma Gandhi\'s life and India\'s independence struggle',
              legend: 'Houses Gandhi\'s blood-stained dhoti from his assassination',
              poeticCopy: 'Where history whispers through photographs and letters, and the father of the nation\'s legacy lives in silent testimony to non-violence and truth.',
              storySnippet: 'This poignant museum displays Gandhi\'s personal belongings, including the dhoti he wore when assassinated. Walk through India\'s freedom struggle told through artifacts.',
              coordinates: { latitude: 9.9348, longitude: 78.1244 },
              tags: ['museum', 'heritage', 'cultural', 'historic'],
              bestSeasons: ['winter', 'autumn', 'spring'],
              moodIcons: ['historic', 'cultural', 'peaceful'],
              travelTips: [
                'Allow 1-2 hours for thorough visit',
                'Photography restricted in some sections',
                'Free entry',
                'Informative for all ages'
              ],
              sustainabilityTips: [
                'Respect museum rules',
                'No loud conversations',
                'Handle displays with care',
                'Donate for museum upkeep'
              ],
              weatherInsights: [
                {
                  month: 'November',
                  temperature: { min: 22, max: 30, unit: 'celsius' },
                  rainfall: 'Low',
                  conditions: 'Comfortable for museum visit'
                }
              ],
              culturalPulseTimeline: [
                { year: 1959, event: 'Museum opened', significance: 'Memorial to Gandhi and independence' }
              ],
              achievements: [
                {
                  title: 'History Scholar',
                  description: 'Explored complete Gandhi Museum collection',
                  icon: '📚',
                  criteria: 'Visit all museum sections'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/gandhi-museum-main.jpg',
                altText: 'Gandhi Museum building with independence movement exhibits and historical photographs on display',
                thumbnailUrl: '/assets/attractions/gandhi-museum-thumb.jpg',
                aspectRatio: '4:3'
              },
              audioDescription: {
                url: '/assets/audio/gandhi-museum-en.mp3',
                duration: 120,
                transcript: 'The Gandhi Museum in Madurai is one of five Gandhi museums in India. It houses a comprehensive collection...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Ramps', 'Elevators', 'Accessible restrooms', 'Audio guides'],
                notes: 'Fully accessible museum facility'
              }
            }
          ]
        },
        {
          id: 'kanyakumari',
          name: 'Kanyakumari',
          description: 'Southernmost tip of India where three oceans meet.',
          coordinates: { latitude: 8.0883, longitude: 77.5385 },
          attractions: [
            {
              id: 'vivekananda-rock',
              name: 'Vivekananda Rock Memorial',
              caption: 'Memorial on rocky island where Swami Vivekananda meditated',
              legend: 'Built in 1970, marks the spot of Vivekananda\'s enlightenment',
              poeticCopy: 'Where three seas embrace in turbulent trinity, and a rock memorial stands testament to spiritual awakening, surrounded by infinite horizons.',
              storySnippet: 'Take a ferry to this rocky island where Swami Vivekananda found enlightenment in 1892. The memorial blends architectural styles from all over India, symbolizing unity.',
              coordinates: { latitude: 8.0778, longitude: 77.5528 },
              tags: ['spiritual', 'heritage', 'architecture', 'adventure'],
              bestSeasons: ['winter', 'autumn'],
              moodIcons: ['spiritual', 'peaceful', 'adventure'],
              travelTips: [
                'Ferry ride mandatory - book early',
                'Visit during sunrise for magical experience',
                'Rough seas during monsoon - ferries may cancel',
                'Combine with Thiruvalluvar Statue on adjacent rock'
              ],
              sustainabilityTips: [
                'No plastic on island',
                'Respect spiritual sanctity',
                'Follow crowd management rules',
                'Support ocean conservation'
              ],
              weatherInsights: [
                {
                  month: 'January',
                  temperature: { min: 23, max: 30, unit: 'celsius' },
                  rainfall: 'Low',
                  conditions: 'Calm seas, excellent for ferry'
                },
                {
                  month: 'June',
                  temperature: { min: 26, max: 32, unit: 'celsius' },
                  rainfall: 'Moderate',
                  conditions: 'Rough seas, check ferry schedule'
                }
              ],
              culturalPulseTimeline: [
                { year: 1892, event: 'Vivekananda meditation', significance: 'Spiritual awakening moment' },
                { year: 1970, event: 'Memorial inaugurated', significance: 'Became pilgrimage site' }
              ],
              achievements: [
                {
                  title: 'Sunrise Seeker',
                  description: 'Witnessed sunrise from Vivekananda Rock',
                  icon: '🌅',
                  criteria: 'Take first ferry for sunrise'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/vivekananda-rock-main.jpg',
                altText: 'Vivekananda Rock Memorial rising from ocean waters with waves crashing against rocks, three seas meeting',
                thumbnailUrl: '/assets/attractions/vivekananda-rock-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/vivekananda-rock-en.mp3',
                duration: 180,
                transcript: 'Vivekananda Rock Memorial stands on a rocky island where three oceans meet. In 1892, Swami Vivekananda...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: false,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Ferry accessible with assistance', 'Ramps on island'],
                notes: 'Ferry boarding challenging; island has some accessible areas'
              }
            },
            {
              id: 'kanyakumari-beach',
              name: 'Kanyakumari Beach',
              caption: 'Unique beach where Bay of Bengal, Arabian Sea, and Indian Ocean converge',
              legend: 'Only place in India to watch both sunrise and sunset over ocean',
              poeticCopy: 'Where three waters dance in tricolor waves, and sun rises from one ocean to set in another, painting the same horizon twice with liquid gold.',
              storySnippet: 'Stand at India\'s southernmost point and witness a natural phenomenon. Different colored waters merge visibly, and pilgrims perform rituals in this sacred confluence.',
              coordinates: { latitude: 8.0883, longitude: 77.5385 },
              tags: ['beach', 'nature', 'spiritual', 'family'],
              bestSeasons: ['winter', 'autumn'],
              moodIcons: ['peaceful', 'spiritual', 'serene'],
              travelTips: [
                'Visit at sunrise and sunset both',
                'Strong currents - swimming not advised',
                'Beach extremely crowded during full moon',
                'Try local seafood at beach restaurants'
              ],
              sustainabilityTips: [
                'Keep beach clean',
                'No plastic waste',
                'Respect spiritual activities',
                'Support local fishermen'
              ],
              weatherInsights: [
                {
                  month: 'December',
                  temperature: { min: 23, max: 29, unit: 'celsius' },
                  rainfall: 'Moderate',
                  conditions: 'Pleasant with occasional showers'
                }
              ],
              culturalPulseTimeline: [
                { year: 1956, event: 'Tourism development', significance: 'Became major pilgrimage destination' }
              ],
              achievements: [
                {
                  title: 'Dual Light Witness',
                  description: 'Watched both sunrise and sunset at Kanyakumari',
                  icon: '🌅🌄',
                  criteria: 'Stay full day to see both'
                }
              ],
              postcardMetadata: {
                imageUrl: '/assets/attractions/kanyakumari-beach-main.jpg',
                altText: 'Kanyakumari beach at sunset with three oceans meeting, colorful sky reflected in multicolored waters',
                thumbnailUrl: '/assets/attractions/kanyakumari-beach-thumb.jpg',
                aspectRatio: '16:9'
              },
              audioDescription: {
                url: '/assets/audio/kanyakumari-beach-en.mp3',
                duration: 120,
                transcript: 'Kanyakumari Beach marks the southernmost tip of the Indian subcontinent. Here, three bodies of water converge...',
                language: 'en'
              },
              accessibility: {
                wheelchairAccessible: true,
                visuallyImpairedFriendly: true,
                hearingImpairedFriendly: true,
                facilities: ['Beach promenade accessible', 'Viewing platforms'],
                notes: 'Beach areas challenging; promenade offers good access'
              }
            }
          ]
        }
      ]
    }
  ]
}

// Continue in next part due to character limit...
