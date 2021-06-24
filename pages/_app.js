import '@fontsource/titillium-web'
import '@fontsource/playfair-display'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import 'react-slidy/lib/styles.css'

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
