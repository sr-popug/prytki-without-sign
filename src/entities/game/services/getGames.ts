import { dateState } from '@/widgets/sign/ChooseTime'
import { GameEntity } from '../domain'

export default function getGames(res: dateState[]) {
  const games: GameEntity[] = []
  res.map(date => {
    date.games.map(game => games.push(game))
  })
  return games
}
