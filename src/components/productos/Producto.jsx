import { Button } from "@nextui-org/react"

function Producto({ id, nombre, precio, imagen, añadirProducto }) {
    const manejarClick = (e) => {
        const info = {
            id: e.target.dataset.id,
            nombre: e.target.dataset.nombre,
            precio: e.target.dataset.precio,
            imagen: e.target.dataset.imagen
        }

        añadirProducto(info)
    }

    return (
        <article className="flex flex-col justify-between items-center w-[150px] max-w-[200px] h-[250px] max-h-[250px]">
            <div>
                <picture className="w-full flex justify-center items-center max-w-[200px] min-h-[75px] max-h-[75px] gap-0 overflow-hidden">
                    <img src={imagen} alt={nombre}/>
                </picture>
                <h3 className="text-medium font-bold text-center text-balance">{nombre}</h3>
            </div>
            <div>
                <p className="pb-2">${precio.toLocaleString('es-ES')}</p>
                <Button onClick={manejarClick} color="primary" className="font-bold w-full" data-id={id} data-nombre={nombre} data-precio={precio} data-imagen={imagen}>Añadir</Button>
            </div>
        </article>
    )
}

export default Producto