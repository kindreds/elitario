import React from 'react'

// Librerias de Terceros
import { Icon } from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Flex, HStack, Text, Box } from '@chakra-ui/layout'

// Iconos
import { CupIcon } from '@/assets/icons'

// Data
import { navigation } from '@/navegation/index'

const DesktopNav = ({ hasScroll }) => {
  return (
    <>
      <HStack
        display={{ base: 'none', lg: 'flex' }}
        spacing={{ base: 5, xl: 10 }}
      >
        <Image
          height={45}
          src="/logo/index.svg"
          transition="all 0.5s ease"
          opacity={hasScroll ? 1 : 0}
          width={hasScroll ? 100 : 0}
        />
        {navigation.map(({ id, name, active, path }, i) => (
          <Text
            key={id}
            fontSize="xl"
            textTransform="uppercase"
            color={active ? 'white' : 'surfaceCards.500'}
          >
            {name}
          </Text>
        ))}
        <Flex
          bg="primary.800"
          justify="center"
          transition="all 0.3s ease"
          opacity={{ base: !hasScroll ? 1 : 0, xl: 1 }}
          width={{ base: !hasScroll ? 170 : 0, xl: 170 }}
        >
          <Icon
            w={6}
            h={6}
            m={2}
            as={CupIcon}
            fill="primary.500"
            alignSelf="center"
          />
          <Box>
            <Text textAlign="center" letterSpacing={1} color="primary.500">
              BitPoints
            </Text>
            <Text
              fontSize="sm"
              textAlign="center"
              color="primary.200"
              transform="translateY(-5px)"
            >
              acumulados
            </Text>
          </Box>
          <Box
            w={7}
            h={7}
            mx={3}
            borderWidth={1}
            alignSelf="center"
            color="primary.500"
            borderColor="primary.600"
          >
            <Text textAlign="center" transform="translateX(-2px)">
              10
            </Text>
          </Box>
        </Flex>
      </HStack>
    </>
  )
}

export default DesktopNav
