import { splitArray } from 'lib/utils'
import { default as NextImage } from 'next/image'
import React from 'react'
import { IgPhoto } from 'types'
import { styled } from '../stitches.config'
import { Box } from './common'
import { Section } from './layout'
import { SectionTitle } from './SectionTitle'
import useMediaQuery from './useMediaQuery'

const HStack = styled('div', {
  marginX: 'auto',
  display: 'flex',
  flexDirection: 'row',
})

const VStack = styled('div', {})

export const IgPhotosSummarySection = ({ photos }: { photos: IgPhoto[] }) => {
  return (
    <Section id="ig-photos">
      <SectionTitle>NEW PHOTOS</SectionTitle>
      <PhotoGallery photos={photos} />
    </Section>
  )
}

const PhotoGallery = ({ photos }: { photos: IgPhoto[] }) => {
  const isTablet = useMediaQuery('tablet')
  const { columns, width, mx } = isTablet
    ? { columns: 4, width: 1200, mx: 5 }
    : { columns: 2, width: 500, mx: 5 }

  const photoColumns = splitArray(photos, columns)

  const columnSize = width / columns - mx * 2

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
              key={`${p.id}${columnIdx}${i}`}
              css={{
                paddingLeft: '5px',
                paddingRight: '5px',
                paddingTop: '5px',
              }}
            >
              <Box as="a" href={p.url} target="_blank" rel="noopener">
                <NextImage
                  src={p.srcUrl}
                  width={columnSize}
                  height={columnSize}
                  objectFit="cover"
                  alt="Instagram の画像"
                />
              </Box>
            </Box>
          ))}
        </VStack>
      ))}
    </HStack>
  )
}
