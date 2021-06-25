import React from 'react'

// Terceros
import { Box, Grid, GridItem } from '@chakra-ui/layout'

// Componentes
import Heading from '@/components/Heading'
import BlogCard from '@/components/BlogCard'

const Blog = () => {
  return (
    <Box
      mt={-1}
      py={{ base: 16 }}
      bgSize="contain"
      bgPosition="center"
      bgImage="url(/images/heroPattern.webp)"
    >
      <Heading>Tendencias en el blog</Heading>

      <Grid
        mt={16}
        gap={10}
        mx="auto"
        alignItems="center"
        maxW={{ base: '80%', md: '90%', xl: '1200px' }}
        templateColumns={{
          base: 'minmax(0, 1fr)',
          sm: 'repeat(2, minmax(0, 1fr))',
          md: 'repeat(3, minmax(0, 1fr))'
        }}
      >
        <GridItem>
          <BlogCard />
        </GridItem>
        <GridItem>
          <BlogCard />
        </GridItem>
        <GridItem colSpan={{ base: 1, sm: 2, md: 1 }}>
          <BlogCard mx={{ base: 0, sm: 'auto' }} />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Blog
