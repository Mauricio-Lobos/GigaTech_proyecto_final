import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Context } from '../Context/Provider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../Style/Card.css";

export default function CardProduct() {
    const { product } = useContext(Context);

    return (
        <div className='grid'>
            {product.map((product) => (
                <Card key={product.id} className='card'>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className='body-card'>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            Valor ${product.price}
                        </Card.Text>
                        <div className='btns'>
                            <Button variant="danger">Agregar al carro</Button>
                            <Link to={`/product/${product.id}`}>
                                <Button variant='danger'> Ver detalles</Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            ))}

        </div>
    )
}