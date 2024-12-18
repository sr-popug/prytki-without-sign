import Image from 'next/image'

export default function TabcontentCar() {
  return (
    <>
      <article className='flex justify-between place-items-start mb-4 text-lg gap-10'>
        <div>
          <ol className='list-decimal list-inside mb-5'>
            <li className='mb-3'>
              Двигаясь по проспекту{' '}
              <span className='text-prytki'>Героев-Североморцев</span> вам
              следует доехать до конечной троллейбуса №3 и повернуть на
              перекрестке на улицу{' '}
              <span className='text-prytki'>Александра Невского</span>.
            </li>
            <li className='mb-3'>
              Вы двигаетесь по улице Александра Невского пока не увидите
              <span className='text-prytki'> супермаркет "Сити Гурмэ" </span>
              справа от вас, сразу после него вам следует повернуть налево.
            </li>
            <li className='mb-3'>
              Дальше едите до конца улицы и поворачиваете направо на{' '}
              <span className='text-prytki'>улицу Инженерную</span>. Там вы
              сразу заметите наше здание.
            </li>
          </ol>
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
        <Image src={'/door.webp'} alt='map' width={200} height={300} />
      </article>

      <iframe
        src='https://yandex.ru/map-widget/v1/?um=constructor%3A489f2c8459a1e4a219dc21ab19237d04974b486293c278135a84c64a93aa41fb&amp;source=constructor'
        width='903'
        height='464'
        className='w-full'
      ></iframe>
    </>
  )
}
