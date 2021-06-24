import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/dist/client/router'

// Terceros
import { Box, Stack, Link, Text } from '@chakra-ui/layout'

// data
import { navigation } from '@/navegation/index'

const Footer = () => {
  const { pathname } = useRouter()

  return (
    <Box as="footer" bg="#111111" pt={10} pb={20}>
      <Box
        mx="auto"
        pos="relative"
        w={{ base: '250px' }}
        h={{ base: '180px' }}
        transform="translateY(-20px)"
      >
        <Image src="/logo/index.svg" layout="fill" />
      </Box>

      <Stack>
        {navigation.map(({ id, name, path }, i) => (
          <Box as={NextLink} href={path} key={id}>
            <Link
              w="full"
              mx="auto"
              fontSize="3xl"
              textAlign="center"
              textTransform="uppercase"
              color={pathname === path ? 'primary.500' : 'white'}
            >
              {name}
            </Link>
          </Box>
        ))}
      </Stack>
      <Text mt={5} textAlign="center" fontSize="lg" color="white">
        <Text as="span" color="primary.500">
          Zemez{'  '}
        </Text>
        &copy;. All rights reserved.
      </Text>
    </Box>
  )
}

export default Footer
