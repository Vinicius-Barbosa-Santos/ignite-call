import { Calendar } from '../../../../../components/Calendar'
import * as C from './styles'

export function CalendarStep() {
  const isDateSelected = true

  return (
    <C.Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
        <C.TimePicker>
          <C.TimePickerHeader>
            terça-feira <span>20 de setembro</span>
          </C.TimePickerHeader>

          <C.TimePickerList>
            <C.TimePickerItem>08:00h</C.TimePickerItem>
            <C.TimePickerItem>09:00h</C.TimePickerItem>
            <C.TimePickerItem>10:00h</C.TimePickerItem>
            <C.TimePickerItem>11:00h</C.TimePickerItem>
            <C.TimePickerItem>12:00h</C.TimePickerItem>
            <C.TimePickerItem>13:00h</C.TimePickerItem>
            <C.TimePickerItem>14:00h</C.TimePickerItem>
            <C.TimePickerItem>15:00h</C.TimePickerItem>
            <C.TimePickerItem>16:00h</C.TimePickerItem>
            <C.TimePickerItem>17:00h</C.TimePickerItem>
            <C.TimePickerItem>18:00h</C.TimePickerItem>
          </C.TimePickerList>
        </C.TimePicker>
      )}
    </C.Container>
  )
}
