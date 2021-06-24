import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// terceros
import { Box, SimpleGrid } from '@chakra-ui/layout'

const BrandItem = ({ src }) => (
  <Box pos="relative" w="full" h={{ base: 20 }}>
    <Image src={src} layout="fill" />
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
      <SimpleGrid
        spacing={10}
        w="70%"
        mx="auto"
        justify="center"
        templateColumns={{ base: 'repeat(2, minmax(0, 1fr))' }}
      >
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <BrandItem
              key={i}
              src={
                load
                  ? `/images/brand${i + 1}.png`
                  : 'https://via.placeholder.com/150'
              }
            />
          ))}
      </SimpleGrid>
    </Box>
  )
}

export default BrandStack
