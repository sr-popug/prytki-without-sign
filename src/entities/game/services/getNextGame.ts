import { toast } from '@/hooks/use-toast'
import { GameEntity } from '../domain'
import { tableGameSign } from './tableGameSign'

export default function getNextGame(
  games: GameEntity[],
  cell: HTMLDivElement,
  hoursOfPlay: number,
  typeOfGame: string
) {
  let returnTime = false
  if (games.length) {
    games.forEach(game => {
      if (
        Number(cell.dataset.time?.split(':')[0]) +
          tableGameSign(hoursOfPlay, typeOfGame).hours >
        22
      ) {
        returnTime = true
        return toast({
          title: 'Вы не можете забронировать это время!',
          description: `Выберите время где свободно минимум ${
            tableGameSign(hoursOfPlay, typeOfGame).hours - 1
          } часа после выбранного времени`,
        })
      }
      if (game.date !== cell.dataset.date) {
        return
      }
      if (
        Number(game.time.split(':')[0]) <
          Number(cell.dataset.time?.split(':')[0]) +
            tableGameSign(hoursOfPlay, typeOfGame).hours &&
        Number(game.time.split(':')[0]) >
          Number(cell.dataset.time?.split(':')[0])
      ) {
        returnTime = true
        return toast({
          title: 'Вы не можете забронировать это время!',
          description: `Выберите время где свободно минимум ${
            tableGameSign(hoursOfPlay, typeOfGame).hours - 1
          } часа после выбранного времени`,
        })
      }
    })
  } else if (
    Number(cell.dataset.time?.split(':')[0]) +
      tableGameSign(hoursOfPlay, typeOfGame).hours >
    22
  ) {
    returnTime = true
    return toast({
      title: 'Вы не можете забронировать это время!',
      description: `Выберите время где свободно минимум ${
        tableGameSign(hoursOfPlay, typeOfGame).hours - 1
      } часа после выбранного времени`,
    })
  }

  return returnTime
}
