import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import '../Style/details.css';
import { Context } from '../Context/Provider';

export default function ProductDetails() {
  const { user, products, addToCart, favorites, addFavorites, setCalculatedPrice, arrayProducts } = useContext(Context);
  const params = useParams();
  const getProductById = (id) => products.find((product) => product.id === id);
  const product = getProductById(params.id);

  let userProducts = null;
  if (user) {
    userProducts = products.find((product) => product.user === user.email);
  }

  return (
    <>
      {product ? (
        <div className="view-details">
          <h2 className="title">
            <b>{product.name}</b>
          </h2>
          <div className="card-details">
            <img src={product.img} alt="" />
            <div className="body-details">
              <p>{product.desc}</p>
              <hr />
              <ul>
                {product.components.map((component, index) => (
                  <li key={index}>{component}</li>
                ))}
              </ul>
              <hr />
              <div className="price-div">
                <span>
                  Valor: <b>${product.price}</b>
                </span>
                {user && (
                  <div className="btn-details">
                    <Button onClick={() => { addToCart(product.id); setCalculatedPrice(arrayProducts(product.id)) }}> Añadir al carro </Button>
                    <Button
                      onClick={() => addFavorites(product)}
                      disabled={favorites.some((item) => item.id === product.id)}
                      variant="warning"
                    >
                      Añadir a favoritos ❤️
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : userProducts ? (
        <div className="view-details">
          <h2 className="title">
            <b>{userProducts.name}</b>
          </h2>
          <div className="card-details">
            <img src={userProducts.img} alt="" />
            <div className="body-details">
              <p>{userProducts.desc}</p>
              <hr />
              <ul>
                {userProducts.components.map((component, index) => (
                  <li key={index}>{component}</li>
                ))}
              </ul>
              <hr />
              <div className="price-div">
                <span>
                  Valor: <b>${userProducts.price}</b>
                </span>
                {user && (
                  <div className="btn-details">
                    <Button onClick={() => { addToCart(userProducts.id); setCalculatedPrice(arrayProducts(userProducts.id)) }}>
                      Añadir al carro
                    </Button>
                    <Button
                      onClick={() => addFavorites(userProducts)}
                      disabled={favorites.some((item) => item.id === userProducts.id)}
                      variant="warning"
                    >
                      Añadir a favoritos 
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id='error-product'>
          <h1 >no se encontraron productos 😟</h1>
          <Link to={"/"}>
            <Button id='btn-error'>Seguir navegando</Button>
          </Link>
        </div>
      )}
    </>
  );
}
