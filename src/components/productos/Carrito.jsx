function Carrito({ carrito, descuento }) {
    const carritoDescuento = () => {
        let descuento = 0

        for(const producto of carrito) {
            if(producto.nombre.toLowerCase().includes('cajita sorpresa la fete rosa')) {
                descuento += producto.precioCantidad
                continue
            }

            descuento += producto.precioCantidad * 0.4
        }

        return descuento
    }

    return (
        <section className="flex flex-col gap-4 py-4">
            <h2 className="text-4xl font-bold pb-4 text-center">Carrito</h2>
            <section className="flex gap-4 overflow-x-scroll">
                {carrito.map((producto) => (
                    <article key={producto.id} className="flex flex-col justify-between items-center w-[150px] max-w-[200px] h-[250px] max-h-[250px]">
                        <img className="max-w-[100px]" src={import.meta.resolve(producto.imagen)} alt={producto.nombre} />
                        <h3 className="text-medium font-bold text-center">{producto.nombre}</h3>
                        <p>${(producto.precioReal).toLocaleString('es-ES')}</p>
                        <p>{producto.cantidad}</p>
                    </article>
                ))}
            </section>
            <h3 className="font-bold text-4xl">Total</h3>
            <div className="flex gap-2 items-center">
                <p>${descuento ? carritoDescuento().toLocaleString('es-ES') : carrito.reduce((acum, producto) => acum + producto.precioCantidad, 0).toLocaleString('es-ES')}</p>
                {descuento ? <p className="text-xs text-gray-300">(Con descuento.)</p> : ''}
            </div>
        </section>
    )
}

export default Carrito