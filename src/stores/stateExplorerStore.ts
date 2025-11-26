import { create } from 'zustand'

interface StateExplorerState {
  selectedStateId: string | null
  hoveredStateId: string | null
  searchQuery: string
  isSearchFocused: boolean
  setSelectedState: (stateId: string | null) => void
  setHoveredState: (stateId: string | null) => void
  setSearchQuery: (query: string) => void
  setSearchFocused: (focused: boolean) => void
}

export const useStateExplorerStore = create<StateExplorerState>((set) => ({
  selectedStateId: null,
  hoveredStateId: null,
  searchQuery: '',
  isSearchFocused: false,
  setSelectedState: (stateId) => set({ selectedStateId: stateId }),
  setHoveredState: (stateId) => set({ hoveredStateId: stateId }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSearchFocused: (focused) => set({ isSearchFocused: focused }),
}))
