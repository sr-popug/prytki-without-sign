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

export default function Login() {
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
                <Input className='text-lg' id='name' placeholder='Ваш логин' />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label className='text-lg' htmlFor='framework'>
                  Пароль
                </Label>
                <Input
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
          <Button className='text-lg' variant='outline'>
            Отмена
          </Button>
          <Button className='text-lg'>Войти</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
