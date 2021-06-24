import React from 'react'

// Terceros
import { Box, SimpleGrid } from '@chakra-ui/layout'

// Componentes
import Heading from '@/components/Heading'
import BlogCard from '@/components/BlogCard'

const Blog = () => {
  return (
    <Box py={{ base: 16 }} bgImage="url(/patterns/HeroPattern.svg)">
      <Heading>Tendencias en el blog</Heading>

      <SimpleGrid mt={16} gap={10} maxW={{ base: '80%' }} mx="auto">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </SimpleGrid>
    </Box>
  )
}

export default Blog
