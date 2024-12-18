'use client'
import { cn } from '@/lib/utils'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/shared/ui/alert-dialog'
import { Button } from '@/shared/ui/button'
import { Calendar } from '@/shared/ui/calendar'
import { Input } from '@/shared/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp'
import { Popover, PopoverTrigger } from '@/shared/ui/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'
import { Textarea } from '@/shared/ui/textarea'
import { PopoverContent } from '@radix-ui/react-popover'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'
export default function AddGame() {
  const [date, setDate] = useState<Date>()
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='text-lg px-8'>Добавить игру</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className='flex justify-between items-center flex-row'>
          <AlertDialogTitle>Добавить игру</AlertDialogTitle>
          <div>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Тип' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='standard'>Стандарт</SelectItem>
                  <SelectItem value='holidayInDark'>
                    Праздник в темноте
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </AlertDialogHeader>
        <form>
          <div>
            <label htmlFor='name'>Имя забронировавшего</label>
            <Input id='name' type='text' placeholder='Имя' />
          </div>
          <div className='mt-5'>
            <p>Номер телефона</p>
            <InputOTP id='phone' maxLength={10}>
              +7 (
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              )
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
              -
              <InputOTPGroup>
                <InputOTPSlot index={6} />
                <InputOTPSlot index={7} />
              </InputOTPGroup>
              -
              <InputOTPGroup>
                <InputOTPSlot index={8} />
                <InputOTPSlot index={9} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className='flex justify-between mt-5 '>
            <div>
              <label className='block' htmlFor='date'>
                {' '}
                Дата{' '}
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[200px]  justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon />
                    {date ? format(date, 'PPP') : <span>Выберите дату</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className='w-auto p-0 bg-background border-[1px] rounded-lg'
                  align='start'
                >
                  <Calendar
                    id='date'
                    mode='single'
                    locale={ru}
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label htmlFor='time'>Время</label>
              <Input id='time' type='time' />
            </div>
          </div>

          <div className='mt-5 flex justify-between'>
            <div>
              <label htmlFor='numberOfPlayers'>Количество игроков</label>
              <Input id='numberOfPlayers' type='number' className='w-[80px]' />
            </div>
            <div>
              <label htmlFor='name'>Время игры</label>
              <div className='flex gap-2 items-center'>
                <Input type='number' className='w-[80px]' />
                ч
                <Input type='number' className='w-[80px]' />
                мин
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <label htmlFor='name'>Комментарий</label>
            <Textarea placeholder='Комментарий' />
          </div>
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction>Добавить</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
