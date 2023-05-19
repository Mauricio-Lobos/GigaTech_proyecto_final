import Button from "react-bootstrap/esm/Button";
import NavProfile from "../Components/NavProfile";
import Form from "react-bootstrap/esm/Form";

export default function CreatePost() {
    return (
        <>
            <div className="grid-profile">
                <div className="nav-profile">
                    <NavProfile />
                </div>
                <div className="main-create-post">
                    <h1 className="title-center">Crear publicación</h1>
                    <div>
                        <label htmlFor="">Nombre del producto</label>
                        <Form.Control placeholder="Nombre descriptivo del producto"/>
                        <label htmlFor="">Precio del producto</label>
                        <Form.Control type="number" placeholder="Ej: 99999"/>
                        <label htmlFor="">Componentes de tu producto</label>
                        <p>Para ingresar un nuevo articulo, por favor, siga el orden indicado en el listado de abajo (en caso de no contener un producto, indiquelo con "---")</p>
                        <Form.Control value="Procesador: , Memoria RAM: , Disco duro: , Disco sólido: , Gráficos: , Placa madre: , Fuente de poder: "/>
                        <Button variant="outline-primary">Crear publicación</Button>
                        <Button variant="outline-danger">Cancelar</Button>
                    </div>
                </div>
            </div>
        </>
    )
}