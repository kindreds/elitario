import '@fontsource/titillium-web'
import '@fontsource/playfair-display'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

// Component
import Preloader from '@/components/Preloader'

import theme from '../theme'

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Preloader />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
