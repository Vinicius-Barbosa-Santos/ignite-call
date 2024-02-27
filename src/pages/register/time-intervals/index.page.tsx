import * as C from '../styles'
import * as CMain from './styles'
import { ArrowArcRight } from 'phosphor-react'
import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'

export default function TimeIntervals() {
  return (
    <C.Container>
      <C.Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </C.Header>

      <CMain.IntervalBox as="form">
        <CMain.IntervalsContainer>
          <CMain.IntervalsItem>
            <CMain.IntervalsDay>
              <Checkbox />
              <Text>Segunda-Feira</Text>
            </CMain.IntervalsDay>
            <CMain.IntervalsInputs>
              <TextInput size={'sm'} type={'time'} step={60} />
              <TextInput size={'sm'} type={'time'} step={60} />
            </CMain.IntervalsInputs>
          </CMain.IntervalsItem>

          <CMain.IntervalsItem>
            <CMain.IntervalsDay>
              <Checkbox />
              <Text>Terça-Feira</Text>
            </CMain.IntervalsDay>
            <CMain.IntervalsInputs>
              <TextInput size={'sm'} type={'time'} step={60} />
              <TextInput size={'sm'} type={'time'} step={60} />
            </CMain.IntervalsInputs>
          </CMain.IntervalsItem>
        </CMain.IntervalsContainer>

        <Button type="submit">
          Próximo Passo
          <ArrowArcRight />
        </Button>
      </CMain.IntervalBox>
    </C.Container>
  )
}
