'use client'
import { genPrice } from '@/entities/game/services/genPrice'
import { toast } from '@/hooks/use-toast'
import times from '@/lib/times'
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
import { Label } from '@/shared/ui/label'
import { Popover, PopoverTrigger } from '@/shared/ui/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'
import { Switch } from '@/shared/ui/switch'
import { Textarea } from '@/shared/ui/textarea'
import { PopoverContent } from '@radix-ui/react-popover'
import axios from 'axios'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { useRef, useState } from 'react'

export default function AddGame({
  dateGame,
  timeGame,
}: {
  dateGame: string
  timeGame: string
}) {
  const [date, setDate] = useState<Date>()
  const [phone, setPhone] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const nameRef = useRef(null)
  const priceRef = useRef(null)
  const descriptionRef = useRef(null)
  const numberOfPlayersRef = useRef(null)
  const timePlayRef = useRef(null)
  const isPayRef = useRef(null)
  function phoneChange(newValue: string) {
    setPhone(newValue)
  }
  function submit() {
    setLoading(true)
    if (type !== 'reservation' && date && nameRef.current) {
      axios
        .post(`${process.env.NEXT_PUBLIC_URL}/api/games`, {
          date: dateGame || date.toISOString().slice(0, 10),
          time: timeGame || time,
          phone,
          typeOfGame: type,
          client: nameRef.current.value,
          description: descriptionRef.current.value,
          numberOfPlayers: Number(numberOfPlayersRef.current.value),
          isPay: isPayRef.current.value === 'on' ? true : false,
          duration: Number(timePlayRef.current.value),
          price: Number(genPrice(numberOfPlayersRef.current.value, type)),
        })
        .then(() => {
          window.location.reload()
        })
        .catch(err => {
          toast({
            title: 'Ошибка',
            description: err.response.data.message,
            variant: 'destructive',
          })
        })
    } else {
      axios
        .post(`${process.env.NEXT_PUBLIC_URL}/api/games`, {
          phone: null,
          typeOfGame: type,
          time: timeGame || time,
          date: dateGame || date.toISOString().slice(0, 10),
          client: null,
          description: descriptionRef.current.value,
          numberOfPlayers: null,
          isPay: false,
          duration: Number(timePlayRef.current.value),
          price: null,
        })
        .then(() => {
          window.location.reload()
        })
        .catch(err => {
          toast({
            title: 'Ошибка',
            description: err.response.data.message,
            variant: 'destructive',
          })
        })
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {dateGame ? (
          <div className='w-full h-full'></div>
        ) : (
          <Button className='text-lg px-8'>Добавить игру</Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className='flex justify-between items-center flex-row'>
          <AlertDialogTitle>Добавить игру</AlertDialogTitle>
          <div>
            <Select value={type} onValueChange={setType}>
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
            <Input ref={nameRef} id='name' type='text' placeholder='Имя' />
          </div>
          <div className='mt-5'>
            <p>Номер телефона</p>
            <InputOTP
              value={phone}
              onChange={phoneChange}
              id='phone'
              maxLength={10}
            >
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
          {!dateGame && (
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

                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className='w-[100px]'>
                    <SelectValue placeholder='Время' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {times.map(time => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <div className='mt-5 flex justify-between'>
            <div>
              <label htmlFor='numberOfPlayers'>Кол-во игроков</label>
              <Input
                ref={numberOfPlayersRef}
                id='numberOfPlayers'
                type='number'
                className='w-[80px]'
              />
            </div>

            <div>
              <label htmlFor='timeOfPlay'>Время игры</label>
              <div className='flex gap-2 items-center'>
                <Input
                  ref={timePlayRef}
                  id='timeOfPlay'
                  type='number'
                  className='w-[80px]'
                />
                ч
              </div>
            </div>
            {!dateGame && (
              <div>
                <label htmlFor='price'>Цена</label>
                <Input
                  ref={priceRef}
                  id='price'
                  type='number'
                  className='w-[90px]'
                />
              </div>
            )}
          </div>

          <div className='mt-5'>
            <label htmlFor='description'>Комментарий</label>
            <Textarea
              ref={descriptionRef}
              className='h-32'
              placeholder='Комментарий'
            />
          </div>
          <div className='flex items-center space-x-2 mt-5'>
            <Switch ref={isPayRef} id='prepayment' />
            <Label htmlFor='prepayment'> Наличие оплаты предоплаты</Label>
          </div>
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction onClick={submit} disabled={loading}>
            Добавить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
