import React from 'react'

// Componentes
import { Button as BTN } from '@chakra-ui/button'

const Button = ({ isFocus, variant = 'solid', children, ...props }) => {
  const basic = {
    rounded: 'sm'
  }

  const activeLink = {
    color: 'primary.500',
    borderBottomWidth: 1,
    borderBottomColor: 'primary.500'
  }

  const variants = {
    link: {
      m: 0,
      h: { base: 8 },
      fontWeight: '500',
      _focus: activeLink,
      _hover: activeLink,
      variant: 'unstyled',
      borderBottomWidth: 1,
      transition: 'all 0.3s ease',
      fontSize: { base: 'sm', sm: 'lg' },
      color: isFocus ? 'primary.500' : 'white',
      borderBottomColor: isFocus ? 'primary.500' : 'transparent'
    },
    outline: {
      variant: 'outline',
      color: 'primary.500',
      colorScheme: 'primary'
    },
    solid: {
      variant: 'solid',
      colorScheme: 'primary'
    }
  }

  return (
    <BTN {...basic} {...variants[variant]} {...props}>
      {children}
    </BTN>
  )
}

export default Button
