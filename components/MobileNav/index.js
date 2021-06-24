import React from 'react'

// Librerias de Terceros
import { Icon } from '@chakra-ui/icon'
import { Flex } from '@chakra-ui/layout'
import { Portal } from '@chakra-ui/portal'
import { IconButton as IconButton2 } from '@chakra-ui/button'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'

// Componentes
import IconButton from '@/components/Button/IconButton'

// Iconos
import { BarsIcon, UserIcon } from '@/assets/icons'

const MobileNav = ({ onOpen }) => {
  return (
    <Flex
      mb={8}
      top={5}
      mt={-20}
      w="full"
      mx="auto"
      maxW="90%"
      pos="sticky"
      zIndex="modal"
      justify="space-between"
    >
      <IconButton onClick={onOpen} icon={<Icon as={BarsIcon} fill="#fff" />} />
      <Menu>
        <MenuButton
          size="lg"
          rounded="sm"
          as={IconButton2}
          bg="surfaceCards.800"
          colorScheme="surfaceCards"
          icon={<Icon as={UserIcon} fill="#fff" />}
        />
        <Portal>
          <MenuList borderColor="transparent" bg="surfaceCards.800">
            <MenuItem
              _focus={{ bg: 'primary.500' }}
              _active={{ bg: 'primary.600' }}
              color="white"
            >
              Mi Cuenta
            </MenuItem>
            <MenuItem
              _focus={{ bg: 'primary.500' }}
              _active={{ bg: 'primary.600' }}
              color="white"
            >
              Mis Ordenes
            </MenuItem>
            <MenuItem
              _focus={{ bg: 'primary.500' }}
              _active={{ bg: 'primary.800' }}
              color="white"
            >
              Cerrar Sesión
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </Flex>
  )
}

export default MobileNav
