import React from 'react'

// Terceros
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalCloseButton
} from '@chakra-ui/modal'
import { Icon } from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Button as ButtonC } from '@chakra-ui/button'
import { FormControl } from '@chakra-ui/form-control'
import { VisuallyHidden } from '@chakra-ui/visually-hidden'
import { Text, SimpleGrid, Stack, Link } from '@chakra-ui/layout'

// Component
import { Button } from '@/components/Button'

// Icons
import { FacebookIcon, GoogleIcon } from '@/assets/icons'

const AuthModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        pt={10}
        bg="surfaceCards.800"
        maxW={{ base: '95%', sm: '440px' }}
      >
        <ModalHeader>
          <Image mx="auto" src="/logo/index.svg" alt="LOGO" />
        </ModalHeader>
        <ModalCloseButton color="white" size="lg" />
        <ModalBody>
          <Text mt={5} mb={3} color="white">
            Iniciar sesión con
          </Text>

          <SimpleGrid
            mb={3}
            gap={5}
            templateColumns="repeat(2, minmax(0, 1fr))"
          >
            <ButtonC
              size="lg"
              colorScheme="blackAlpha"
              color="surfaceCards.200"
              leftIcon={
                <Icon
                  mr={2}
                  fontSize={24}
                  as={FacebookIcon}
                  fill="facebook.500"
                />
              }
            >
              Facebook
            </ButtonC>
            <ButtonC
              size="lg"
              colorScheme="blackAlpha"
              color="surfaceCards.200"
              leftIcon={<Icon as={GoogleIcon} fontSize={24} mr={2} />}
            >
              Google
            </ButtonC>
          </SimpleGrid>

          <Text mb={3} color="white">
            o utiliza tu correo
          </Text>

          <Stack as="form" mb={3} spacing={5}>
            <FormControl id="correo">
              <VisuallyHidden>Correo</VisuallyHidden>
              <Input
                size="lg"
                rounded="sm"
                bg="#1C1C1C"
                borderWidth={2}
                borderColor="surfaceCards.700"
                placeholder="Correo electrónico"
              />
            </FormControl>

            <FormControl id="contrasena">
              <VisuallyHidden>Contraseña</VisuallyHidden>
              <Input
                size="lg"
                rounded="sm"
                bg="#1C1C1C"
                borderWidth={2}
                borderColor="surfaceCards.700"
                placeholder="Contraseña"
              />
            </FormControl>
            <Button onClick={onClose}>INICIAR SESIÓN</Button>
          </Stack>

          <ModalFooter px={0} flexDirection="column" justifyContent="center">
            <Text mb={2} color="white">
              ¿No tienes una cuenta?{' '}
              <Link color="primary.500">Registrate gratis</Link>
            </Text>
            <Link textAlign="center" color="primary.500">
              ¿Ólvidaste tu contraseña?
            </Link>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AuthModal
