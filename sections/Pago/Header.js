import React from 'react'
import Link from 'next/link'

// Terceros
import { Icon } from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Box, Flex } from '@chakra-ui/layout'
import { Button as ButtonC, IconButton } from '@chakra-ui/button'

// Icons
import { PhoneIcon } from '@/assets/icons'

const Header = () => {
  return (
    <Box py={4} px={2} as="nav" bg="negro.900">
      <Flex
        w="90%"
        mx="auto"
        maxW="1150px"
        pos="relative"
        align="center"
        justify={{ base: 'center', md: 'space-between' }}
      >
        <Link href="/">
          <a>
            <Image w={100} objectFit="contain" src="/logo/index.svg" />
          </a>
        </Link>
        <ButtonC
          variant="ghost"
          colorScheme="primary"
          display={{ base: 'none', md: 'flex' }}
          leftIcon={<Icon as={PhoneIcon} fill="primary.500" />}
        >
          AYUDA PERSONALIZADA
        </ButtonC>
        <IconButton
          isRound
          right={5}
          pos="absolute"
          variant="ghost"
          colorScheme="primary"
          display={{ base: 'flex', md: 'none' }}
          icon={<Icon as={PhoneIcon} fill="primary.500" />}
        />
      </Flex>
    </Box>
  )
}

export default Header
