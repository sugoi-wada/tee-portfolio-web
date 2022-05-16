import { Layout } from 'components/layout'
import { deepmerge } from 'deepmerge-ts'
import { domAnimation, LazyMotion } from 'framer-motion'
import { AdobeFonts } from 'lib/fonts'
import { DefaultSeo } from 'next-seo'
import seo from 'next-seo.config.mjs'
import type { AppProps } from 'next/app'
import { normalize } from 'normalize-stitches/out/normalize'
import { globalCss } from 'stitches.config'

const globalStyles = globalCss(
  deepmerge(normalize, {
    body: { color: '$black', fontWeight: '$w700', fontFamily: '$system' },
    a: { color: '$black', textDecoration: 'none' },
  })
)

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <>
      <AdobeFonts />
      <LazyMotion features={domAnimation}>
        <Layout>
          <DefaultSeo {...seo} />
          <Component {...pageProps} />
        </Layout>
      </LazyMotion>
    </>
  )
}

export default MyApp
