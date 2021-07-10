import React, { useEffect, useState } from 'react'

// Terceros
import Slider from 'react-slidy'
import { Box, HStack } from '@chakra-ui/layout'

// Componentes
import Heading from '@/components/Heading'
import Button from '@/components/Button/Button'
import CardProduct from '@/components/CardProduct'

// Hooks
// import useNumSlides from '@/utils/hooks/useNumSlides'
import useBreakPoint from '@/utils/hooks/useBreakPoint'

const ProductosRecientes = () => {
  const [timer, setTimer] = useState(false)
  const [isFocus, setIsFocus] = useState(1)
  const [actualSlide, setActualSlide] = useState(0)
  const { reset: reset2, num } = useBreakPoint({
    sm: 1,
    md: 2,
    lg: 2,
    xl: 3,
    xxl: 4
  })

  useEffect(() => {
    const timer = play()
    setTimer(timer)
    return () => clearTimeout(timer)
  }, [])

  const play = () => {
    return setInterval(() => {
      setActualSlide((state) => {
        if (state + 1 === 8) return 0
        return state + 1
      })
    }, 5000)
  }

  const reset = () => clearInterval(timer)

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  return (
    <>
      <Box
        mt="-1"
        bgSize="contain"
        py={{ base: 16 }}
        bgPosition="center"
        bgImage="url(/images/heroPattern.webp)"
      >
        <Box maxW={{ base: '90%' }} mx="auto">
          <Heading>Productos Recientes</Heading>
          <HStack
            spacing={{ base: 2, sm: 4, xl: 10 }}
            mt={5}
            w="full"
            justify="center"
          >
            <Button
              onClick={() => setIsFocus(1)}
              isFocus={isFocus === 1}
              variant="link"
            >
              CATEGORIA
            </Button>
            <Button
              onClick={() => setIsFocus(2)}
              isFocus={isFocus === 2}
              variant="link"
            >
              CATEGORIA
            </Button>
            <Button
              onClick={() => setIsFocus(3)}
              isFocus={isFocus === 3}
              variant="link"
            >
              CATEGORIA
            </Button>
            <Button
              onClick={() => setIsFocus(4)}
              isFocus={isFocus === 4}
              variant="link"
            >
              CATEGORIA
            </Button>
          </HStack>
          <Box
            mt={10}
            mx="auto"
            maxW="1700px"
            onTouchStart={reset}
            onMouseEnter={reset}
            onTouchEnd={() => setTimer(play())}
            onMouseLeave={() => setTimer(play())}
          >
            {!reset2 ? (
              <Slider
                numOfSlides={num}
                slide={actualSlide}
                doAfterSlide={updateSlide}
              >
                <CardProduct src={`/images/producto${1}.png`} />
                <CardProduct src={`/images/producto${2}.png`} />
                <CardProduct src={`/images/producto${3}.png`} />
                <CardProduct src={`/images/producto${4}.png`} />
                <CardProduct src={`/images/producto${1}.png`} />
                <CardProduct src={`/images/producto${2}.png`} />
                <CardProduct src={`/images/producto${3}.png`} />
                <CardProduct src={`/images/producto${4}.png`} />
              </Slider>
            ) : null}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ProductosRecientes
