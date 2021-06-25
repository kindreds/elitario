import React from 'react'
import Image from 'next/image'

// Terceros
import { Box } from '@chakra-ui/layout'

// Imagenes Estaticas
import banner1 from '@/public/images/banner1.png'
import banner2 from '@/public/images/banner2.png'

const Publicidad = () => {
  return (
    <Box display="flex" flexDirection={{ base: 'column', sm: 'row' }}>
      <Box pos="relative" w="full" h={{ base: 56, sm: 80, md: 400, lg: 500 }}>
        <Image layout="fill" src={banner1} placeholder="blur" />
      </Box>
      <Box pos="relative" w="full" h={{ base: 56, sm: 80, md: 400, lg: 500 }}>
        <Image layout="fill" src={banner2} placeholder="blur" />
      </Box>
    </Box>
  )
}

export default Publicidad
