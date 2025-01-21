'use client'
import { Input } from '@/shared/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp'
import { Textarea } from '@/shared/ui/textarea'
import React from 'react'
export interface contactData {
  phone: string
  name: string
  description: string
}
export default function Prepayment({
  contactDataState,
}: {
  contactDataState: {
    setContactData: React.Dispatch<React.SetStateAction<contactData>>
    contactData: contactData
  }
}) {
  function phoneChange(newValue: string) {
    contactDataState.setContactData((prev: contactData) => {
      return {
        ...prev,
        phone: newValue,
      }
    })
  }
  function nameChange(e: React.ChangeEvent<HTMLInputElement>) {
    contactDataState.setContactData((prev: contactData) => {
      return {
        ...prev,
        name: e.target.value,
      }
    })
  }
  function descriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    contactDataState.setContactData((prev: contactData) => {
      return {
        ...prev,
        description: e.target.value,
      }
    })
  }
  return (
    <article id='prepayment' className='prepayment mt-16'>
      <h2 className='block text-xl  mb-2'>Ваши контактные данные</h2>
      <div className='flex flex-col md:flex-row gap-y-2  gap-x-5 mt-5'>
        <div>
          <p>Ваше имя</p>
          <Input
            value={contactDataState.contactData.name}
            onChange={nameChange}
            id='name'
            className='mt-1 text-lg w-64'
            placeholder='Имя'
          />
        </div>
        <div>
          <p>Номер телефона</p>
          <InputOTP
            value={contactDataState.contactData.phone}
            onChange={phoneChange}
            maxLength={10}
          >
            <span className='flex gap-1 text-nowrap'>
              +7 <span className='smd:block hidden'>(</span>
            </span>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <span className='smd:block hidden'>)</span>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
            <span className='smd:block hidden'>-</span>
            <InputOTPGroup>
              <InputOTPSlot index={6} />
              <InputOTPSlot index={7} />
            </InputOTPGroup>
            <span className='smd:block hidden'>-</span>
            <InputOTPGroup>
              <InputOTPSlot index={8} />
              <InputOTPSlot index={9} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
      <p className='mt-4 mb-1'>Комментарий</p>
      <Textarea
        value={contactDataState.contactData.description}
        onChange={descriptionChange}
        className='w-full md:w-1/3 h-36'
        placeholder='Комментарий'
      />
    </article>
  )
}
