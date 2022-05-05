import { Box } from 'components/common'
import { ContactSection } from 'components/contact-section'
import { IgPhotosSummarySection } from 'components/ig-photos-section'
import { MainVisual } from 'components/main-visual'
import { PhotosSummarySection } from 'components/photos-section'
import { ProfileSection } from 'components/profile-section'
import { fetchIgMedia } from 'lib/instagram/instagram-client'
import { fetchConfig, fetchPhotos } from 'lib/newt/newt-client'
import { Photographer, PhotoGroup } from 'lib/newt/types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Config, IgPhoto, Photo } from 'types'

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
      <Box>
        <MainVisual bgImages={config.bgImages} />
        <IgPhotosSummarySection photos={igPhotos} />
        <ProfileSection />
        <PhotosSummarySection photos={photos} />
        <ContactSection />
      </Box>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const config = await fetchConfig()
  const newtPhotos = await fetchPhotos({ limit: 30, depth: 2 })
  const newMedia = await fetchIgMedia([
    'id',
    'media_product_type',
    'media_url',
    'media_type',
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
      photos: newtPhotos.map<Photo>((image) => {
        // fetch した時の depth: 2 なのでオブジェクトが入る
        const target = image.target as PhotoGroup
        const photographer = image.photographer as Photographer | null
        const ratio = image.ratio.split(':')
        return {
          slug: image.slug,
          thumbUrl: image.thumbnail.src,
          srcUrl: image.image.src,
          title: target.title,
          character: target.character,
          photographerName: photographer?.name ?? '',
          shootingYear: image.shootingYear,
          ratioWidth: Number(ratio[0]),
          ratioHeight: Number(ratio[1]),
        }
      }),
      igPhotos: newMedia.data
        .filter(
          (media) =>
            media.media_product_type === 'FEED' && media.media_type !== 'VIDEO'
        )
        .slice(0, 8)
        .map<IgPhoto>((media) => {
          return {
            srcUrl: media.media_url,
            // APIからサムネサイズの画像が来ないので、仕方なく公開されている画像をセット
            thumbUrl: `${media.permalink}media?size=m`,
            url: media.permalink,
            ...media,
          }
        }),
    },
    revalidate: 60 * 60,
  }
}
