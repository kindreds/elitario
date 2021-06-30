import React from 'react'

// Terceros
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton
} from '@chakra-ui/modal'
import { Icon } from '@chakra-ui/icon'
import { Heading, SimpleGrid } from '@chakra-ui/layout'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'

// Components
import CardProduct from '@/components/CardProduct'

// Icons
import { SearchIcon } from '@/assets/icons'

const SearchModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" isCentered>
      <ModalOverlay />
      <ModalContent
        bg="#111111"
        minW={{ base: '100%', md: '90vw' }}
        minH={{ base: '100%', md: '90vh' }}
      >
        <ModalHeader mt={{ base: 10 }}>
          <InputGroup mx="auto" maxW={630}>
            <Input
              rounded="sm"
              color="white"
              bg="transparent"
              variant="outline"
              borderColor="surfaceCards.800"
              placeholder="Ingresar texto de busqueda"
            />
            <InputRightElement
              children={<Icon as={SearchIcon} fill="white" />}
            />
          </InputGroup>
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody
          mx="auto"
          pt={{ base: 5, lg: 10 }}
          px={{ base: 5, xl: 20 }}
          maxW={{ base: '95%', xl: '1300px' }}
        >
          <Heading
            // mt={10}
            color="white"
            fontWeight="500"
            textAlign={{ base: 'center', md: 'left' }}
          >
            Productos Destacados
          </Heading>

          <SimpleGrid
            mt={5}
            mx="auto"
            gap={{ base: 10, sm: 8, md: 2, xl: 0 }}
            templateColumns={{
              base: 'minmax(0, 1fr)',
              sm: 'repeat(1, minmax(0, 1fr))',
              md: 'repeat(2, minmax(0, 1fr))',
              xl: 'repeat(4, minmax(0, 1fr))'
            }}
          >
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <CardProduct key={i} src={`/images/producto${i + 1}.png`} />
              ))}
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <CardProduct key={i} src={`/images/producto${i + 1}.png`} />
              ))}
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <CardProduct key={i} src={`/images/producto${i + 1}.png`} />
              ))}
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SearchModal
