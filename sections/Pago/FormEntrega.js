import React from 'react'

import { Icon } from '@chakra-ui/icon'
import { Select } from '@chakra-ui/select'
import { Box, Text, Stack, Heading } from '@chakra-ui/layout'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { NumberInput, NumberInputField } from '@chakra-ui/number-input'

import { Button } from '@/components/Button'
import { ChevronDownIcon } from '@/assets/icons'

const FormEntrega = ({ next }) => {
  return (
    <Box mr={{ sm: 5 }} maxW={{ base: '480px' }}>
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
      <Text as="h3" fontSize={{ base: 'md', md: 'xl' }} color="white">
        Datos de entrega
      </Text>
      <Stack mb={10}>
        <FormControl id="tipoDocumento" isRequired>
          <FormLabel color="white">Tipo de documento</FormLabel>
          <Select
            size="lg"
            rounded="sm"
            bg="#1C1C1C"
            color="white"
            borderWidth={2}
            placeholder="Tipo de documento"
            borderColor="surfaceCards.700"
            sx={{ '& option': { bgColor: '#1C1C1C' } }}
          >
            <option value="1">DNI</option>
            <option value="2">Pasaporte</option>
            <option value="3">Carné de extranjeria</option>
          </Select>
        </FormControl>
        <FormControl id="nroDocumento" isRequired>
          <FormLabel color="white">Número de documento</FormLabel>
          <NumberInput size="lg">
            <NumberInputField
              color="white"
              rounded="sm"
              bg="#1C1C1C"
              borderWidth={2}
              borderColor="surfaceCards.700"
              placeholder="Ingresar número de DNI"
            />
          </NumberInput>
        </FormControl>
        <FormControl id="contacto" isRequired>
          <FormLabel color="white">Número de contacto</FormLabel>
          <NumberInput size="lg">
            <NumberInputField
              color="white"
              rounded="sm"
              bg="#1C1C1C"
              borderWidth={2}
              borderColor="surfaceCards.700"
              placeholder="Ingresa tu número telefónico"
            />
          </NumberInput>
        </FormControl>
      </Stack>

      <Button
        size="lg"
        onClick={() => next()}
        rightIcon={
          <Icon as={ChevronDownIcon} fill="white" transform="rotate(-90deg)" />
        }
      >
        Siguiente
      </Button>
    </Box>
  )
}

export default FormEntrega
