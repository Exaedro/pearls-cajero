import './App.css'

import Productos from './components/productos/Productos.jsx'
import { productos } from './database/productos.js'

function App() {
  return (
    <>
      <Productos productos={productos}/>
    </>
  )
}

export default App
