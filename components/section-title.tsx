import { styled } from 'stitches.config'

export const SectionTitle = styled('h2', {
  textTransform: 'uppercase',
  textAlign: 'center',
  paddingY: '$3',
  marginY: '$3',
  fontSize: '$9',
  fontWeight: '$bold',
  letterSpacing: '0.4em',
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
  variants: {
    visuallyHidden: {
      true: {
        height: '0',
        visibility: 'hidden',
        paddingTop: '0',
        paddingBottom: '0',
      },
    },
  },
})
