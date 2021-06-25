import '@fontsource/titillium-web'
import '@fontsource/playfair-display'
import React, { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import 'react-slidy/lib/styles.css'

const App = ({ Component, pageProps }) => {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    window.addEventListener('load', () => setLoad(false))

    return () => window.addEventListener('load', () => setLoad(false))
  }, [])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} {...{ load }} />
    </ChakraProvider>
  )
}

export default App
