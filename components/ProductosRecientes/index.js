import React from 'react'

// Terceros
import Slider from 'react-slidy'
import { Box } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'

// Componentes
import Heading from '@/components/Heading'
import CardProduct from '@/components/CardProduct'

const ProductosRecientes = () => {
  return (
    <Box py={{ base: 16 }} bgImage="url(/patterns/HeroPattern.svg)">
      <Box maxW={{ base: '90%' }} mx="auto">
        <Heading>Productos Recientes</Heading>
        <Box mt={4} w="90%" mx="auto">
          <Select variant="filled" bg="primary.500" color="white">
            <Box as="option" color="black" value="1">
              Categoria 1
            </Box>
            <Box as="option" color="black" value="1">
              Categoria 2
            </Box>
            <Box as="option" color="black" value="1">
              Categoria 3
            </Box>
            <Box as="option" color="black" value="1">
              Categoria 4
            </Box>
          </Select>
        </Box>
        <Box mt={10}>
          <Slider>
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <CardProduct key={i} src={`/images/producto${i + 1}.png`} />
              ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductosRecientes
