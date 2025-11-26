import { NavLink } from 'react-router-dom'
import clsx from 'classnames'
import { navigationLinks } from '../../data/geography'
import { useSceneStore } from '../../stores/sceneStore'
import { ThemeToggleGroup } from '../ui/ThemeToggleGroup'
import { Cluster, Stack } from './Primitives'

const levelLabels = {
  globe: 'Orbital overview',
  india: 'National focus',
  state: 'State traversal',
  district: 'District precision',
}

interface HeaderProps {
  breakpointLabel: string
}

export const Header = ({ breakpointLabel }: HeaderProps) => {
  const currentLevel = useSceneStore((state) => state.level)

  return (
    <header className="app-header surface-card" data-animate="fade">
      <Cluster className="header__meta" justify="between">
        <Stack gap="2xs">
          <small>Orbital Atlas</small>
          <h1>Immersive navigation</h1>
        </Stack>
        <Stack gap="2xs" className="header__status">
          <span className="badge">{breakpointLabel} viewport</span>
          <span className="badge badge--ghost">{levelLabels[currentLevel]}</span>
        </Stack>
      </Cluster>

      <nav className="app-nav" aria-label="Scene navigation">
        {navigationLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              clsx('nav-link', {
                'nav-link--active': isActive,
              })
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <ThemeToggleGroup />
    </header>
  )
}
