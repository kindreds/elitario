import React from 'react'
import Image from 'next/image'

// Terceros
import Slider from 'react-slidy'
import { Box, Heading as HeadingC } from '@chakra-ui/layout'

// Componentes
import Heading from '@/components/Heading'

// Hooks
import useSlider from '@/utils/hooks/useSlider'
import useNumSlides from '@/utils/hooks/useNumSlides'

const CardCategory = () => (
  <Box mx="auto" w="80%" h={{ base: 400 }}>
    <Box
      w="full"
      pos="relative"
      h={{ base: 300 }}
      sx={{ img: { zIndex: 2 }, h2: { zIndex: 2 } }}
      transform="translateY(60px)"
    >
      <Image layout="fill" src="/images/producto1.png" />
      <HeadingC
        as="h2"
        w="full"
        top={-10}
        color="white"
        pos="absolute"
        fontWeight="500"
        textAlign="center"
      >
        Categoria 1
      </HeadingC>
      <Box
        w="full"
        zIndex="1"
        rounded="sm"
        bg="#111111"
        h={{ base: 300 }}
        transform="translateY(-60px)"
      />
    </Box>
  </Box>
)

const SliderCategorias = () => {
  const { actualSlide, updateSlide, reset, play } = useSlider()
  const numOfSlides = useNumSlides({
    base: 1,
    ms: 1,
    sm: 2,
    md: 3,
    xl: 4
  })

  return (
    <Box
      bgSize="contain"
      pt={{ base: 16 }}
      bgPosition="center"
      bgImage="url(/images/heroPattern.webp)"
    >
      <Box maxW={{ base: '90%' }} mx="auto">
        <Heading>Categorias</Heading>
        <Box
          mt={10}
          mx="auto"
          maxW="1700px"
          onTouchEnd={play}
          onMouseLeave={play}
          onTouchStart={reset}
          onMouseEnter={reset}
        >
          <Slider
            showArrows="false"
            keyboardNavigation
            // slide={actualSlide}
            numOfSlides={numOfSlides}
            // doAfterSlide={updateSlide}
          >
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
          </Slider>
        </Box>
      </Box>
    </Box>
  )
}

export default SliderCategorias
