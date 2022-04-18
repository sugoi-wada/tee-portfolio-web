import { default as NextImage } from 'next/image'
import React from 'react'
import { IgPhoto } from 'types'
import { styled } from '../stitches.config'
import { Box } from './common'
import { Section } from './layout'
import { SectionTitle } from './SectionTitle'

export const IgPhotosSummarySection = ({ photos }: { photos: IgPhoto[] }) => {
  return (
    <Section id="ig-photos">
      <SectionTitle>INSTAGRAM PHOTOS</SectionTitle>
      <PhotoGallery photos={photos} />
    </Section>
  )
}

const Grid = styled('div', {
  maxWidth: '500px',
  display: 'grid',
  marginX: 'auto',
  paddingX: '$1',
  gap: '$2',
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@tablet': {
    maxWidth: '1200px',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
})

const PhotoGallery = ({ photos }: { photos: IgPhoto[] }) => {
  return (
    <Grid>
      {photos.map((p) => (
        <Box
          as="a"
          href={p.url}
          target="_blank"
          rel="noopener"
          key={p.id}
          css={{
            width: '100%',
            aspectRatio: 1,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '10px',
          }}
        >
          <NextImage
            src={p.srcUrl}
            layout="fill"
            objectFit="cover"
            alt="Instagram の画像"
          />
        </Box>
      ))}
    </Grid>
  )
}
