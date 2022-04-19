import { Config } from 'types'
import { MainVisual } from './main-visual'
import { Navigation } from './navigation'

export const Header = ({ config }: { config: Config }) => (
  <>
    <Navigation />
    <MainVisual bgImages={config.bgImages} />
  </>
)
