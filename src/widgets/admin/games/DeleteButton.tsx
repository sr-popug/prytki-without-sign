'use client'
import { toast } from '@/hooks/use-toast'
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

import { Button } from '@/shared/ui/button'
import axios from 'axios'
import { Trash } from 'lucide-react'
import { useState } from 'react'

export default function DeleteButton({ id }: { id: number }) {
  const [loading, setLoading] = useState<boolean>(false)
  function deleteClick() {
    setLoading(true)
    axios
      .delete(`${process.env.NEXT_PUBLIC_URL}/api/games?id=${id}`)
      .then(() => {
        window.location.reload()
      })
      .catch(err => {
        toast({
          title: 'Ошибка',
          description: err.response.data.message,
          variant: 'destructive',
        })
      })
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button disabled={loading} className='text-sm' variant='destructive'>
          {loading ? (
            'Удаление...'
          ) : (
            <>
              <Trash /> Удалить
            </>
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Вы уверены, что хотите удалить игру № {id}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Это действие удалит игру безвозвратно!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction onClick={deleteClick}>
            Удалить игру
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
