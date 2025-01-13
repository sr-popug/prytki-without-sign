import { MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function MainScreen() {
  return (
    <article className='main-screen relative'>
      <article className='content flex items-center justify-center md:justify-between mt-48 '>
        <div className='left flex flex-col items-center'>
          <Image src={'/logo.png'} alt='main-screen' width={450} height={450} />
          <p className='text-prytki font-serif -mt-5  text-3xl md:text-2xl xl:text-3xl text-center lg:-mt-10'>
            {' '}
            От темноты не спрятаться{' '}
          </p>
          <Link
            href='/sign'
            className=' block hover:scale-105 transition-all hover:drop-shadow-[0_1.2px_5px_rgba(254,205,3,0.5)] mt-10'
          >
            <Image
              src={'/button-main.svg'}
              alt='Записаться на игру'
              width={420}
              height={100}
            />
          </Link>
        </div>
        <div className='right hidden md:block'>
          <Image
            src={'/main-image.svg'}
            alt='main-screen'
            width={720}
            height={480}
          />
          <Link
            href='/map'
            className='flex items-center mt-5 gap-2 text-prytki underline text-xl transition-all hover:drop-shadow-[0_1.2px_5px_rgba(254,205,3,0.5)]'
          >
            <MapPin className=' w-3 h-3 lg:w-6 lg:h-6' />
            <p className=' text-sm lg:text-xl'>
              г. Мурманск, ул. Инженерная 22
            </p>
          </Link>
        </div>
      </article>
    </article>
  )
}
