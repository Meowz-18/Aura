/**
 * Continuation of travel dataset - States 5-8
 */

import type { TravelState } from './travel-types'

export const additionalStates: TravelState[] = [
  // State 5: Uttarakhand
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    description: 'Land of Gods with pristine Himalayan peaks, pilgrimage sites, and yoga capital.',
    coordinates: { latitude: 30.0668, longitude: 79.0193 },
    districts: [
      {
        id: 'rishikesh',
        name: 'Rishikesh',
        description: 'Yoga capital of the world on the banks of holy Ganges.',
        coordinates: { latitude: 30.0869, longitude: 78.2676 },
        attractions: [
          {
            id: 'laxman-jhula',
            name: 'Laxman Jhula',
            caption: 'Iconic suspension bridge swaying above turquoise Ganges waters',
            legend: 'Built in 1929, named after Lord Rama\'s brother who crossed here on jute ropes',
            poeticCopy: 'Where suspension cables sing in Himalayan winds, and pilgrims cross sacred waters suspended between earth and sky, faith unwavering as the bridge sways.',
            storySnippet: 'Walk across this 450-foot iron suspension bridge as the Ganges flows 70 feet below. Temple spires rise on both banks, and sacred bells echo across the valley.',
            coordinates: { latitude: 30.1264, longitude: 78.3187 },
            tags: ['heritage', 'spiritual', 'adventure', 'cultural'],
            bestSeasons: ['spring', 'autumn', 'winter'],
            moodIcons: ['spiritual', 'adventure', 'cultural'],
            travelTips: [
              'Visit early morning for fewer crowds',
              'Bridge sways - not for those with height fear',
              'No vehicles allowed - pedestrian only',
              'Explore ashrams on both banks'
            ],
            sustainabilityTips: [
              'Keep Ganges clean - no littering',
              'Respect spiritual sanctity',
              'Support local ashrams',
              'Follow crowd management rules'
            ],
            weatherInsights: [
              {
                month: 'March',
                temperature: { min: 15, max: 28, unit: 'celsius' },
                rainfall: 'Low',
                conditions: 'Perfect spring weather, clear mountain views'
              },
              {
                month: 'September',
                temperature: { min: 20, max: 30, unit: 'celsius' },
                rainfall: 'Moderate',
                conditions: 'Post-monsoon freshness'
              }
            ],
            culturalPulseTimeline: [
              { year: 1889, event: 'Original jute bridge', significance: 'Traditional crossing point' },
              { year: 1929, event: 'Iron bridge built', significance: 'Modern suspension structure' }
            ],
            achievements: [
              {
                title: 'Bridge Walker',
                description: 'Crossed Laxman Jhula',
                icon: '🌉',
                criteria: 'Walk across the full bridge'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/laxman-jhula-main.jpg',
              altText: 'Laxman Jhula suspension bridge spanning turquoise Ganges with temples and ashrams on both banks, Himalayas in background',
              thumbnailUrl: '/assets/attractions/laxman-jhula-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/laxman-jhula-en.mp3',
              duration: 120,
              transcript: 'Laxman Jhula is an iron suspension bridge crossing the Ganges River. According to legend, Lord Laxman crossed...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: false,
              visuallyImpairedFriendly: false,
              hearingImpairedFriendly: true,
              facilities: ['Bridge sways', 'Uneven surface', 'Crowded'],
              notes: 'Not wheelchair accessible; challenging for mobility issues'
            }
          },
          {
            id: 'triveni-ghat',
            name: 'Triveni Ghat',
            caption: 'Sacred bathing ghat with mesmerizing evening Ganga Aarti ceremony',
            legend: 'Confluence of three rivers, believed to wash away sins',
            poeticCopy: 'Where thousands of oil lamps float like fallen stars upon holy waters, and evening prayers rise with incense smoke toward the Himalayan heavens.',
            storySnippet: 'As dusk descends, priests light brass lamps while chanting ancient verses. Devotees release flower offerings into the current, and the Ganges becomes a river of light.',
            coordinates: { latitude: 30.1039, longitude: 78.2894 },
            tags: ['spiritual', 'cultural', 'family'],
            bestSeasons: ['spring', 'autumn', 'winter'],
            moodIcons: ['spiritual', 'peaceful', 'cultural'],
            travelTips: [
              'Evening Aarti around sunset - check exact timing',
              'Arrive 30 minutes early for good viewing spot',
              'Participate by purchasing small lamps',
              'Modest dress required'
            ],
            sustainabilityTips: [
              'Use eco-friendly diyas (lamps)',
              'Avoid plastic flowers or materials',
              'Keep ghat clean',
              'Respect religious ceremonies'
            ],
            weatherInsights: [
              {
                month: 'October',
                temperature: { min: 18, max: 30, unit: 'celsius' },
                rainfall: 'Low',
                conditions: 'Pleasant evenings for Aarti'
              }
            ],
            culturalPulseTimeline: [
              { year: 1950, event: 'Evening Aarti tradition formalized', significance: 'Became major attraction' }
            ],
            achievements: [
              {
                title: 'Aarti Attendee',
                description: 'Witnessed Ganga Aarti at Triveni Ghat',
                icon: '🪔',
                criteria: 'Attend evening ceremony'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/triveni-ghat-main.jpg',
              altText: 'Triveni Ghat during evening Aarti with hundreds of floating lamps on Ganges, priests performing ceremony',
              thumbnailUrl: '/assets/attractions/triveni-ghat-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/triveni-ghat-en.mp3',
              duration: 150,
              transcript: 'Triveni Ghat is one of Rishikesh\'s most sacred ghats. Each evening, the spectacular Ganga Aarti takes place...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: false,
              facilities: ['Ramps to ghat', 'Seating areas', 'Accessible viewing'],
              notes: 'Main viewing areas accessible; steps to water require assistance'
            }
          },
          {
            id: 'beatles-ashram',
            name: 'Beatles Ashram (Chaurasi Kutiya)',
            caption: 'Abandoned ashram where The Beatles learned meditation in 1968',
            legend: 'Maharishi Mahesh Yogi\'s ashram, now an open-air graffiti gallery',
            poeticCopy: 'Where rock legends sought enlightenment among jungle ruins, and walls now bloom with psychedelic murals honoring that cosmic collision of East meets West.',
            storySnippet: 'Walk through crumbling meditation cells covered in Beatles-inspired street art. The jungle has reclaimed much, creating an eerie beauty where music history and spirituality intertwine.',
            coordinates: { latitude: 30.1367, longitude: 78.3140 },
            tags: ['heritage', 'cultural', 'adventure', 'historic'],
            bestSeasons: ['spring', 'autumn', 'winter'],
            moodIcons: ['cultural', 'adventure', 'peaceful'],
            travelTips: [
              'Entry fee charged by Forest Department',
              'Bring flashlight for darker areas',
              'Perfect for photography enthusiasts',
              'Wear comfortable shoes for exploring ruins'
            ],
            sustainabilityTips: [
              'No new graffiti - preserve existing art',
              'Stay on safe paths',
              'Don\'t disturb wildlife',
              'Carry out all trash'
            ],
            weatherInsights: [
              {
                month: 'February',
                temperature: { min: 10, max: 22, unit: 'celsius' },
                rainfall: 'Minimal',
                conditions: 'Cool and comfortable for exploration'
              }
            ],
            culturalPulseTimeline: [
              { year: 1968, event: 'Beatles visit', significance: 'Wrote songs for White Album here' },
              { year: 2018, event: 'Reopened to public', significance: 'Became heritage tourist site' }
            ],
            achievements: [
              {
                title: 'Music Pilgrim',
                description: 'Explored Beatles Ashram meditation cells',
                icon: '🎸',
                criteria: 'Visit and photograph ashram'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/beatles-ashram-main.jpg',
              altText: 'Abandoned Beatles Ashram with crumbling meditation cells covered in colorful Beatles-themed graffiti art',
              thumbnailUrl: '/assets/attractions/beatles-ashram-thumb.jpg',
              aspectRatio: '4:3'
            },
            audioDescription: {
              url: '/assets/audio/beatles-ashram-en.mp3',
              duration: 180,
              transcript: 'The Beatles Ashram, officially Chaurasi Kutiya, was where John Lennon, Paul McCartney, George Harrison, and Ringo Starr...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: false,
              visuallyImpairedFriendly: false,
              hearingImpairedFriendly: true,
              facilities: ['Uneven paths', 'Ruins with steps', 'Limited infrastructure'],
              notes: 'Challenging terrain; not suitable for wheelchairs'
            }
          }
        ]
      },
      {
        id: 'nainital',
        name: 'Nainital',
        description: 'Picturesque hill station built around pear-shaped Naini Lake.',
        coordinates: { latitude: 29.3803, longitude: 79.4636 },
        attractions: [
          {
            id: 'naini-lake',
            name: 'Naini Lake',
            caption: 'Emerald lake surrounded by seven hills with boating and promenade',
            legend: 'Named after Goddess Naina Devi, believed to be her eye',
            poeticCopy: 'Where mountains embrace a liquid jewel, and paddle boats trace circles on emerald glass reflecting Victorian buildings and pine-clad slopes.',
            storySnippet: 'Stroll the Mall Road flanking the lake, rent a paddle boat at sunset, or simply sit on the ghats watching the hills change colors. This lake is Nainital\'s beating heart.',
            coordinates: { latitude: 29.3919, longitude: 79.4542 },
            tags: ['nature', 'lake', 'family', 'romantic'],
            bestSeasons: ['spring', 'summer', 'autumn'],
            moodIcons: ['romantic', 'peaceful', 'family'],
            travelTips: [
              'Boating available year-round',
              'Evening hours most romantic',
              'Walk complete Mall Road circuit',
              'Try local Kumaoni cuisine at lakeside cafes'
            ],
            sustainabilityTips: [
              'No littering in lake',
              'Support clean lake initiatives',
              'Use eco-friendly boats when available',
              'Respect wildlife in and around lake'
            ],
            weatherInsights: [
              {
                month: 'May',
                temperature: { min: 15, max: 25, unit: 'celsius' },
                rainfall: 'Moderate',
                conditions: 'Pleasant escape from plains heat'
              },
              {
                month: 'December',
                temperature: { min: 2, max: 12, unit: 'celsius' },
                rainfall: 'Low, occasional snow',
                conditions: 'Cold, lake may freeze partially'
              }
            ],
            culturalPulseTimeline: [
              { year: 1841, event: 'British discovery', significance: 'Developed as summer retreat' },
              { year: 1880, event: 'Mall Road completed', significance: 'Became tourist promenade' }
            ],
            achievements: [
              {
                title: 'Lake Lover',
                description: 'Enjoyed boating on Naini Lake',
                icon: '🚣',
                criteria: 'Complete boat ride'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/naini-lake-main.jpg',
              altText: 'Serene Naini Lake reflecting surrounding hills with colorful paddle boats and Victorian buildings along Mall Road',
              thumbnailUrl: '/assets/attractions/naini-lake-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/naini-lake-en.mp3',
              duration: 120,
              transcript: 'Naini Lake forms the heart of Nainital town. This natural freshwater lake, set at 1,938 meters...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Paved Mall Road', 'Accessible boat boarding', 'Ramps at key points'],
              notes: 'Mall Road fully accessible; boat boarding requires assistance'
            }
          },
          {
            id: 'naina-devi-temple',
            name: 'Naina Devi Temple',
            caption: 'Sacred Shakti Peeth temple at northern shore of Naini Lake',
            legend: 'Where Goddess Sati\'s eyes fell, making it one of 51 Shakti Peeths',
            poeticCopy: 'Where devotion climbs stone steps to meet divine eyes watching over the lake, and temple bells ring across waters blessed by goddess presence.',
            storySnippet: 'This ancient temple draws pilgrims year-round. The idol has two netras (eyes) representing the goddess. Climb the stairs as Himalayan winds carry prayers skyward.',
            coordinates: { latitude: 29.3959, longitude: 79.4550 },
            tags: ['spiritual', 'temple', 'heritage', 'cultural'],
            bestSeasons: ['spring', 'summer', 'autumn', 'winter'],
            moodIcons: ['spiritual', 'peaceful', 'cultural'],
            travelTips: [
              'Remove footwear before entering',
              'Early morning best for darshan',
              'Nanda Devi fair in September',
              'Combine with lake promenade walk'
            ],
            sustainabilityTips: [
              'Respect temple sanctity',
              'No photography inside sanctum',
              'Proper waste disposal',
              'Support temple maintenance'
            ],
            weatherInsights: [
              {
                month: 'September',
                temperature: { min: 14, max: 23, unit: 'celsius' },
                rainfall: 'Moderate',
                conditions: 'Festival season with pleasant weather'
              }
            ],
            culturalPulseTimeline: [
              { year: 1842, event: 'Temple reconstructed', significance: 'After landslide destroyed original' }
            ],
            achievements: [
              {
                title: 'Temple Pilgrim',
                description: 'Offered prayers at Naina Devi Temple',
                icon: '🛕',
                criteria: 'Visit temple and participate in darshan'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/naina-devi-temple-main.jpg',
              altText: 'Naina Devi Temple with devotees on steps, overlooking Naini Lake and surrounded by hills',
              thumbnailUrl: '/assets/attractions/naina-devi-temple-thumb.jpg',
              aspectRatio: '3:2'
            },
            audioDescription: {
              url: '/assets/audio/naina-devi-temple-en.mp3',
              duration: 150,
              transcript: 'The Naina Devi Temple is one of the 51 Shakti Peeths scattered across the Indian subcontinent...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: false,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Steep stairs', 'Handrails available', 'Volunteer assistance'],
              notes: 'Multiple steps make wheelchair access difficult'
            }
          }
        ]
      },
      {
        id: 'haridwar',
        name: 'Haridwar',
        description: 'Gateway to Gods where Ganges enters plains from Himalayas.',
        coordinates: { latitude: 29.9457, longitude: 78.1642 },
        attractions: [
          {
            id: 'har-ki-pauri',
            name: 'Har Ki Pauri',
            caption: 'Most sacred ghat where Lord Vishnu is believed to have left footprint',
            legend: 'Built by King Vikramaditya in memory of his brother',
            poeticCopy: 'Where millions of oil lamps transform sacred waters into flowing constellation, and prayers echo through centuries at Hinduism\'s holiest bathing ghat.',
            storySnippet: 'The evening Ganga Aarti at Har Ki Pauri is spiritual theater at its most magnificent. Thousands gather as priests perform synchronized rituals with fire and chants.',
            coordinates: { latitude: 29.9457, longitude: 78.1642 },
            tags: ['spiritual', 'heritage', 'cultural', 'family'],
            bestSeasons: ['spring', 'autumn', 'winter'],
            moodIcons: ['spiritual', 'vibrant', 'cultural'],
            travelTips: [
              'Aarti timing varies - check locally',
              'Extremely crowded - come early',
              'Holy dip considered auspicious',
              'Be cautious with belongings in crowds'
            ],
            sustainabilityTips: [
              'Use biodegradable offerings only',
              'Don\'t pollute Ganges',
              'Respect religious sentiments',
              'Support ghat cleanliness drives'
            ],
            weatherInsights: [
              {
                month: 'March',
                temperature: { min: 15, max: 30, unit: 'celsius' },
                rainfall: 'Low',
                conditions: 'Comfortable for ghat visits'
              }
            ],
            culturalPulseTimeline: [
              { year: 1855, event: 'British gate constructed', significance: 'Modernized ghat infrastructure' },
              { year: 2010, event: 'Restoration project', significance: 'Enhanced facilities'
 }
            ],
            achievements: [
              {
                title: 'Ganga Devotee',
                description: 'Witnessed Ganga Aarti at Har Ki Pauri',
                icon: '🙏',
                criteria: 'Attend evening Aarti ceremony'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/har-ki-pauri-main.jpg',
              altText: 'Har Ki Pauri ghat during evening Aarti with thousands of devotees, floating lamps on Ganges, and priests performing rituals',
              thumbnailUrl: '/assets/attractions/har-ki-pauri-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/har-ki-pauri-en.mp3',
              duration: 180,
              transcript: 'Har Ki Pauri, meaning "steps of Lord Shiva," is the most sacred ghat in Haridwar. Every evening, a spectacular Aarti ceremony...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: false,
              facilities: ['Ramps to main areas', 'Designated viewing sections', 'Volunteer assistance'],
              notes: 'Main ghat accessible; crowds may be challenging'
            }
          },
          {
            id: 'mansa-devi-temple',
            name: 'Mansa Devi Temple',
            caption: 'Hilltop temple accessible by cable car with panoramic Haridwar views',
            legend: 'Dedicated to wish-fulfilling goddess Mansa Devi',
            poeticCopy: 'Where cable cars climb toward divine blessings, and devotees tie sacred threads to wish-granting trees while the Ganges gleams far below.',
            storySnippet: 'Take the ropeway up Bilwa Parvat for temple darshan and sweeping valley views. Devotees tie threads (mauli) on trees, believing the goddess fulfills wishes.',
            coordinates: { latitude: 29.9824, longitude: 78.1774 },
            tags: ['spiritual', 'temple', 'adventure', 'family'],
            bestSeasons: ['spring', 'autumn', 'winter'],
            moodIcons: ['spiritual', 'adventure', 'family'],
            travelTips: [
              'Cable car (ropeway) recommended over trek',
              'Visit early to avoid queues',
              'Tie thread for wish fulfillment tradition',
              'Photography allowed outside temple'
            ],
            sustainabilityTips: [
              'Use ropeway to reduce trail erosion',
              'Dispose waste in bins',
              'Respect temple rules',
              'Don\'t damage trees while tying threads'
            ],
            weatherInsights: [
              {
                month: 'October',
                temperature: { min: 18, max: 32, unit: 'celsius' },
                rainfall: 'Low',
                conditions: 'Clear skies for ropeway ride'
              }
            ],
            culturalPulseTimeline: [
              { year: 1811, event: 'Temple established', significance: 'By Mansa Devi devotees' }
            ],
            achievements: [
              {
                title: 'Wish Maker',
                description: 'Visited Mansa Devi Temple via ropeway',
                icon: '🚡',
                criteria: 'Take cable car and tie wish thread'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/mansa-devi-temple-main.jpg',
              altText: 'Mansa Devi Temple on hilltop with cable car, devotees tying threads to trees, Haridwar cityscape below',
              thumbnailUrl: '/assets/attractions/mansa-devi-temple-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/mansa-devi-temple-en.mp3',
              duration: 120,
              transcript: 'Mansa Devi Temple sits atop Bilwa Parvat, one of the Shivalik hills. The temple is dedicated to goddess Mansa Devi...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Cable car accessible', 'Ramps at temple', 'Wheelchair rentals'],
              notes: 'Cable car makes temple accessible; some areas have steps'
            }
          }
        ]
      }
    ]
  },
  // State 6: Maharashtra
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    description: 'Dynamic state from Mumbai\'s coastal energy to Sahyadri mountain forts.',
    coordinates: { latitude: 19.7515, longitude: 75.7139 },
    districts: [
      {
        id: 'mumbai',
        name: 'Mumbai',
        description: 'City of dreams, Bollywood, and the Arabian Sea.',
        coordinates: { latitude: 19.0760, longitude: 72.8777 },
        attractions: [
          {
            id: 'gateway-of-india',
            name: 'Gateway of India',
            caption: 'Iconic basalt arch monument overlooking Mumbai Harbor',
            legend: 'Built in 1924 to commemorate King George V and Queen Mary\'s visit',
            poeticCopy: 'Where empire\'s grand arch meets infinite ocean, and modern Mumbai pulses around this colonial relic that once bid farewell to British rule.',
            storySnippet: 'Stand before this Indo-Saracenic masterpiece as boats depart for Elephanta Caves. Street performers, balloon sellers, and tourists create a carnival atmosphere.',
            coordinates: { latitude: 18.9220, longitude: 72.8347 },
            tags: ['heritage', 'architecture', 'cultural', 'family'],
            bestSeasons: ['winter', 'autumn'],
            moodIcons: ['historic', 'vibrant', 'cultural'],
            travelTips: [
              'Best photographed early morning',
              'Book Elephanta ferry from here',
              'Evening visits offer cooler weather',
              'Watch out for overpriced vendors'
            ],
            sustainabilityTips: [
              'Don\'t litter at monument',
              'Respect heritage structure',
              'Support authentic local vendors',
              'Use public transport to reach'
            ],
            weatherInsights: [
              {
                month: 'December',
                temperature: { min: 18, max: 30, unit: 'celsius' },
                rainfall: 'None',
                conditions: 'Pleasant with sea breeze'
              }
            ],
            culturalPulseTimeline: [
              { year: 1924, event: 'Monument completed', significance: 'Colonial architectural statement' },
              { year: 1948, event: 'Last British troops departed', significance: 'Symbol of independence' }
            ],
            achievements: [
              {
                title: 'Gateway Explorer',
                description: 'Visited Gateway of India landmark',
                icon: '🏛️',
                criteria: 'Visit and photograph monument'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/gateway-of-india-main.jpg',
              altText: 'Gateway of India arch monument with Arabian Sea, boats, and tourists in foreground',
              thumbnailUrl: '/assets/attractions/gateway-of-india-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/gateway-of-india-en.mp3',
              duration: 120,
              transcript: 'The Gateway of India is Mumbai\'s most iconic monument. Built in Indo-Saracenic style in 1924...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Paved plaza', 'Accessible viewing areas', 'Ramps'],
              notes: 'Fully accessible monument area'
            }
          },
          {
            id: 'marine-drive',
            name: 'Marine Drive',
            caption: '3.6km arc-shaped promenade known as Queen\'s Necklace',
            legend: 'Named for the string of lights that outline the bay at night',
            poeticCopy: 'Where Arabian waves serenade the city\'s curve, and at night a jeweled necklace of lights embraces the bay - Mumbai\'s romantic soul laid bare.',
            storySnippet: 'Walk or drive this Art Deco boulevard as waves crash on tetrapods. Come evening, the street lamps create the famous necklace. It\'s where Mumbai comes to breathe.',
            coordinates: { latitude: 18.9432, longitude: 72.8236 },
            tags: ['nature', 'family', 'romantic', 'cultural'],
            bestSeasons: ['winter', 'autumn', 'spring'],
            moodIcons: ['romantic', 'peaceful', 'vibrant'],
            travelTips: [
              'Best time: sunset to night',
              'Try bhel puri from vendors',
              'Walking the full stretch takes 45 minutes',
              'Monsoon waves are spectacular'
            ],
            sustainabilityTips: [
              'Keep promenade clean',
              'No plastic waste',
              'Respect ocean',
              'Support cleanliness drives'
            ],
            weatherInsights: [
              {
                month: 'January',
                temperature: { min: 17, max: 31, unit: 'celsius' },
                rainfall: 'None',
                conditions: 'Cool evenings perfect for walking'
              },
              {
                month: 'July',
                temperature: { min: 25, max: 30, unit: 'celsius' },
                rainfall: 'Very heavy',
                conditions: 'Dramatic monsoon waves'
              }
            ],
            culturalPulseTimeline: [
              { year: 1920, event: 'Reclamation completed', significance: 'Created from Back Bay reclamation' },
              { year: 1930, event: 'Art Deco buildings', significance: 'Architectural heritage established' }
            ],
            achievements: [
              {
                title: 'Queen\'s Necklace Walker',
                description: 'Walked entire Marine Drive at night',
                icon: '💎',
                criteria: 'Walk full promenade after dark'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/marine-drive-main.jpg',
              altText: 'Marine Drive curved promenade at night with street lights creating Queen\'s Necklace effect, Arabian Sea waves',
              thumbnailUrl: '/assets/attractions/marine-drive-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/marine-drive-en.mp3',
              duration: 120,
              transcript: 'Marine Drive, affectionately called the Queen\'s Necklace, is a 3.6-kilometer boulevard along the Arabian Sea...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Smooth promenade', 'Seating areas', 'Accessible throughout'],
              notes: 'Excellent accessibility for all'
            }
          }
        ]
      },
      {
        id: 'aurangabad',
        name: 'Aurangabad',
        description: 'City of Gates, gateway to Ajanta and Ellora Caves.',
        coordinates: { latitude: 19.8762, longitude: 75.3433 },
        attractions: [
          {
            id: 'ellora-caves',
            name: 'Ellora Caves',
            caption: 'UNESCO World Heritage rock-cut caves representing Buddhist, Hindu, and Jain faiths',
            legend: '34 caves carved between 6th-10th century CE, including monumental Kailasa temple',
            poeticCopy: 'Where three faiths coexist in carved stone, and the Kailasa temple stands as humanity\'s most ambitious single rock excavation - a mountain sculpted into divinity.',
            storySnippet: 'Cave 16, the Kailasa temple, was carved top-down from a single rock face. Imagine 200 years of chiseling, removing 200,000 tons of rock to create this masterpiece.',
            coordinates: { latitude: 20.0269, longitude: 75.1786 },
            tags: ['heritage', 'spiritual', 'architecture', 'cultural', 'historic'],
            bestSeasons: ['winter', 'autumn', 'spring'],
            moodIcons: ['historic', 'spiritual', 'cultural'],
            travelTips: [
              'Allocate full day for exploration',
              'Kailasa temple (Cave 16) is must-see',
              'Hire guide for historical context',
              'Carry water and snacks - limited facilities'
            ],
            sustainabilityTips: [
              'Stay on designated paths',
              'No touching cave sculptures',
              'Proper waste disposal',
              'Respect archaeological significance'
            ],
            weatherInsights: [
              {
                month: 'November',
                temperature: { min: 15, max: 28, unit: 'celsius' },
                rainfall: 'Very low',
                conditions: 'Perfect for cave exploration'
              }
            ],
            culturalPulseTimeline: [
              { year: 600, event: 'Cave excavation began', significance: 'Buddhist caves initiated' },
              { year: 760, event: 'Kailasa temple completed', significance: 'Hindu architectural marvel' },
              { year: 1983, event: 'UNESCO designation', significance: 'World Heritage recognition' }
            ],
            achievements: [
              {
                title: 'Cave Explorer',
                description: 'Visited all major Ellora caves',
                icon: '🏛️',
                criteria: 'Explore Buddhist, Hindu, and Jain sections'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/ellora-caves-main.jpg',
              altText: 'Majestic Kailasa temple at Ellora carved from single rock with intricate sculptures and courtyards',
              thumbnailUrl: '/assets/attractions/ellora-caves-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/ellora-caves-en.mp3',
              duration: 240,
              transcript: 'Ellora Caves represent the epitome of Indian rock-cut architecture. These 34 caves were carved between the 6th and 10th centuries...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Wheelchair rentals', 'Ramps to main caves', 'Accessible pathways', 'Golf cart service'],
              notes: 'Main caves accessible; some upper levels require stairs'
            }
          },
          {
            id: 'ajanta-caves',
            name: 'Ajanta Caves',
            caption: 'Ancient Buddhist rock-cut caves with exquisite murals and sculptures',
            legend: '29 caves dating to 2nd century BCE, rediscovered in 1819',
            poeticCopy: 'Where Buddhist monks carved prayer into mountainsides, and ancient frescoes still whisper tales of Jataka stories through colors that survived centuries.',
            storySnippet: 'These caves were lost to time until a British officer hunting tigers stumbled upon them. The murals inside are considered masterpieces of Buddhist art.',
            coordinates: { latitude: 20.5519, longitude: 75.7033 },
            tags: ['heritage', 'spiritual', 'architecture', 'cultural', 'historic'],
            bestSeasons: ['winter', 'autumn', 'spring'],
            moodIcons: ['historic', 'spiritual', 'cultural'],
            travelTips: [
              'About 100km from Aurangabad - plan transport',
              'Photography inside caves restricted',
              'Viewpoint offers panoramic cave view',
              'Visit caves 1, 2, 16, and 17 for best murals'
            ],
            sustainabilityTips: [
              'No flash photography - damages murals',
              'Don\'t touch paintings',
              'Respect Buddhist heritage',
              'Support conservation efforts'
            ],
            weatherInsights: [
              {
                month: 'December',
                temperature: { min: 12, max: 26, unit: 'celsius' },
                rainfall: 'None',
                conditions: 'Comfortable for cave visits'
              }
            ],
            culturalPulseTimeline: [
              { year: -200, event: 'First phase caves', significance: 'Hinayana Buddhist period' },
              { year: 1819, event: 'Rediscovery', significance: 'John Smith found caves during hunt' },
              { year: 1983, event: 'UNESCO recognition', significance: 'World Heritage Site status' }
            ],
            achievements: [
              {
                title: 'Mural Master',
                description: 'Explored Ajanta\'s ancient Buddhist art',
                icon: '🎨',
                criteria: 'Visit caves with best-preserved murals'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/ajanta-caves-main.jpg',
              altText: 'Ajanta Caves horseshoe-shaped cliff with rock-cut entrances, Buddhist murals, and surrounding Sahyadri landscape',
              thumbnailUrl: '/assets/attractions/ajanta-caves-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/ajanta-caves-en.mp3',
              duration: 240,
              transcript: 'The Ajanta Caves are a remarkable complex of 29 Buddhist caves. Dating from the 2nd century BCE to 650 CE...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: false,
              hearingImpairedFriendly: true,
              facilities: ['Battery-operated vehicles', 'Ramps to select caves', 'Accessible pathways'],
              notes: 'Main caves accessible via special vehicles; some caves have steps'
            }
          },
          {
            id: 'bibi-ka-maqbara',
            name: 'Bibi Ka Maqbara',
            caption: 'Mughal mausoleum known as Deccan\'s Taj Mahal',
            legend: 'Built in 1660 by Emperor Aurangzeb for his wife Dilras Banu Begum',
            poeticCopy: 'Where Mughal love translated to marble and garden, a son\'s tribute to his mother creating the Deccan\'s answer to Agra\'s eternal monument.',
            storySnippet: 'Smaller than the Taj but equally touching, this mausoleum sits in char bagh gardens. The marble dome and minarets echo Mughal architectural poetry.',
            coordinates: { latitude: 19.9012, longitude: 75.3219 },
            tags: ['heritage', 'architecture', 'cultural', 'romantic'],
            bestSeasons: ['winter', 'autumn', 'spring'],
            moodIcons: ['historic', 'romantic', 'peaceful'],
            travelTips: [
              'Best photographed in early morning light',
              'Less crowded than actual Taj Mahal',
              'Combine with other Aurangabad sights',
              'Sunset visit offers golden hour magic'
            ],
            sustainabilityTips: [
              'Respect monument rules',
              'No littering in gardens',
              'Preserve heritage integrity',
              'Support maintenance initiatives'
            ],
            weatherInsights: [
              {
                month: 'January',
                temperature: { min: 12, max: 28, unit: 'celsius' },
                rainfall: 'Very low',
                conditions: 'Perfect for monument photography'
              }
            ],
            culturalPulseTimeline: [
              { year: 1660, event: 'Mausoleum completed', significance: 'Azam Shah built for mother' },
              { year: 1985, event: 'Restoration work', significance: 'ASI preserved structure' }
            ],
            achievements: [
              {
                title: 'Deccan Taj Visitor',
                description: 'Explored Bibi Ka Maqbara',
                icon: '🕌',
                criteria: 'Visit mausoleum and gardens'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/bibi-ka-maqbara-main.jpg',
              altText: 'Bibi Ka Maqbara with white marble dome, minarets, and Mughal garden with reflecting pool',
              thumbnailUrl: '/assets/attractions/bibi-ka-maqbara-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/bibi-ka-maqbara-en.mp3',
              duration: 150,
              transcript: 'Bibi Ka Maqbara, often called the Taj of the Deccan, was built in 1660 by Prince Azam Shah...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Paved pathways', 'Ramps', 'Accessible gardens'],
              notes: 'Gardens and exterior fully accessible; interior has some steps'
            }
          }
        ]
      },
      {
        id: 'pune',
        name: 'Pune',
        description: 'Oxford of the East with Maratha heritage and modern IT culture.',
        coordinates: { latitude: 18.5204, longitude: 73.8567 },
        attractions: [
          {
            id: 'shaniwar-wada',
            name: 'Shaniwar Wada',
            caption: 'Historic fortification that was seat of Peshwa rulers',
            legend: 'Built in 1732, famous for tragic ghost stories and light-and-sound show',
            poeticCopy: 'Where Maratha power once commanded empires, and now ruins whisper tales of intrigue, tragedy, and glory through centuries of monsoon and conquest.',
            storySnippet: 'Once a seven-story palace, only the massive walls remain after fire destroyed it in 1828. The evening light-and-sound show brings Peshwa history alive.',
            coordinates: { latitude: 18.5193, longitude: 73.8553 },
            tags: ['heritage', 'fort', 'architecture', 'cultural', 'historic'],
            bestSeasons: ['winter', 'autumn', 'spring'],
            moodIcons: ['historic', 'cultural', 'adventure'],
            travelTips: [
              'Evening show timings vary by season',
              'Explore massive teak gates',
              'Visit nearby Dagdu Sheth Ganpati Temple',
              'Combine with old Pune heritage walk'
            ],
            sustainabilityTips: [
              'Respect heritage site',
              'No graffiti or damage',
              'Proper waste disposal',
              'Support conservation efforts'
            ],
            weatherInsights: [
              {
                month: 'February',
                temperature: { min: 14, max: 31, unit: 'celsius' },
                rainfall: 'Very low',
                conditions: 'Pleasant for fort exploration'
              }
            ],
            culturalPulseTimeline: [
              { year: 1732, event: 'Fort completed', significance: 'Peshwa administrative center' },
              { year: 1828, event: 'Great fire', significance: 'Palace destroyed' }
            ],
            achievements: [
              {
                title: 'Peshwa Historian',
                description: 'Attended Shaniwar Wada light-and-sound show',
                icon: '🏰',
                criteria: 'Watch evening cultural program'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/shaniwar-wada-main.jpg',
              altText: 'Shaniwar Wada fort ruins with massive entrance gate and historic walls against blue sky',
              thumbnailUrl: '/assets/attractions/shaniwar-wada-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/shaniwar-wada-en.mp3',
              duration: 180,
              transcript: 'Shaniwar Wada was the seat of the Peshwas of the Maratha Empire. Constructed in 1732...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: false,
              facilities: ['Ramps', 'Accessible pathways', 'Seating for shows'],
              notes: 'Most areas accessible; some uneven surfaces'
            }
          },
          {
            id: 'aga-khan-palace',
            name: 'Aga Khan Palace',
            caption: 'Historic palace where Mahatma Gandhi was imprisoned',
            legend: 'Built in 1892, now a memorial to Gandhi and Kasturba',
            poeticCopy: 'Where freedom fighters were caged in palatial walls, and Gandhi\'s simplicity confronted architectural grandeur, creating sacred ground for independence.',
            storySnippet: 'This Italian arched palace became Gandhi\'s prison from 1942-44. His wife Kasturba died here. Today it\'s a museum preserving their memory and India\'s freedom struggle.',
            coordinates: { latitude: 18.5533, longitude: 73.9045 },
            tags: ['heritage', 'museum', 'cultural', 'historic'],
            bestSeasons: ['winter', 'autumn', 'spring'],
            moodIcons: ['historic', 'peaceful', 'cultural'],
            travelTips: [
              'Allow 1-2 hours for thorough visit',
              'Beautiful gardens for contemplation',
              'Gandhi memorabilia on display',
              'Photography allowed in gardens'
            ],
            sustainabilityTips: [
              'Respect memorial sanctity',
              'No loud conversations',
              'Support museum maintenance',
              'Follow museum guidelines'
            ],
            weatherInsights: [
              {
                month: 'December',
                temperature: { min: 12, max: 28, unit: 'celsius' },
                rainfall: 'None',
                conditions: 'Perfect for garden walks'
              }
            ],
            culturalPulseTimeline: [
              { year: 1892, event: 'Palace built', significance: 'Aga Khan III commission' },
              { year: 1942, event: 'Gandhi imprisonment', significance: 'Became freedom struggle site' },
              { year: 2003, event: 'Museum expansion', significance: 'Enhanced memorial facilities' }
            ],
            achievements: [
              {
                title: 'Freedom Seeker',
                description: 'Visited Aga Khan Palace memorial',
                icon: '🕊️',
                criteria: 'Explore museum and pay respects'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/aga-khan-palace-main.jpg',
              altText: 'Aga Khan Palace with Italian arches, lush gardens, and Gandhi memorial in Pune',
              thumbnailUrl: '/assets/attractions/aga-khan-palace-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/aga-khan-palace-en.mp3',
              duration: 150,
              transcript: 'The Aga Khan Palace is a majestic building with a significant place in Indian history. Built in 1892...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Ramps', 'Accessible pathways', 'Audio guides', 'Accessible restrooms'],
              notes: 'Fully accessible memorial and museum'
            }
          }
        ]
      }
    ]
  },
  // State 7: West Bengal
  {
    id: 'west-bengal',
    name: 'West Bengal',
    description: 'Cultural heartland from Kolkata\'s colonial grandeur to Darjeeling\'s tea-scented hills.',
    coordinates: { latitude: 22.9868, longitude: 87.8550 },
    districts: [
      {
        id: 'kolkata',
        name: 'Kolkata',
        description: 'City of Joy, intellectual capital with Victorian architecture and Bengali culture.',
        coordinates: { latitude: 22.5726, longitude: 88.3639 },
        attractions: [
          {
            id: 'victoria-memorial',
            name: 'Victoria Memorial',
            caption: 'Grand white marble building dedicated to Queen Victoria',
            legend: 'Built between 1906-1921, now houses museum of British Raj era',
            poeticCopy: 'Where colonial marble dreams rise from Maidan greens, and empire\'s legacy sits preserved in galleries while Kolkata reinvents itself around its ghostly whiteness.',
            storySnippet: 'This Indo-Saracenic marble palace houses paintings, manuscripts, and artifacts. The gardens are perfect for evening strolls as the building glows under lights.',
            coordinates: { latitude: 22.5448, longitude: 88.3426 },
            tags: ['heritage', 'museum', 'architecture', 'cultural'],
            bestSeasons: ['winter', 'autumn'],
            moodIcons: ['historic', 'cultural', 'peaceful'],
            travelTips: [
              'Best photographed in morning light',
              'Museum entry separate from gardens',
              'Sound-and-light show in evenings',
              'Combine with Maidan walk'
            ],
            sustainabilityTips: [
              'Respect museum rules',
              'No littering in gardens',
              'Support heritage conservation',
              'Follow visitor guidelines'
            ],
            weatherInsights: [
              {
                month: 'December',
                temperature: { min: 14, max: 26, unit: 'celsius' },
                rainfall: 'Very low',
                conditions: 'Pleasant winter weather'
              }
            ],
            culturalPulseTimeline: [
              { year: 1921, event: 'Memorial inaugurated', significance: 'Colonial architectural landmark' },
              { year: 1980, event: 'Fully converted to museum', significance: 'Public cultural institution' }
            ],
            achievements: [
              {
                title: 'Colonial Explorer',
                description: 'Visited Victoria Memorial museum',
                icon: '🏛️',
                criteria: 'Explore museum and gardens'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/victoria-memorial-main.jpg',
              altText: 'Majestic white Victoria Memorial with reflecting pool, gardens, and blue sky in Kolkata',
              thumbnailUrl: '/assets/attractions/victoria-memorial-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/victoria-memorial-en.mp3',
              duration: 180,
              transcript: 'The Victoria Memorial is one of Kolkata\'s most iconic landmarks. This magnificent white marble building...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Ramps', 'Elevators', 'Wheelchair rental', 'Accessible restrooms'],
              notes: 'Museum and gardens fully accessible'
            }
          },
          {
            id: 'howrah-bridge',
            name: 'Howrah Bridge',
            caption: 'Iconic cantilever bridge over Hooghly River, symbol of Kolkata',
            legend: 'Built in 1943 without nuts or bolts, using rivets',
            poeticCopy: 'Where steel sinews arch across sacred waters, and millions cross daily on riveted dreams connecting Howrah\'s chaos with Kolkata\'s colonial heart.',
            storySnippet: 'Walk across this engineering marvel at dawn as flower sellers head to markets. The view from the bridge captures Kolkata\'s essence - timeless yet always moving.',
            coordinates: { latitude: 22.5851, longitude: 88.3468 },
            tags: ['heritage', 'architecture', 'family', 'cultural'],
            bestSeasons: ['winter', 'autumn', 'spring'],
            moodIcons: ['vibrant', 'adventure', 'cultural'],
            travelTips: [
              'Walk bridge for authentic experience',
              'Visit early morning for flower market',
              'Best photographed from Millennium Park',
              'Extremely crowded during rush hours'
            ],
            sustainabilityTips: [
              'Don\'t throw anything in river',
              'Support river cleanliness drives',
              'Use public transport',
              'Respect local commuters'
            ],
            weatherInsights: [
              {
                month: 'January',
                temperature: { min: 13, max: 26, unit: 'celsius' },
                rainfall: 'Very low',
                conditions: 'Clear views, comfortable walking'
              }
            ],
            culturalPulseTimeline: [
              { year: 1943, event: 'Bridge opened', significance: 'Engineering marvel without nuts/bolts' },
              { year: 1965, event: 'Renamed Rabindra Setu', significance: 'Honored poet Tagore' }
            ],
            achievements: [
              {
                title: 'Bridge Walker',
                description: 'Crossed Howrah Bridge on foot',
                icon: '🌉',
                criteria: 'Walk entire bridge length'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/howrah-bridge-main.jpg',
              altText: 'Howrah Bridge spanning Hooghly River with boats, crowds crossing, and Kolkata skyline',
              thumbnailUrl: '/assets/attractions/howrah-bridge-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/howrah-bridge-en.mp3',
              duration: 120,
              transcript: 'Howrah Bridge, officially known as Rabindra Setu, is one of the world\'s busiest cantilever bridges...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: false,
              visuallyImpairedFriendly: false,
              hearingImpairedFriendly: true,
              facilities: ['Very crowded', 'Uneven surface', 'No facilities'],
              notes: 'Challenging for wheelchairs due to crowds and conditions'
            }
          },
          {
            id: 'indian-museum',
            name: 'Indian Museum',
            caption: 'India\'s oldest and largest museum with vast collection',
            legend: 'Founded in 1814, houses rare antiquities and natural history specimens',
            poeticCopy: 'Where civilizations rest in glass cases, from Harappan seals to Egyptian mummies, and knowledge accumulates like Kolkata\'s monsoon clouds - vast and generous.',
            storySnippet: 'Wander through 35 galleries spanning archaeology, anthropology, geology, and art. The Egyptian section and Buddhist galleries are particularly impressive.',
            coordinates: { latitude: 22.5579, longitude: 88.3520 },
            tags: ['museum', 'heritage', 'cultural', 'family'],
            bestSeasons: ['winter', 'autumn', 'spring'],
            moodIcons: ['cultural', 'historic', 'family'],
            travelTips: [
              'Allocate 3-4 hours minimum',
              'Photography may be restricted',
              'Closed on Mondays',
              'Audio guides available'
            ],
            sustainabilityTips: [
              'Respect artifacts',
              'No touching exhibits',
              'Support museum conservation',
              'Follow all guidelines'
            ],
            weatherInsights: [
              {
                month: 'February',
                temperature: { min: 15, max: 28, unit: 'celsius' },
                rainfall: 'Very low',
                conditions: 'Comfortable for museum visit'
              }
            ],
            culturalPulseTimeline: [
              { year: 1814, event: 'Museum founded', significance: 'First museum in Asia' },
              { year: 1875, event: 'Current building opened', significance: 'Expanded facilities' }
            ],
            achievements: [
              {
                title: 'Museum Scholar',
                description: 'Explored Indian Museum galleries',
                icon: '🏛️',
                criteria: 'Visit major sections'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/indian-museum-main.jpg',
              altText: 'Grand Indian Museum building facade with columns and visitors, Kolkata\'s oldest museum',
              thumbnailUrl: '/assets/attractions/indian-museum-thumb.jpg',
              aspectRatio: '4:3'
            },
            audioDescription: {
              url: '/assets/audio/indian-museum-en.mp3',
              duration: 180,
              transcript: 'The Indian Museum, established in 1814, is the oldest museum in India and one of the oldest in Asia...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Ramps', 'Elevators', 'Accessible restrooms', 'Wheelchairs available'],
              notes: 'Most galleries accessible'
            }
          }
        ]
      },
      {
        id: 'darjeeling',
        name: 'Darjeeling',
        description: 'Queen of Hills with tea gardens and Kanchenjunga views.',
        coordinates: { latitude: 27.0410, longitude: 88.2663 },
        attractions: [
          {
            id: 'tiger-hill',
            name: 'Tiger Hill',
            caption: 'Viewpoint famous for sunrise over Kanchenjunga and Mount Everest',
            legend: 'At 2,567m, offers panoramic views of world\'s highest peaks',
            poeticCopy: 'Where dawn paints Kanchenjunga gold, and the world\'s roof reveals itself in graduated light while shivering travelers witness nature\'s daily miracle.',
            storySnippet: 'Wake at 4 AM and drive up winding roads. As the sun rises, watch it illuminate Kanchenjunga, then Everest. It\'s worth every freezing moment.',
            coordinates: { latitude: 27.0120, longitude: 88.2754 },
            tags: ['nature', 'mountain', 'adventure', 'family'],
            bestSeasons: ['spring', 'autumn', 'winter'],
            moodIcons: ['adventure', 'nature', 'peaceful'],
            travelTips: [
              'Start by 4 AM for sunrise',
              'Dress in heavy woolens',
              'Book vehicle previous night',
              'Clear weather not guaranteed'
            ],
            sustainabilityTips: [
              'Carry back all waste',
              'Respect mountain environment',
              'Support local drivers',
              'No littering'
            ],
            weatherInsights: [
              {
                month: 'April',
                temperature: { min: 5, max: 12, unit: 'celsius' },
                rainfall: 'Low',
                conditions: 'Clear skies likely for sunrise'
              },
              {
                month: 'October',
                temperature: { min: 8, max: 15, unit: 'celsius' },
                rainfall: 'Low',
                conditions: 'Post-monsoon clarity'
              }
            ],
            culturalPulseTimeline: [
              { year: 1800, event: 'British discovery', significance: 'Became popular viewpoint' }
            ],
            achievements: [
              {
                title: 'Sunrise Chaser',
                description: 'Witnessed sunrise over Kanchenjunga from Tiger Hill',
                icon: '🏔️',
                criteria: 'Visit for sunrise viewing'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/tiger-hill-main.jpg',
              altText: 'Sunrise over snow-capped Kanchenjunga and Himalayan peaks from Tiger Hill viewpoint',
              thumbnailUrl: '/assets/attractions/tiger-hill-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/tiger-hill-en.mp3',
              duration: 120,
              transcript: 'Tiger Hill stands at an altitude of 2,567 meters and offers one of the most spectacular sunrise views...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: false,
              visuallyImpairedFriendly: false,
              hearingImpairedFriendly: true,
              facilities: ['Limited facilities', 'Cold weather', 'Uneven terrain'],
              notes: 'Challenging access; vehicle required'
            }
          },
          {
            id: 'darjeeling-himalayan-railway',
            name: 'Darjeeling Himalayan Railway',
            caption: 'UNESCO World Heritage toy train through misty mountains',
            legend: 'Built in 1881, narrow-gauge railway climbing 2,000 meters',
            poeticCopy: 'Where the toy train chugs through cloud kingdoms, and every curve reveals tea gardens cascading down slopes like green waterfalls frozen in time.',
            storySnippet: 'Board the tiny steam engine as it loops and zigzags up mountains. Pass tea estates, tiny stations, and villages where children wave. It\'s time travel on rails.',
            coordinates: { latitude: 27.0410, longitude: 88.2663 },
            tags: ['heritage', 'adventure', 'family', 'cultural'],
            bestSeasons: ['spring', 'autumn', 'winter'],
            moodIcons: ['adventure', 'family', 'cultural'],
            travelTips: [
              'Book tickets well in advance',
              'Joy ride shorter than full journey',
              'Best views from right side',
              'Steam engine runs seasonally'
            ],
            sustainabilityTips: [
              'Support heritage railway conservation',
              'Don\'t throw litter from train',
              'Respect railway workers',
              'Follow safety rules'
            ],
            weatherInsights: [
              {
                month: 'March',
                temperature: { min: 8, max: 18, unit: 'celsius' },
                rainfall: 'Low',
                conditions: 'Clear views through mountains'
              }
            ],
            culturalPulseTimeline: [
              { year: 1881, event: 'Railway completed', significance: 'Engineering marvel' },
              { year: 1999, event: 'UNESCO World Heritage', significance: 'Global recognition' }
            ],
            achievements: [
              {
                title: 'Toy Train Rider',
                description: 'Rode Darjeeling Himalayan Railway',
                icon: '🚂',
                criteria: 'Complete a journey on toy train'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/darjeeling-railway-main.jpg',
              altText: 'Toy train of Darjeeling Himalayan Railway winding through misty tea gardens and mountain curves',
              thumbnailUrl: '/assets/attractions/darjeeling-railway-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/darjeeling-railway-en.mp3',
              duration: 180,
              transcript: 'The Darjeeling Himalayan Railway, affectionately called the Toy Train, is a narrow-gauge railway...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: false,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Narrow train entry', 'Limited space', 'Steep platforms'],
              notes: 'Challenging for wheelchair users; assistance required'
            }
          }
        ]
      },
      {
        id: 'sundarbans',
        name: 'Sundarbans',
        description: 'World\'s largest mangrove forest, home to Royal Bengal Tiger.',
        coordinates: { latitude: 21.9497, longitude: 88.8839 },
        attractions: [
          {
            id: 'sundarbans-national-park',
            name: 'Sundarbans National Park',
            caption: 'UNESCO World Heritage mangrove delta with Bengal tigers',
            legend: 'Largest tidal halophytic mangrove forest, spanning 10,000 sq km',
            poeticCopy: 'Where rivers and ocean embrace in liquid maze, and tigers swim between islands while mangrove roots breathe with tides in nature\'s amphibious kingdom.',
            storySnippet: 'Board boats to navigate narrow channels between islands. Spot crocodiles basking, deer drinking, and if fortune smiles, the elusive Royal Bengal Tiger swimming.',
            coordinates: { latitude: 21.9497, longitude: 88.8839 },
            tags: ['wildlife', 'nature', 'adventure', 'park'],
            bestSeasons: ['winter', 'autumn'],
            moodIcons: ['adventure', 'nature', 'vibrant'],
            travelTips: [
              'Multi-day boat safaris recommended',
              'Tiger sighting not guaranteed',
              'Carry binoculars',
              'Licensed guides mandatory'
            ],
            sustainabilityTips: [
              'No littering in forest or water',
              'Respect wildlife - maintain distance',
              'Support eco-tourism operators',
              'Follow forest department rules'
            ],
            weatherInsights: [
              {
                month: 'November',
                temperature: { min: 18, max: 28, unit: 'celsius' },
                rainfall: 'Low',
                conditions: 'Best wildlife viewing conditions'
              }
            ],
            culturalPulseTimeline: [
              { year: 1973, event: 'Tiger Reserve created', significance: 'Protected habitat established' },
              { year: 1987, event: 'UNESCO designation', significance: 'World Heritage recognition' }
            ],
            achievements: [
              {
                title: 'Mangrove Explorer',
                description: 'Completed Sundarbans boat safari',
                icon: '🐅',
                criteria: 'Take guided boat tour'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/sundarbans-main.jpg',
              altText: 'Boat navigating narrow channel through dense Sundarbans mangrove forest with tangled roots',
              thumbnailUrl: '/assets/attractions/sundarbans-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/sundarbans-en.mp3',
              duration: 180,
              transcript: 'The Sundarbans is the world\'s largest mangrove forest and home to the Royal Bengal Tiger...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: false,
              visuallyImpairedFriendly: false,
              hearingImpairedFriendly: true,
              facilities: ['Boat boarding challenging', 'Limited infrastructure', 'Remote location'],
              notes: 'Not suitable for mobility challenges; requires boat transfers'
            }
          },
          {
            id: 'sajnekhali-wildlife-sanctuary',
            name: 'Sajnekhali Wildlife Sanctuary',
            caption: 'Interpretation center and mangrove walk with watchtower for bird watching',
            legend: 'Gateway to Sundarbans with wildlife museum and observation points',
            poeticCopy: 'Where wooden walkways weave through breathing roots, and watchtowers offer silent communion with winged wanderers painting sky over brackish waters.',
            storySnippet: 'Begin your Sundarbans journey here. Walk the mangrove trail on elevated paths, climb the watchtower at dawn for bird watching, and visit the interpretation center to understand this unique ecosystem.',
            coordinates: { latitude: 22.0333, longitude: 88.8333 },
            tags: ['wildlife', 'nature', 'park', 'cultural'],
            bestSeasons: ['winter', 'autumn'],
            moodIcons: ['nature', 'peaceful', 'adventure'],
            travelTips: [
              'Early morning best for bird watching',
              'Visit interpretation center first',
              'Mangrove trail takes about 1 hour',
              'Crocodile enclosure and deer park on site'
            ],
            sustainabilityTips: [
              'Stay on elevated walkways',
              'No feeding wildlife',
              'Support forest department initiatives',
              'Learn about mangrove conservation'
            ],
            weatherInsights: [
              {
                month: 'December',
                temperature: { min: 15, max: 26, unit: 'celsius' },
                rainfall: 'Very low',
                conditions: 'Perfect for wildlife observation'
              }
            ],
            culturalPulseTimeline: [
              { year: 1976, event: 'Sanctuary established', significance: 'Created buffer zone for tiger reserve' },
              { year: 1995, event: 'Interpretation center opened', significance: 'Educational facility for visitors' }
            ],
            achievements: [
              {
                title: 'Bird Watcher',
                description: 'Spotted migratory birds at Sajnekhali',
                icon: '🦅',
                criteria: 'Visit watchtower during bird migration season'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/sajnekhali-main.jpg',
              altText: 'Wooden walkway through Sajnekhali mangrove forest with watchtower and dense vegetation',
              thumbnailUrl: '/assets/attractions/sajnekhali-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/sajnekhali-en.mp3',
              duration: 150,
              transcript: 'Sajnekhali Wildlife Sanctuary serves as the entry point to Sundarbans Tiger Reserve. The sanctuary features an interpretation center...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: false,
              visuallyImpairedFriendly: false,
              hearingImpairedFriendly: true,
              facilities: ['Elevated walkways', 'Watchtower with stairs', 'Interpretation center accessible'],
              notes: 'Walkways are elevated but narrow; interpretation center more accessible than trails'
            }
          }
        ]
      }
    ]
  },
  // State 8: Karnataka
  {
    id: 'karnataka',
    name: 'Karnataka',
    description: 'Land of gardens, tech cities, and ancient temple architecture.',
    coordinates: { latitude: 15.3173, longitude: 75.7139 },
    districts: [
      {
        id: 'bangalore',
        name: 'Bangalore',
        description: 'Garden City and Silicon Valley of India.',
        coordinates: { latitude: 12.9716, longitude: 77.5946 },
        attractions: [
          {
            id: 'lalbagh-botanical-garden',
            name: 'Lalbagh Botanical Garden',
            caption: '240-acre botanical garden with Glass House and rare plant species',
            legend: 'Founded in 1760 by Hyder Ali, expanded by Tipu Sultan',
            poeticCopy: 'Where 1,000 plant species breathe across 240 acres, and the Victorian Glass House crowns gardens that have bloomed for centuries while the city sprouted around them.',
            storySnippet: 'Walk beneath canopies of ancient trees, marvel at the Glass House inspired by London\'s Crystal Palace, and catch flower shows that transform grounds into living artwork.',
            coordinates: { latitude: 12.9507, longitude: 77.5847 },
            tags: ['nature', 'park', 'family', 'cultural'],
            bestSeasons: ['winter', 'spring', 'autumn'],
            moodIcons: ['peaceful', 'nature', 'family'],
            travelTips: [
              'Early morning best for birdwatching',
              'Flower shows during Republic and Independence Days',
              'Bring camera for botanical photography',
              'Walking shoes recommended'
            ],
            sustainabilityTips: [
              'Stay on designated paths',
              'No plucking flowers',
              'Carry reusable water bottles',
              'Dispose waste properly'
            ],
            weatherInsights: [
              {
                month: 'January',
                temperature: { min: 15, max: 27, unit: 'celsius' },
                rainfall: 'Very low',
                conditions: 'Perfect weather for garden walks'
              }
            ],
            culturalPulseTimeline: [
              { year: 1760, event: 'Garden founded', significance: 'Hyder Ali created Mughal-style garden' },
              { year: 1889, event: 'Glass House built', significance: 'Victorian architectural addition' }
            ],
            achievements: [
              {
                title: 'Garden Wanderer',
                description: 'Explored Lalbagh Botanical Garden',
                icon: '🌺',
                criteria: 'Visit garden and Glass House'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/lalbagh-main.jpg',
              altText: 'Lalbagh Glass House with blooming flower beds, Victorian architecture, and lush botanical gardens',
              thumbnailUrl: '/assets/attractions/lalbagh-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/lalbagh-en.mp3',
              duration: 150,
              transcript: 'Lalbagh Botanical Garden spans 240 acres in the heart of Bangalore. Founded in 1760 by Hyder Ali...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Paved pathways', 'Accessible restrooms', 'Wheelchairs available'],
              notes: 'Most areas accessible; some natural paths challenging'
            }
          },
          {
            id: 'bangalore-palace',
            name: 'Bangalore Palace',
            caption: 'Tudor-style palace inspired by Windsor Castle',
            legend: 'Built in 1878 by Chamaraja Wodeyar, blend of Tudor and Scottish Gothic',
            poeticCopy: 'Where Mysore royalty transplanted English castles to Indian soil, creating turrets and towers that dream of British moors while rooted in Bangalore red earth.',
            storySnippet: 'Walk through royal chambers with Victorian furniture, vintage photographs, and corniced ceilings. The grounds host concerts, and the architecture is pure fairy tale.',
            coordinates: { latitude: 12.9987, longitude: 77.5925 },
            tags: ['heritage', 'architecture', 'museum', 'cultural'],
            bestSeasons: ['winter', 'autumn', 'spring'],
            moodIcons: ['historic', 'cultural', 'romantic'],
            travelTips: [
              'Guided tours available',
              'Photography charges apply',
              'Check for concert schedules',
              'Allocate 2 hours for tour'
            ],
            sustainabilityTips: [
              'Respect royal property',
              'Follow photography rules',
              'Support palace maintenance',
              'No touching artifacts'
            ],
            weatherInsights: [
              {
                month: 'February',
                temperature: { min: 16, max: 29, unit: 'celsius' },
                rainfall: 'Very low',
                conditions: 'Comfortable for palace tours'
              }
            ],
            culturalPulseTimeline: [
              { year: 1878, event: 'Palace completed', significance: 'Wodeyar royal residence' },
              { year: 2005, event: 'Opened to public', significance: 'Became tourist attraction' }
            ],
            achievements: [
              {
                title: 'Palace Explorer',
                description: 'Toured Bangalore Palace',
                icon: '🏰',
                criteria: 'Complete guided tour'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/bangalore-palace-main.jpg',
              altText: 'Tudor-style Bangalore Palace with Gothic towers, turrets, and manicured lawns',
              thumbnailUrl: '/assets/attractions/bangalore-palace-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/bangalore-palace-en.mp3',
              duration: 150,
              transcript: 'Bangalore Palace was built in 1878 and is reminiscent of England\'s Windsor Castle. The palace features Tudor-style architecture...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Ramps available', 'Accessible ground floor', 'Audio tours'],
              notes: 'Ground floor accessible; upper floors have stairs'
            }
          }
        ]
      },
      {
        id: 'hampi',
        name: 'Hampi',
        description: 'UNESCO World Heritage site with Vijayanagara ruins.',
        coordinates: { latitude: 15.3350, longitude: 76.4600 },
        attractions: [
          {
            id: 'vijaya-vittala-temple',
            name: 'Vijaya Vittala Temple',
            caption: 'Temple complex with iconic stone chariot and musical pillars',
            legend: 'Built in 15th century, pinnacle of Vijayanagara architecture',
            poeticCopy: 'Where stone chariots wait eternally to carry gods, and musical pillars sing when struck, proving ancient architects were sculptors of sound itself.',
            storySnippet: 'The stone chariot is Hampi\'s emblem. But don\'t miss the Ranga Mantapa with 56 pillars that produce musical notes when tapped - a symphony frozen in granite.',
            coordinates: { latitude: 15.3150, longitude: 76.4753 },
            tags: ['heritage', 'temple', 'architecture', 'cultural', 'historic'],
            bestSeasons: ['winter', 'autumn'],
            moodIcons: ['historic', 'cultural', 'adventure'],
            travelTips: [
              'Visit early morning to avoid heat',
              'Hire guide for historical context',
              'Carry water and sun protection',
              'Photography allowed'
            ],
            sustainabilityTips: [
              'Stay on designated paths',
              'Don\'t touch or climb ruins',
              'Respect archaeological site',
              'Support site conservation'
            ],
            weatherInsights: [
              {
                month: 'December',
                temperature: { min: 18, max: 30, unit: 'celsius' },
                rainfall: 'Very low',
                conditions: 'Ideal for exploring ruins'
              }
            ],
            culturalPulseTimeline: [
              { year: 1500, event: 'Temple constructed', significance: 'Vijayanagara Empire peak' },
              { year: 1986, event: 'UNESCO recognition', significance: 'World Heritage Site' }
            ],
            achievements: [
              {
                title: 'Hampi Heritage Seeker',
                description: 'Explored Vittala Temple and stone chariot',
                icon: '🛕',
                criteria: 'Visit temple complex'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/vittala-temple-main.jpg',
              altText: 'Iconic stone chariot at Vittala Temple with intricate carvings, Hampi ruins in background',
              thumbnailUrl: '/assets/attractions/vittala-temple-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/vittala-temple-en.mp3',
              duration: 180,
              transcript: 'The Vijaya Vittala Temple is the most ornate structure in Hampi. Built in the 15th century...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: false,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Uneven terrain', 'Ancient ruins', 'Limited facilities'],
              notes: 'Challenging terrain; some areas inaccessible for wheelchairs'
            }
          },
          {
            id: 'virupaksha-temple',
            name: 'Virupaksha Temple',
            caption: 'Active temple with towering gopuram, dedicated to Lord Shiva',
            legend: 'Continuously functioning since 7th century, survived empire\'s fall',
            poeticCopy: 'Where devotion never ceased through centuries of rise and ruin, and the gopuram still towers over boulder-strewn landscapes like faith carved in stone.',
            storySnippet: 'Unlike other Hampi ruins, this temple still thrives with daily rituals. Climb the gopuram for panoramic views, and meet Lakshmi, the temple elephant who blesses visitors.',
            coordinates: { latitude: 15.3350, longitude: 76.4625 },
            tags: ['spiritual', 'temple', 'heritage', 'architecture', 'cultural'],
            bestSeasons: ['winter', 'autumn'],
            moodIcons: ['spiritual', 'historic', 'cultural'],
            travelTips: [
              'Active temple - dress modestly',
              'Visit during evening aarti',
              'Meet Lakshmi the temple elephant',
              'Climb gopuram for views (check if allowed)'
            ],
            sustainabilityTips: [
              'Respect worship practices',
              'No leather inside temple',
              'Support temple activities',
              'Follow temple rules'
            ],
            weatherInsights: [
              {
                month: 'January',
                temperature: { min: 17, max: 29, unit: 'celsius' },
                rainfall: 'None',
                conditions: 'Perfect for temple visits'
              }
            ],
            culturalPulseTimeline: [
              { year: 700, event: 'Temple founded', significance: 'Chalukya dynasty period' },
              { year: 1509, event: 'Gopuram added', significance: 'Vijayanagara expansion' }
            ],
            achievements: [
              {
                title: 'Temple Devotee',
                description: 'Received blessing at Virupaksha Temple',
                icon: '🙏',
                criteria: 'Participate in temple darshan'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/virupaksha-temple-main.jpg',
              altText: 'Towering Virupaksha Temple gopuram with intricate sculptures, active temple in Hampi ruins',
              thumbnailUrl: '/assets/attractions/virupaksha-temple-thumb.jpg',
              aspectRatio: '3:2'
            },
            audioDescription: {
              url: '/assets/audio/virupaksha-temple-en.mp3',
              duration: 150,
              transcript: 'Virupaksha Temple is the principal temple in Hampi and is still active today. Dedicated to Lord Shiva...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Main courtyard accessible', 'Ramps in some areas', 'Assistance available'],
              notes: 'Main temple accessible; gopuram climb not wheelchair accessible'
            }
          },
          {
            id: 'hampi-bazaar',
            name: 'Hampi Bazaar',
            caption: 'Ancient market street with pavilions and ruins',
            legend: 'Once a thriving marketplace of Vijayanagara Empire',
            poeticCopy: 'Where merchants once haggled over silk and diamonds, now only stone pavilions remain, echoing with ghosts of commerce in an empire frozen in time.',
            storySnippet: 'Walk this kilometer-long ancient street lined with pillared pavilions. Imagine it bustling with traders from Persia, Arabia, and China, exchanging goods in one of medieval world\'s richest cities.',
            coordinates: { latitude: 15.3360, longitude: 76.4610 },
            tags: ['heritage', 'cultural', 'historic'],
            bestSeasons: ['winter', 'autumn'],
            moodIcons: ['historic', 'cultural', 'adventure'],
            travelTips: [
              'Early morning or late afternoon best',
              'Combine with Virupaksha Temple visit',
              'Photograph stone pavilions',
              'Watch boulder-filled landscape'
            ],
            sustainabilityTips: [
              'No littering',
              'Respect ruins',
              'Stay on paths',
              'Don\'t climb fragile structures'
            ],
            weatherInsights: [
              {
                month: 'November',
                temperature: { min: 19, max: 30, unit: 'celsius' },
                rainfall: 'Very low',
                conditions: 'Pleasant for walking'
              }
            ],
            culturalPulseTimeline: [
              { year: 1500, event: 'Bazaar peak', significance: 'International trade center' },
              { year: 1565, event: 'Battle of Talikota', significance: 'Empire fell, bazaar abandoned' }
            ],
            achievements: [
              {
                title: 'Ancient Trader',
                description: 'Walked historic Hampi Bazaar',
                icon: '🏛️',
                criteria: 'Explore market street ruins'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/hampi-bazaar-main.jpg',
              altText: 'Ancient Hampi Bazaar street with stone pavilions, ruins, and boulder landscape',
              thumbnailUrl: '/assets/attractions/hampi-bazaar-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/hampi-bazaar-en.mp3',
              duration: 120,
              transcript: 'Hampi Bazaar was once the main marketplace of the Vijayanagara Empire. This long street was lined with pavilions...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: false,
              visuallyImpairedFriendly: false,
              hearingImpairedFriendly: true,
              facilities: ['Uneven ancient stones', 'No paved paths', 'Ruins'],
              notes: 'Challenging terrain for wheelchairs'
            }
          }
        ]
      },
      {
        id: 'mysore',
        name: 'Mysore',
        description: 'City of palaces, silk, sandalwood, and yoga.',
        coordinates: { latitude: 12.2958, longitude: 76.6394 },
        attractions: [
          {
            id: 'mysore-palace',
            name: 'Mysore Palace',
            caption: 'Opulent royal palace illuminated by 100,000 lights on Sundays',
            legend: 'Built in 1912 after fire, blend of Hindu, Muslim, Rajput, and Gothic styles',
            poeticCopy: 'Where Indo-Saracenic dreams crystallized in stone and stained glass, and Sunday evenings transform the palace into a constellation descended to earth.',
            storySnippet: 'Walk through durbar halls with painted ceilings, silver doors, and peacock motifs. Return Sunday evening when 100,000 bulbs illuminate the facade in golden splendor.',
            coordinates: { latitude: 12.3052, longitude: 76.6552 },
            tags: ['heritage', 'architecture', 'museum', 'cultural'],
            bestSeasons: ['winter', 'autumn'],
            moodIcons: ['historic', 'cultural', 'romantic'],
            travelTips: [
              'Visit Sunday evening for illumination (7-8 PM)',
              'Audio guides available',
              'No photography inside palace',
              'Dussehra festival celebration spectacular'
            ],
            sustainabilityTips: [
              'Respect royal heritage',
              'Follow museum rules',
              'No touching artifacts',
              'Support palace conservation'
            ],
            weatherInsights: [
              {
                month: 'December',
                temperature: { min: 16, max: 28, unit: 'celsius' },
                rainfall: 'Low',
                conditions: 'Pleasant for palace tours'
              }
            ],
            culturalPulseTimeline: [
              { year: 1912, event: 'Current palace completed', significance: 'After fire destroyed old palace' },
              { year: 1950, event: 'Became public museum', significance: 'Opened to tourists' }
            ],
            achievements: [
              {
                title: 'Palace Illuminated',
                description: 'Saw Mysore Palace illumination',
                icon: '✨',
                criteria: 'Visit during Sunday evening lights'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/mysore-palace-main.jpg',
              altText: 'Majestic Mysore Palace illuminated with golden lights, Indo-Saracenic architecture with domes and arches',
              thumbnailUrl: '/assets/attractions/mysore-palace-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/mysore-palace-en.mp3',
              duration: 180,
              transcript: 'Mysore Palace is one of India\'s most visited monuments. Built in 1912 after the old palace was destroyed by fire...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Ramps', 'Wheelchair rentals', 'Accessible entrances', 'Audio guides'],
              notes: 'Most areas accessible; some upper sections have steps'
            }
          },
          {
            id: 'chamundi-hills',
            name: 'Chamundi Hills',
            caption: 'Sacred hill with Chamundeshwari Temple and giant Nandi statue',
            legend: 'Named after Goddess Chamundi, over 1,000 steps to summit',
            poeticCopy: 'Where 1,000 steps climb toward divine blessing, and a colossal Nandi guards the ascent while the city spreads below like offerings at the goddess\'s feet.',
            storySnippet: 'Climb 1,000 steps or drive up. The Chamundeshwari Temple crowns the summit, while halfway up, a 16-foot monolithic Nandi bull sits eternally patient.',
            coordinates: { latitude: 12.2717, longitude: 76.6731 },
            tags: ['spiritual', 'temple', 'nature', 'adventure'],
            bestSeasons: ['winter', 'autumn', 'spring'],
            moodIcons: ['spiritual', 'adventure', 'peaceful'],
            travelTips: [
              'Climb early morning for cooler temperatures',
              'Or drive up and walk down',
              'Visit giant Nandi statue midway',
              'Panoramic Mysore city views from top'
            ],
            sustainabilityTips: [
              'Carry water in reusable bottles',
              'No littering on steps',
              'Respect temple sanctity',
              'Support hill cleanliness'
            ],
            weatherInsights: [
              {
                month: 'January',
                temperature: { min: 15, max: 27, unit: 'celsius' },
                rainfall: 'Low',
                conditions: 'Perfect for climbing'
              }
            ],
            culturalPulseTimeline: [
              { year: 1659, event: 'Nandi statue carved', significance: 'Dodda Basavana monument' },
              { year: 1827, event: 'Temple renovated', significance: 'Current structure established' }
            ],
            achievements: [
              {
                title: 'Hill Climber',
                description: 'Climbed 1,000 steps to Chamundi Temple',
                icon: '⛰️',
                criteria: 'Climb stairs to summit'
              }
            ],
            postcardMetadata: {
              imageUrl: '/assets/attractions/chamundi-hills-main.jpg',
              altText: 'Chamundeshwari Temple atop Chamundi Hills with giant Nandi statue and panoramic Mysore city views',
              thumbnailUrl: '/assets/attractions/chamundi-hills-thumb.jpg',
              aspectRatio: '16:9'
            },
            audioDescription: {
              url: '/assets/audio/chamundi-hills-en.mp3',
              duration: 150,
              transcript: 'Chamundi Hills rise 1,000 meters above sea level and are topped by the Chamundeshwari Temple...',
              language: 'en'
            },
            accessibility: {
              wheelchairAccessible: true,
              visuallyImpairedFriendly: true,
              hearingImpairedFriendly: true,
              facilities: ['Road access to temple', 'Parking at top', 'Temple accessible'],
              notes: 'Steps not wheelchair accessible but road allows vehicle access to top'
            }
          }
        ]
      }
    ]
  }
]
