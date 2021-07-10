import React from 'react'
// import NextLink from 'next/link'

// Terceros
import {
  Popover,
  PopoverBody,
  PopoverArrow,
  PopoverFooter,
  PopoverTrigger,
  PopoverContent
} from '@chakra-ui/popover'
import { Icon } from '@chakra-ui/icon'
import { Portal } from '@chakra-ui/portal'
import { Link, Text } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'

// Icons
import { AlertIcon } from '@/assets/icons'

const VirtualCup = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          p={1}
          isRound
          size="small"
          variant="unstyled"
          _focus={{ borderColor: 'transparent' }}
          icon={<Icon as={AlertIcon} fill="primary.500" />}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          p={2}
          bg="negro.900"
          borderColor="transparent"
          maxW={{ base: 280, sm: 350 }}
          _focus={{ borderColor: 'transparent' }}
        >
          <PopoverArrow bg="negro.900" borderColor="transparent" />
          <PopoverBody>
            <Text color="surfaceCards.500">
              Las copas virtuales son como puntos que te permiten jugar y ganar
              increibles premios.
            </Text>
          </PopoverBody>
          <PopoverFooter borderColor="transparent">
            {/* <NextLink> */}
            <Link color="primary.500">MÁS INFORMACIÓN</Link>
            {/* </NextLink> */}
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default VirtualCup
