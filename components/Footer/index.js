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
    <Box mt={-1} as="footer" bg="#111111" pt={10} pb={20}>
      <Box
        mx="auto"
        pos="relative"
        w={{ base: '250px' }}
        h={{ base: '180px' }}
        transform="translateY(-20px)"
      >
        <Image src="/logo/index.svg" layout="fill" />
      </Box>

      <Stack
        mx="auto"
        spacing={{ base: 2 }}
        maxW={{ base: '90%', md: '900px' }}
        direction={{ base: 'column', md: 'row' }}
      >
        {navigation.map(({ id, name, path }, i) => (
          <Box as={NextLink} href={path} key={id}>
            <Link
              w="full"
              fontSize="3xl"
              textAlign="center"
              textTransform="uppercase"
              mx={{ base: 'auto', md: 0 }}
              color={pathname === path ? 'primary.500' : 'white'}
            >
              {name}
            </Link>
          </Box>
        ))}
      </Stack>
      <Text
        mt={{ base: 5, xl: 10 }}
        textAlign="center"
        fontSize="lg"
        color="white"
      >
        <Text as="span" color="primary.500">
          Zemez{'  '}
        </Text>
        &copy;. All rights reserved.
      </Text>
    </Box>
  )
}

export default Footer
