'use client'
import { GameEntity } from '@/entities/game/domain'
import { tableGameDateGen, tableGameSign } from '@/entities/game/server'
import getGames from '@/entities/game/services/getGames'
import getNextGame from '@/entities/game/services/getNextGame'
import { mouthNames } from '@/entities/game/services/tableGameDateGen'

import tableGenCells, { cell } from '@/entities/game/services/tableGenCells'
import { useToast } from '@/hooks/use-toast'
import times from '@/lib/times'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/shared/ui/alert-dialog'
import { Input } from '@/shared/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp'
import { Label } from '@/shared/ui/label'
import { AxiosError } from 'axios'
import { LoaderCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export interface dateState {
  date: string
  games: Array<GameEntity>
  day: string
  weekDay: string
}

export default function ChooseTime({
  timeState,
  date,
  hoursOfPlay,
  typeOfGame,
}: {
  timeState: {
    time: string | undefined
    setTime: React.Dispatch<React.SetStateAction<string | undefined>>
  }
  date: Date | undefined
  hoursOfPlay: number
  typeOfGame: string
}) {
  const [loading, setLoading] = useState<boolean>()
  const [games, setGames] = useState<Array<GameEntity>>([])
  const [cells, setCells] = useState<
    {
      day: string
      weekDay: string
      cells: cell[]
    }[]
  >([])
  const { toast } = useToast()
  let dateObject

  useEffect(() => {
    setLoading(true)
    if (date) {
      dateObject = new Date(date)
      tableGameDateGen(dateObject)
        .then(res => {
          if (res) {
            setLoading(false)
            setCells(tableGenCells(res))
            setGames(getGames(res))
            console.log(getGames(res), tableGameSign(hoursOfPlay, typeOfGame))
          } else {
            toast({
              title: 'Ошибка',
              description: 'Нет данных',
              variant: 'destructive',
            })
          }
        })
        .catch((err: AxiosError) => {
          toast({
            title: 'Ошибка',
            description: err.response?.data + '',
            variant: 'destructive',
          })
        })
    }
  }, [date])

  function chooseTime(e: React.MouseEvent<HTMLButtonElement>) {
    const cell = e.target as HTMLDivElement
    if (getNextGame(games, cell, hoursOfPlay, typeOfGame)) {
      return timeState.setTime(undefined)
    }
    timeState.setTime(cell.dataset.date + 'T' + cell.dataset.time)
  }
  function addInExpectationList(e: React.MouseEvent<HTMLButtonElement>) {
    const cell = e.target as HTMLDivElement
    const date = new Date(cell.dataset.date + 'T' + cell.dataset.time)
    toast({
      title: 'Вы добавлены в лист ожидания',
      description:
        date.toLocaleString('ru', { day: 'numeric' }) +
        ' ' +
        mouthNames[date.getMonth()] +
        ', ' +
        cell.dataset.time,
    })
  }
  return (
    <article id='choose-time' className='choose-time mt-16'>
      <h2 className='block text-xl  mb-2'>
        Выберите подходящие для вас время{' '}
        <span className='text-gray-600'>
          (ваш тариф подразумевает {tableGameSign(hoursOfPlay, typeOfGame).text}{' '}
          игры)
        </span>
      </h2>
      <div className='flex gap-12 items-center mb-2'>
        <div className='flex gap-2'>
          <div className='bg-prytki border-white border-[1px] border-solid rounded-lg box-border p-2 text-white w-8 h-8'></div>
          <p className='text-lg'>- На это время занято </p>
        </div>

        <div className='flex gap-2'>
          <div className='bg-card border-white border-[1px] border-solid rounded-lg box-border p-2 text-white w-8 h-8'></div>
          <p className='text-lg'> - На это время свободно </p>
        </div>

        <div className='flex gap-2'>
          <div className='bg-white border-white border-[1px] border-solid rounded-lg box-border w-8 h-8'></div>
          <p className='text-lg'> - На это время нет записи </p>
        </div>
      </div>
      {!!loading && (
        <article className='flex items-center flex-col justify-center h-96 w-full'>
          <LoaderCircle
            className='animate-spin text-prytki'
            width={50}
            height={50}
          />
          <p>Загрузка</p>
        </article>
      )}
      {!loading && (
        <table className='w-full bg-card '>
          <tbody>
            <tr>
              <td className='border-[1px] border-gray-600 border-solid'></td>
              {times.map((time, i) => (
                <td
                  key={i}
                  className=' text-center p-2 border-collapse border-[1px] border-gray-600 border-solid'
                >
                  {time}
                </td>
              ))}
            </tr>
            {cells.map((date, i) => (
              <tr key={i}>
                <td className='border-collapse border-[1px] p-2 border-gray-600 border-solid'>
                  <p className='text-center '>{date.day}</p>
                  <p className='text-sm text-center -mt-2 text-gray-700'>
                    {date.weekDay}
                  </p>
                </td>
                {date.cells.map((cell, j) => (
                  <td
                    key={j}
                    id={' ' + (cell.game?.id || 1)}
                    className={`${cell.color} border-collapse border-[1px] border-gray-600 border-solid cursor-pointer h-14`}
                  >
                    {cell.game ? (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <div className='w-full h-full'></div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              На это время занято.
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Но вы можете оставить свои контактные данные и мы
                              сообщим вам, если это время освободится
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <div className='mt-1'>
                            <Label>Имя</Label>
                            <Input placeholder='Ваше имя' />
                          </div>
                          <div>
                            <Label>Номер телефона</Label>
                            <InputOTP maxLength={10}>
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
                          <AlertDialogFooter>
                            <AlertDialogCancel>Отмена</AlertDialogCancel>
                            <AlertDialogAction
                              data-time={cell.time}
                              data-date={cell.day}
                              onClick={addInExpectationList}
                            >
                              Подтвердить
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    ) : (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <div className='w-full h-full'></div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Забронировать время
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Вы действительно хотите выбрать это время?
                            </AlertDialogDescription>
                          </AlertDialogHeader>

                          <AlertDialogFooter>
                            <AlertDialogCancel>Отмена</AlertDialogCancel>
                            <AlertDialogAction
                              data-time={cell.time}
                              data-date={cell.day}
                              onClick={chooseTime}
                            >
                              Подтвердить
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                  </td>
                  // поиск по id не в призма а среди игр
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </article>
  )
}
