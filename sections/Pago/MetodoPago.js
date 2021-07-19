import React from 'react'

import { Icon } from '@chakra-ui/icon'
import { Checkbox } from '@chakra-ui/checkbox'
import { Box, Text, Flex, Heading, SimpleGrid } from '@chakra-ui/layout'

import { Button } from '@/components/Button'

import { ChevronDownIcon } from '@/assets/icons'

const MetodoPago = ({ next, prev, disabled, i }) => {
  return (
    <Box mr={{ sm: 5 }}>
      <Heading
        mb={2}
        color="white"
        fontWeight="500"
        fontSize={{ base: 'xl', md: '2xl' }}
      >
        Hola Darrell Steward
      </Heading>
      <Text mb={10} color="white">
        Estas a unos pasos de terminar tu compra
      </Text>
      <Text as="h3" mb={4} fontSize={{ base: 'md', md: 'xl' }} color="white">
        Seleccione un método de envío
      </Text>
      <SimpleGrid
        mb={10}
        gap={2}
        autoRows="80px"
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }}
      >
        <Flex p={5} align="center" bg="surfaceCards.800">
          <Checkbox mr={5} />
          <Text color="white">BBVA</Text>
        </Flex>
        <Flex p={5} align="center" bg="surfaceCards.800">
          <Checkbox mr={5} />
          <Text color="white">INTERBANK</Text>
        </Flex>
        <Flex p={5} align="center" bg="surfaceCards.800">
          <Checkbox mr={5} />
          <Text color="white">BCP</Text>
        </Flex>
        <Flex p={5} align="center" bg="surfaceCards.800">
          <Checkbox mr={5} />
          <Text color="white">YAPE</Text>
        </Flex>
        <Flex p={5} align="center" bg="surfaceCards.800">
          <Checkbox mr={5} />
          <Text color="white">TARJETA DE CREDITO/DEBITO</Text>
        </Flex>
      </SimpleGrid>

      <Button
        mr={{ sm: 5 }}
        variant="outline"
        onClick={() => prev()}
        leftIcon={
          <Icon fill="white" as={ChevronDownIcon} transform="rotate(90deg)" />
        }
      >
        Regresar
      </Button>
    </Box>
  )
}

export default MetodoPago
