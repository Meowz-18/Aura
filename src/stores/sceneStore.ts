import { create } from 'zustand'
import type { SceneLevel } from '../data/geography'

interface SceneState {
  level: SceneLevel
  stateId?: string
  districtId?: string
  setLevel: (level: SceneLevel, payload?: { stateId?: string; districtId?: string }) => void
}

export const useSceneStore = create<SceneState>((set) => ({
  level: 'globe',
  stateId: undefined,
  districtId: undefined,
  setLevel: (level, payload) =>
    set({
      level,
      stateId: payload?.stateId,
      districtId: payload?.districtId,
    }),
}))
