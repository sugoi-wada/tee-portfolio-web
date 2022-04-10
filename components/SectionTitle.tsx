import { styled } from 'stitches.config'

export const SectionTitle = styled('h2', {
  textTransform: 'uppercase',
  textAlign: 'center',
  paddingY: '$3',
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
