import { withImageProxy } from 'lib/image-proxy'

export default withImageProxy({
  whitelistedPatterns: [/^https?:\/\/(.*).instagram.com/],
})
