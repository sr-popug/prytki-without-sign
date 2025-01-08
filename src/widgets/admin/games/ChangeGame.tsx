'use client'
import { GameEntity } from '@/entities/game/domain'
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
import DeleteButton from './DeleteButton'
export default function ChangeGame({ game }: { game: GameEntity }) {
  const [date, setDate] = useState<Date>(new Date(game.date))
  const [phone, setPhone] = useState<string>(game.phone || '')
  const [type, setType] = useState<string>(game.typeOfGame || 'standard')
  const [time, setTime] = useState<string>(game.time)
  const [loading, setLoading] = useState<boolean>(false)
  const nameRef = useRef(null)
  const descriptionRef = useRef(null)
  const numberOfPlayersRef = useRef(null)
  const timePlayRef = useRef(null)
  const isPayRef = useRef(null)
  function phoneChange(newValue: string) {
    setPhone(newValue)
  }
  function submit() {
    setLoading(true)
    if (type !== 'reservation') {
      axios
        .patch(`${process.env.NEXT_PUBLIC_URL}/api/games`, {
          ...game,
          phone,
          typeOfGame: type,
          time,
          date: date.toISOString().slice(0, 10),
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
    } else {
      axios
        .patch(`${process.env.NEXT_PUBLIC_URL}/api/games`, {
          ...game,
          phone: null,
          typeOfGame: type,
          time,
          date: date.toISOString().slice(0, 10),
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
  // генерацию цены не забыть отправке
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className='w-full h-full'></div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className='flex justify-between items-center flex-row'>
          <AlertDialogTitle>Изменить игру</AlertDialogTitle>
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
                  <SelectItem value='reservation'>Резервация</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </AlertDialogHeader>
        <form>
          {type !== 'reservation' && (
            <div>
              <label htmlFor='name'>Имя забронировавшего</label>
              <Input
                ref={nameRef}
                defaultValue={game.client || ''}
                id='name'
                type='text'
                placeholder='Имя'
              />
            </div>
          )}
          {type !== 'reservation' && (
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
          )}
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

          <div className='mt-5 flex justify-between'>
            {type !== 'reservation' && (
              <div>
                <label htmlFor='numberOfPlayers'>Количество игроков</label>
                <Input
                  defaultValue={game.numberOfPlayers}
                  ref={numberOfPlayersRef}
                  id='numberOfPlayers'
                  type='number'
                  className='w-[80px]'
                />
              </div>
            )}
            <div>
              <label htmlFor='timePlay'>Время игры</label>
              <div className='flex gap-2 items-center'>
                <Input
                  ref={timePlayRef}
                  id='timePlay'
                  defaultValue={game.duration}
                  type='number'
                  className='w-[80px]'
                />
                ч
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <label htmlFor='name'>Комментарий</label>
            <Textarea
              ref={descriptionRef}
              defaultValue={game.description || ''}
              className='h-32'
              placeholder='Комментарий'
            />
          </div>
          {type !== 'reservation' && (
            <div className='flex items-center space-x-2 mt-5'>
              <Switch
                ref={isPayRef}
                defaultChecked={game.isPay}
                id='prepayment'
              />
              <Label htmlFor='prepayment'>Наличие оплаты предоплаты</Label>
            </div>
          )}
        </form>
        <AlertDialogFooter className='flex sm:justify-between'>
          <DeleteButton id={game.id} />
          <div className='flex gap-2'>
            <AlertDialogCancel>Отмена</AlertDialogCancel>

            <AlertDialogAction disabled={loading} onClick={submit}>
              Изменить
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
