export interface Options {
  whitelistedPatterns: (string | RegExp)[]
  messages: {
    wrongFormat: string
    notWhitelisted: string
    imageFetchError: string
  }
  fallbackUrl: string
}
