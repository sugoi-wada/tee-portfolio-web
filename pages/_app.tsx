import { Layout } from 'components/layout'
import { deepmerge } from 'deepmerge-ts'
import { domAnimation, LazyMotion } from 'framer-motion'
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
    <LazyMotion features={domAnimation}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LazyMotion>
  )
}

export default MyApp
