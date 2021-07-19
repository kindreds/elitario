import React, { useState } from 'react'

import { Icon } from '@chakra-ui/icon'
import { Button as ButtonC } from '@chakra-ui/button'
import { Box, Text, Flex, Heading, SimpleGrid } from '@chakra-ui/layout'

import { Button } from '@/components/Button'
import NuevaDireccion from './NuevaDireccion'

import {
  BarsIcon,
  DeliveryIcon,
  ChevronDownIcon,
  PlusIcon
} from '@/assets/icons'
import DireccionesUsuario from './DireccionesUsuario'

const FormEnvio = ({ next, prev, disabled, i }) => {
  const [active, setActive] = useState(0)
  const [showAdress, setShowAdress] = useState(true)

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
        mb={3}
        gap={2}
        autoRows="120px"
        templateColumns={{ base: '1fr', sm: '45% 55%' }}
      >
        <ButtonC
          m={0}
          p={3}
          h="full"
          rounded="sm"
          display="flex"
          variant="unstyled"
          borderWidth="2px"
          justifyContent="flex-start"
          onClick={() => setActive(1)}
          bg={active === 1 ? 'primary.800' : 'surfaceCards.800'}
          borderColor={active === 1 ? 'primary.500' : 'transparent'}
          _focus={{
            bg: 'primary.800',
            borderWidth: '2px',
            borderColor: 'primary.500'
          }}
        >
          <Icon as={DeliveryIcon} mx={3} fill="primary.500" w="40px" h="40px" />
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ base: 'center', md: 'flex-start' }}
          >
            <Text mb={2} color="white" fontWeight="600">
              Envio Express
            </Text>
            <Text color="white" whiteSpace="normal" fontWeight="500">
              Solo válido para Lima Metropolitana
            </Text>
          </Box>
        </ButtonC>
        <ButtonC
          m={0}
          p={3}
          h="full"
          rounded="sm"
          display="flex"
          variant="unstyled"
          borderWidth="2px"
          justifyContent="flex-start"
          onClick={() => setActive(0)}
          bg={active === 0 ? 'primary.800' : 'surfaceCards.800'}
          borderColor={active === 0 ? 'primary.500' : 'transparent'}
          _focus={{
            bg: 'primary.800',
            borderWidth: '2px',
            borderColor: 'primary.500'
          }}
        >
          <Icon as={DeliveryIcon} mx={3} fill="primary.500" w="40px" h="40px" />
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ base: 'center', md: 'flex-start' }}
          >
            <Text mb={2} color="white" fontWeight="600">
              Encomienda (Provincias)
            </Text>
            <Text color="white" whiteSpace="normal" fontWeight="500">
              Usted elige la agencia en la que desea recibir el pedido
            </Text>
          </Box>
        </ButtonC>
      </SimpleGrid>
      <Flex
        mb={{ base: 4 }}
        justify="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Text
          mb={4}
          as="h3"
          color="white"
          textAlign={{ base: 'center' }}
          fontSize={{ base: 'md', md: 'xl' }}
        >
          Elige una dirección de entrega
        </Text>
        <ButtonC
          variant="link"
          fontWeight="500"
          color="primary.500"
          _focus={{ borderColor: 'transparent' }}
          onClick={() => setShowAdress(!showAdress)}
          leftIcon={
            <Icon as={showAdress ? PlusIcon : BarsIcon} fill="primary.500" />
          }
        >
          {showAdress ? 'Agregar nueva dirección' : 'Ver direcciones guardadas'}
        </ButtonC>
      </Flex>

      {showAdress ? <DireccionesUsuario /> : <NuevaDireccion />}

      <Flex w={{ base: 'full', sm: 'fit-content' }} justify="space-between">
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
        <Button
          disabled={disabled(i)}
          onClick={() => next()}
          rightIcon={
            <Icon
              as={ChevronDownIcon}
              fill="white"
              transform="rotate(-90deg)"
            />
          }
        >
          continuar
        </Button>
      </Flex>
    </Box>
  )
}

export default FormEnvio
