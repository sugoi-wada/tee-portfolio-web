import { MotionBox, StyledBox } from 'components/common'
import { useUrl } from 'components/use-url'
import { FacebookIcon, TwitterIcon } from 'lib/icons'
import type { ComponentPropsWithoutRef } from 'react'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import { styled } from 'stitches.config'
import type { ShareableSNSName } from './types'

const StyledShareList = styled(StyledBox('ul'), {
  display: 'flex',
  paddingLeft: '0',
  marginY: '0',
  justifyContent: 'space-around',
})

const StyledShareListItem = styled(StyledBox('li'), {
  listStyle: 'none',
})

export const ShareList = ({
  title,
  list = ['twitter', 'facebook'],
  ...props
}: ComponentPropsWithoutRef<typeof StyledShareList> & {
  title: string
  list?: ShareableSNSName[]
}) => {
  return (
    <StyledShareList {...props}>
      {list.map((item, i) => (
        <StyledShareListItem key={i}>
          <MotionBox whileHover={{ scale: 1.1 }}>
            <ShareIconButton title={title} type={item} />
          </MotionBox>
        </StyledShareListItem>
      ))}
    </StyledShareList>
  )
}

const ShareIconButton = ({
  title,
  type,
}: {
  title: string
  type: ShareableSNSName
}) => {
  const { canonical } = useUrl()

  switch (type) {
    case 'twitter':
      return (
        <TwitterShareButton
          title={`${title} @teeee_7777`}
          url={canonical}
          related={['teeee_7777']}
        >
          <TwitterIcon
            frame="hovered"
            color="original"
            height={36}
            width={36}
          />
        </TwitterShareButton>
      )
    case 'facebook':
      return (
        <FacebookShareButton quote={title} url={canonical}>
          <FacebookIcon
            frame="hovered"
            color="original"
            height={36}
            width={36}
          />
        </FacebookShareButton>
      )
  }
}
