import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// terceros
import { Box, SimpleGrid } from '@chakra-ui/layout'

// Imagenes
import brand1 from '@/public/images/brand1.png'
import brand2 from '@/public/images/brand2.png'
import brand3 from '@/public/images/brand3.png'
import brand4 from '@/public/images/brand4.png'
import brand5 from '@/public/images/brand5.png'
import brand6 from '@/public/images/brand6.png'

const brandsIMGs = [brand1, brand2, brand3, brand4, brand5, brand6]

const BrandItem = ({ src }) => (
  <Box pos="relative" w="full" h={{ base: 20 }}>
    <Image src={src} layout="fill" placeholder="blur" />
  </Box>
)

const BrandStack = () => {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoad(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Box
      py={16}
      bg="#000"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {load ? (
        <SimpleGrid
          w="70%"
          mx="auto"
          spacing={10}
          justify="center"
          templateColumns={{ base: 'repeat(2, minmax(0, 1fr))' }}
        >
          {brandsIMGs.map((img, i) => (
            <BrandItem key={i} src={img} />
          ))}
        </SimpleGrid>
      ) : null}
    </Box>
  )
}

export default BrandStack
