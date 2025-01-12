'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from './header.module.css'

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <button
        onClick={toggleMenu}
        className='bg-transparent border-none p-2 ml-2 flex xl:hidden  flex-col gap-1'
      >
        <div className='w-8 bg-prytki h-[1px]'></div>
        <div className='w-8 bg-prytki h-[1px]'></div>
        <div className='w-8 bg-prytki h-[1px]'></div>
      </button>
      {isOpen && (
        <article className='opened-menu absolute top-16 left-0 right-0 z-50 bg-opacity-70 bg-black  xl:hidden p-2 flex flex-col items-center'>
          <nav className='ml-2 block xl:ml-0'>
            <ul className='list-none flex flex-col  gap-2 '>
              {[
                ['Главная', '/'],
                ['Товары', '/products'],
                ['Отзывы', '/feedback'],
                ['Как до нас добраться?', '/map'],
              ].map(([title, href]) => (
                <li key={title}>
                  <Link
                    className='transition-colors text-nowrap  hover:text-prytki block text-xl font-thin text-center'
                    href={href}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <article className='right flex flex-wrap justify-center  items-center gap-x-2'>
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
        </article>
      )}
    </>
  )
}
