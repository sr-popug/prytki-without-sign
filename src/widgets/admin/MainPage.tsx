import Image from 'next/image'
import Link from 'next/link'

export default function MainPage() {
  return (
    <article>
      <header className='relative mt-8 '>
        <h2 className='text-prytki font-serif text-6xl ml-5 drop-shadow-[0_5.10px_5px_rgba(254,205,3,0.2)]'>
          Админ панель
        </h2>
        <Image
          className='absolute -z-10 top-8'
          src={'/header-back-medium.svg'}
          alt='about-game'
          width={290}
          height={30}
        />
      </header>

      <ul className='links mt-16 flex justify-between  '>
        {[
          {
            title: 'Игры',
            link: '/admin/games',
            img: '/photo-2.png',
          },
          {
            title: 'Товары',
            link: '/admin/products',
            img: '/photo-6.png',
          },
          {
            title: 'Пользователи',
            link: '/admin/users',
            img: '/photo-7.png',
          },
        ].map(({ title, link, img }) => (
          <li
            key={title}
            className='border-[1px] hover:border-gray-500 transition-colors p-4 border-solid rounded-lg box-border'
          >
            <Link href={link}>
              <Image src={img} alt='about-game' width={300} height={300} />
              <p className='text-center text-xl mt-8'>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}
