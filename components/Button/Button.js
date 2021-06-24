import React from 'react'

// Componentes
import { Button as BTN } from '@chakra-ui/button'

const Button = ({ variant = 'solid', children, ...props }) => {
  const basic = {
    rounded: 'sm'
  }

  const outline = {
    variant: 'outline',
    color: 'primary.500',
    colorScheme: 'primary'
  }

  const solid = {
    variant: 'solid',
    colorScheme: 'primary'
  }

  const theme = variant === 'outline' ? outline : solid

  return (
    <BTN {...basic} {...props} {...theme}>
      {children}
    </BTN>
  )
}

export default Button
