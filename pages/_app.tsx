import { Layout } from 'components/layout'
import 'modern-css-reset/dist/reset.min.css'
import type { AppProps } from 'next/app'
import { globalCss } from 'stitches.config'

const globalStyles = globalCss({
  '*': { fontFamily: '$system' },
  body: { color: '$black', fontWeight: '$regular' },
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
