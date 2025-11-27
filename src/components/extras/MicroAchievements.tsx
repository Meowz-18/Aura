import type { Achievement } from '../../data/travel-types'
import { useAchievementStore } from '../../stores/achievementStore'
import '../../styles/micro-achievements.scss'

interface MicroAchievementsProps {
  achievements: Achievement[]
  attractionId: string
}

export const MicroAchievements = ({ achievements, attractionId }: MicroAchievementsProps) => {
  const { unlockAchievement, hasUnlocked } = useAchievementStore()

  return (
    <div className="micro-achievements" role="region" aria-label="Achievements">
      <h4 className="micro-achievements__title">Achievements</h4>
      <div className="micro-achievements__list">
        {achievements.map((achievement) => {
          const isUnlocked = hasUnlocked(achievement.title)
          return (
            <button
              key={achievement.title}
              className={`achievement-badge ${isUnlocked ? 'achievement-badge--unlocked' : ''}`}
              onClick={() => unlockAchievement(achievement, attractionId)}
              aria-label={`${achievement.title}: ${achievement.description}`}
            >
              <span className="achievement-badge__icon" aria-hidden="true">
                {achievement.icon}
              </span>
              <div className="achievement-badge__content">
                <div className="achievement-badge__title">{achievement.title}</div>
                <div className="achievement-badge__description">{achievement.description}</div>
              </div>
              {isUnlocked && (
                <span className="achievement-badge__check" aria-label="Unlocked">
                  ✓
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
