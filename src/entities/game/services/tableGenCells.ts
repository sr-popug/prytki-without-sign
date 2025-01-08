import times from '@/lib/times'
import { dateState } from '@/widgets/sign/ChooseTime'
import { GameEntity } from '../domain'
export interface cell {
  color: string
  game?: GameEntity
  time: string
  day: string
}
export default function tableGenCells(days: dateState[]) {
  const cells: {
    day: string
    weekDay: string
    cells: cell[]
  }[] = []
  days.map(day => {
    const dayCells: cell[] = []
    for (let i = 0; i < times.length; i++) {
      if (day.games.find(game => game.time === times[i])) {
        for (
          let j = 0;
          j < (day.games.find(game => game.time === times[i])?.duration || 1);
          j++
        ) {
          if (day.games.find(game => game.time === times[i])?.price) {
            dayCells.push({
              color: 'bg-prytki',
              game: day.games.find(game => game.time === times[i]),
              time: times[i],
              day: day.date,
            })
          } else {
            dayCells.push({
              color: 'bg-prytki',
              game: day.games.find(game => game.time === times[i]),
              time: times[i],
              day: day.date,
            })
          }
        }

        i += (day.games.find(game => game.time === times[i])?.duration || 1) - 1
      } else {
        dayCells.push({
          color: 'null',
          time: times[i],
          day: day.date,
        })
      }
    }

    return cells.push({
      day: day.day,
      weekDay: day.weekDay,
      cells: dayCells.slice(0, 12),
    })
  })

  return cells
}
