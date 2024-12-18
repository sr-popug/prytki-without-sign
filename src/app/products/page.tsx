import Image from 'next/image'

export default function ProductsPage() {
  return (
    <article className='products-page'>
      <header className='relative mt-8 '>
        <h2 className='text-prytki font-serif text-6xl ml-3 drop-shadow-[0_5.10px_5px_rgba(254,205,3,0.2)]'>
          Товары
        </h2>
        <Image
          className='absolute -z-10 top-8'
          src={'/header-back-mini.svg'}
          alt='about-game'
          width={150}
          height={50}
        />
      </header>
    </article>
  )
}
