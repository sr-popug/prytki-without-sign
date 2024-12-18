import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel'
import Image from 'next/image'

export default function Gallery() {
  return (
    <article className='gallery relative mt-28'>
      <section className='background'></section>
      <section className='content'>
        <header className='relative'>
          <h2 className='text-prytki font-serif text-6xl ml-5 drop-shadow-[0_5.10px_5px_rgba(254,205,3,0.2)]'>
            Наш интерьер
          </h2>
          <Image
            className='absolute -z-10 top-8'
            src={'/header-back-medium.svg'}
            alt='about-game'
            width={330}
            height={50}
          />
        </header>
        <article className='slider'>
          <Carousel
            opts={{
              align: 'start',
            }}
            className=' w-full mt-16'
          >
            <CarouselContent>
              <CarouselItem className=' max-w-[330px] '>
                <Image
                  src={'/gallery-1.png'}
                  alt='about-game'
                  width={330}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem className='max-w-[330px]'>
                <Image
                  src={'/gallery-2.png'}
                  alt='about-game'
                  width={330}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem className='max-w-[330px]'>
                <Image
                  src={'/gallery-3.png'}
                  alt='about-game'
                  width={330}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem className='max-w-[330px]'>
                <Image
                  src={'/gallery-4.png'}
                  alt='about-game'
                  width={330}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem className='max-w-[330px]'>
                <Image
                  src={'/gallery-5.png'}
                  alt='about-game'
                  width={330}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem className='max-w-[330px]'>
                <Image
                  src={'/gallery-6.png'}
                  alt='about-game'
                  width={330}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem className='max-w-[330px]'>
                <Image
                  src={'/gallery-7.png'}
                  alt='about-game'
                  width={330}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem className='max-w-[330px]'>
                <Image
                  src={'/gallery-8.png'}
                  alt='about-game'
                  width={330}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem className='max-w-[330px]'>
                <Image
                  src={'/gallery-9.png'}
                  alt='about-game'
                  width={330}
                  height={500}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </article>
      </section>
    </article>
  )
}
