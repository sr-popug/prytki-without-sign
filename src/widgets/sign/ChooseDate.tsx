'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/shared/ui/button'
import { Calendar } from '@/shared/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import * as React from 'react'

export default function ChooseDate({
  dateState,
}: {
  dateState: {
    date: Date | undefined
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
  }
}) {
  const [date, setDate] = React.useState<Date>(new Date())
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    dateState.setDate(date)
  }

  return (
    <form id='choose-date' onSubmit={submit} className='choose-date mt-3'>
      <h2 className='block text-xl  mb-2'>Выберите подходящее для вас дату:</h2>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[320px] text-lg justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon />
            {date ? format(date, 'PPP') : <span>Выберите дату</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            mode='single'
            locale={ru}
            selected={date}
            onSelect={setDate}
            disabled={date =>
              // @ts-ignore: Unreachable code error
              date < new Date().setDate(new Date().getDate() - 1)
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Button className='text-lg ml-5	hover:bg-gray-400'>Подтвердить</Button>
    </form>
  )
}
