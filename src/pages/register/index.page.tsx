import * as C from './styles'

import { ArrowRight } from 'phosphor-react'

import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'

export default function Register() {
  return (
    <C.Container>
      <C.Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </C.Header>

      <C.Form as="form">
        <label>
          <Text size="sm">Nome do usuário</Text>
          <TextInput prefix="ignite.com/" placeholder={'seu usuário'} />
        </label>

        <label>
          <Text size="sm">Nome Completo</Text>
          <TextInput placeholder={'seu nome'} />
        </label>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </C.Form>
    </C.Container>
  )
}
