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
            <img className="max-w-[100px]" src={import.meta.resolve(imagen)} alt={nombre} />
            <h3 className="text-medium font-bold text-center">{nombre}</h3>
            <p>${precio.toLocaleString('es-ES')}</p>
            <Button onClick={manejarClick} variant="shadow" color="primary" className="font-bold w-full" data-id={id} data-nombre={nombre} data-precio={precio} data-imagen={imagen}>Añadir</Button>
        </article>
    )
}

export default Producto