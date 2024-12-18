import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs'
import TabContentBus from '@/widgets/map/TabContentBus'
import TabContentCar from '@/widgets/map/TabcontentCar'

import Image from 'next/image'

export default async function Map() {
  return (
    <article className='map-page'>
      <header className='relative mt-8 '>
        <h2 className='text-prytki font-serif text-6xl ml-5 drop-shadow-[0_5.10px_5px_rgba(254,205,3,0.2)]'>
          Как до нас добраться?
        </h2>
        <Image
          className='absolute -z-10 top-8'
          src={'/header-back.svg'}
          alt='about-game'
          width={450}
          height={50}
        />
      </header>
      <Tabs defaultValue='car' className=' mt-10'>
        <TabsList className='grid w-full grid-cols-2 h-fit gap-3 mb-3'>
          <TabsTrigger className=' text-lg' value='car'>
            На машине
          </TabsTrigger>
          <TabsTrigger className=' text-lg' value='bus'>
            На автобусе
          </TabsTrigger>
        </TabsList>
        <TabsContent value='car'>
          <TabContentCar />
        </TabsContent>
        <TabsContent value='bus'>
          <TabContentBus />
        </TabsContent>
      </Tabs>
    </article>
  )
}
