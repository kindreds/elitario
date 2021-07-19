import React, { useState } from 'react'

import { Button } from '@chakra-ui/button'
import { SimpleGrid, Text, Box, Heading } from '@chakra-ui/layout'

const DireccionItem = ({ isActive, onClick }) => (
  <Button
    p={5}
    rounded="sm"
    display="flex"
    h="fit-content"
    borderWidth="2px"
    variant="unstyled"
    alignItems="flex-start"
    justifyContent="flex-start"
    onClick={onClick}
    bg={isActive ? 'primary.800' : 'surfaceCards.800'}
    borderColor={isActive ? 'primary.500' : 'transparent'}
    _focus={{
      bg: 'primary.800',
      borderWidth: '2px',
      borderColor: 'primary.500'
    }}
  >
    <Box w="full">
      <Heading textAlign="left" color="white" fontWeight="500" fontSize="3xl">
        Olva Courier
      </Heading>
      <Text textAlign="left" color="white" fontWeight="500">
        Agencia a enviar
      </Text>

      <Box my={5} as="hr" borderColor="surfaceCards.500" />

      <Text textAlign="left" color="white" fontWeight="500">
        CHIMBOTE - SANTA - ANCASH
      </Text>
      <Text textAlign="left" color="white" fontWeight="500">
        6391 Elgin St. Celina, Delaware 10299
      </Text>
    </Box>
  </Button>
)

const DireccionesUsuario = () => {
  const [active, setActive] = useState(0)

  return (
    <SimpleGrid
      mb={10}
      gap={5}
      templateColumns={{ base: '1fr', xl: 'repeat(2, 1fr)' }}
    >
      <DireccionItem isActive={active === 1} onClick={() => setActive(1)} />
      <DireccionItem isActive={active === 2} onClick={() => setActive(2)} />
    </SimpleGrid>
  )
}

export default DireccionesUsuario
