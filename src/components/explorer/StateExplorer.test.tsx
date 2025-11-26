import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { StateExplorer } from './StateExplorer'
import { useStateExplorerStore } from '../../stores/stateExplorerStore'
import { useSceneStore } from '../../stores/sceneStore'
import { ThemeProvider } from '../../theme/ThemeProvider'

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider>
        {component}
      </ThemeProvider>
    </BrowserRouter>
  )
}

describe('StateExplorer', () => {
  beforeEach(() => {
    useStateExplorerStore.setState({
      selectedStateId: null,
      hoveredStateId: null,
      searchQuery: '',
      isSearchFocused: false,
    })
    useSceneStore.setState({
      level: 'globe',
      stateId: undefined,
      districtId: undefined,
    })
  })

  it('renders the state explorer interface', () => {
    renderWithRouter(<StateExplorer />)
    
    expect(screen.getByText(/Explore India's States/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Search states/i)).toBeInTheDocument()
    expect(screen.getByText(/Legend/i)).toBeInTheDocument()
  })

  it('displays breadcrumb navigation', () => {
    renderWithRouter(<StateExplorer />)
    
    expect(screen.getByText('Earth')).toBeInTheDocument()
    expect(screen.getByText('India')).toBeInTheDocument()
  })

  it('displays legend with region colors', () => {
    renderWithRouter(<StateExplorer />)
    
    const legendButton = screen.getByRole('button', { name: /Toggle legend/i })
    expect(legendButton).toBeInTheDocument()
  })

  it('searches and filters states', async () => {
    const user = userEvent.setup()
    renderWithRouter(<StateExplorer />)
    
    const searchInput = screen.getByPlaceholderText(/Search states/i)
    expect(searchInput).toBeInTheDocument()

    await user.type(searchInput, 'rajasthan')
    expect((searchInput as HTMLInputElement).value).toBe('rajasthan')
  })

  it('displays state cards', () => {
    renderWithRouter(<StateExplorer />)
    
    const districtLabels = screen.getAllByText(/Districts:/i)
    expect(districtLabels.length).toBeGreaterThan(0)
  })

  it('provides status information', () => {
    renderWithRouter(<StateExplorer />)
    
    const statusElement = screen.getByRole('status')
    expect(statusElement).toHaveTextContent(/state/)
  })
})
