export type GameEntity = {
  id: number
  duration: number
  client: string | null
  price: number | null
  date: string
  dateForSearch: string
  phone: string | null
  description: string | null
  numberOfPlayers: number | null
  typeOfPay: TypeOfPay | null
  typeOfGame: TypeOfGame | null
}

enum TypeOfPay {
  online,
  offline,
}

enum TypeOfGame {
  reservation,
  standard,
  holidayInDark,
}
