import React from 'react'

// Terceros
import { Icon } from '@chakra-ui/icon'
import {
  Box,
  Text,
  Grid,
  Center,
  GridItem,
  Heading as ChakraHeading
} from '@chakra-ui/layout'

// Componentes
import Heading from '@/components/Heading'
import { CalidadIcon, ExpressIcon, DolarIcon } from '@/assets/icons'

const items = [
  {
    icon: CalidadIcon,
    heading: 'Calidad',
    content:
      'Todas nuestras bebidas son suministradas por fabricantes probados de todo el mundo. Garantizamos la calidad de primera clase.'
  },
  {
    icon: ExpressIcon,
    heading: 'Envíos a domicilio',
    content:
      'Enviamos a todo Lima y Provincia. Se necesitan 6 a 12 horas para que el paquete se entregue directamente en sus pruertas dentro de Liama Metropolitana.'
  },
  {
    icon: DolarIcon,
    heading: 'Los mejores precios',
    content:
      'Los precios de nuestros productos son asequibles. ¡Se sorprendera con mucho gusto una vez que reciba su paquete!.'
  }
]

const Card = ({ icon, heading, content, ...props }) => (
  <Box
    {...props}
    px={5}
    borderWidth={1}
    py={{ base: 12 }}
    h={{ md: '447px' }}
    maxW={{ base: '287px', xl: '380px' }}
    borderColor="surfaceCards.800"
  >
    <Center>
      <Icon as={icon} w={36} h={36} />
    </Center>
    <ChakraHeading
      mt={5}
      textAlign="center"
      color="primary.600"
      fontSize={{ base: 'lg' }}
      fontWeight={{ base: '500' }}
    >
      {heading}
    </ChakraHeading>
    <Text
      mt={5}
      textAlign="center"
      color="surfaceCards.100"
      fontSize={{ base: 'md' }}
    >
      {content}
    </Text>
  </Box>
)

const PorQueElegirnos = () => {
  return (
    <Box mt={-1} py={{ base: 16 }} bg="#111111">
      <Heading>¿Por que elegirnos?</Heading>
      <Grid
        mt={16}
        mx="auto"
        maxW={{ base: '80%', xl: '1200px' }}
        gap={{ base: 10, md: 5 }}
        templateColumns={{
          base: 'minmax(0, 1fr)',
          sm: 'repeat(2, minmax(0, 1fr))',
          md: 'repeat(3, minmax(0, 287px))',
          xl: 'repeat(3, minmax(0, 380px))'
        }}
      >
        {items.map((item, i) => (
          <GridItem
            key={i}
            mx="auto"
            colSpan={{ sm: i === 2 ? 2 : 1, md: 1, xl: 1 }}
          >
            <Card {...item} mx={{ sm: i === 2 ? 'auto' : 0 }} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default PorQueElegirnos
