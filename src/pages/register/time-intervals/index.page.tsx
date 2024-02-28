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

import { Controller, useFieldArray, useForm } from 'react-hook-form'

import * as z from 'zod'

import { getWeekDays } from '@/utils/get-week-days'

const timeIntervalsFormSchema = z.object({})

export default function TimeIntervals() {
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })

  const weekDays = getWeekDays()

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  const intervals = watch('intervals')

  async function handleSetTimeIntervals() {}

  return (
    <C.Container>
      <C.Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </C.Header>

      <CMain.IntervalBox
        as="form"
        onSubmit={handleSubmit(handleSetTimeIntervals)}
      >
        <CMain.IntervalsContainer>
          {fields.map((field, index) => {
            return (
              <CMain.IntervalsItem key={field.id}>
                <CMain.IntervalsDay>
                  <Controller
                    name={`intervals.${index}.enabled`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Checkbox
                          onCheckedChange={(checked: boolean) => {
                            field.onChange(checked === true)
                          }}
                          checked={field.value}
                        />
                      )
                    }}
                  />
                  <Text>{weekDays[field.weekDay]}</Text>
                </CMain.IntervalsDay>
                <CMain.IntervalsInputs>
                  <TextInput
                    size={'sm'}
                    type={'time'}
                    step={60}
                    disabled={intervals[index].enabled === false}
                    {...register(`intervals.${index}.startTime`)}
                  />
                  <TextInput
                    size={'sm'}
                    type={'time'}
                    step={60}
                    disabled={intervals[index].enabled === false}
                    {...register(`intervals.${index}.endTime`)}
                  />
                </CMain.IntervalsInputs>
              </CMain.IntervalsItem>
            )
          })}
        </CMain.IntervalsContainer>

        <Button type="submit">
          Próximo Passo
          <ArrowArcRight />
        </Button>
      </CMain.IntervalBox>
    </C.Container>
  )
}
