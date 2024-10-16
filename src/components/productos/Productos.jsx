import { useState } from "react"
import { Input } from "@nextui-org/react"

import Buscador from "./Buscador.jsx"
import Producto from "./Producto.jsx"
import Carrito from "./Carrito.jsx"

function Productos({ productos }) {
    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(1)

    const añadirProducto = ({ id, nombre, precio, imagen }) => {
        const carritoActualizado = carrito.map((producto) => {
            if (producto.id === id) {
                return {
                    ...producto,
                    cantidad: producto.cantidad + parseInt(cantidad),
                    precioCantidad: (producto.cantidad + cantidad) * parseFloat(precio)
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

    return (
        <>
            <h2 className="text-4xl font-bold pb-4">Productos</h2>
            <Buscador />
            <section className="productos flex py-4 gap-5 overflow-x-scroll">
                {productos.map((producto) => (
                    <Producto key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} añadirProducto={añadirProducto}/>
                ))}
            </section>
            <h2 className="pt-6">Cantidad</h2>
            <Input type="number" placeholder="Cantidad" defaultValue={1} onChange={(e) => setCantidad(e.target.value)} />

            <Carrito carrito={carrito} />
        </>
    )
}

export default Productos