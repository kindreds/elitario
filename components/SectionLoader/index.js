import React from 'react'

// terceros
import { Box, HStack } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'

const SectionLoader = () => {
  return (
    <>
      <Box bg="#111111" py={{ base: 16 }}>
        <Box maxW={{ base: '90%' }} mx="auto">
          <Skeleton h={{ base: '31px' }} />
          <HStack
            spacing={{ base: 2, sm: 4, xl: 10 }}
            mt={5}
            w="full"
            justify="center"
          >
            <Skeleton h={{ base: '32px' }} />
            <Skeleton h={{ base: '32px' }} />
            <Skeleton h={{ base: '32px' }} />
            <Skeleton h={{ base: '32px' }} />
          </HStack>
          <Skeleton mx="auto" w={{ base: '248px' }} h={{ base: '390px' }} />
        </Box>
      </Box>
    </>
  )
}

export default SectionLoader
