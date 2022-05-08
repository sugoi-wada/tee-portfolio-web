import { Box } from 'components/common'
import { PhotoArticle } from 'components/photo-article'
import { GoogleAnalytics } from 'lib/ga'
import { fetchCurrentPhoto, fetchPhotos } from 'lib/newt/newt-client'
import type { Character, Photographer } from 'lib/newt/types'
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next'
import { NextSeo } from 'next-seo'
import type { Photo } from 'types'

export default function PhotoPage({
  photo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo
        title={`${photo.title} ${photo.characterName}`}
        openGraph={{
          url: `${process.env['NEXT_PUBLIC_SITE_URL']}/photos/${photo.id}`,
          type: 'article',
          article: {
            section: 'Cosplay',
          },
          images: [
            {
              url: photo.thumbUrl,
              width: photo.ratioWidth,
              height: photo.ratioHeight,
              alt: `${photo.title} ${photo.characterName}`,
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <GoogleAnalytics />
      <Box>
        <PhotoArticle photo={photo} />
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const newtPhotos = await fetchPhotos()
  const paths = newtPhotos.map((p) => `/photos/${p._id}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  { photo: Photo },
  { id: string }
> = async (context) => {
  const params = context.params
  if (!params) {
    throw new Error("photo id can't be undefined.")
  }
  const newtPhoto = await fetchCurrentPhoto({
    depth: 2,
    _id: params.id,
  })

  if (!newtPhoto) {
    return {
      notFound: true,
    }
  }

  // fetch した時の depth: 2 なのでオブジェクトが入る
  const character = newtPhoto.character as Character
  const photographer = newtPhoto.photographer as Photographer | null
  const ratio = newtPhoto.ratio.split(':')

  return {
    props: {
      photo: {
        id: newtPhoto._id,
        slug: newtPhoto.slug,
        thumbUrl: newtPhoto.thumbnail.src,
        srcUrl: newtPhoto.image.src,
        title: character.title,
        characterName: character.name,
        photographerName: photographer?.name ?? '',
        shootingYear: newtPhoto.shootingYear,
        ratioWidth: Number(ratio[0]),
        ratioHeight: Number(ratio[1]),
      },
    },
    revalidate: 60 * 60,
  }
}
