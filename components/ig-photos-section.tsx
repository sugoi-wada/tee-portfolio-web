import React from 'react'
import { styled } from 'stitches.config'
import { IgPhoto } from 'types'
import {
  Box,
  ExternalLink,
  MotionBox,
  NextImage,
  tappableImageAnim,
} from './common'
import { Section } from './section'
import { SectionTitle } from './section-title'

export const IgPhotosSummarySection = ({ photos }: { photos: IgPhoto[] }) => {
  return (
    <Section id="instagram">
      <SectionTitle>INSTAGRAM</SectionTitle>
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
        <Box key={p.id} frame="rounded">
          <MotionBox {...tappableImageAnim}>
            <ExternalLink
              href={p.url}
              frame="rounded"
              css={{
                paddingX: '0',
                aspectRatio: 1,
                display: 'block',
                height: '100%',
                position: 'relative',
              }}
            >
              <NextImage
                src={`/api/imageProxy?imageUrl=${encodeURIComponent(
                  p.thumbUrl
                )}`}
                layout="responsive"
                width={1200 / 4}
                height={1200 / 4}
                objectFit="cover"
                objectPosition="top"
                alt="Instagram の画像"
                unoptimized
              />
            </ExternalLink>
          </MotionBox>
        </Box>
      ))}
    </Grid>
  )
}
