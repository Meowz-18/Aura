import { create } from 'zustand'
import type { Achievement } from '../data/travel-types'

interface UnlockedAchievement {
  achievement: Achievement
  attractionId: string
  unlockedAt: number
}

interface AchievementState {
  unlockedAchievements: UnlockedAchievement[]
  
  unlockAchievement: (achievement: Achievement, attractionId: string) => void
  hasUnlocked: (achievementTitle: string) => boolean
  getUnlockedCount: () => number
  clearAchievements: () => void
}

export const useAchievementStore = create<AchievementState>((set, get) => ({
  unlockedAchievements: [],

  unlockAchievement: (achievement, attractionId) => set((state) => {
    const existing = state.unlockedAchievements.find(
      (ua) => ua.achievement.title === achievement.title && ua.attractionId === attractionId
    )

    if (existing) {
      return state
    }

    const unlocked: UnlockedAchievement = {
      achievement,
      attractionId,
      unlockedAt: Date.now(),
    }

    return {
      unlockedAchievements: [...state.unlockedAchievements, unlocked],
    }
  }),

  hasUnlocked: (achievementTitle) => {
    const { unlockedAchievements } = get()
    return unlockedAchievements.some((ua) => ua.achievement.title === achievementTitle)
  },

  getUnlockedCount: () => get().unlockedAchievements.length,

  clearAchievements: () => set({ unlockedAchievements: [] }),
}))
