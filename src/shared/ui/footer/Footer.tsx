import { Earth, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className='main-footer mt-28 mx-auto max-w-full  font-sans
mb'
    >
      <article className='background absolute -z-10 right-0'>
        <Image
          src={'/footer-back.svg'}
          alt='background'
          width={1000}
          height={1000}
          className='w-[100vw]  '
        />
        <Image
          src={'/photo-1.png'}
          alt='background'
          width={300}
          height={300}
          className='absolute -z-10 top-[-130px]  opacity-10'
        />
      </article>
      <article className='content flex  justify-between text-lg'>
        <div className='left'>
          <Link
            href='/map'
            className='flex items-center gap-3 mb-4 hover:text-prytki transition-colors'
          >
            <Earth /> г. Мурманск, ул. Инженерная 22
          </Link>
          <a
            href='tel:782017'
            className='flex items-center gap-3 mb-4 hover:text-prytki transition-colors'
          >
            <Phone /> 78-2017
          </a>
          <a
            href='tel:+78152782017'
            className='flex items-center gap-3 mb-4 hover:text-prytki transition-colors'
          >
            <Phone /> +7(815) 278-20-17
          </a>
          <a
            href='https://vk.com/tamtemnomurmansk'
            className='underline hover:text-prytki transition-colors'
          >
            {' '}
            Группа ВКонтакте
          </a>
        </div>
        <div className='right '>
          <Link
            href='/'
            className='hover:text-prytki transition-colors block mb-4'
          >
            ГЛАВНАЯ
          </Link>
          <Link
            href='/products'
            className='hover:text-prytki transition-colors block mb-4'
          >
            ТОВАРЫ
          </Link>
          <Link
            href='/feedback'
            className='hover:text-prytki transition-colors block mb-4'
          >
            ОТЗЫВЫ
          </Link>
          <Link
            href='/map'
            className='hover:text-prytki transition-colors block mb-4'
          >
            КАК ДО НАС ДОБРАТЬСЯ
          </Link>
          <Link
            href='/sign'
            className='hover:text-prytki transition-colors block mb-4'
          >
            ЗАПИСАТЬСЯ НА ИГРУ!
          </Link>
          <div className='copyright text-gray-500 '>
            Сайт создал Цуканов Антон / © 2024 <br />
            Прятки в темноте г. Мурманск
          </div>
        </div>
      </article>
    </footer>
  )
}
