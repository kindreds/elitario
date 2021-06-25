import React, { useEffect, useState } from 'react'
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
    <Box
      mt={-1}
      w="full"
      pos="relative"
      h={{ base: 80, sm: 96, md: 500, xl: 700 }}
    >
      <Image
        layout="fill"
        src={HERO_IMG}
        objectFit="cover"
        placeholder="blur"
      />
      <Center pos="absolute" h="full" top={0} left={0} right={0} bottom={0}>
        <Stack
          align="center"
          flexDirection="column"
          maxW={{ base: '90%' }}
          spacing={{ base: 4, sm: 6 }}
        >
          <Heading
            zIndex="2"
            color="white"
            textAlign="center"
            fontSize={{ base: '2xl', sm: '5xl', md: '6xl', lg: '7xl' }}
          >
            Beverages for Connoisseurs
          </Heading>
          <Icon as={Separador} w={{ base: '50%' }} h={1} />
          <Heading
            mb={2}
            as="h4"
            zIndex="2"
            color="white"
            fontWeight="500"
            whiteSpace="normal"
            maxW={{ sm: '80%', xl: 800 }}
            fontFamily="Titillium Web"
            textAlign={{ base: 'center' }}
            fontSize={{ base: 'sm', sm: 'xl', md: '1xl' }}
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
            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
          >
            GET 15% OFF
          </Heading>
          <Button size="lg" variant="outline">
            COMPRAR AHORA
          </Button>
        </Stack>
      </Center>
    </Box>
  )
}

const HeroSlider = () => {
  const [timer, setTimer] = useState(false)
  const [actualSlide, setActualSlide] = useState(0)

  useEffect(() => {
    const timer = play()
    setTimer(timer)
    return () => clearTimeout(timer)
  }, [])

  const play = () => {
    return setInterval(() => {
      setActualSlide((state) => {
        if (state + 1 === 3) return 0
        return state + 1
      })
    }, 5000)
  }

  const reset = () => clearInterval(timer)

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  return (
    <div
      onTouchStart={reset}
      onMouseEnter={reset}
      onTouchEnd={() => setTimer(play())}
      onMouseLeave={() => setTimer(play())}
    >
      <Slider
        infiniteLoop
        slide={actualSlide}
        itemsToPreload={1}
        keyboardNavigation
        doAfterSlide={updateSlide}
      >
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <HeroSliderItem key={i} />
          ))}
      </Slider>
    </div>
  )
}

export default HeroSlider
