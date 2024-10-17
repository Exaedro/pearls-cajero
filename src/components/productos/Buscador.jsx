import { Input } from "@nextui-org/react"

function Buscador() {
    const actualizarProductos = (value) => {
        const productos = document.querySelectorAll('.productos article')

        productos.forEach((producto) => {
            let valor = producto.querySelector('h3').innerText.toLowerCase()

            if (valor.includes(value)) {
                producto.style.display = 'flex'
            } else {
                producto.style.display = 'none'
            }
        })
    }

    return (
        <Input placeholder="Buscar producto..." className="pb-2" onChange={(e) => actualizarProductos(e.target.value)}/>
    )
}

export default Buscador