import React from 'react'
import Image from 'next/image'

// Terceros
import { Box, Text, Heading as ChakraHeading } from '@chakra-ui/layout'

const BlogCard = (props) => (
  <Box {...props} maxW={{ base: '287px', xl: '380px' }}>
    <Image
      width={380}
      height={270}
      layout="intrinsic"
      src="/images/blog1.png"
    />
    <ChakraHeading mt={5} color="white" fontSize="lg" fontWeight="500">
      A Gin Cocktail for Every Occasion
    </ChakraHeading>
    <Text color="primary.600" my={2}>
      September 20, 2017
    </Text>
    <Text color="white">
      Few liquors have the versatility of gin. With a naturally bitter flavor
      thanks to the…
    </Text>
  </Box>
)

export default BlogCard
