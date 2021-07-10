import React from 'react'
import Link from 'next/link'

// Librerias de Terceros
import { Icon } from '@chakra-ui/icon'
import { Box, Text, Flex, Stack } from '@chakra-ui/layout'
import { IconButton as IconButton2 } from '@chakra-ui/button'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'

import {
  Popover,
  PopoverBody,
  PopoverArrow,
  PopoverHeader,
  PopoverFooter,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton
} from '@chakra-ui/popover'

// Componentes
import Badge from '@/components/Badge'
import Button from '@/components/Button/Button'
import ProductList from '@/components/CardProduct/ProductList'

// Iconos
import { UserIcon, ShoppingIcon } from '@/assets/icons'

export const UserMenu = () => {
  return (
    <Menu isLazy>
      <MenuButton
        size="lg"
        rounded="sm"
        as={IconButton2}
        bg="surfaceCards.800"
        colorScheme="surfaceCards"
        icon={<Icon as={UserIcon} fill="#fff" />}
      />
      {/* <Portal> */}
      <MenuList zIndex="9999" borderColor="transparent" bg="surfaceCards.800">
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
      {/* </Portal> */}
    </Menu>
  )
}

export const ShoppingMenu = () => {
  return (
    <Popover isLazy placement="bottom-start" closeOnBlur>
      <PopoverTrigger>
        <Box pos="relative">
          <IconButton2
            size="lg"
            rounded="sm"
            bg="surfaceCards.800"
            colorScheme="surfaceCards"
            icon={<Icon as={ShoppingIcon} fill="#fff" />}
          />
          <Badge>2</Badge>
        </Box>
      </PopoverTrigger>
      {/* <Portal> */}
      <PopoverContent
        maxW="90%"
        color="white"
        bg="surfaceCards.800"
        borderColor="surfaceCards.800"
        w={{ base: '80vw', lg: '350px' }}
      >
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          <Text fontWeight="500" fontSize="lg">
            MI CARRITO
          </Text>
        </PopoverHeader>
        <PopoverArrow bg="surfaceCards.800" />
        <PopoverCloseButton />
        <PopoverBody mx="auto" w="95%">
          {/* Encabezado */}
          <Flex mb={3} justify="space-between">
            <Text fontWeight="500" fontSize="md">
              Productos (2)
            </Text>
            <Text fontWeight="500" fontSize="md">
              s/240.00
            </Text>
          </Flex>
        </PopoverBody>

        {/* Lista de Productos */}
        <Stack w="90%" mx="auto">
          <ProductList />
          <ProductList />
        </Stack>
        <PopoverFooter mx="auto" w="95%" borderTopColor="transparent">
          <Flex my={3} justify="space-between">
            <Text fontWeight="500" fontSize="lg">
              Sub-Total
            </Text>
            <Text fontWeight="500" fontSize="md">
              s/240.00
            </Text>
          </Flex>
          <Button mb={3} w="full">
            IR A PAGAR
          </Button>
          <Link href="/carrito">
            <a>
              <Button variant="outline" mb={3} w="full">
                VER MI CARRITO
              </Button>
            </a>
          </Link>
        </PopoverFooter>
      </PopoverContent>
      {/* </Portal> */}
    </Popover>
  )
}
