export type GameEntity = {
  id: number
  duration: number
  client: string | null
  price: number | null
  date: string
  time: string
  dateForSearch: string
  phone: string | null
  description: string | null
  numberOfPlayers: number | null
  isPay: boolean
  typeOfGame: TypeOfGame | null
}

enum TypeOfGame {
  reservation,
  standard,
  holidayInDark,
}
