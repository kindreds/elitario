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
  },
  negro: {
    900: '#111111'
  }
}

const theme = extendTheme({ colors, fonts, breakpoints })

export default theme
