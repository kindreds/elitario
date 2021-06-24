import React from 'react'

// Terceros
import { Box, SimpleGrid } from '@chakra-ui/layout'

// Componentes
import Heading from '@/components/Heading'
import CardProduct from '@/components/CardProduct'

const ProductosDestacados = () => {
  return (
    <Box py={{ base: 16 }} bgImage="url(/patterns/HeroPattern.svg)">
      <Heading>Productos Destacados</Heading>

      <SimpleGrid
        mt={10}
        gap={10}
        mx="auto"
        maxW={{ base: '90%' }}
        templateColumns={{ base: 'minmax(0, 1fr)' }}
      >
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <CardProduct key={i} src={`/images/producto${i + 1}.png`} />
          ))}
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <CardProduct key={i} src={`/images/producto${i + 1}.png`} />
          ))}
      </SimpleGrid>
    </Box>
  )
}

export default ProductosDestacados
