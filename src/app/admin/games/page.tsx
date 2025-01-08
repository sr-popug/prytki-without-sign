import AddGame from '@/widgets/admin/games/AddGame'
import GameList from '@/widgets/admin/games/GamesList'
import Image from 'next/image'
export default function GamesPageAdmin() {
  return (
    <article className=''>
      <header className='relative mt-8 flex items-center justify-between'>
        <div>
          <h2 className='text-prytki font-serif text-6xl ml-5 drop-shadow-[0_5.10px_5px_rgba(254,205,3,0.2)]'>
            Игры
          </h2>
          <Image
            className='absolute -z-10 top-8'
            src={'/header-back-mini.svg'}
            alt='about-game'
            width={150}
            height={30}
          />
        </div>
        <AddGame dateGame={''} timeGame={''} />
      </header>
      <GameList />
    </article>
  )
}
