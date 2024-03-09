import { CaretLeft, CaretRight } from 'phosphor-react'
import * as C from './styles'
import { getWeekDays } from '@/utils/get-week-days'

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })

  return (
    <C.CalendarContainer>
      <C.CalendarHeader>
        <C.CalendarTitle>
          Dezembro <span>2022</span>
        </C.CalendarTitle>

        <C.CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </C.CalendarActions>
      </C.CalendarHeader>

      <C.CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <C.CalendarDay>1</C.CalendarDay>
            </td>
            <td>
              <C.CalendarDay>2</C.CalendarDay>
            </td>
            <td>
              <C.CalendarDay>3</C.CalendarDay>
            </td>
          </tr>
        </tbody>
      </C.CalendarBody>
    </C.CalendarContainer>
  )
}
