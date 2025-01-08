export function tableGameSign(numberOfPlayers: number, typeOfGame: string) {
  switch (typeOfGame) {
    case 'standard':
      if (numberOfPlayers <= 20) {
        return {
          text: '1 час',
          hours: 1,
        }
      }
      return {
        text: '1 час 30 минут',
        hours: 2,
      }
    case 'holidayInDark':
      if (numberOfPlayers <= 40) {
        return {
          text: '2 часа 45 минут',
          hours: 3,
        }
      }
      return {
        text: '3 часа 45 минут',
        hours: 4,
      }
  }
  return {
    text: '1 час 45 минут',
    hours: 2,
  }
}
