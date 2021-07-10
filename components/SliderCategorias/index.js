import React from 'react'
// import Image from 'next/image'

// Terceros
import { Image } from '@chakra-ui/image'
import Slider from 'react-slidy'
import { Box, Heading as HeadingC } from '@chakra-ui/layout'

// Componentes
import Heading from '@/components/Heading'
import useBreakPoint from '@/utils/hooks/useBreakPoint'

// Hooks
// import useSlider from '@/utils/hooks/useSlider'
// import useNumSlides from '@/utils/hooks/useNumSlides'

const CardCategory = ({ src }) => (
  <Box
    w="80%"
    mx="auto"
    rounded="md"
    // bg="#111111"
    maxW="300px"
    pos="relative"
    h={{ base: 320 }}
  >
    <HeadingC
      as="h2"
      top={36}
      w="full"
      left={-24}
      color="white"
      pos="absolute"
      fontWeight="500"
      textAlign="center"
      fontSize={{ base: '2xl' }}
    >
      Categoria 1
    </HeadingC>
    <Box top={12} right={-12} pos="absolute" maxW={{ base: '220px' }}>
      <Image objectFit="cover" src={src} />
    </Box>
  </Box>
)

const SliderCategorias = () => {
  const { reset, num } = useBreakPoint({
    sm: 1,
    md: 2,
    lg: 2,
    xl: 3,
    xxl: 3
  })

  return (
    <Box
      mt="-1"
      bgSize="contain"
      pt={{ base: 16 }}
      bgPosition="center"
      bgImage="url(/images/heroPattern.webp)"
    >
      <Box maxW={{ base: '90%' }} mx="auto">
        <Heading>Categorias</Heading>
        <Box mt={10} mx="auto" maxW="1700px" h="400px">
          {!reset ? (
            <Slider numOfSlides={num}>
              <CardCategory src={`/images/producto${1}.png`} />
              <CardCategory src={`/images/producto${2}.png`} />
              <CardCategory src={`/images/producto${3}.png`} />
              <CardCategory src={`/images/producto${4}.png`} />
              <CardCategory src={`/images/producto${5}.png`} />
              <CardCategory src={`/images/producto${6}.png`} />
              <CardCategory src={`/images/producto${1}.png`} />
              <CardCategory src={`/images/producto${2}.png`} />
            </Slider>
          ) : null}
        </Box>
      </Box>
    </Box>
  )
}

export default SliderCategorias
