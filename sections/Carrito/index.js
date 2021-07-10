import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

// Terceros
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/breadcrumb'
import { Icon } from '@chakra-ui/icon'
import {
  Box,
  Flex,
  Text,
  Container,
  Stack,
  SimpleGrid
} from '@chakra-ui/layout'

// Componentes
import VirtualCup from './VirtualCup'
import { Button } from '@/components/Button'
import ListProductItem from './ListProductItem'

// Icons
import { CupIcon } from '@/assets/icons'

const CarritoWrap = () => {
  const router = useRouter()

  return (
    <Box
      mt={-1}
      bgSize="contain"
      bgRepeat="repeat"
      bgPosition="center"
      bgImage="url(/images/heroPattern.webp)"
    >
      <Container pb={{ base: 24, lg: 44 }} w="90%" maxW="1200px">
        <Flex
          mb={5}
          rounded="sm"
          bg="negro.900"
          px={{ base: 2, sm: 4 }}
          py={{ base: 4, sm: 5 }}
          fontSize={{ base: 'sm', sm: 'md' }}
          w={{ base: 'full', lg: 'fit-content' }}
        >
          <Text mr={2} color="white">
            Estas aquí:
          </Text>
          <Breadcrumb
            color="white"
            separator="/"
            fontSize={{ base: 'sm', sm: 'md' }}
            sx={{ '& li span.currentPage': { color: 'primary.500' } }}
          >
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/">
                <a>INICIO</a>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink className="currentPage">
                CARRITO DE COMPRAS
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        <SimpleGrid
          gap={{ lg: 10 }}
          templateColumns={{
            base: 'minmax(0, 1fr)',
            lg: 'minmax(0, 1fr) minmax(200px, 380px)'
          }}
        >
          <Box>
            <Box
              px={4}
              py={5}
              mb={4}
              mx="auto"
              rounded="sm"
              bg="surfaceCards.800"
            >
              <Text
                color="white"
                sx={{ '& span': { color: 'surfaceCards.500' } }}
              >
                Carrito de compras <span>(2 productos)</span>
              </Text>
            </Box>

            <Stack mb={5}>
              <ListProductItem />
              <ListProductItem />
            </Stack>
          </Box>

          <Box
            px={4}
            py={5}
            mb={4}
            w="full"
            mx="auto"
            rounded="sm"
            h="fit-content"
            bg="surfaceCards.800"
          >
            <Text as="h3" mb={5} color="white" fontSize="lg">
              RESUMEN DE TU PEDIDO
            </Text>
            <Flex justify="space-between">
              <Text color="surfaceCards.200">SubTotal</Text>
              <Text color="surfaceCards.200">s/ 240.00</Text>
            </Flex>
            <Flex justify="space-between">
              <Flex align="center">
                <Text color="surfaceCards.200" mr={2}>
                  Copas Virtuales
                </Text>
                <VirtualCup />
              </Flex>
              <Text color="surfaceCards.200">
                +20 <Icon as={CupIcon} fill="primary.500" />
              </Text>
            </Flex>

            <Flex my={5} justify="space-between">
              <Text color="white" fontSize={{ base: 'lg' }} fontWeight="500">
                TOTAL
              </Text>
              <Text color="white" fontSize={{ base: 'lg' }} fontWeight="500">
                s/ 240.00
              </Text>
            </Flex>

            <Button onClick={() => router.push('/pago')} href="/pago" w="full">
              IR A COMPRAR
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default CarritoWrap
