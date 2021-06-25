import React from 'react'

// Terceros
import { Box, SimpleGrid } from '@chakra-ui/layout'

// Componentes
import Heading from '@/components/Heading'
import BlogCard from '@/components/BlogCard'

const PublicacionesRecientes = () => {
  return (
    <Box
      mt={-1}
      py={{ base: 16 }}
      bgSize="contain"
      bgPosition="center"
      bgImage="url(/images/heroPattern.webp)"
    >
      <Heading>Publicaciones Recientes</Heading>

      <SimpleGrid
        mt={16}
        gap={10}
        mx="auto"
        maxW={{ base: '80%' }}
        justifyContent={{ md: 'center' }}
        templateColumns={{
          base: 'minmax(0, 1fr)',
          sm: 'repeat(2, minmax(0, 1fr))',
          md: 'repeat(2, minmax(0, 380px))'
        }}
      >
        <BlogCard />
        <BlogCard />
      </SimpleGrid>
    </Box>
  )
}

export default PublicacionesRecientes
