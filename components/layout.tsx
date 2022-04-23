import { PropsWithChildren } from 'react'
import { Box } from './common'
import { Footer } from './footer'
import { Navigation } from './navigation'

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navigation />
      <Box as="main">{children}</Box>
      <Footer
        css={{
          marginTop: 'auto',
          paddingTop: '$6',
          paddingBottom: '$5',
          color: 'white',
          backgroundColor: '$black',
        }}
      />
    </Box>
  )
}
