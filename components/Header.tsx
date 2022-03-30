import { Config } from 'types'
import { MainVisual } from './MainVisual'
import { Navigation } from './Navigation'

export const Header = ({ config }: { config: Config }) => (
  <>
    <Navigation />
    <MainVisual bgImages={config.bgImages} />
  </>
)
