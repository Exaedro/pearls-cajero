import './App.css'

import pearls from './assets/fondo.png'
import Productos from './components/productos/Productos.jsx'
import { productos } from './database/productos.js'

function App() {
  return (
    <>
      <div className='absolute top-0 w-full h-full z-0 bg-gradient-to-br opacity-40 from-blue-200 to-blue-600'></div>
      <main className='px-4 relative z-10 my-8 gap-3 sm:grid grid-cols-2'>
        <Productos productos={productos}/>
      </main>
    </>
  )
}

export default App
