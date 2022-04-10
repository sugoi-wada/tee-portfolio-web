import { PhotosSummarySection } from 'components/PhotosSection'
import { ProfileSection } from 'components/ProfileSection'
import { fetchConfig, fetchPhotoGroups } from 'lib/newt/newt-client'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Config, Photo } from 'types'
import { Box } from '../components/common'
import { Header } from '../components/Header'
import { styled } from '../stitches.config'

const Main = styled('main', {})
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
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Box>
      <Head>
        <title>tee - Cosplayer from Taiwan</title>
      </Head>
      <Container>
        <Header config={config} />
        <Main>
          <ProfileSection />
          <PhotosSummarySection photos={photos} />
        </Main>
      </Container>
    </Box>
  )
}

export const getStaticProps = async () => {
  const config = await fetchConfig()
  const newtPhotos = await fetchPhotoGroups({ limit: 10, depth: 2 })

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
    },
  }
}
