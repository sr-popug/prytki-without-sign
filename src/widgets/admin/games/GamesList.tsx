'use client'

import { GameEntity } from '@/entities/game/domain'
import { tableGameDateGen } from '@/entities/game/server'
import getGames from '@/entities/game/services/getGames'
import tableGenCells, { cell } from '@/entities/game/services/tableGenCells'
import { useToast } from '@/hooks/use-toast'
import times from '@/lib/times'

import { AxiosError } from 'axios'
import { LoaderCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { DateRange } from 'react-day-picker'
import AddGame from './AddGame'
import ChangeGame from './ChangeGame'
import RangePicker from './RangePicker'
export default function GamesList() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  })
  const [games, setGames] = useState<GameEntity[]>()
  const [loading, setLoading] = useState<boolean>()
  const [cells, setCells] = useState<
    {
      day: string
      weekDay: string
      cells: cell[]
    }[]
  >([])
  const { toast } = useToast()
  useEffect(() => {
    setLoading(true)
    if (date?.to) {
      tableGameDateGen(undefined, { from: date.from, to: date.to })
        .then(res => {
          if (res) {
            setGames(getGames(res))
            setCells(tableGenCells(res))
            setLoading(false)
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

  return (
    <article className='mt-10'>
      <RangePicker dateState={{ date, setDate }} />

      <div className='flex gap-12 items-center mb-2 mt-5'>
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
      {!!loading && !date?.to && (
        <article className='flex items-center flex-col justify-center h-96 w-full'>
          Выберите промежуток
        </article>
      )}
      {!!loading && !!date?.to && (
        <article className='flex items-center flex-col justify-center h-96 w-full'>
          <LoaderCircle
            className='animate-spin text-prytki'
            width={50}
            height={50}
          />
          <p>Загрузка</p>
        </article>
      )}

      {!loading && cells.length && (
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
                      <ChangeGame game={cell.game} />
                    ) : (
                      <AddGame dateGame={cell.day} timeGame={cell.time} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </article>
  )
}
