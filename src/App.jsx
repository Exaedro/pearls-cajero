import './App.css'

import pearls from './assets/pearls.gif'
import Productos from './components/productos/Productos.jsx'
import { productos } from './database/productos.js'

function App() {
  return (
    <>
      <img src={pearls} className='absolute right-0 left-0 mx-auto max-h-[95vh] opacity-10' />
      <main className='px-4 relative z-10 gap-3 sm:grid grid-cols-2 flex flex-col'>
        <Productos productos={productos}/>
      </main>
    </>
  )
}

export default App
