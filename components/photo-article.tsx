import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { DEFAULT_LOCALE, useLocale } from 'locales'
import { styled } from 'stitches.config'
import type { Photo } from 'types'
import { Box, NextImage, StyledBox, Text, Wbr } from './common'
import { ShareList } from './sns'

const Article = styled(StyledBox('article'), {})

const ContentBox = styled('div', {
  paddingTop: '$8',
  px: '$4',
  mx: 'auto',
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
  const { t, locale } = useLocale()

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
            priority
          />
        </Box>
        <VisuallyHidden>
          <Text as="h3">{t['SHARE']}</Text>
        </VisuallyHidden>
        <ShareList
          title={`${photo.title} ${photo.characterName} - ${t['OGP_USERNAME']} - ${t['COSPLAYER']}`}
          css={{
            py: '$2',
            maxWidth: '100px',
          }}
        />
        <Text css={{ fontSize: '$6' }} fontLocale="ja">
          <Wbr>{photo.title}</Wbr>
          &nbsp;
          <Wbr>{photo.characterName}</Wbr>
        </Text>
        <Text
          fontLocale={locale ?? DEFAULT_LOCALE}
          css={{
            paddingBottom: '$4',
            fontSize: '$2',
          }}
        >
          {`${photo.shootingYear}${t['UNIT_YEAR']}`}
        </Text>
      </ContentBox>
    </Article>
  )
}
