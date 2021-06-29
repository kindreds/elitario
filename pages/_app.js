import '@fontsource/titillium-web'
import '@fontsource/playfair-display'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

// Component
import Globals from '../styles'
import Preloader from '@/components/Preloader'

import theme from '../theme'

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Preloader />
      <Globals />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
