import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import "../Style/details.css"
import { Context } from '../Context/Provider';


export default function ProductDetails() {
    const { product, addToCart, arrayProducts, setCalculatedPrice, favorites, addFavorites } = useContext(Context);
    const params = useParams();
    const getProductById = (id) => product.find((product) => product.id === id);
    const products = getProductById(params.id);

    return (
        <>
            <div className="view-details">
                <h2 className="title"><b>{products.name}</b></h2>
                <div className="card-details">
                    <img src={products.img} alt="" />
                    <div className="body-details">
                        <p>{products.desc}</p>
                        <hr />
                        <ul>
                            {products.components.map((components) => (
                                <div key={components}>
                                    <li>{components}</li>
                                </div>

                            ))}
                        </ul>
                        <hr />
                        <div className="price-div">
                            <span>Valor: <b>${products.price}</b></span>
                            <div className="btn-details">
                                <Button onClick={() => { addToCart(products.id); setCalculatedPrice(arrayProducts(products.id)) }}> Añadir al carro </Button>
                                <Button onClick={() => addFavorites(products)} disabled={favorites.some((item) => item.id === products.id)} variant="warning"> Añadir a favoritos  ❤️</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}