import { styled } from 'stitches.config'
import { Photo } from 'types'
import { Box, NextImage, Text, Wbr } from './common'

const Article = styled('article', {})

const ContentBox = styled('div', {
  paddingTop: '$8',
  paddingX: '$4',
  marginX: 'auto',
  maxWidth: '100%',
  '@tablet': {
    maxWidth: '500px',
    paddingTop: '$9',
  },
  '@pc-small': {
    maxWidth: '800px',
    paddingTop: '$9',
  },
  '@pc-large': {
    maxWidth: '1000px',
    paddingTop: '$9',
  },
})

export const PhotoArticle = ({ photo }: { photo: Photo }) => {
  return (
    <Article>
      <ContentBox>
        <Box
          css={{
            width: '100%',
            aspectRatio: photo.ratioWidth / photo.ratioHeight,
            borderRadius: 10,
            boxShadow: '0px 0px 6px $card',
            overflow: 'hidden',
          }}
        >
          <NextImage
            layout="responsive"
            width={photo.ratioWidth}
            height={photo.ratioHeight}
            src={photo.srcUrl}
            alt={photo.characterName}
          />
        </Box>
        <Text as="h2">
          <Wbr>{photo.title}</Wbr>
          <Wbr>{photo.characterName}</Wbr>
        </Text>
        <Text
          css={{
            paddingBottom: '$4',
            fontSize: '$2',
          }}
        >
          {photo.shootingYear}年
        </Text>
      </ContentBox>
    </Article>
  )
}
