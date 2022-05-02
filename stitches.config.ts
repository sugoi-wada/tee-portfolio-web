import { violet } from '@radix-ui/colors'
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
      thin: 100,
      regular: 400,
      bold: 700,
    },
    colors: {
      gray100: 'hsl(206,22%,99%)',
      gray200: 'hsl(206,12%,97%)',
      gray300: 'hsl(206,11%,92%)',
      gray400: 'hsl(206,10%,84%)',
      gray500: 'hsl(206,10%,76%)',
      gray600: 'hsl(206,10%,44%)',
      black: '#15191d',
      pink: '#F7DAD9',
      brownLight: '#FFEFDD',
      dim: 'rgba(0, 0, 0, 0.44)',
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
      system: '"Noto Sans JP", sans-serif',
    },
    shadows: {
      gray: '$gray300',
      outline: violet.violet7,
    },
  },
  utils: {
    marginX: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: string | number) => ({
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
