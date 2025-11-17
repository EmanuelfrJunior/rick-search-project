
import { SectionComponents } from './components/section'
import { HeadComponents } from './components/head'

function App() {

  return (
    <>
    <div>
      <div className='absolute top-0 left-0 w-full bg-white/80 backdrop-blur z-50'>
        <HeadComponents/>
      </div>
      <div>
      <SectionComponents/>
      </div>
    </div>
    </>
  )
}

export default App
