import dynamic from 'next/dynamic'
import { default as NextImage } from 'next/image'
import React from 'react'
import { Photo } from 'types/photo'
import { styled } from '../stitches.config'
import { Box } from './common'
import { SectionTitle } from './SectionTitle'
import useMediaQuery from './useMediaQuery'

const Section = styled('section', {
  paddingTop: '$6',
  paddingBottom: '$6',
  paddingX: '$1',
  fontSize: '$6',
  fontWeight: '$bold',
})

const HStack = styled('div', {
  marginX: 'auto',
  display: 'flex',
  flexDirection: 'row',
})

const VStack = styled('div', {})

export const PhotosSummarySection = ({ photos }: { photos: Photo[] }) => {
  return (
    <Section>
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

  const photoColumns = photos.reduce<Photo[][]>(
    (acc, cur, idx) => {
      const col = idx % columns
      acc[col].push(cur)
      return acc
    },
    [...Array(columns)].map(() => [])
  )

  const columnWidth = width / columns - mx * 2

  return (
    <HStack
      css={{
        maxWidth: width,
      }}
    >
      {photoColumns.map((photoColumn, columnIdx) => (
        <VStack key={columnIdx}>
          {photoColumn.map((p, i) => (
            <Box
              key={`${p.slug}${columnIdx}${i}`}
              css={{
                paddingLeft: '5px',
                paddingRight: '5px',
                paddingTop: '5px',
              }}
            >
              <NextImage
                src={p.thumbUrl}
                width={columnWidth}
                height={Math.round(
                  (p.ratioHeight * columnWidth) / p.ratioWidth
                )}
                alt="画像"
              />
            </Box>
          ))}
        </VStack>
      ))}
    </HStack>
  )
}
