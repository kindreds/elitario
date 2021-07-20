import React from 'react'

// Librerias de Terceros
import { Icon } from '@chakra-ui/icon'
import { IconButton as IconButton2 } from '@chakra-ui/button'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'

// Iconos
import { SortIcon } from '@/assets/icons'

const OrdenarMenu = () => {
  return (
    <Menu>
      <MenuButton
        size="lg"
        rounded="sm"
        as={IconButton2}
        bg="surfaceCards.800"
        colorScheme="surfaceCards"
        icon={<Icon as={SortIcon} fill="#fff" />}
      />
      <MenuList borderColor="transparent" bg="surfaceCards.800">
        <MenuItem
          _focus={{ bg: 'primary.500' }}
          _active={{ bg: 'primary.600' }}
          color="white"
        >
          Clasificación por defecto
        </MenuItem>
        <MenuItem
          _focus={{ bg: 'primary.500' }}
          _active={{ bg: 'primary.600' }}
          color="white"
        >
          Clasificación promedio
        </MenuItem>
        <MenuItem
          _focus={{ bg: 'primary.500' }}
          _active={{ bg: 'primary.800' }}
          color="white"
        >
          Popularidad
        </MenuItem>
        <MenuItem
          _focus={{ bg: 'primary.500' }}
          _active={{ bg: 'primary.800' }}
          color="white"
        >
          Precio de menor a mayor
        </MenuItem>
        <MenuItem
          _focus={{ bg: 'primary.500' }}
          _active={{ bg: 'primary.800' }}
          color="white"
        >
          Precio de mayor a menor
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default OrdenarMenu
