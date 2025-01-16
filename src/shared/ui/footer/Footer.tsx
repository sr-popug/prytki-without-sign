import headerConfig from '@/lib/headerConfig'
import { Earth, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className='main-footer mt-28 mx-auto max-w-full  font-sans
mb'
    >
      <article className='background absolute -z-10 right-0'>
        <Image
          src={'/footer-back.svg'}
          alt='background'
          width={1000}
          height={1000}
          className='w-[100vw]  '
        />
        <Image
          src={'/photo-1.png'}
          alt='background'
          width={300}
          height={300}
          className='absolute -z-10 top-[-130px]  opacity-10'
        />
      </article>
      <article className='content ml-3 md:ml-0 flex flex-col-reverse gap-3 md:flex-row  justify-between text-lg'>
        <div className='left'>
          <Link
            href={headerConfig.address[1]}
            className='flex items-center gap-3 mb-4 hover:text-prytki transition-colors'
          >
            <Earth /> {headerConfig.address[0]}
          </Link>
          {headerConfig.contacts.phones.map(phone => (
            <Link
              key={phone[0]}
              href={`tel:${phone[1]}`}
              className='flex items-center gap-3 mb-4 hover:text-prytki transition-colors'
            >
              <Phone /> {phone[0]}
            </Link>
          ))}

          <a
            target='_blank'
            href={headerConfig.contacts.vk}
            className='underline hover:text-prytki transition-colors'
          >
            {' '}
            Группа ВКонтакте
          </a>
        </div>
        <div className='right '>
          {headerConfig.navigation.links.map(link => (
            <Link
              key={link.title}
              href={link.href}
              className='hover:text-prytki uppercase transition-colors block mb-4'
            >
              {link.title}
            </Link>
          ))}
        </div>
      </article>
      <div className=' ml-3 mt-2 md:ml-0 copyright text-end text-gray-800 '>
        Сайт создал Цуканов Антон / © 2024 <br />
        Прятки в темноте г. Мурманск
      </div>
    </footer>
  )
}
