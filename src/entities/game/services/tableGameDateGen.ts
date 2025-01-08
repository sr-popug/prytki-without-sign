import { toast } from '@/hooks/use-toast'
import { dateState } from '@/widgets/sign/ChooseTime'
import axios from 'axios'
import { GameEntity } from '../domain'

export async function tableGameDateGen(
  date: Date | undefined = undefined,
  dayRange: {
    from: Date | undefined
    to: Date | undefined
  } = { from: undefined, to: undefined }
) {
  const days: dateState[] = []
  if (date) {
    dayPusher(date, days, -6)
    for (let i = 0; i < 11; i++) await dayPusher(date, days)
    return days.splice(2, 11)
  } else {
    if (dayRange.from && dayRange.to) {
      const dates = getDates(dayRange.from, dayRange.to)
      for (let i = 0; i < dates.length; i++) {
        await dayPusher(dates[i], days)
      }
      return days
    }
  }
}

async function dayPusher(date: Date, days: dateState[], dayPush = 1) {
  date.setDate(date.getDate() + dayPush)
  date.setHours(12, 0, 0, 0)
  const games: GameEntity[] = []
  await axios
    .get(
      `${process.env.NEXT_PUBLIC_URL}/api/games?date=${date
        .toISOString()
        .slice(0, 10)}`
    )
    .then(res => {
      games.push(...res.data)
      games.sort((a, b) => a.time.localeCompare(b.time))
    })
    .catch(err => {
      toast({
        title: 'Ошибка',
        description: err.response.data.message,
        variant: 'destructive',
      })
    })
  date.setDate(date.getDate())
  days.push({
    date: date.toISOString().slice(0, 10),
    games,
    day:
      date.toLocaleString('ru', { day: 'numeric' }) +
      ' ' +
      mouthNames[date.getMonth()],
    weekDay: date.toLocaleString('ru', { weekday: 'long' }),
  })
}
export const mouthNames = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
]

const addDays = function (currentDate: Date, days: number) {
  const date = new Date(currentDate.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

function getDates(startDate: Date, stopDate: Date) {
  const dateArray = []
  let currentDate = startDate
  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate))
    currentDate = addDays(currentDate, 1)
  }
  return dateArray
}
