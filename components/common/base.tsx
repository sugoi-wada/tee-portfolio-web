import { styled, theme } from 'stitches.config'

export function StyledBox<
  T extends
    | keyof JSX.IntrinsicElements
    | React.ComponentType<unknown>
    | ((...args: unknown[]) => unknown)
>(tag: T) {
  return styled(tag, {
    variants: {
      frame: {
        rounded: {
          overflow: 'hidden',
          borderRadius: '10px',
        },
        circle: {
          overflow: 'hidden',
          borderRadius: '9999px',
        },
      },

      card: {
        hovered: {
          boxShadow: '0px 0px 6px $card',
          transition: 'box-shadow .3s',
          '&:hover': {
            boxShadow: '0px 0px 16px $card',
          },
        },
      },

      uppercase: {
        true: {
          textTransform: 'uppercase',
        },
      },

      locale: {
        system: {
          fontFamily: theme.fonts.system,
        },
        en: {
          fontFamily: theme.fonts.en,
          fontWeight: theme.fontWeights.w400,
        },
        tw: {
          fontFamily: theme.fonts.twHant,
          fontWeight: theme.fontWeights.w500,
          letterSpacing: theme.letterSpacings[2],
        },
        ja: {
          fontFamily: theme.fonts.ja,
          fontWeight: theme.fontWeights.w500,
        },
      },
    },
  })
}

export const Box = styled(StyledBox('div'), {})

export const List = styled('ul', {})

export const ListItem = styled('li', {
  listStyle: 'none',
})
