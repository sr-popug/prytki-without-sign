import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className='main-header mx-auto max-w-full  font-sans flex items-center mt-1 justify-between h-20'>
      <Link href='/' className=' block logo mr-16 sm:hidden xl:block'>
        <Image
          src='/logo-head.png'
          alt='Логотип пряток'
          width={83}
          height={55}
        />
      </Link>

      <nav className='lg:ml-2'>
        <ul className='list-none flex  gap-12 '>
          {[
            ['Главная', '/'],
            ['Товары', '/products'],
            ['Отзывы', '/feedback'],
            ['Как до нас добраться?', '/map'],
          ].map(([title, href]) => (
            <li key={title}>
              <Link
                className='transition-colors text-nowrap  hover:text-prytki text-xl font-thin '
                href={href}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <article className='right ml-24 flex  items-center gap-4'>
        <a
          href='tel:782017'
          className={`${styles.phone} font-serif text-nowrap text-4xl text-center hover:text-prytki transition-colors`}
        >
          78-2017
        </a>

        <Link
          href='/sign'
          className='font-serif text-3xl text-center bg-prytki py-1 px-12 rounded-xl text-black hover:bg-yellow-600 text-nowrap  transition-colors block lg:mr-2'
        >
          Записаться на игру
        </Link>
      </article>
    </header>
  )
}
