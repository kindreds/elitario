import React, { useEffect, useState } from 'react'

import { Box } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/hooks'

import AuthModal from '../AuthModal'
import FormEnvio from '@/sections/Pago/FormEnvio'
import FormEntrega from '@/sections/Pago/FormEntrega'
import SolicitudLogin from '@/sections/Pago/SolicitudLogin'
import MetodoPago from '@/sections/Pago/MetodoPago'

const PaymentStepper = ({ valid = () => {} }) => {
  const [stepper, setStepper] = useState(0)
  const [isAuth, setIsAuth] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const steps = [
    {
      id: 'entrega',
      content: <FormEntrega {...{ next, stepper, i: 0 }} />
    },
    {
      id: 'envio',
      content: <FormEnvio {...{ next, prev, disabled, i: 1 }} />
    },
    {
      id: 'pago',
      content: <MetodoPago {...{ next, prev, disabled, i: 2 }} />
    }
  ]

  useEffect(() => {
    valid(stepper + 1 === steps.length)
  }, [stepper])

  function handleAuth() {
    setIsAuth(true)
  }

  function next() {
    if (stepper === steps.length) return
    setStepper((s) => s + 1)
  }
  function prev() {
    if (stepper === 0) return
    setStepper((s) => s - 1)
  }
  function disabled(i) {
    return i + 1 === steps.length
  }

  return (
    <Box>
      <AuthModal {...{ isOpen, onClose, handleAuth }} />
      {isAuth ? (
        <>
          {steps.map(({ id, content: Content }, i) => {
            if (i === stepper) {
              return <div key={id}>{Content}</div>
            }

            return <div key={id} />
          })}
        </>
      ) : (
        <SolicitudLogin {...{ onOpen }} />
      )}
    </Box>
  )
}

export default PaymentStepper
