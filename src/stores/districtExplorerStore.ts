import { create } from 'zustand'
import type { AttractionTag } from '../data/travel-types'

interface DistrictExplorerState {
  selectedDistrictIds: string[]
  hoveredDistrictId: string | null
  activeFilters: AttractionTag[]
  viewMode: 'grid' | 'list'
  isComparePanelOpen: boolean
  searchQuery: string
  
  setSelectedDistrictIds: (ids: string[]) => void
  toggleDistrictSelection: (id: string) => void
  setHoveredDistrictId: (id: string | null) => void
  toggleFilter: (filter: AttractionTag) => void
  clearFilters: () => void
  setViewMode: (mode: 'grid' | 'list') => void
  toggleComparePanel: () => void
  setSearchQuery: (query: string) => void
  reset: () => void
}

const initialState = {
  selectedDistrictIds: [],
  hoveredDistrictId: null,
  activeFilters: [],
  viewMode: 'grid' as const,
  isComparePanelOpen: false,
  searchQuery: '',
}

export const useDistrictExplorerStore = create<DistrictExplorerState>((set) => ({
  ...initialState,
  
  setSelectedDistrictIds: (ids) => set({ selectedDistrictIds: ids }),
  
  toggleDistrictSelection: (id) => set((state) => ({
    selectedDistrictIds: state.selectedDistrictIds.includes(id)
      ? state.selectedDistrictIds.filter(districtId => districtId !== id)
      : [...state.selectedDistrictIds, id]
  })),
  
  setHoveredDistrictId: (id) => set({ hoveredDistrictId: id }),
  
  toggleFilter: (filter) => set((state) => ({
    activeFilters: state.activeFilters.includes(filter)
      ? state.activeFilters.filter(f => f !== filter)
      : [...state.activeFilters, filter]
  })),
  
  clearFilters: () => set({ activeFilters: [] }),
  
  setViewMode: (mode) => set({ viewMode: mode }),
  
  toggleComparePanel: () => set((state) => ({ 
    isComparePanelOpen: !state.isComparePanelOpen 
  })),
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  reset: () => set(initialState),
}))
