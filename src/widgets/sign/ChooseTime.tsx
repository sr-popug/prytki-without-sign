'use client'

import { tableGameSign } from '@/entities/game/server'

export default function ChooseTime({
  timeState,
  hoursOfPlay,
  typeOfGame,
}: any) {
  function cellClickHandler(e: React.MouseEvent<HTMLTableCellElement>) {
    const cell = e.target as HTMLDivElement
    if (cell.classList.contains('bg-prytki')) {
    }
    if (cell.classList.contains('bg-white')) {
    }
  }
  return (
    <article className='choose-time mt-16'>
      <h2 className='block text-xl  mb-2'>
        Выберите подходящие для вас время{' '}
        <span className='text-gray-600'>
          (ваш тариф подразумевает {tableGameSign(hoursOfPlay, typeOfGame)} часа
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

      <table className='w-full bg-card '>
        <tbody>
          <tr>
            <td className='border-[1px] border-gray-600 border-solid'></td>
            {[
              '10:00',
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
            ].map((time, i) => (
              <td
                key={i}
                className=' text-center p-2 border-collapse border-[1px] border-gray-600 border-solid'
              >
                {time}
              </td>
            ))}
          </tr>
          {[
            {
              day: '17 января',
              weekDay: 'Четверг',
            },
            {
              day: '18 января',
              weekDay: 'Пятница',
            },
            {
              day: '19 января',
              weekDay: 'Суббота',
            },
            {
              day: '20 января',
              weekDay: 'Воскресенье',
            },
            {
              day: '21 января',
              weekDay: 'Понедельник',
            },
            {
              day: '22 января',
              weekDay: 'Вторник',
            },
            {
              day: '23 января',
              weekDay: 'Среда',
            },
            {
              day: '24 января',
              weekDay: 'Четверг',
            },
            {
              day: '25 января',
              weekDay: 'Пятница',
            },
            {
              day: '26 января',
              weekDay: 'Суббота',
            },
          ].map((date, i) => (
            <tr key={i}>
              <td className='border-collapse border-[1px] p-2 border-gray-600 border-solid'>
                <p className='text-center  '>{date.day}</p>
                <p className='text-sm text-center -mt-2 text-gray-700'>
                  {date.weekDay}
                </p>
              </td>
              <td
                onClick={cellClickHandler}
                className='bg-white border-collapse cursor-pointer border-[1px]  border-gray-600 border-solid'
              ></td>
              <td
                onClick={cellClickHandler}
                className='border-collapse cursor-pointer border-[1px]  border-gray-600 border-solid'
              ></td>
              <td
                onClick={cellClickHandler}
                className='border-collapse cursor-pointer border-[1px]  border-gray-600 border-solid'
              ></td>
              <td
                onClick={cellClickHandler}
                className='border-collapse cursor-pointer border-[1px]  border-gray-600 border-solid'
              ></td>
              <td
                onClick={cellClickHandler}
                className='border-collapse cursor-pointer border-[1px]  border-gray-600 border-solid'
              ></td>
              <td
                onClick={cellClickHandler}
                className='border-collapse cursor-pointer border-[1px]  border-gray-600 border-solid'
              ></td>
              <td
                onClick={cellClickHandler}
                className='border-collapse cursor-pointer border-[1px]  border-gray-600 border-solid'
              ></td>
              <td
                onClick={cellClickHandler}
                className='border-collapse cursor-pointer border-[1px]  border-gray-600 border-solid'
              ></td>
              <td
                onClick={cellClickHandler}
                className='bg-prytki border-collapse cursor-pointer border-[1px]  border-gray-600 border-solid'
              ></td>
              <td
                onClick={cellClickHandler}
                className='border-collapse cursor-pointer border-[1px]  border-gray-600 border-solid'
              ></td>
              <td
                onClick={cellClickHandler}
                className='border-collapse cursor-pointer border-[1px]  border-gray-600 border-solid'
              ></td>
              <td
                onClick={cellClickHandler}
                className='border-collapse cursor-pointer border-[1px]  border-gray-600 border-solid'
              ></td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  )
}
