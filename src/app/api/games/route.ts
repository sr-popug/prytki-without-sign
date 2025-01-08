import { prisma } from '@/shared/lib/db'
import { NextRequest } from 'next/server'

export async function POST(NextRequest: NextRequest) {
  const data = await NextRequest.json()
  try {
    console.log(data, 1)
    const result = await prisma.game.create({
      data: data,
    })
    return new Response(JSON.stringify(result), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 403 })
  }
}
export async function GET(NextRequest: NextRequest) {
  const searchParams = NextRequest.nextUrl.searchParams
  const query = searchParams.get('date') || ''
  console.log(query)
  if (query) {
    try {
      const games = await prisma.game.findMany({
        where: {
          date: query,
        },
      })
      return new Response(JSON.stringify(games), { status: 200 })
    } catch (err) {
      return new Response(JSON.stringify(err), { status: 403 })
    }
  } else {
    try {
      const games = await prisma.game.findMany()
      return new Response(JSON.stringify(games), { status: 200 })
    } catch (err) {
      return new Response(JSON.stringify(err), { status: 403 })
    }
  }
}
export async function DELETE(NextRequest: NextRequest) {
  const searchParams = NextRequest.nextUrl.searchParams
  const query = searchParams.get('id') || ''
  console.log(searchParams)
  if (query) {
    try {
      const games = await prisma.game.delete({
        where: {
          id: Number(query),
        },
      })
      return new Response(JSON.stringify(games), { status: 200 })
    } catch (err) {
      return new Response(JSON.stringify(err), { status: 403 })
    }
  }
}
export async function PATCH(NextRequest: NextRequest) {
  const data = await NextRequest.json()
  try {
    const result = await prisma.game.update({
      where: {
        id: data.id,
      },
      data: data,
    })
    return new Response(JSON.stringify(result), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 403 })
  }
}
