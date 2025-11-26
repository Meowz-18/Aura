# State Explorer Component

The State Explorer is a comprehensive UI system for selecting and exploring Indian states. It provides an interactive, accessible interface with search functionality, visual hierarchy, and smooth animations.

## Components

### StateExplorer (Main Container)
The main component that orchestrates the entire state selection interface.

**Features:**
- Scroll-driven animations with GSAP ScrollTrigger
- Responsive grid layout (splits on large screens, stacks on mobile)
- Search integration with live filtering
- Status tracking and aria-live updates

**Usage:**
```tsx
import { StateExplorer } from './components/explorer'

function IndiaPage() {
  return <StateExplorer />
}
```

### StateBreadcrumb
Navigation breadcrumb showing current location with back button.

**Features:**
- Earth → India → State navigation trail
- Persistent back arrow (visible only at state level)
- Keyboard accessible links
- Focus states for accessibility

**Props:** None (uses router params and scene store)

**Example:**
```tsx
import { StateBreadcrumb } from './components/explorer'

<StateBreadcrumb />
```

### StateSearch
Search input with autosuggest functionality for finding states.

**Features:**
- Real-time filtering of suggestions
- Clear button for easy reset
- ARIA labels and autocomplete attributes
- Dropdown suggestions with keyboard navigation
- Focus management for accessibility

**State Management:**
- `searchQuery` - Current search text
- `isSearchFocused` - Input focus state
- Both managed by `useStateExplorerStore`

**Example:**
```tsx
import { StateSearch } from './components/explorer'

<StateSearch />
```

### StateLegend
Expandable legend showing region color codes.

**Features:**
- Collapsible UI for space efficiency
- Color-coded regions (Northern, Southern, Eastern, Western, Central)
- Smooth expand/collapse animations
- ARIA expanded attribute

**Example:**
```tsx
import { StateLegend } from './components/explorer'

<StateLegend />
```

### StateMap
Interactive map displaying state pins on India's geographic outline.

**Features:**
- SVG India outline with subtle styling
- Positioned pins based on coordinates
- Hover/focus feedback
- Aria region for screen readers

**Dependencies:**
- Travel dataset coordinates
- GSAP for pin animations

**Example:**
```tsx
import { StateMap } from './components/explorer'

<StateMap />
```

### StatePin
Individual interactive pin for a state with animations.

**Props:**
```tsx
interface StatePinProps {
  state: TravelState
  isHovered: boolean
  isSelected: boolean
  onHover: (hovered: boolean) => void
  onClick: () => void
}
```

**Features:**
- Bobbing animation on hover/select (GSAP)
- Glow effect on interaction
- Color-coded by region
- Keyboard accessible (Enter/Space to select)
- Pulse animation ring on hover
- Responsive label display

**Color Mapping:**
- Rajasthan: #FF6B6B
- Kerala: #4ECDC4
- Uttarakhand: #FFE66D
- Maharashtra: #95E1D3
- Assam: #FFB6D9
- Goa: #A8D8EA
- Tamil Nadu: #AA96DA
- West Bengal: #FCBAD3

**Example:**
```tsx
<StatePin
  state={rajasthanState}
  isHovered={hoveredId === 'rajasthan'}
  isSelected={selectedId === 'rajasthan'}
  onHover={(hovered) => setHovered(hovered ? 'rajasthan' : null)}
  onClick={() => navigate('/india/rajasthan')}
/>
```

### StateCard
Card component displaying state details on hover.

**Props:**
```tsx
interface StateCardProps {
  state: TravelState
  isHovered: boolean
  onHoverChange: (hovered: boolean) => void
}
```

**Features:**
- Displays state name, capital, district count
- Shows full description
- Lift-on-hover animation
- Keyboard accessible
- Arrow icon animation on hover

**Information Displayed:**
- State name (title)
- Number of districts
- Capital city
- Full state description
- Clickable action area

**Example:**
```tsx
<StateCard
  state={maharashtraState}
  isHovered={hoveredId === 'maharashtra'}
  onHoverChange={(hovered) => setHovered(hovered ? 'maharashtra' : null)}
/>
```

### ScrollSequence
GSAP ScrollTrigger integration component for scroll-driven animations.

**Features:**
- Scrub-enabled timeline (smooth scroll-linked animation)
- Fade-in and scale effects
- Respects reduced motion preferences
- Automatic cleanup on unmount

**Props:**
```tsx
interface ScrollSequenceProps {
  children: React.ReactNode
}
```

**Example:**
```tsx
<ScrollSequence>
  <YourContent />
</ScrollSequence>
```

## State Management

### useStateExplorerStore (Zustand)
Centralized state for the explorer:

```tsx
interface StateExplorerState {
  selectedStateId: string | null        // Currently selected state
  hoveredStateId: string | null         // Currently hovered state
  searchQuery: string                   // Search input text
  isSearchFocused: boolean              // Search input focus state
  setSelectedState: (id: string | null) => void
  setHoveredState: (id: string | null) => void
  setSearchQuery: (query: string) => void
  setSearchFocused: (focused: boolean) => void
}
```

**Usage:**
```tsx
import { useStateExplorerStore } from './stores/stateExplorerStore'

function MyComponent() {
  const selectedStateId = useStateExplorerStore((state) => state.selectedStateId)
  const setSelectedState = useStateExplorerStore((state) => state.setSelectedState)
  
  return (
    <button onClick={() => setSelectedState('rajasthan')}>
      Select Rajasthan
    </button>
  )
}
```

## Hooks

### useScrollTrigger
Custom hook for GSAP ScrollTrigger integration.

**Config:**
```tsx
interface ScrollTriggerConfig {
  trigger?: string | HTMLElement
  start?: string              // "top center" default
  end?: string                // "bottom center" default
  scrub?: boolean | number    // 0.5 default
  markers?: boolean           // false default
  onEnter?: () => void
  onLeave?: () => void
  onEnterBack?: () => void
  onLeaveBack?: () => void
}
```

**Example:**
```tsx
const ref = useScrollTrigger({
  trigger: containerRef,
  start: 'top center',
  end: 'bottom center',
  scrub: 1,
  onEnter: () => console.log('Entered'),
})
```

## Styling

All components use CSS modules located in `/src/styles/global.scss`.

### CSS Classes
- `.state-explorer` - Main container
- `.state-breadcrumb` - Breadcrumb component
- `.state-legend` - Legend component
- `.state-search` - Search component
- `.state-map` - Map component
- `.state-pin` - Pin component
- `.state-card` - Card component

### Design System
- Uses CSS variables from theme (colors, spacing, typography)
- Supports light/dark themes
- Respects reduced-motion preferences
- Responsive breakpoints: 1024px, 640px

### Animations
- GSAP-powered pin bobbing (ease: power2.out)
- CSS transitions for UI feedback
- Scroll-linked animations with ScrollTrigger
- Ping effect for hover state

## Accessibility Features

### Keyboard Navigation
- Tab navigation through all interactive elements
- Enter/Space to select states
- Focus visible indicators (2px outline)
- Breadcrumb links fully keyboard accessible

### ARIA Attributes
- Role="region" on map container
- Role="status" on status updates
- Role="list" on suggestion lists
- Aria-label on all buttons
- Aria-current="page" on active breadcrumb
- Aria-expanded on expandable legend
- Aria-live="polite" on dynamic content

### Screen Reader Support
- Status messages announced automatically
- Suggestions read as list options
- Proper heading hierarchy
- Alternative text for all icons
- Semantic HTML structure

### Reduced Motion
- Respects prefers-reduced-motion
- Disables GSAP animations when enabled
- Instant transitions instead of animated
- Via ThemeProvider's isMotionReduced flag

## Testing

Tests are located in `StateExplorer.test.tsx`.

**Test Coverage:**
- Renders all subcomponents
- Search functionality
- Breadcrumb navigation
- Legend display
- State cards visibility
- Status information

**Run Tests:**
```bash
npm test
```

**Key Testing Notes:**
- Tests require ThemeProvider and BrowserRouter wrappers
- Zustand stores must be reset in beforeEach
- Use userEvent for realistic user interactions
- Screen reader assertions verify a11y

## Responsive Design

### Desktop (1024px+)
- Two-column layout: Map left, cards right
- Search and legend flex horizontally
- Full state information visible

### Tablet (768px - 1023px)
- One-column layout
- Search and legend stack vertically
- Optimal touch targets

### Mobile (< 640px)
- Single column layout
- Breadcrumb items stack
- Map becomes square (1:1 aspect)
- Touch-friendly spacing

## Performance Considerations

1. **Code Splitting:** StateExplorer is lazy-loaded via IndiaScene route
2. **GSAP Optimization:**
   - ScrollTrigger instances killed on unmount
   - useFrame animations respect isMotionReduced
   - Minimal DOM queries
3. **Search:** Memoized filtering to prevent unnecessary re-renders
4. **Store:** Zustand provides fine-grained reactivity

## Integration with Routes

### IndiaScene (/india)
- Renders StateExplorer
- Sets scene level to 'india'
- No parameters in URL

### StateScene (/india/:stateId)
- Shows StateBreadcrumb
- Integrates with travel dataset
- Displays state-specific information

## Data Source

All state and district data comes from `/src/data/travel-loader.ts`:

```tsx
getAllStates()              // Returns TravelState[]
getStateById(stateId)       // Returns specific state
searchAttractions(query)    // Search-driven data
```

Each state includes:
- Name and description
- Coordinates (lat, lon)
- District list
- Attractions with full metadata

## Browser Support

- Modern browsers with WebGL support
- Graceful degradation for non-WebGL
- CSS Grid and Flexbox support required
- CSS custom properties (variables)

## Future Enhancements

- [ ] Map touch interactions (pinch zoom)
- [ ] Animated state boundaries
- [ ] Custom map layers
- [ ] Filtering by attraction type
- [ ] Bookmark/favorite states
- [ ] Local storage for preferences
- [ ] Voice-guided navigation
