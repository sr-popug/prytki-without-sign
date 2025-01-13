import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <article className='about relative mt-16'>
      <section className='background absolute -z-10 '>
        <Image
          className='relative  -left-96 opacity-5'
          src={'/photo-4.png'}
          alt='about-game'
          width={500}
          height={500}
        />
      </section>
      <section className='content'>
        <header className='relative'>
          <h2 className='text-prytki text-center smd:text-left font-serif text-6xl ml-5 drop-shadow-[0_5.10px_5px_rgba(254,205,3,0.2)]'>
            О нас
          </h2>
          <Image
            className='absolute -z-10 top-8 hidden smd:block'
            src={'/header-back-mini.svg'}
            alt='about-game'
            width={150}
            height={50}
          />
        </header>
        <article className='cards mt-10 smd:flex flex-wrap justify-around lg:flex-nowrap   lg:justify-between'>
          {[
            [
              'photo-5.png',
              'В отличие от других квестов, вы можете прийти к нам еще раз и испытать совершенно новые эмоции, ведь наша локация постоянно изменяется.',
            ],
            [
              'photo-6.png',
              'Мы проводим игры для ваших детей с 2015 года, поэтому у нас достаточно большой опыт в проведении детских мероприятий, и мы знаем, как сделать так, чтобы ваши дети получили максимальное количество положительных эмоций!',
            ],
            [
              'photo-7.png',
              'Наш персонал работает с максимальным интузиазмом, именно поэтому игроки не остануться без ярких эмоций и запоминающихся ощущений. ',
            ],
          ].map(([src, text]) => (
            <div className='card flex flex-col items-center' key={src}>
              <Image
                className='relative'
                src={`/${src}`}
                alt='gallery'
                width={200}
                height={200}
              />
              <p className='mt-5 min-w-64 font-sans text-center text-white text-lg   max-w-72'>
                {text}
              </p>
            </div>
          ))}
        </article>
        <div className='button flex items-center justify-center'>
          <Link
            href='/sign'
            className=' block hover:scale-105 transition-all hover:drop-shadow-[0_1.2px_5px_rgba(254,205,3,0.5)] mt-16'
          >
            <Image
              src={'/button-main.svg'}
              alt='Записаться на игру'
              width={420}
              height={100}
            />
          </Link>
        </div>
      </section>
    </article>
  )
}
