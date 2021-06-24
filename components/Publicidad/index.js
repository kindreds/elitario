import React from 'react'
import Image from 'next/image'

// Terceros
import { Box } from '@chakra-ui/layout'

const Publicidad = () => {
  return (
    <Box bg="surfaceCards.800">
      <Image
        width={720}
        height={488}
        layout="intrinsic"
        src="/images/banner1.png"
      />
      <Image
        width={720}
        height={488}
        layout="intrinsic"
        src="/images/banner2.png"
      />
    </Box>
  )
}

export default Publicidad
