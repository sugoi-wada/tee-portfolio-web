import { violet } from '@radix-ui/colors'
import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    fontWeights: {
      regular: 400,
      w700: 700,
      w400: 400,
      w500: 500,
    },
    colors: {
      gray100: 'hsl(206,22%,99%)',
      gray200: 'hsl(206,12%,97%)',
      gray300: 'hsl(206,11%,92%)',
      gray400: 'hsl(206,10%,84%)',
      gray500: 'hsl(206,10%,76%)',
      gray600: 'hsl(206,10%,44%)',
      black: '#15191d',
      blackAlpha: 'rgba(0, 0, 0, 0.44)',
      whiteAlpha: 'rgba(255, 255, 255, 0.9)',
      pink: '#F7DAD9',
      brownLight: '#FFEFDD',
      dim: '$blackAlpha',
      dialog: '$whiteAlpha',
      separator: violet.violet6,
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '60px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      'pc-small': '1024px',
      tablet: '1024px',
      'sp-large': '640px',
      'sp-small': '320px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '21px',
      8: '24px',
      9: '34px',
      10: '48px',
      11: '59px',
      12: '95px',
      13: '144px',
    },
    fonts: {
      system: 'source-han-sans-cjk-ja, sans-serif',
      en: 'commuters-sans, $system',
      twHant: 'ar-udjingxiheib5, $system',
      ja: 'yu-gothic-pr6n, $system',
    },
    shadows: {
      gray: '$gray300',
      outline: violet.violet7,
      card: 'rgba(0, 0, 0, 0.25)',
    },
    zIndices: {
      nav: 10,
      dialog: 20,
    },
    letterSpacings: {
      1: '0.02em',
      2: '0.05em',
      3: '0.1em',
      4: '0.2em',
      5: '0.5em',
    },
  },
  utils: {
    marginX: (
      value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'marginLeft'>
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (
      value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'marginTop'>
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (
      value:
        | Stitches.ScaleValue<'space'>
        | Stitches.PropertyValue<'paddingLeft'>
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (
      value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'paddingTop'>
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    'pc-small': '(min-width: 1024px)',
    tablet: '(min-width: 768px)',
    'sp-large': '(min-width: 640px)',
    'sp-small': '(min-width: 320px)',
  },
})
