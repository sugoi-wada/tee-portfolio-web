import { Photo } from 'types/photo'
import { styled } from '../stitches.config'
import { Box } from './Box'
import { SectionTitle } from './SectionTitle'

const Section = styled('section', {
  paddingY: '$6',
})

export const PhotosSummarySection = ({ photos }: { photos: Photo[] }) => {
  return (
    <Section>
      <SectionTitle>PHOTOS</SectionTitle>
      {photos.map((p) => (
        <Box key={p.slug}>{p.srcUrl}</Box>
      ))}
    </Section>
  )
}
