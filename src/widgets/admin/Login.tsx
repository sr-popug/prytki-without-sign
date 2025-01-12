'use client'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/shared/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

export default function Login() {
  const router = useRouter()
  const { toast } = useToast()
  const loginRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  function submit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (
      process.env.NEXT_PUBLIC_TOKEN ==
      loginRef.current?.value + '@' + passwordRef.current?.value
    ) {
      localStorage.setItem('token', process.env.NEXT_PUBLIC_TOKEN)
      window.location.reload()
    } else {
      toast({
        title: 'Ошибка',
        description: 'Неверный логин или пароль',
        variant: 'destructive',
      })
    }
  }
  function close() {
    router.back()
  }
  return (
    <div className='flex  justify-center items-center h-[80vh]'>
      <Card className=' text-2xl'>
        <CardHeader>
          <CardTitle className='font-thin'>Войти в админ панель</CardTitle>
          <CardDescription>
            Для этого ниже введите имя пользователя и пароль
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label className='text-lg' htmlFor='name'>
                  Логин
                </Label>
                <Input
                  ref={loginRef}
                  className='text-lg'
                  id='name'
                  placeholder='Ваш логин'
                />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label className='text-lg' htmlFor='framework'>
                  Пароль
                </Label>
                <Input
                  ref={passwordRef}
                  className='text-lg'
                  id='name'
                  type='password'
                  placeholder='Пароль'
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button onClick={close} className='text-lg' variant='outline'>
            Отмена
          </Button>
          <Button onClick={submit} className='text-lg'>
            Войти
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
