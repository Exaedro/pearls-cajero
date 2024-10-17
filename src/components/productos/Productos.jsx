import { useState } from "react"
import { Input, Button } from "@nextui-org/react"

import Buscador from "./Buscador.jsx"
import Producto from "./Producto.jsx"
import Carrito from "./Carrito.jsx"

function Productos({ productos }) {
    const [carrito, setCarrito] = useState([])
    let [cantidad, setCantidad] = useState(1)
    const [descuento, setDescuento] = useState(false)

    const añadirProducto = ({ id, nombre, precio, imagen }) => {
        if(cantidad == '' || cantidad == undefined)
            cantidad = 1

        const carritoActualizado = carrito.map((producto) => {
            if (producto.id === id) {
                return {
                    ...producto,
                    cantidad: parseInt(producto.cantidad) + parseInt(cantidad),
                    precioCantidad: (parseInt(producto.cantidad) + parseInt(cantidad)) * parseFloat(precio)
                };
            }
            return producto;
        });

        const estaEnCarrito = carrito.find((producto) => producto.id === id);
    
        if (estaEnCarrito) {
            setCarrito(carritoActualizado);
            return;
        }

        const producto = {
            id,
            nombre,
            precioReal: precio,
            precioCantidad: precio * cantidad,
            imagen,
            cantidad
        }

        setCarrito([...carrito, producto])
    }

    const reiniciarCarrito = () => {
        setCarrito([])
    }

    const aplicarDescuento = () => {
        setDescuento(!descuento)
    }

    const eliminarDelCarrito = (id) => {
        const carritoActualizado = carrito.filter(producto => producto.id != id)
        setCarrito(carritoActualizado)
    }

    const manejarCantidad = (valor) => {
        setCantidad(valor)
    }

    return (
        <>
            <section className="p-4 bg-slate-500/30 rounded-md">
                <h2 className="text-4xl font-bold py-4">Productos</h2>
                <Buscador />
                <section className="productos flex py-4 gap-5 overflow-x-scroll">
                    {productos.map((producto) => (
                        <Producto key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} añadirProducto={añadirProducto}/>
                    ))}
                </section>
                <h2 className="pt-6">Cantidad</h2>
                <Input type="number" placeholder="Cantidad" min={1} defaultValue={1} onChange={(e) => manejarCantidad(e.target.value)} />
            </section>
            <section className="p-4 h-full justify-between flex flex-col bg-slate-500/30 rounded-md">
                {descuento ? <Carrito carrito={carrito} descuento={true} eliminarDelCarrito={eliminarDelCarrito} /> : <Carrito carrito={carrito} descuento={false} eliminarDelCarrito={eliminarDelCarrito} />}
                <div className="flex flex-col sm:flex-row gap-2">
                    <Button color="success" variant="shadow" className="text-white font-bold" onClick={aplicarDescuento}>
                        {descuento ? 'Remover descuento' : 'Aplicar descuento'}
                    </Button>
                    <Button color="danger" variant="shadow" onClick={reiniciarCarrito} className="font-bold">Reiniciar Carrito</Button>
                </div>
            </section>
        </>
    )
}

export default Productos