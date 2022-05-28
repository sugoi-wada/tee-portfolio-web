import {
  Box,
  Link,
  MotionBox,
  NextImage,
  tappableImageAnim,
} from 'components/common'
import { imageKitLoader } from 'lib/imagekit/loader'
import React from 'react'
import { styled } from 'stitches.config'
import type { IgPhoto } from 'types'
import { Section } from './section'
import { SectionTitle } from './section-title'

export const IgPhotosSummarySection = ({ photos }: { photos: IgPhoto[] }) => {
  return (
    <Section id="instagram">
      <SectionTitle>Instagram</SectionTitle>
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
            <Link
              href={p.url}
              frame="rounded"
              css={{
                paddingX: '0',
                aspectRatio: 1,
                display: 'block',
                height: '100%',
                position: 'relative',
              }}
              externalLink
            >
              <NextImage
                loader={imageKitLoader}
                src={p.thumbUrl}
                width={1200 / 4}
                height={1200 / 4}
                objectFit="cover"
                objectPosition="top"
                alt="Instagram"
              />
            </Link>
          </MotionBox>
        </Box>
      ))}
    </Grid>
  )
}
