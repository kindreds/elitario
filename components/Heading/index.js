import React from 'react'

// Terceros
import { Icon } from '@chakra-ui/icon'
import { Heading as HEAD } from '@chakra-ui/layout'

// Assets
import Separador from '@/assets/Separador'

const Heading = ({ children, mb, ...props }) => {
  return (
    <>
      <HEAD
        color="white"
        textAlign="center"
        fontSize={{ base: '2xl' }}
        fontWeight={{ base: '500' }}
        {...props}
      >
        {children}
      </HEAD>
      <Icon as={Separador} w="full" h={1} />
    </>
  )
}

export default Heading
