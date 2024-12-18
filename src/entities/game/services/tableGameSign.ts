export function tableGameSign(numberOfPlayers: number, typeOfGame: string) {
  switch (typeOfGame) {
    case 'standard':
      if (numberOfPlayers <= 20) {
        return 1.5
      }
      return 2
    case 'holidayInDark':
      if (numberOfPlayers <= 40) {
        return 3
      }
      return 4
  }
}
