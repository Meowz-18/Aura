import type { ReactNode } from 'react'
import { useRef } from 'react'
import { SkipLink } from './SkipLink'
import { Header } from './Header'
import { ProgressBar } from '../ui/ProgressBar'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { useViewportBreakpoints } from '../../hooks/useViewportBreakpoints'
import { useCinematicIntro } from '../../hooks/useCinematicIntro'
import { SceneHUD } from '../scene/SceneHUD'
import { JourneyJournal } from '../extras/JourneyJournal'

interface SceneLayoutProps {
  children: ReactNode
}

export const SceneLayout = ({ children }: SceneLayoutProps) => {
  const progress = useScrollProgress()
  const { label } = useViewportBreakpoints()
  const layoutRef = useRef<HTMLDivElement | null>(null)

  useCinematicIntro(layoutRef)

  return (
    <div className="app-shell" ref={layoutRef}>
      <SkipLink />
      <ProgressBar value={progress} />
      <Header breakpointLabel={label} />
      <SceneHUD />
      <JourneyJournal />
      <main id="main-content" className="scene-shell" tabIndex={-1}>
        {children}
      </main>
      <footer className="app-footer" data-animate="fade">
        <small>Performance ready · Code-splitting enabled · Scroll-triggered storytelling.</small>
      </footer>
    </div>
  )
}
