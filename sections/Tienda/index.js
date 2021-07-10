import React, { useState } from 'react'

// terceros
import {
  Box,
  Text,
  Flex,
  Wrap,
  Stack,
  Container,
  SimpleGrid,
  Heading as HeadingC
} from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/icon'
import { useDisclosure } from '@chakra-ui/hooks'
import {
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack
} from '@chakra-ui/slider'
import { IconButton, Button } from '@chakra-ui/button'

// Components
import Heading from '@/components/Heading'
import Pagination from '@/components/Pagination'
import CardProduct from '@/components/CardProduct'
import OrdenarMenu from '@/sections/Tienda/OrdenarMenu'
import FiltroModal from '@/sections/Tienda/FiltroModal'
import SliderValorados from '@/sections/Tienda/SliderValorados'

// Icons
import { FilterIcon } from '@/assets/icons'

// data
import { categorias } from 'data/categorias'
const Tienda = () => {
  const [precio, setPrecio] = useState(30)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      bgSize="contain"
      bgRepeat="repeat"
      bgPosition="center"
      bgImage="url(/images/heroPattern.webp)"
    >
      <Box mb={5} bg="negro.900" py={{ base: 5 }}>
        <Heading>TIENDA</Heading>
      </Box>

      <Container pb={10} w={{ base: '90%' }} maxW={{ base: '1400px' }}>
        <Flex justify="space-between" align="center" pt={{ base: 5 }}>
          <HeadingC fontWeight="500" fontSize={{ base: '2xl' }} color="white">
            Productos recientes
          </HeadingC>
          <OrdenarMenu />
        </Flex>

        <SimpleGrid
          gap={5}
          templateColumns={{ base: 'minmax(0, 1fr)', md: '300px 1fr' }}
        >
          <Box display={{ base: 'none', md: 'block' }}>
            <Flex mt={8} justify="space-between">
              <HeadingC
                color="white"
                fontWeight="500"
                fontSize={{ base: '2xl' }}
              >
                Filtrar por
              </HeadingC>
              <Button fontWeight="500" colorScheme="primary" variant="link">
                Limpiar filtros
              </Button>
            </Flex>
            <HeadingC
              mt={6}
              mb={5}
              color="gray.400"
              fontWeight="500"
              fontSize={{ base: 'xl' }}
              fontFamily="Titillium Web"
            >
              Categorias
            </HeadingC>
            <Wrap justify="center">
              {categorias.map((item, i) => (
                <Button
                  key={item + i}
                  rounded="sm"
                  fontWeight="500"
                  variant="outline"
                  minW={{ base: '83px' }}
                  colorScheme="surfaceCards"
                >
                  {item}
                </Button>
              ))}
            </Wrap>
            <HeadingC
              mt={5}
              mb={2}
              color="gray.400"
              fontWeight="500"
              fontSize={{ base: 'xl' }}
              fontFamily="Titillium Web"
            >
              Precio
            </HeadingC>
            <Slider
              value={precio}
              onChange={(e) => setPrecio(e)}
              defaultValue={30}
              colorScheme="primary"
              aria-label="slider-ex-2"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text color="gray.400">s/0.00 -- s/{precio}</Text>
            <HeadingC
              my={5}
              fontWeight="500"
              fontSize={{ base: '2xl' }}
              color="white"
            >
              Mejor valorados
            </HeadingC>
            <Stack spacing={4}>
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <CardProduct key={i} mx="auto" />
                ))}
            </Stack>
          </Box>
          <Box w="full">
            <SimpleGrid
              // autoRows="450px"
              gap={{ base: 5 }}
              ml={{ base: 0, md: 10 }}
              templateColumns={{
                base: 'minmax(0, 1fr)',
                sm: 'repeat(2, minmax(0, 1fr))',
                xl: 'repeat(3, minmax(0, 1fr))'
              }}
            >
              {Array(18)
                .fill(null)
                .map((_, i) => (
                  <CardProduct key={i} mx="auto" />
                ))}
            </SimpleGrid>
            <Flex mt={20} mb={10} justify="center">
              <Pagination />
            </Flex>
          </Box>
        </SimpleGrid>

        <HeadingC
          display={{ base: 'block', lg: 'none' }}
          mb={5}
          fontWeight="500"
          textAlign="center"
          fontSize={{ base: '2xl' }}
          color="white"
        >
          Mejor valorados
        </HeadingC>

        <SliderValorados display={{ base: 'block', lg: 'none' }} />
      </Container>
      {isOpen ? <FiltroModal {...{ isOpen, onClose }} /> : null}
      <IconButton
        display={{ base: 'flex', lg: 'none' }}
        right={5}
        bottom={5}
        pos="fixed"
        rounded="full"
        onClick={onOpen}
        colorScheme="primary"
        icon={<Icon as={FilterIcon} />}
      />
    </Box>
  )
}

export default Tienda
