import { Input } from "@nextui-org/react"
import { useState } from "react"

function Buscador() {
    const [nombre, setNombre] = useState('')

    const manejarInput = (e) => {
        setNombre(e.target.value)
        actualizarProductos()
    }

    const actualizarProductos = () => {
        const productos = document.querySelectorAll('.productos article')

        productos.forEach((producto) => {
            let valor = producto.querySelector('h3').innerText.toLowerCase()
            if(nombre.length == 0) {
                producto.style.display = 'flex!important'
                return
            }

            if (valor.includes(nombre) || nombre == '') {
                producto.style.display = 'flex'
            } else {
                producto.style.display = 'none'
            }
        })
    }

    return (
        <Input placeholder="Buscar producto..." className="pb-2" onChange={manejarInput}/>
    )
}

export default Buscador