import React from 'react'

import { Box, Text } from '@chakra-ui/layout'

const Badge = ({ children }) => {
  return (
    <Box
      w={6}
      h={6}
      top={-2}
      right={-2}
      zIndex="2"
      rounded="full"
      pos="absolute"
      display="flex"
      bg="primary.500"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontWeight="bold">{children}</Text>
    </Box>
  )
}

export default Badge
