import Header from "../Components/Header";
import Form from 'react-bootstrap/Form';
import CardProduct from "../Components/Card";

export default function Home() {

    return (
        <div>
            <Header />
            <main>
                <div className="search">
                    <Form.Select aria-label="Default select example">
                        <option>-- Ordenar por --</option>
                        <option value="1">Precio menor a mayor</option>
                        <option value="2">Precio mayor a menor</option>
                    </Form.Select>
                    <Form.Control placeholder="Buscar" />
                </div>
                <hr />
                <CardProduct />
            </main>
        </div>
    )
}