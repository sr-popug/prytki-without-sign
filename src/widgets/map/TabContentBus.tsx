import Image from 'next/image'

export default function TabcontentBus() {
  return (
    <>
      <article className='ml-4 xl:ml-0 flex justify-between place-items-start mb-4 text-lg gap-10'>
        <div>
          <p className='mb-2'>
            Вы можете добраться до нас несколькими способами:
          </p>
          <ul className='mt-0 list-disc  list-inside'>
            <li className='mb-5'>
              Если вам удобно ехать на{' '}
              <span className='text-prytki'> автобусе 4т</span>, то вы должны
              выйти на остановке "Улица Маяковского" от туда вам следует перейти
              примыкающую к главной дорогу и идти по прямой до нашего здания.
            </li>
            <li className='mb-5'>
              Если вы выбрали поехать на{' '}
              <span className='text-prytki'>троллейбусах 3 или 4</span>, или на{' '}
              <span className='text-prytki'>
                {' '}
                автобусах 1, 10А, 19, 105, 107
              </span>
              , то вам следует выйти на остановке "Магомета Гаджиева", перейти
              через дорогу и пройти между домов 98 и 58 на улице Невского, далее
              идти к музыкальной школе №3, оттуда вам следует идти по прямой до
              института развития образования и идти по улице Инженерной прямо до
              нашего здания.
            </li>
            <li className='mb-5'>
              Если вы выбрали поехать на{' '}
              <span className='text-prytki'>18-ом автобусе</span>, то вам
              следует выйти на остановке "Комбинат школьного питания" и пройти
              вдоль спортивной школы №4 по улице Аскольдовцев по прямой до
              нашего здания.
            </li>
          </ul>
          <p>
            Мы находимся на{' '}
            <a
              href='https://yandex.ru/maps/-/CHEYm6LX'
              className='text-prytki underline'
            >
              улице Инженерной 22
            </a>
            , двухэтажное здание бежевого цвета среди гаражей, с укрепленной
            темной дверью и табличкой "Гарин" над ней.
          </p>
        </div>
        <Image
          className='md:block hidden'
          src={'/door.webp'}
          alt='map'
          width={200}
          height={300}
        />
      </article>
      <iframe
        src='https://yandex.ru/map-widget/v1/?um=constructor%3Af6381d9fc4be061ab54d53b83ea672597e381eb0293a5c9dedd7f8bb65299749&amp;source=constructor'
        width='903'
        height='464'
        className='w-full'
      ></iframe>
    </>
  )
}
