import Image from 'next/image'
import Link from 'next/link'

export default function ProductsPage() {
  return (
    <article className='products-page'>
      <header className='relative mt-8 '>
        <h2 className='text-prytki font-serif text-center md:text-left text-6xl ml-3 drop-shadow-[0_5.10px_5px_rgba(254,205,3,0.2)]'>
          Товары
        </h2>
        <Image
          className='absolute -z-10 top-8 hidden md:block '
          src={'/header-back-mini.svg'}
          alt='about-game'
          width={150}
          height={50}
        />
      </header>
      <ul className='w-full links mt-16 flex justify-around gap-5 flex-wrap '>
        {[
          {
            title: 'Приглашение на праздник',
            img: '/product-inv.png',
            description:
              'Теперь у нас можно приобрести фирменные приглашения 🥳 Заполните только дату и время, и можно вручать вашим гостям!',
            price: 50,
            link: 'https://vk.com/market/product/priglashenie-na-prazdnik-131075393-5956874',
          },
          {
            title: 'Сертификат на игру № 1',
            img: '/product-sert7000.png',
            description:
              '«Прятки в темноте» предлагают подарочные сертификат на игру для 6-х человек.',
            price: 7000,
            link: 'https://vk.com/market/product/sertifikat-na-igru-dlya-6ti-chelovek-131075393-1226158',
          },
          {
            title: 'Сертификат на игру № 2',
            img: '/product-sert9000.png',
            description:
              '«Прятки в темноте» предлагают подарочные сертификат на игру для 10-х человек',
            price: 9000,
            link: 'https://vk.com/market/product/sertifikat-na-igru-dlya-10ti-chelovek-131075393-1226161',
          },
        ].map(el => {
          return (
            <li key={el.title} className='border p-4 rounded-lg  gap-5  '>
              <picture className='flex items-center justify-center'>
                <Image
                  className='w-full'
                  src={el.img}
                  alt={el.title}
                  width={250}
                  height={250}
                />
              </picture>
              <article>
                <header>
                  <p className='text-center text-prytki text-xl '>
                    {el.price} ₽
                  </p>
                  <h3 className='text-center text-2xl mb-3'>{el.title}</h3>
                </header>
                <p className='max-w-80 min-h-24 text-gray-500'>
                  {el.description}
                </p>
                <Link
                  target='_blank'
                  href={el.link}
                  className='block text-prytki px-5 py-2 border border-prytki	border-solid rounded-lg box-border mt-5 hover:bg-prytki hover:text-black transition-colors duration-300 w-full text-center text-lg'
                >
                  Купить
                </Link>
              </article>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
