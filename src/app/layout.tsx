import Footer from '@/shared/ui/footer/Footer'
import Header from '@/shared/ui/header/Header'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'
import './globals.css'

const goshaSansRegular = localFont({
  src: './fonts/GoshaSans-Regular.ttf',
  variable: '--font-gosha-sans',
  weight: '400',
})
const goshaSanBold = localFont({
  src: './fonts/GoshaSans-Bold.ttf',
  variable: '--font-gosha-sans-bold',
  weight: '400',
})
const handelson = localFont({
  src: './fonts/handelsonsix_cyr_six.otf',
  variable: '--font-handelson',
  weight: '100 900',
})
const jolly = localFont({
  src: './fonts/jollylodgercyrillic.otf',
  variable: '--font-jolly',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Прятки в темноте - г. Мурманск',
  description:
    'Прятки в темноте это квест-игра для компании друзей, родных или знакомых. Здесь вам предстоит справиться со своими страхами и ощутить весь ужас неизведанной темноты! Мы располагаемся в г. Мурманске на улице Инженерной, дом 22.',
  twitter: {
    card: 'summary_large_image',
    title: 'Прятки в темноте - г. Мурманск',
    description:
      'Прятки в темноте это квест-игра для компании друзей, родных или знакомых. Здесь вам предстоит справиться со своими страхами и ощутить весь ужас неизведанной темноты! Мы располагаемся в г. Мурманске на улице Инженерной, дом 22. ',
  },
  keywords:
    'Прятки в темноте, квест, мурманск, квест для друзей, страшно весело, игра для компании в мурманске, квест-игра, квест-рум, куда сходить на выходных, что делать в мурманске, день рождение, день рождение в темноте, где отпраздновать день рождение, игра для детей, квест рум для детей, квест для детей, праздник в темноте, праздник, где отпраздновать в мурманске, Инженерная 22 ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className='dark' lang='ru'>
      <body
        className={`${handelson.variable} ${jolly.variable} ${goshaSanBold.variable} ${goshaSansRegular.variable} antialiased bg-backgroundPage overflow-x-hidden`}
      >
        <script src='https://api-maps.yandex.ru/v3/?apikey=d7d65dde-198b-4d7b-a8b2-0820737b152f&lang=ru_RU'></script>

        <Header />
        <main className='mx-auto max-w-full  font-sans relative'>
          <article className='background absolute -z-10'>
            <div className='left-text font-handelson text-8xl drop-shadow-[0_1.2px_1.2px_rgba(254,205,3,0.1)] text-backgroundPage -mt-20 relative right-2/4'>
              От темноты не спрятаться <br /> От темноты не спрятаться <br />
              От темноты не спрятаться
              <br /> От темноты не спрятаться
              <br /> От темноты не спрятаться
              <br /> От темноты не спрятаться <br />
              От темноты не спрятаться
              <br /> От темноты не спрятаться
              <br /> От темноты не спрятаться
            </div>
            <div className='right-top-image absolute -top-48 -right-3/4'>
              <Image
                className='relative right-12 opacity-10 w-4/5'
                src='/photo-2.png'
                alt='main-screen'
                width={1000}
                height={1000}
              />
            </div>
          </article>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
