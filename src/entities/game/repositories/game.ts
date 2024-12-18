import { prisma } from '@/shared/lib/db'
import { Game } from '@prisma/client'

async function gamesList(where: object) {
  const games = await prisma.game.findMany({
    where,
  })
  return games
}
async function gameCreate(data: Game) {
  const game = await prisma.game.create({
    data,
  })
  return game
}
export const gameRepository = { gamesList, gameCreate }
