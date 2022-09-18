import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import assert from 'assert'
import { Box, Text } from 'components/common'
import { ContactSection } from 'components/contact-section'
import { MainVisual } from 'components/main-visual'
import { PhotosSummarySection } from 'components/photos-section'
import { ProfileSection } from 'components/profile-section'
import { Seo } from 'components/seo'
import { GoogleAnalytics } from 'lib/ga'
import { fetchConfig, fetchPhotos } from 'lib/newt/newt-client'
import type { Character, Photographer } from 'lib/newt/types'
import { useLocale } from 'locales'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import type { Config, Photo } from 'types'

export default function Home({
  config,
  photos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useLocale()

  return (
    <>
      <Seo />
      <GoogleAnalytics />
      <Box>
        <Text
          as="h1"
          css={{
            my: '0px',
          }}
        >
          <VisuallyHidden>{t['OGP_SITE_NAME']}</VisuallyHidden>
        </Text>
        <MainVisual bgImages={config.bgImages} />
        <ProfileSection />
        <PhotosSummarySection photos={photos} />
        <ContactSection />
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const config = await fetchConfig()
  const newtPhotos = await fetchPhotos({ limit: 30, depth: 2 })

  return {
    props: {
      config: {
        bgImages: shuffleArray(config?.background ?? []).map((bg) => ({
          alt: bg.alt,
          srcUrl: bg.image.src,
        })),
      } as Config,
      photos: newtPhotos.map<Photo>((image) => {
        // fetch した時の depth: 2 なのでオブジェクトが入る
        const character = image.character as Character
        const photographer = image.photographer as Photographer | null
        const ratio = image.ratio.split(':')
        return {
          id: image._id,
          slug: image.slug,
          thumbUrl: image.thumbnail.src,
          srcUrl: image.image.src,
          title: character.title,
          characterName: character.name,
          photographerName: photographer?.name ?? '',
          shootingYear: image.shootingYear,
          ratioWidth: Number(ratio[0]),
          ratioHeight: Number(ratio[1]),
        }
      }),
    },
    revalidate: 60 * 60,
  }
}

function shuffleArray<T>(array: T[]) {
  const result = array.reduce(
    (arr: T[], cur: T, idx) => {
      const rand = Math.floor(Math.random() * (idx + 1))
      const randObj = arr[rand]
      assert(randObj)
      arr[idx] = randObj
      arr[rand] = cur
      return arr
    },
    [...array]
  )

  return result
}
