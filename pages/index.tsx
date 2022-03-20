import { PhotosSummarySection } from 'components/PhotosSection'
import { fetchPhotoGroups } from 'lib/newt/newt-client'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Photo } from 'types/photo'
import { Box } from '../components/Box'
import Header from '../components/Header'
import { styled } from '../stitches.config'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
})
const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$purple600',
})
const Main = styled('main', {})
const Container = styled('div', {
  marginX: 'auto',
  // paddingX: '$3',
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
  photos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(photos)
  return (
    <Box>
      <Head>
        <title>tee - Coser from Taiwan</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <PhotosSummarySection photos={photos} />
        </Main>
      </Container>
    </Box>
  )
}

export const getStaticProps = async () => {
  const newtPhotos = await fetchPhotoGroups({ limit: 10, depth: 2 })

  return {
    props: {
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
