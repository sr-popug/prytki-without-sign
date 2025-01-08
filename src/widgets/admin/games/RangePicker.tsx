import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/shared/ui/button'
import { Calendar } from '@/shared/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'
import { ru } from 'date-fns/locale'
import { DateRange } from 'react-day-picker'

export default function RangePicker({
  dateState,
}: {
  dateState: {
    date: DateRange
    setDate: React.Dispatch<React.SetStateAction<DateRange>>
  }
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id='date'
          variant={'outline'}
          className={cn(
            'w-[300px] justify-start text-left font-normal text-lg',
            !dateState.date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon />
          {dateState.date?.from ? (
            dateState.date.to ? (
              <>
                {format(dateState.date.from, 'LLL dd, y')} -{' '}
                {format(dateState.date.to, 'LLL dd, y')}
              </>
            ) : (
              format(dateState.date.from, 'LLL dd, y')
            )
          ) : (
            <span>Выберите промежуток</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          initialFocus
          mode='range'
          locale={ru}
          defaultMonth={dateState.date?.from}
          selected={dateState.date}
          onSelect={dateState.setDate}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  )
}
