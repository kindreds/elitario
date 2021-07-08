import React, { useState } from 'react'

// Librerias de terceros
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalCloseButton
} from '@chakra-ui/modal'
import {
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack
} from '@chakra-ui/slider'
import { Button } from '@chakra-ui/button'
import { Heading, Wrap, Text, Flex } from '@chakra-ui/layout'

// data
import { categorias } from 'data/categorias'

// Componentes

const FiltroModal = ({ isOpen, onClose }) => {
  const [precio, setPrecio] = useState(30)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="90%" bg="negro.900">
        <ModalHeader>
          <Flex mt={8} justify="space-between">
            <Heading color="white" fontSize={{ base: '2xl' }} fontWeight="500">
              Filtrar por
            </Heading>
            <Button fontWeight="500" colorScheme="primary" variant="link">
              Limpiar filtros
            </Button>
          </Flex>
        </ModalHeader>
        <ModalCloseButton color="white" size="lg" />
        <ModalBody>
          <Heading
            mb={5}
            color="gray.400"
            fontWeight="500"
            fontSize={{ base: 'xl' }}
            fontFamily="Titillium Web"
          >
            Categorias
          </Heading>
          <Wrap justify="center">
            {categorias.map((item, i) => (
              <Button
                key={item + i}
                rounded="sm"
                fontWeight="500"
                variant="outline"
                minW={{ base: '83px' }}
                colorScheme="surfaceCards"
              >
                {item}
              </Button>
            ))}
          </Wrap>
          <Heading
            mt={5}
            mb={2}
            color="gray.400"
            fontWeight="500"
            fontSize={{ base: 'xl' }}
            fontFamily="Titillium Web"
          >
            Precio
          </Heading>
          <Slider
            value={precio}
            onChange={(e) => setPrecio(e)}
            defaultValue={30}
            colorScheme="primary"
            aria-label="slider-ex-2"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text color="gray.400">s/0.00 -- s/{precio}</Text>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="solid"
            fontWeight="500"
            onClick={onClose}
            colorScheme="primary"
          >
            Filtrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default FiltroModal
