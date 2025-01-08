export function genPrice(numbersOfPlayers: number, typeOfGame: string) {
  if (typeOfGame === 'standard') {
    return numbersOfPlayers * 600
  }
  if (typeOfGame === 'holidayInDark') {
    if (numbersOfPlayers >= 22) {
      return numbersOfPlayers * 800
    }
    if (numbersOfPlayers >= 4 && numbersOfPlayers <= 6) {
      return 7000
    }

    if (numbersOfPlayers >= 7 && numbersOfPlayers <= 10) {
      return 9000
    }

    if (numbersOfPlayers >= 11 && numbersOfPlayers <= 15) {
      return 12000
    }

    if (numbersOfPlayers >= 16 && numbersOfPlayers <= 21) {
      return 15000
    }
  }
  return 1000
}
