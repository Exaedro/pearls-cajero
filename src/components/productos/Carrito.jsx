function Carrito({ carrito, descuento, eliminarDelCarrito }) {
    const carritoDescuento = () => {
        let descuento = 0

        for (const producto of carrito) {
            if (producto.nombre.toLowerCase().includes('cajita sorpresa la fete rosa')) {
                descuento += producto.precioCantidad
                continue
            }

            descuento += producto.precioCantidad * 0.4
        }

        return descuento
    }

    return (
        <section className="flex flex-col h-full justify-between gap-4 py-4">
            <article>
                <h2 className="text-4xl font-bold pb-4 text-center">Carrito</h2>
                <section className="flex gap-4 overflow-x-scroll">
                    {carrito.length >= 1 ? carrito.map((producto) => (
                        <article key={producto.id} className="relative flex flex-col justify-between items-center w-[150px] max-w-[200px] h-[200px] max-h-[200px]">
                            <button class="absolute top-0 right-0 bg-red-500 p-2 px-3 rounded-md active:bg-red-700" onClick={() => eliminarDelCarrito(producto.id)}><i class="fa-solid fa-x"></i></button>
                            <div className="h-full flex flex-col justify-between gap-2">
                                <div className="flex flex-col items-center">
                                    <img className="smax-w-[200px] min-h-[75px] max-h-[75px]" src={producto.imagen} alt={producto.nombre} />
                                    <h3 className="text-medium font-bold text-center text-balance">{producto.nombre}</h3>
                                </div>
                                <div className="text-center">
                                    <p>${(producto.precioReal).toLocaleString('es-ES')}</p>
                                    <p>Cantidad: {producto.cantidad}</p>
                                </div>
                            </div>
                        </article>
                    )) : <p className="py-4">No hay nada en el carrito.</p>}
                </section>
            </article>
            <article>
                <h3 className="font-bold text-2xl">Total</h3>
                <div className="flex gap-2 items-center">
                    <p>${descuento ? carritoDescuento().toLocaleString('es-ES') : carrito.reduce((acum, producto) => acum + producto.precioCantidad, 0).toLocaleString('es-ES')}</p>
                    {descuento ? <p className="text-xs text-gray-300">(Con descuento.)</p> : ''}
                </div>
            </article>
        </section>
    )
}

export default Carrito