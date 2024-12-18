import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp'
import { Textarea } from '@/shared/ui/textarea'

export default function Prepayment() {
  return (
    <article className='prepayment mt-16'>
      <h2 className='block text-xl  mb-2'>Ваши контактные данные</h2>
      <div className='flex gap-5 mt-5'>
        <div>
          <p>Ваше имя</p>
          <Input id='name' className='mt-1 text-lg w-64' placeholder='Имя' />
        </div>
        <div>
          <p>Номер телефона</p>
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
      </div>
      <p className='mt-4 mb-1'>Комментарий</p>
      <Textarea className='w-1/3 h-36' placeholder='Комментарий' />

      <Button className='mt-5 w-1/3 text-lg py-5 hover:bg-prytki'>
        Забронировать
      </Button>
    </article>
  )
}
