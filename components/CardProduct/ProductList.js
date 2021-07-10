import React from 'react'
import Image from 'next/image'

// Librerias de Terceros
import { Icon } from '@chakra-ui/icon'
import { Box, Text, Flex } from '@chakra-ui/layout'

// Iconos
import { PlusIcon } from '@/assets/icons'

const ProductList = () => {
  return (
    <Flex h="70px">
      <Box
        pt={2}
        px={1}
        mr={2}
        w={16}
        h={16}
        rounded="sm"
        pos="relative"
        borderWidth={1}
        borderColor="surfaceCards.700"
      >
        <Image objectFit="contain" layout="fill" src="/images/producto5.png" />
      </Box>
      <Box>
        <Text fontSize="sm" color="white">
          (1) Whisky escocés Highland Park Dark Origins
        </Text>
        <Text fontSize="sm" color="primary.500">
          s/120.00
        </Text>
      </Box>
      <Icon
        w={3}
        h={3}
        ml={1}
        as={PlusIcon}
        cursor="pointer"
        fill="surfaceCards.500"
        _hover={{ fill: 'surfaceCards.600' }}
        sx={{ transform: 'rotate(45deg) translate(4px, 4px)' }}
      />
    </Flex>
  )
}

export default ProductList
