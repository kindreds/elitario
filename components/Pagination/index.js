import React from 'react'

// Terceros
import { Icon } from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

// Component
import { IconButton } from '@/components/Button'

// Iconos
import { FowardIcon, ChevronDownIcon } from '@/assets/icons'

const Chevron = (transform) => (
  <Icon as={ChevronDownIcon} fill="white" transform={transform} />
)
const Foward = (transform = '') => (
  <Icon as={FowardIcon} fill="white" transform={transform} />
)

const PageButton = ({ children, active }) => (
  <Button
    px={5}
    py={6}
    rounded="sm"
    bg={active ? 'primary.500' : 'surfaceCards.800'}
    colorScheme={active ? 'primary' : 'surfaceCards'}
  >
    {children}
  </Button>
)

const Pagination = () => {
  return (
    <HStack>
      <IconButton display={{ base: 'none' }} icon={Foward('rotate(180deg)')} />
      <IconButton icon={Chevron('rotate(90deg)')} />

      <PageButton active>1</PageButton>
      <PageButton>2</PageButton>
      <PageButton>3</PageButton>

      <IconButton icon={Chevron('rotate(-90deg)')} />
      <IconButton display={{ base: 'none' }} icon={Foward()} />
    </HStack>
  )
}

export default Pagination
