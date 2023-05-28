import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from '../Context/Provider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SweetAlert from 'sweetalert2';
import "../Style/Card.css";
import ToCLP from '../helpers/ToCLP';

export default function CardProduct() {
  const { products, sortOrder, addToCart, arrayProducts, setCalculatedPrice, searchValue, user } = useContext(Context);
  
  const sortedProduct = sortOrder ? [...products] : products;
  if (sortOrder === 'price-lowest') {
    sortedProduct.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-highest') {
    sortedProduct.sort((a, b) => b.price - a.price);
  }

  const handleAddToCart = (productId) => {
    if (user) {
      addToCart(productId);
      setCalculatedPrice(arrayProducts(productId));
    } else {
      SweetAlert.fire({
        title: "Inicia sesión",
        text: "Debes iniciar sesión para agregar productos al carro",
        icon: "warning",
        confirmButtonText: "Aceptar"
      });
    }
  };

  return (
    <div className="grid">
      {sortedProduct
        .filter((product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((product) => (
          <Card key={product.id} className="card">
            <Card.Img variant="top" src={product.img} />
            <Card.Body className="body-card">
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Valor: ${ToCLP(product.price)}</Card.Text>
              <div className="btns">
                <Button
                  variant="danger"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Agregar al carro
                </Button>
                <Link to={`/product/${product.id}`}>
                  <Button variant="danger"> Ver detalles</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}
