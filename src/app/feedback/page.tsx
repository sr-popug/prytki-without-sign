import Image from 'next/image'

export default function FeedbackPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <header className='relative mt-8 '>
        <h2 className='text-prytki font-serif text-6xl ml-5 drop-shadow-[0_5.10px_5px_rgba(254,205,3,0.2)]'>
          Что говорят о нас люди?
        </h2>
        <Image
          className='absolute -z-10 top-8'
          src={'/header-back.svg'}
          alt='about-game'
          width={450}
          height={50}
        />
      </header>
      <div className='w-[600px] h-[800px] overflow-hidden relative'>
        <iframe
          className='w-full h-full border-prytki border-[1px] border-solid rounded-lg box-border mt-5 '
          src='https://yandex.ru/maps-reviews-widget/88918161707?comments'
        ></iframe>
        <a
          href='https://yandex.ru/maps/org/pryatki_1/88918161707/'
          target='_blank'
          className='box-border no-underline   text-gray-700 text-[10px] font-sans py-5 absolute bottom-0 w-full text-center left-0 overflow-hidden text-ellipsis block max-h-4 whitespace-nowrap px-4'
        >
          Прятки № 1 на карте Мурманска — Яндекс Карты
        </a>
      </div>
    </div>
  )
}
