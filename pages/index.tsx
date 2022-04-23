import { Box } from 'components/common'
import { IgPhotosSummarySection } from 'components/ig-photos-section'
import { MainVisual } from 'components/main-visual'
import { PhotosSummarySection } from 'components/photos-section'
import { ProfileSection } from 'components/profile-section'
import { fetchIgMedia } from 'lib/instagram/instagram-client'
import { fetchConfig, fetchPhotoGroups } from 'lib/newt/newt-client'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { styled } from 'stitches.config'
import { Config, IgPhoto, Photo } from 'types'

const Container = styled('div', {
  marginX: 'auto',
  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
})
export default function Home({
  config,
  photos,
  igPhotos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(igPhotos)
  return (
    <Box>
      <Head>
        <title>tee - Cosplayer from Taiwan</title>
      </Head>
      <Container>
        <MainVisual bgImages={config.bgImages} />
        <IgPhotosSummarySection photos={igPhotos} />
        <ProfileSection />
        <PhotosSummarySection photos={photos} />
      </Container>
    </Box>
  )
}

export const getStaticProps = async () => {
  const config = await fetchConfig()
  const newtPhotos = await fetchPhotoGroups({ limit: 10, depth: 2 })
  const newMedia = await fetchIgMedia([
    'id',
    'media_product_type',
    'media_type',
    'media_url',
    'permalink',
    'thumbnail_url',
  ])

  return {
    props: {
      config: {
        bgImages: [
          config.bgImage01,
          config.bgImage02,
          config.bgImage03,
          config.bgImage04,
        ].map((img) => ({
          srcUrl: img.src,
        })),
      } as Config,
      photos: newtPhotos.flatMap<Photo>((photoGroup) =>
        photoGroup.images.map((image) => {
          const ratio = image.ratio.split(':')
          return {
            slug: image.slug,
            thumbUrl: image.thumbnail.src,
            srcUrl: image.image.src,
            character: photoGroup.character,
            photographerName: photoGroup.photographer?.name ?? '',
            shootingDate: photoGroup.shootingDate,
            ratioWidth: Number(ratio[0]),
            ratioHeight: Number(ratio[1]),
          }
        })
      ),
      igPhotos: newMedia.data
        .filter(
          (media) =>
            media.media_product_type === 'FEED' && media.media_type !== 'VIDEO'
        )
        .slice(0, 8)
        .map<IgPhoto>((media) => {
          return {
            srcUrl: media.media_url,
            url: media.permalink,
            ...media,
          }
        }),
    },
    revalidate: 60 * 60,
  }
}
