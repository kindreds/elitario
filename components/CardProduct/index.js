import * as React from 'react'
import Image from 'next/image'

// Terceros
import { Icon } from '@chakra-ui/icon'
import { Box, Heading as ChakraHeading, Flex, HStack } from '@chakra-ui/layout'

// Componentes
import Button from '@/components/Button/Button'

// Iconos
import { StarIcon, ShoppingIcon, ZoomIcon } from '@/assets/icons'

const CardProduct = ({
  src = '/images/producto5.png',
  mx = { xl: '5' },
  ...props
}) => (
  <Box m={5} maxW="340px" mx={mx}>
    <Box bg="surfaceCards.800" pt={10} pb={4} px={5} mb={5} pos="relative">
      <Image src={src} layout="intrinsic" width={300} height={300} />
      <Box pos="absolute" top={2} left={2} bg="surfaceCards.700" py={1} px={2}>
        <ChakraHeading as="span" fontSize="md" color="white" fontWeight="500">
          SALE
        </ChakraHeading>
      </Box>
      <Icon
        h={5}
        w={5}
        top={3}
        right={3}
        as={ZoomIcon}
        pos="absolute"
        fill="primary.500"
      />
    </Box>
    <ChakraHeading
      color="white"
      fontSize="lg"
      fontWeight="500"
      mb={2}
      maxW="95%"
      isTruncated
    >
      Bruichladdich The Classic Laddie...
    </ChakraHeading>
    <Flex justify="space-between">
      <Box>
        <ChakraHeading
          mr={2}
          as="span"
          fontSize="lg"
          color="white"
          fontWeight="500"
          fontFamily="Titillium Web"
        >
          s/15.00
        </ChakraHeading>
        <ChakraHeading
          as="span"
          fontSize="lg"
          color="gray.400"
          fontWeight="500"
          fontFamily="Titillium Web"
          textDecoration="line-through"
        >
          s/20.00
        </ChakraHeading>
      </Box>

      <HStack spacing={1}>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <Icon
              key={i}
              as={StarIcon}
              fill="yellow.500"
              w={{ base: '5vw', ms: 3, lg: 5 }}
              h={{ base: '5vw', ms: 3, lg: 5 }}
            />
          ))}
      </HStack>
    </Flex>
    <Button
      mt={3}
      w="full"
      borderWidth={2}
      variant="outline"
      leftIcon={<Icon as={ShoppingIcon} fill="primary.500" />}
    >
      AGREGAR AL CARRITO
    </Button>
  </Box>
)

export default CardProduct
