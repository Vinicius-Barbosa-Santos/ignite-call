import { ArrowRight, Check } from 'phosphor-react'

import * as C from '../styles'

import * as CMain from './styles'

import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'

import { signIn, useSession } from 'next-auth/react'

import { useRouter } from 'next/router'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  console.log(session)

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  const handleConnectCalender = async () => {
    await signIn('google')
  }

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
          {isSignedIn ? (
            <Button size="sm" disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalender}
            >
              Conectar
              <ArrowRight />
            </Button>
          )}
        </CMain.ConnectItem>

        {hasAuthError && (
          <CMain.AuthError size="sm">
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar.
          </CMain.AuthError>
        )}

        <Button type="submit" disabled={!isSignedIn}>
          Próximo passo
          <ArrowRight />
        </Button>
      </CMain.ConnectBox>
    </C.Container>
  )
}
