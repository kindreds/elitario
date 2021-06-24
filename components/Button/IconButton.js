import React from 'react'
import { IconButton as BTN } from '@chakra-ui/button'

const IconButton = ({ icon, onClick = () => {}, ...props }) => {
  return (
    <BTN
      {...props}
      size="lg"
      icon={icon}
      rounded="sm"
      onClick={onClick}
      bg="surfaceCards.800"
      colorScheme="surfaceCards"
    />
  )
}

export default IconButton
