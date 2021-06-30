import React from 'react'

// Terceros
import { Box, SimpleGrid } from '@chakra-ui/layout'

// Componentes
import Heading from '@/components/Heading'
import CardProduct from '@/components/CardProduct'

const ProductosDestacados = () => {
  return (
    <Box
      mt={-1}
      py={{ base: 16 }}
      bgSize="contain"
      bgRepeat="repeat"
      bgPosition="center"
      bgImage="url(/images/heroPattern.webp)"
    >
      <Heading>Productos Destacados</Heading>

      <SimpleGrid
        mt={10}
        mx="auto"
        maxW={{ base: '90%', xl: '1300px' }}
        gap={{ base: 10, sm: 8, md: 2, xl: 0 }}
        templateColumns={{
          base: 'minmax(0, 1fr)',
          sm: 'repeat(2, minmax(0, 1fr))',
          md: 'repeat(3, minmax(0, 1fr))',
          xl: 'repeat(4, minmax(0, 1fr))'
        }}
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
