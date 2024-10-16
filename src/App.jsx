import './App.css'

import Productos from './components/productos/Productos.jsx'
import { productos } from './database/productos.js'

function App() {
  return (
    <main className='px-4 my-8 gap-3 sm:grid grid-cols-2'>
      <Productos productos={productos}/>
    </main>
  )
}

export default App
