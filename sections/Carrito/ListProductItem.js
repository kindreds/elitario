import React, { useState } from 'react'
import Image from 'next/image'

// Terceros
import { Box, Flex, Text, Stack, Heading, SimpleGrid } from '@chakra-ui/layout'
import { ButtonGroup, Button } from '@chakra-ui/button'

const ListProductItem = ({ price = 120 }) => {
  const [count, setCount] = useState(1)

  const plus = () => setCount((c) => c + 1)

  const minus = () => {
    if (count > 0) setCount((c) => c - 1)
  }

  return (
    <Box bg="surfaceCards.800" px={4} py={5} rounded="sm">
      <SimpleGrid
        templateColumns={{ base: 'minmax(0, 1fr)', sm: 'minmax(0, 150px) 1fr' }}
      >
        <Box
          mb={5}
          mx="auto"
          pos="relative"
          h={{ base: '56', sm: '150px' }}
          w={{ base: '60%', sm: '100%' }}
          maxW={{ base: '250px' }}
        >
          <Image src="/images/producto5.png" layout="fill" objectFit="cover" />
        </Box>
        <Flex flexDirection="column">
          <Stack mb={{ base: 2, sm: 4 }} spacing={{ base: 1, sm: 2 }} flex={1}>
            <Heading
              fontSize={{ base: 'lg', md: '2xl' }}
              fontWeight="500"
              color="white"
            >
              Whisky escocés Highland Park Dark Origins
            </Heading>
            <Text color="surfaceCards.200">Cantindad: {count}</Text>
            <Heading fontWeight="100" color="white" fontSize={{ base: 'lg' }}>
              s/ {price * count}.00
              <Text
                ml={5}
                as="span"
                color="surfaceCards.200"
                textDecoration="line-through"
              >
                s/ {price}.00
              </Text>
            </Heading>
          </Stack>
          <Flex justify="space-between">
            <ButtonGroup isAttached>
              <Button
                onClick={minus}
                disabled={count === 1}
                colorScheme="blackAlpha"
              >
                -
              </Button>
              <Button colorScheme="blackAlpha" fontWeight="500">
                {count}
              </Button>
              <Button onClick={plus} colorScheme="blackAlpha">
                +
              </Button>
            </ButtonGroup>

            <Button
              variant="link"
              fontWeight="500"
              color="primary.500"
              _focus={{ borderColor: 'transparent' }}
            >
              ELIMINAR
            </Button>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Box>
  )
}

export default ListProductItem
