import '@fontsource/titillium-web'
import '@fontsource/playfair-display'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'

// Componentes
import Globals from '../styles'
import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'
import Preloader from '@/components/Preloader'

import theme from '../theme'

// Importaciones dinamicas
const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false })
const SearchModal = dynamic(() => import('@/components/SearchModal'), {
  ssr: false
})

const App = ({ Component, pageProps }) => {
  const modal = useDisclosure()
  const sidebar = useDisclosure()
  const [loadChunk, setLoadChunk] = useState(false)

  useEffect(() => {
    if (modal.isOpen || sidebar.isOpen) setLoadChunk(true)
  }, [modal.isOpen, sidebar.isOpen])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Preloader />
      <Globals />
      {/* FIRTS LOAD */}
      <Header />
      <MobileNav {...{ modal, sidebar }} />
      <Component {...pageProps} />
      {/* LOAD LATER */}
      {loadChunk ? <Sidebar {...sidebar} /> : null}
      {loadChunk ? <SearchModal {...modal} /> : null}
    </ChakraProvider>
  )
}

export default App
