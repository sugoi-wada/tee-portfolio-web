import { styled } from 'stitches.config'
import { StyledBox } from './common'

export const SectionTitle = styled(StyledBox('h2'), {
  textAlign: 'center',
  paddingY: '$3',
  marginY: '$3',
  fontSize: '$9',
  defaultVariants: {
    fontLocale: 'en',
  },
  letterSpacing: '0.2em',
  lineHeight: '1.5em',
  position: 'relative',
  '&:after': {
    content: "''",
    position: 'absolute',
    width: '40px',
    bottom: '$2',
    left: 0,
    right: 0,
    borderBottom: '1px solid $black',
    marginX: 'auto',
  },
})
