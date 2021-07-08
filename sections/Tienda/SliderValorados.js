import React, { useEffect, useState } from 'react'

// Terceros
import Slider from 'react-slidy'
import { Box } from '@chakra-ui/layout'

// Componentes
import CardProduct from '@/components/CardProduct'

// Hooks
import useNumSlides from '@/utils/hooks/useNumSlides'

const SliderValorados = (props) => {
  const [timer, setTimer] = useState(false)
  const [actualSlide, setActualSlide] = useState(0)
  const numOfSlides = useNumSlides({
    base: 1,
    ms: 1,
    sm: 2,
    md: 2,
    xl: 4
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
        {...props}
        mx="auto"
        maxW="1700px"
        onTouchStart={reset}
        onMouseEnter={reset}
        onTouchEnd={() => setTimer(play())}
        onMouseLeave={() => setTimer(play())}
      >
        <Slider
          slide={actualSlide}
          numOfSlides={numOfSlides}
          doAfterSlide={updateSlide}
        >
          <CardProduct
            mx={{ base: 2, md: 'auto' }}
            src={`/images/producto${1}.png`}
          />
          <CardProduct
            mx={{ base: 2, md: 'auto' }}
            src={`/images/producto${2}.png`}
          />
          <CardProduct
            mx={{ base: 2, md: 'auto' }}
            src={`/images/producto${3}.png`}
          />
          <CardProduct
            mx={{ base: 2, md: 'auto' }}
            src={`/images/producto${4}.png`}
          />
          <CardProduct
            mx={{ base: 2, md: 'auto' }}
            src={`/images/producto${1}.png`}
          />
          <CardProduct
            mx={{ base: 2, md: 'auto' }}
            src={`/images/producto${2}.png`}
          />
          <CardProduct
            mx={{ base: 2, md: 'auto' }}
            src={`/images/producto${3}.png`}
          />
          <CardProduct
            mx={{ base: 2, md: 'auto' }}
            src={`/images/producto${4}.png`}
          />
        </Slider>
      </Box>
    </>
  )
}

export default SliderValorados
