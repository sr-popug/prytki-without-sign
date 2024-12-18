import Image from 'next/image'

export default function AboutGame() {
  return (
    <article className='about-game mt-48 relative'>
      <article className='background absolute -z-10 -right-72 top-20'>
        <div className='text font-handelson text-8xl text-backgroundPage text-prytki` drop-shadow-[0_1.2px_1.2px_rgba(254,205,3,0.1)] w-full -rotate-12  '>
          Тут живет василий <br />
          Тут живет василий <br />
          Тут живет василий <br />
          Тут живет василий <br />
          Тут живет василий <br />
          Тут живет василий <br />
          Тут живет василий <br />
          Тут живет василий <br />
          Тут живет василий <br />
        </div>
      </article>
      <article className='content'>
        <header className='relative'>
          <h2 className='text-prytki font-serif text-6xl ml-5 drop-shadow-[0_5.10px_5px_rgba(254,205,3,0.2)]'>
            Что такое прятки в темноте?
          </h2>
          <Image
            className='absolute -z-10 top-8'
            src={'/header-back.svg'}
            alt='about-game'
            width={700}
            height={50}
          />
        </header>
        <section className='cards mt-20 flex  justify-between'>
          {[
            [
              '/photo-1.png',
              'Прятки в темноте это квест-игра для компании друзей, родных или знакомых. Здесь вам предстоит справиться со своими страхами и ощутить весь ужас неизведанной темноты!',
              'mt-0',
              '',
            ],
            [
              '/photo-2.png',
              'Игра проходит в локации площадью целые 120 кв. метров. Локация представляет из себя большой и захватывающий лабиринт в полной темноте, в котором, в зависимости от вашей роли, вам предстоит либо найти своих друзей, либо не дать найти себя.',
              'mt-10',
              '',
            ],
            [
              '/photo-3.png',
              'Игроки деляться на две команды: охтники и тени. Задача охотников - найти теней и превести их к двери за отведенный промежуток времени. Мало того, охотник должен понять, кого он нашел в полной темноте и назвать его имя.  Каждый раунд команды будут меняться ролями. ',
              'mt-20',
              '',
            ],
            [
              '/photo-4.png',
              'Если вам и этого мало, то по локации будет бродить актер. Он будет хватать, таскать и пугать игроков. При таком раскладе, даже самый бестрашный герой испытает бурю эмоций!',
              'mt-32',
              'pb-32',
            ],
          ].map(([src, text, margin, padding], i) => (
            <div
              key={i}
              className={`card border-2 rounded-xl p-4 ${margin} h-fit ${padding} min-w-72`}
            >
              <Image src={src} alt='about-game' width={230} height={230} />
              <div className='line w-36 bg-prytki h-px my-5'></div>
              <p className='font-sans text-white text-lg  max-w-64'>{text}</p>
            </div>
          ))}
        </section>
      </article>
    </article>
  )
}
