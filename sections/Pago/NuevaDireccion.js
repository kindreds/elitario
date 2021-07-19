import React from 'react'

import { Icon } from '@chakra-ui/icon'
import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import { Textarea } from '@chakra-ui/textarea'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Box, Text, Stack, SimpleGrid, AspectRatio } from '@chakra-ui/layout'

import { Button } from '@/components/Button'
import { LocationIcon } from '@/assets/icons'

const NuevaDireccion = (props) => {
  return (
    <Stack mb={10}>
      <SimpleGrid
        gap={2}
        templateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }}
      >
        <FormControl id="depar" isRequired>
          <FormLabel color="white">Departamento</FormLabel>
          <Select
            size="lg"
            rounded="sm"
            bg="#1C1C1C"
            color="white"
            borderWidth={2}
            placeholder="Seleccione"
            borderColor="surfaceCards.700"
            sx={{ '& option': { bgColor: '#1C1C1C' } }}
          >
            <option value="1">DNI</option>
            <option value="2">Pasaporte</option>
            <option value="3">Carné de extranjeria</option>
          </Select>
        </FormControl>
        <FormControl id="prov" isRequired>
          <FormLabel color="white">Provincia</FormLabel>
          <Select
            size="lg"
            rounded="sm"
            bg="#1C1C1C"
            color="white"
            borderWidth={2}
            placeholder="Seleccione"
            borderColor="surfaceCards.700"
            sx={{ '& option': { bgColor: '#1C1C1C' } }}
          >
            <option value="1">DNI</option>
            <option value="2">Pasaporte</option>
            <option value="3">Carné de extranjeria</option>
          </Select>
        </FormControl>
      </SimpleGrid>
      <SimpleGrid
        gap={2}
        templateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }}
      >
        <FormControl id="dist" isRequired>
          <FormLabel color="white">Distrito</FormLabel>
          <Select
            size="lg"
            rounded="sm"
            bg="#1C1C1C"
            color="white"
            borderWidth={2}
            placeholder="Seleccione"
            borderColor="surfaceCards.700"
            sx={{ '& option': { bgColor: '#1C1C1C' } }}
          >
            <option value="1">DNI</option>
            <option value="2">Pasaporte</option>
            <option value="3">Carné de extranjeria</option>
          </Select>
        </FormControl>
        <FormControl id="agencia" isRequired>
          <FormLabel color="white">Nombre de la agencia a enviar</FormLabel>
          <Input
            size="lg"
            rounded="sm"
            bg="#1C1C1C"
            color="white"
            borderWidth={2}
            placeholder="Ingrese el nombre de la agencia"
            borderColor="surfaceCards.700"
          />
        </FormControl>
      </SimpleGrid>

      <FormControl id="dirAgencia" isRequired>
        <FormLabel color="white">Dirección de la agencia a enviar</FormLabel>
        <Textarea
          size="lg"
          rounded="sm"
          bg="#1C1C1C"
          color="white"
          borderWidth={2}
          placeholder="Ingrese la dirección de la agencia"
          borderColor="surfaceCards.700"
        />
      </FormControl>

      <Box>
        <Text mb={3} color="white">
          <span>
            <Icon
              mr={3}
              as={LocationIcon}
              fill="primary.500"
              transform="translateY(-1px)"
            />
          </span>
          Marcar ubicación en el mapa
        </Text>
        <AspectRatio ratio={16 / 9}>
          <iframe
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5518.633976170146!2d-76.92271838009817!3d-12.02537136776892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5ca386a6bb5%3A0xdbc2ccbfbdf87b09!2sPlaza%20Vitarte%20Ate!5e0!3m2!1ses-419!2spe!4v1626713430314!5m2!1ses-419!2spe"
          />
        </AspectRatio>
      </Box>
      <div>
        <Button w={{ base: 'full', sm: 'fit-content' }} size="lg">
          Guardar dirección
        </Button>
      </div>
    </Stack>
  )
}

export default NuevaDireccion
