'use client'
import ChooseDate from '@/widgets/sign/ChooseDate'
import ChooseRate from '@/widgets/sign/ChooseRate'
import ChooseTime from '@/widgets/sign/ChooseTime'
import Prepayment from '@/widgets/sign/Prepayment'
import Image from 'next/image'
import React from 'react'

export default function SignPage() {
  const [rate, setRate] = React.useState<{
    rate: 'standard' | 'holidayInDark'
    numberOfPlayers: number
  }>()
  const [time, setTime] = React.useState<string>()
  const [date, setDate] = React.useState<Date>()
  return (
    <article className='sign-page'>
      <header className='relative mt-8 '>
        <h2 className='text-prytki font-serif text-6xl ml-5 drop-shadow-[0_5.10px_5px_rgba(254,205,3,0.2)]'>
          Записаться на игру!
        </h2>
        <Image
          className='absolute -z-10 top-8'
          src={'/header-back.svg'}
          alt='about-game'
          width={450}
          height={50}
        />
      </header>

      <ChooseDate dateState={{ date, setDate }} />
      {date && <ChooseRate rateState={{ rate, setRate }} />}
      {rate?.rate && (
        <ChooseTime
          timeState={{ time, setTime }}
          hoursOfPlay={rate.numberOfPlayers}
          typeOfGame={rate.rate}
        />
      )}
      {!time && <Prepayment />}
    </article>
  )
}
