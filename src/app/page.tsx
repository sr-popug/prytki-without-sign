import About from '@/widgets/main/About'
import AboutGame from '@/widgets/main/AboutGame'
import Gallery from '@/widgets/main/Gallery'
import MainScreen from '@/widgets/main/MainScreen'

export default function Home() {
  return (
    <article className=''>
      <MainScreen />
      <AboutGame />
      <About />
      <Gallery />
    </article>
  )
}
