'use client'

import { Card } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { useState } from 'react'

export default function ChooseRate({ rateState }: any) {
  const [activeCard, setActiveCard] = useState('')
  const [numberOfPlayers, setNumberOfPlayers] = useState(2)
  function changeNumberOfPlayers(e: React.ChangeEvent<HTMLInputElement>) {
    setNumberOfPlayers(Number(e.target.value))
  }
  function submitCard(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const target = e.target as Element
    setActiveCard(target.classList[0])
    rateState.setRate({
      rate: target.classList[0],
      numberOfPlayers,
    })
  }
  return (
    <div className='choose-rate mt-16'>
      <h2 className='block text-xl  mb-2'>
        Выберите тариф и количество участников
      </h2>
      <p className='text-prytki'>
        <strong className='underline'>ВАЖНО</strong>: Участниками являются лишь
        те, кто будет принимать непостредственное участие в игре (т.е. родители
        не в счёт). <br /> А также важно, чтобы возраст всех участников превышал{' '}
        <span className='underline'> 6 лет</span> .{' '}
      </p>
      <div className='flex items-center gap-2'>
        <Input
          defaultValue={2}
          onChange={changeNumberOfPlayers}
          className='w-16 mt-2 text-lg'
          placeholder='0'
          type='number'
          max={50}
          min={2}
        />
        <p className='text-lg'>Участников</p>
      </div>
      <div className='flex justify-between gap-2 mt-3'>
        {[
          {
            type: 'holidayInDark',
            title: 'Праздник в темноте! ',
            description:
              'Веселый праздничный пакет для команды отважных друзей.',
            numberOfPlayers: 'от 4 до 40 игроков',
            options: [
              '3 - 4 раунда игры',
              'Праздничное чаепитие',
              'Праздничная дискотека',
              'Игра в мафию с ведущим',
              'Эксклюзивный раунд с актёром',
              'Антуражная зона отдыха',
              'Фотоссесия',
              'Актёр в локации, который будет всячески пугать игроков ',
              'Незабываемые эмоции от веселого праздника',
            ],
            oldPrice: '12.000 ₽',
            price: '9.500 ₽',
          },
          {
            type: 'standard',
            title: 'Обычная игра ',
            description: 'Самая обычная игра “Прятки в темноте”',
            numberOfPlayers: 'от 2 до 20 игроков',
            options: [
              '2 раунда игры',
              'Актёр в локации, который будет всячески пугать игроков',
              'Незабываемые эмоции от веселой игры',
              'Большая интересная локация с ловушками',
              'Антуражная зона отдыха',
            ],

            price: '7.000 ₽',
          },
        ].map((item, index) => (
          <Card
            key={index}
            className={`${activeCard === item.type ? 'border-prytki' : ''} ${
              numberOfPlayers <= 1 ? 'opacity-50' : ''
            } w-[49%] p-6 text-lg flex flex-col justify-between transition-all duration-300 `}
          >
            <div className='top-content'>
              <header>
                <div className='flex items-center justify-between g-5'>
                  <h3
                    className={` ${
                      activeCard === item.type ? 'text-prytki' : ''
                    } text-2xl `}
                  >
                    {item.title}
                  </h3>
                  <p className='text-gray-600 text-sm'>
                    {item.numberOfPlayers}
                  </p>
                </div>
                <p className='text-sm text-gray-600'>{item.description}</p>
              </header>
              <div className='list mt-3'>
                <p>Что вы получите?</p>
                <ul className='list-disc pl-10'>
                  {item.options.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <footer className='footer mt-8 flex justify-between items-center'>
              <button
                disabled={numberOfPlayers <= 1}
                onClick={submitCard}
                className={`${item.type} text-lg  px-16 py-2 text-black rounded-md bg-prytki hover:bg-yellow-600 text-xl disabled:hover:bg-prytki`}
              >
                Выбрать
              </button>
              <div className='price flex g-5 items-center'>
                {item.oldPrice && (
                  <p className='text-gray-600 line-through mr-5'>
                    {item.oldPrice}
                  </p>
                )}
                <p className='text-prytki'>{item.price}</p>
              </div>
            </footer>
          </Card>
        ))}
      </div>
    </div>
  )
}
