import assert from 'assert'
import produce, { castDraft } from 'immer'
import { useLocale } from 'locales'
import dynamic from 'next/dynamic'
import { styled } from 'stitches.config'
import type { Photo } from 'types/photo'
import { Box, MotionBox, NextImage, NextLink } from './common'
import { Section } from './section'
import { SectionTitle } from './section-title'
import useMediaQuery from './use-media-query'

const HStack = styled('div', {
  mx: 'auto',
  display: 'flex',
  flexDirection: 'row',
})

export const PhotosSummarySection = ({ photos }: { photos: Photo[] }) => {
  return (
    <Section id="gallery">
      <SectionTitle>Gallery</SectionTitle>
      <PhotoGalleryNoSSR photos={photos} />
    </Section>
  )
}

const PhotoGalleryNoSSR = dynamic(() => Promise.resolve(PhotoGallery), {
  ssr: false,
})

const PhotoGallery = ({ photos }: { photos: Photo[] }) => {
  const { locale } = useLocale()
  const isTablet = useMediaQuery('tablet')
  const { columns, width, mx } = isTablet
    ? { columns: 4, width: 1200, mx: 5 }
    : { columns: 2, width: 500, mx: 5 }

  const photoColumns = splitArray(photos, columns)

  const columnWidth = width / columns - mx * 2

  return (
    <HStack
      css={{
        maxWidth: width,
      }}
    >
      {photoColumns.map((photoColumn, columnIdx) => (
        <Box
          key={columnIdx}
          css={{
            width: '100%',
          }}
        >
          {photoColumn.map((p, i) => (
            <Box
              key={`${p.slug}${columnIdx}${i}`}
              frame="rounded"
              css={{
                marginLeft: '$1',
                marginRight: '$1',
                marginTop: '$2',
              }}
            >
              <MotionBox whileHover="touchableImage">
                <NextLink href={`/photos/${p.id}`} locale={locale ?? false}>
                  <NextImage
                    src={p.thumbUrl}
                    layout="responsive"
                    sizes={`${columnWidth}px`}
                    width={columnWidth}
                    height={Math.round(
                      (p.ratioHeight * columnWidth) / p.ratioWidth
                    )}
                    alt={p.characterName}
                  />
                </NextLink>
              </MotionBox>
            </Box>
          ))}
        </Box>
      ))}
    </HStack>
  )
}

function splitArray<T extends { ratioWidth: number; ratioHeight: number }>(
  baseArray: T[],
  columns = 2
): T[][] {
  return baseArray
    .reduce<[T[], number][]>(
      (acc, cur) => {
        const minHeightRatio = Math.min(...acc.map((a) => a[1]))
        const colIndex = acc.findIndex((a) => a[1] === minHeightRatio)
        return produce(acc, (draft) => {
          const d = draft[colIndex]
          assert(d !== undefined)
          d[0].push(castDraft(cur))
          d[1] += cur.ratioHeight / cur.ratioWidth
        })
      },
      [...Array(columns)].map(() => [[], 0])
    )
    .map((arr) => arr[0])
}
