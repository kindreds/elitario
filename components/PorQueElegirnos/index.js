import React from 'react'

// Terceros
import { Icon } from '@chakra-ui/icon'
import {
  Box,
  Text,
  Center,
  SimpleGrid,
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

const Card = ({ icon, heading, content }) => (
  <Box borderWidth={1} borderColor="surfaceCards.800" py={{ base: 12 }} px={5}>
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
    <Box py={{ base: 16 }} bg="#111111">
      <Heading>¿Por que elegirnos?</Heading>

      <SimpleGrid mt={16} gap={10} maxW={{ base: '80%' }} mx="auto">
        {items.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default PorQueElegirnos
