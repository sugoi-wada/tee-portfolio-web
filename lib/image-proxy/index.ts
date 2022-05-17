import type { NextApiRequest, NextApiResponse } from 'next'
import stream, { Stream } from 'stream'
import { isPresent } from 'ts-extras'
import type { PartialDeep } from 'type-fest'
import UserAgent from 'user-agents'
import type { Options } from './types'

/** https://github.com/Blazity/next-image-proxy */
export function withImageProxy(passedOptions?: PartialDeep<Options>) {
  const options: Options = {
    whitelistedPatterns:
      passedOptions?.whitelistedPatterns?.filter(isPresent) ?? [],
    fallbackUrl: passedOptions?.fallbackUrl ?? '',
    messages: {
      wrongFormat:
        passedOptions?.messages?.wrongFormat ??
        'Image url not provided or has wrong format',
      notWhitelisted:
        passedOptions?.messages?.notWhitelisted ??
        'Provided image url is not whitelisted',
      imageFetchError:
        passedOptions?.messages?.imageFetchError ?? "Couldn't fetch the image",
    },
  }

  return async function (req: NextApiRequest, res: NextApiResponse) {
    const imageUrl = req.query['imageUrl']

    if (!imageUrl || (imageUrl && Array.isArray(imageUrl))) {
      res.status(400).send({ message: options.messages.wrongFormat })
      return
    }

    const isAllowed = isUrlWhitelisted(imageUrl, options.whitelistedPatterns)

    if (!isAllowed) {
      res.status(422).send({ message: options.messages.notWhitelisted })
      return
    }

    const imageBlob = await fetchImageBlob(imageUrl)

    if (!imageBlob) {
      handleFallback(res, options)
      return
    }

    pipeImage(res, imageBlob, options)
  }
}

function pipeImage(
  res: NextApiResponse,
  imageBlob: ReadableStream<Uint8Array>,
  options: Options
) {
  const passThrough = new Stream.PassThrough()

  stream.pipeline(
    imageBlob as unknown as NodeJS.ReadableStream,
    passThrough,
    (err) => {
      if (err) {
        console.log(err)
        handleFallback(res, options)
        return
      }
    }
  )
  res.setHeader(
    'Cache-Control',
    'public, max-age=3600, stale-while-revalidate=900'
  )
  passThrough.pipe(res)
}

function handleFallback(res: NextApiResponse, options: Options) {
  if (options.fallbackUrl.trim()) {
    res.redirect(options.fallbackUrl)
  } else {
    res.status(422).send({ message: options.messages.imageFetchError })
  }
}

async function fetchImageBlob(url: string) {
  return await fetch(url, {
    headers: { 'user-agent': new UserAgent().toString() },
  }).then((data) => data.body)
}

function isUrlWhitelisted(
  url: string,
  whitelistedPatterns: Options['whitelistedPatterns']
) {
  return whitelistedPatterns.some((singleHost) => {
    return url.match(singleHost)
  })
}
