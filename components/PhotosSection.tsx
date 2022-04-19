import produce, { castDraft } from 'immer'
import dynamic from 'next/dynamic'
import React from 'react'
import { Photo } from 'types/photo'
import { styled } from '../stitches.config'
import { Box, NextImage } from './common'
import { Section } from './Section'
import { SectionTitle } from './SectionTitle'
import useMediaQuery from './useMediaQuery'

const HStack = styled('div', {
  marginX: 'auto',
  display: 'flex',
  flexDirection: 'row',
})

const VStack = styled('div', {})

export const PhotosSummarySection = ({ photos }: { photos: Photo[] }) => {
  return (
    <Section id="photos">
      <SectionTitle>PHOTOS</SectionTitle>
      <PhotoGalleryNoSSR photos={photos} />
    </Section>
  )
}

const PhotoGalleryNoSSR = dynamic(() => Promise.resolve(PhotoGallery), {
  ssr: false,
})

const PhotoGallery = ({ photos }: { photos: Photo[] }) => {
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
        <VStack
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
              <NextImage
                src={p.thumbUrl}
                layout="responsive"
                sizes={`${columnWidth}px`}
                width={columnWidth}
                height={Math.round(
                  (p.ratioHeight * columnWidth) / p.ratioWidth
                )}
                alt={p.character}
              />
            </Box>
          ))}
        </VStack>
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
          draft[colIndex][0].push(castDraft(cur))
          draft[colIndex][1] += cur.ratioHeight / cur.ratioWidth
        })
      },
      [...Array(columns)].map(() => [[], 0])
    )
    .map((arr) => arr[0])
}
