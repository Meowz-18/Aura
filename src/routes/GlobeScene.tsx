import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { SceneNarrative } from '../components/scene/SceneNarrative'
import { HeroViewport } from '../components/scene/HeroViewport'
import { HeroGlobe } from '../components/scene/HeroGlobe'
import { CosmicBackdrop } from '../components/scene/CosmicBackdrop'
import { OnboardingOverlay } from '../components/ui/OnboardingOverlay'
import { useSceneStore } from '../stores/sceneStore'
import { useTheme } from '../theme/ThemeProvider'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { useOnboarding } from '../hooks/useOnboarding'
import { useWebGLSupport } from '../hooks/useWebGLSupport'

const GlobeScene = () => {
  const setLevel = useSceneStore((state) => state.setLevel)
  const { isMotionReduced } = useTheme()
  const scrollProgress = useScrollProgress()
  const isWebGLSupported = useWebGLSupport()
  const { isDismissed, isHydrated, dismiss } = useOnboarding()
  const navigate = useNavigate()
  const [dismissedTooltips, setDismissedTooltips] = useState<Set<string>>(new Set())
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLevel('globe')
  }, [setLevel])

  const handleTooltipDismiss = (id: string) => {
    const newDismissed = new Set(dismissedTooltips)
    newDismissed.add(id)
    setDismissedTooltips(newDismissed)
  }

  const handleExplore = () => {
    dismiss()
    navigate('/india')
  }

  const isOnboardingVisible = !isDismissed && isHydrated

  return (
    <section ref={heroRef} className="hero-section">
      <HeroViewport isWebGLSupported={isWebGLSupported}>
        <CosmicBackdrop scrollProgress={scrollProgress} isMotionReduced={isMotionReduced} />
        <HeroGlobe scrollProgress={scrollProgress} isMotionReduced={isMotionReduced} />

        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, 10]} intensity={0.4} color="#64f2cb" />
      </HeroViewport>

      <div className="hero-content">
        <h1 className="hero-headline">Explore India, one district at a time.</h1>
        <button
          className="hero-cta"
          onClick={handleExplore}
          aria-label="Start exploring India's districts and attractions"
          title="Begin your journey through India"
        >
          Start Exploring
        </button>

        <div className="hero-progress-indicator" aria-hidden="true">
          <div
            className={`hero-progress-dot ${scrollProgress > 0.25 ? 'hero-progress-dot--active' : ''}`}
            role="status"
            aria-label={`Progress indicator, ${Math.round(scrollProgress * 100)}% complete`}
          />
          <div
            className={`hero-progress-dot ${scrollProgress > 0.5 ? 'hero-progress-dot--active' : ''}`}
          />
          <div
            className={`hero-progress-dot ${scrollProgress > 0.75 ? 'hero-progress-dot--active' : ''}`}
          />
        </div>
      </div>

      <OnboardingOverlay
        isVisible={isOnboardingVisible}
        scrollProgress={scrollProgress}
        onDismiss={dismiss}
        dismissedTooltips={dismissedTooltips}
        onTooltipDismiss={handleTooltipDismiss}
      />

      <SceneNarrative
        kicker="Hero Stage"
        title="Orbital Overview"
        description="The cosmic journey begins here. Scroll to explore or click to dive into India's diverse districts and attractions."
        bullets={[
          'Interactive 3D globe with responsive controls.',
          'Scroll-triggered animations and accessibility features.',
          'High contrast and reduced motion preferences persist across sessions.',
        ]}
      />
    </section>
  )
}

export default GlobeScene
