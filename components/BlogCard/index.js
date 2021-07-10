import React from 'react'
import Image from 'next/image'

// Terceros
import {
  Box,
  Text,
  Link,
  Flex,
  Heading as ChakraHeading
} from '@chakra-ui/layout'

const BlogCard = (props) => (
  <Box {...props} maxW={{ base: '287px', xl: '380px' }}>
    <Image
      width={380}
      height={270}
      layout="intrinsic"
      src="/images/blog1.png"
    />
    <Box p={4} mx={3} bg="surfaceCards.900" transform="translateY(-50px)">
      <ChakraHeading color="white" fontSize="lg" fontWeight="500">
        A Gin Cocktail for Every Occasion
      </ChakraHeading>
      <Text color="primary.600" my={2}>
        September 20, 2017
      </Text>
      <Text mb={3} color="white">
        Few liquors have the versatility of gin. With a naturally bitter flavor
        thanks to the…
      </Text>
      <Flex w="full" justify="flex-end">
        <Link color="primary.500" fontSize="lg">
          Leer más
        </Link>
      </Flex>
    </Box>
  </Box>
)

export default BlogCard
