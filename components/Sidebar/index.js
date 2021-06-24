import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/dist/client/router'

// Librerias de terceros
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/modal'
import { Icon } from '@chakra-ui/icon'
import { Box, Heading, Link, Stack } from '@chakra-ui/layout'

// Componentes

// SVGS
import Separador from '@/assets/Separador'

import { navigation } from '../../navegation'

const Sidebar = ({ isOpen, onClose }) => {
  const { pathname } = useRouter()

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg="#111111">
        <DrawerCloseButton color="white" size="lg" />
        <Heading
          mt={10}
          color="white"
          fontSize="6xl"
          lineHeight="77px"
          textAlign="center"
        >
          MENÚ
        </Heading>

        <DrawerBody w="80%" mx="auto">
          <Icon as={Separador} w="full" h={5} />
          <Stack mt={2}>
            {navigation.map(({ id, name, path }) => (
              <Box key={id}>
                <NextLink href={path}>
                  <Link
                    fontSize="3xl"
                    textTransform="uppercase"
                    color={pathname === path ? 'primary.500' : 'white'}
                  >
                    {name}
                  </Link>
                </NextLink>
              </Box>
            ))}
          </Stack>
        </DrawerBody>

        <Icon as={Separador} w="80%" h={5} mx="auto" />
        <DrawerFooter>
          <Box pos="relative" mt={2} mb={8} w="full" h={{ base: '100px' }}>
            <Image src="/logo/index.svg" layout="fill" />
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Sidebar
