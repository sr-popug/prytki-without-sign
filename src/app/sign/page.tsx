import headerConfig from '@/lib/headerConfig'
import { Phone } from 'lucide-react'
import Image from 'next/image'

export default function SignPage() {
  return (
    <article className='sign-page'>
      <header className='relative mt-8 '>
        <h2 className='text-prytki font-serif text-5xl smd:text-6xl ml-5 drop-shadow-[0_5.10px_5px_rgba(254,205,3,0.2)]'>
          Записаться на игру!
        </h2>
        <Image
          className='absolute -z-10 top-8'
          src={'/header-back.svg'}
          alt='about-game'
          width={450}
          height={50}
        />
        <p className='text-xl text-gray-400'>
          Предлагаем вам 2 способа записи на игру "Прятки в темноте:
        </p>
      </header>
      <section className='flex   gap-10 mt-5 flex-wrap'>
        <a
          target='_blank'
          href={headerConfig.contacts.vk}
          className='flex items-center flex-col w-full md:w-auto border border-gray-800 rounded-xl p-6 hover:bg-neutral-950  transition-all hover:scale-[1.02]'
        >
          <Image
            src='/vk.svg'
            alt='vk'
            width={100}
            height={100}
            className='block mb-6'
          />
          <h3 className='text-2xl'>Запись во ВКонтакте</h3>
          <p className='text-prytki text-lg'>Прятки Мурманск</p>
        </a>
        <a
          href={`tel:${headerConfig.contacts.phones[0][1]}`}
          className='flex items-center flex-col w-full md:w-auto border border-gray-800 rounded-xl p-6 hover:bg-neutral-950  transition-all hover:scale-[1.02]'
        >
          <Phone height={100} width={100} className='block mb-6' />
          <h3 className='text-2xl'> Запись по телефону</h3>
          <p className='text-prytki text-lg'>
            {headerConfig.contacts.phones[0][0]}
          </p>
        </a>
      </section>
    </article>
  )
}
