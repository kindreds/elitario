import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  ms: '34em',
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
})

const fonts = {
  heading: 'Playfair Display',
  body: 'Titillium Web'
}

const colors = {
  primary: {
    50: '#fbf4e2',
    100: '#e9ddc5',
    200: '#d9c6a4',
    300: '#c8af83',
    400: '#b89960',
    500: '#B59459',
    600: '#7b6336',
    700: '#594725',
    800: '#362a14',
    900: '#170d00'
  },
  danger: {
    50: '#ffe6e4',
    100: '#fdbdb7',
    200: '#f69189',
    300: '#f1675b',
    400: '#eb3c2d',
    500: '#d22414',
    600: '#a41a0e',
    700: '#761209',
    800: '#480803',
    900: '#1e0000'
  },
  info: {
    50: '#ddf9ff',
    100: '#b2e8fe',
    200: '#85d7fa',
    300: '#58c7f7',
    400: '#32b7f4',
    500: '#209eda',
    600: '#127baa',
    700: '#05587a',
    800: '#00354b',
    900: '#00131d'
  },
  success: {
    50: '#e2ffe9',
    100: '#b8f9c9',
    200: '#8cf3a7',
    300: '#5fee85',
    400: '#36e963',
    500: '#20d04a',
    600: '#16a239',
    700: '#0c7328',
    800: '#024516',
    900: '#001803'
  },
  warning: {
    50: '#fff4dc',
    100: '#ffe0af',
    200: '#fecb80',
    300: '#fdb74f',
    400: '#fca220',
    500: '#e38908',
    600: '#b06a02',
    700: '#7e4c00',
    800: '#4d2d00',
    900: '#1d0e00'
  },
  surfaceCards: {
    50: '#f8f0f4',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#282828',
    900: '#120b0d'
  }
}

const theme = extendTheme({ colors, fonts, breakpoints })

export default theme
