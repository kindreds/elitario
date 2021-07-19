import React from 'react'

import { Button } from '@/components/Button'
import { Box, Heading, Text } from '@chakra-ui/layout'

const SolicitudLogin = ({ onOpen }) => {
  return (
    <Box mr={{ sm: 5 }}>
      <Heading
        mb={3}
        color="white"
        fontWeight="500"
        fontSize={{ base: 'xl', md: '3xl' }}
      >
        Bienvenido a ELITARIO.COM
      </Heading>
      <Text mb={3} color="surfaceCards.200" fontSize={{ base: 'sm', md: 'lg' }}>
        Para continuar con tu compra, ingresa tu e-mail o inicia sesión con
        Facebook.
      </Text>

      <Button onClick={onOpen} w={{ base: 'full', sm: 'fit-content' }}>
        INICIAR SESIÓN / CREAR NUEVA CUENTA
      </Button>
    </Box>
  )
}

export default SolicitudLogin
