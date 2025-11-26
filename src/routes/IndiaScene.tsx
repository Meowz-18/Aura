import { useEffect } from 'react'
import { StateExplorer } from '../components/explorer'
import { useSceneStore } from '../stores/sceneStore'

const IndiaScene = () => {
  const setLevel = useSceneStore((state) => state.setLevel)

  useEffect(() => {
    setLevel('india')
  }, [setLevel])

  return <StateExplorer />
}

export default IndiaScene
