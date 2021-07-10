import '@fontsource/titillium-web'
import '@fontsource/playfair-display'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

// Componentes
import Globals from '../styles'
import Preloader from '@/components/Preloader'

import theme from '../theme'

import 'react-slidy/lib/styles.css'

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Globals />
      <Preloader />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
