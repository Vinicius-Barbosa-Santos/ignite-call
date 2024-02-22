import { ArrowRight } from 'phosphor-react'

import * as C from '../styles'

import * as CMain from './styles'

import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'

import { signIn } from 'next-auth/react'

export default function Register() {
  // const handleRegister = async (data: RegisterFormData) => {
  // }

  return (
    <C.Container>
      <C.Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </C.Header>

      <CMain.ConnectBox>
        <CMain.ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Conectar
            <ArrowRight />
          </Button>
        </CMain.ConnectItem>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </CMain.ConnectBox>
    </C.Container>
  )
}
