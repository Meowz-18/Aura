import { create } from 'zustand'
import type { Attraction } from '../data/travel-types'

interface JournalEntry {
  id: string
  attraction: Attraction
  timestamp: number
}

interface JourneyJournalState {
  savedAttractions: JournalEntry[]
  itinerary: Attraction[]
  notes: Record<string, string>

  addAttraction: (attraction: Attraction) => void
  removeAttraction: (attractionId: string) => void
  saveNote: (attractionId: string, note: string) => void
  generateItinerary: () => void
  clearJournal: () => void
}

export const useJourneyJournalStore = create<JourneyJournalState>((set, get) => ({
  savedAttractions: [],
  itinerary: [],
  notes: {},

  addAttraction: (attraction) => set((state) => {
    const existing = state.savedAttractions.find((entry) => entry.attraction.id === attraction.id)
    if (existing) {
      return state
    }

    const entry: JournalEntry = {
      id: `${attraction.id}-${Date.now()}`,
      attraction,
      timestamp: Date.now(),
    }

    return {
      savedAttractions: [...state.savedAttractions, entry],
    }
  }),

  removeAttraction: (attractionId) => set((state) => ({
    savedAttractions: state.savedAttractions.filter((entry) => entry.attraction.id !== attractionId),
    itinerary: state.itinerary.filter((attraction) => attraction.id !== attractionId),
  })),

  saveNote: (attractionId, note) => set((state) => ({
    notes: {
      ...state.notes,
      [attractionId]: note,
    },
  })),

  generateItinerary: () => {
    const { savedAttractions } = get()
    const sorted = [...savedAttractions]
      .sort((a, b) => a.timestamp - b.timestamp)
      .map((entry) => entry.attraction)

    set({ itinerary: sorted })
  },

  clearJournal: () => set({
    savedAttractions: [],
    itinerary: [],
    notes: {},
  }),
}))
