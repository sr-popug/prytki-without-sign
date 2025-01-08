'use client'
import { tableGameSign } from '@/entities/game/server'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/shared/ui/button'
import ChooseDate from '@/widgets/sign/ChooseDate'
import ChooseRate, { rate } from '@/widgets/sign/ChooseRate'
import ChooseTime from '@/widgets/sign/ChooseTime'
import Prepayment, { contactData } from '@/widgets/sign/Prepayment'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function SignPage() {
  const router = useRouter()
  const submitButtonRef = useRef<HTMLButtonElement>(null)
  const [rate, setRate] = useState<rate>()
  const [time, setTime] = useState<string>()
  const [date, setDate] = useState<Date>()
  const [contactData, setContactData] = useState<contactData>({
    phone: '',
    name: '',
    description: '',
  })

  useEffect(() => {
    document
      .getElementById('choose-rate')
      ?.scrollIntoView({ behavior: 'smooth' })
  }, [date])
  useEffect(() => {
    document
      .getElementById('choose-time')
      ?.scrollIntoView({ behavior: 'smooth' })
  }, [rate?.rate])
  useEffect(() => {
    document
      .getElementById('prepayment')
      ?.scrollIntoView({ behavior: 'smooth' })
  }, [time])

  function submit() {
    submitButtonRef.current?.setAttribute('disabled', 'true')
    if (submitButtonRef.current)
      submitButtonRef.current.innerHTML = 'Загрузка...'

    axios
      .post('/api/games', {
        date: time?.split('T')[0],
        time: time?.split('T')[1],
        duration: Number(
          tableGameSign(rate?.numberOfPlayers || 4, rate?.rate || 'standard')
            .hours
        ),
        numberOfPlayers: Number(rate?.numberOfPlayers),
        price: Number(rate?.price),
        phone: contactData.phone,
        client: contactData.name,
        description: contactData.description,
        typeOfGame: rate?.rate,
      })
      .then(() => {
        toast({
          title: 'Ваша запись принята!',
          description: 'Мы свяжемся с вами в ближайшее время',
        })
        router.push('/')
      })
  }

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
          date={date}
          timeState={{ time, setTime }}
          hoursOfPlay={rate.numberOfPlayers}
          typeOfGame={rate.rate}
        />
      )}
      {time && (
        <Prepayment contactDataState={{ contactData, setContactData }} />
      )}
      {time && (
        <Button
          ref={submitButtonRef}
          onClick={submit}
          className='mt-5 w-1/3 text-lg py-5 hover:bg-prytki'
        >
          Забронировать
        </Button>
      )}
    </article>
  )
}
