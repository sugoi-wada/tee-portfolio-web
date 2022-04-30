import { Layout } from 'components/layout'
import { deepmerge } from 'deepmerge-ts'
import type { AppProps } from 'next/app'
import { normalize } from 'normalize-stitches/out/normalize'
import { globalCss } from 'stitches.config'

const globalStyles = globalCss(
  deepmerge(normalize, {
    '*': { fontFamily: '$system' },
    body: { color: '$black', fontWeight: '$regular' },
  })
)

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
