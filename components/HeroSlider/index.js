import React from 'react'
import Image from 'next/image'

// Terceros
import Slider from 'react-slidy'
import { Icon } from '@chakra-ui/icon'
import { Box, Heading, Center, Stack } from '@chakra-ui/layout'

// Componentes
import Separador from '@/assets/Separador'
import Button from '@/components/Button/Button'

import HERO_IMG from '@/public/images/HeroSlide.jpg'

const HeroSliderItem = () => {
  return (
    <Box pos="relative" w="full" h={80}>
      <Image
        layout="fill"
        src={HERO_IMG}
        objectFit="cover"
        placeholder="blur"
      />
      <Center pos="absolute" h="full" top={0} left={0} right={0} bottom={0}>
        <Stack
          spacing={4}
          maxW={{ base: '90%' }}
          flexDirection="column"
          align="center"
        >
          <Heading
            zIndex="2"
            color="white"
            textAlign="center"
            fontSize={{ base: '2xl' }}
          >
            Beverages for Connoisseurs
          </Heading>
          <Icon as={Separador} w={{ base: '50%' }} h={1} />
          <Heading
            as="h4"
            mb={2}
            zIndex="2"
            color="white"
            fontWeight="500"
            whiteSpace="normal"
            fontSize={{ base: 'sm' }}
            fontFamily="Titillium Web"
            textAlign={{ base: 'center' }}
          >
            Enjoy these fine spirits and keep your sunny side up! Refined taste
            of our exclusive beverages is a real joy for those who value good
            alcohol from world-class brands!
          </Heading>
          <Heading
            mb={3}
            zIndex="2"
            color="white"
            textAlign="center"
            fontSize={{ base: '2xl' }}
          >
            GET 15% OFF
          </Heading>
          <Button variant="outline">COMPRAR AHORA</Button>
        </Stack>
      </Center>
    </Box>
  )
}

const HeroSlider = () => {
  return (
    <Slider itemsToPreload={1} keyboardNavigation infiniteLoop>
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <HeroSliderItem key={i} />
        ))}
    </Slider>
  )
}

export default HeroSlider
