import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/Provider";
import Button from "react-bootstrap/esm/Button";
import "../Style/details.css"
import ToCLP from "../helpers/ToCLP";


export default function ProductDetails() {
    const { product, addToCart, arrayProducts, setCalculatedPrice } = useContext(Context);
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
                                <li>{components}</li>
                            ))}
                        </ul>
                        <hr />
                        <div className="price-div">
                            <span>Valor: <b>${ToCLP(products.price)}</b></span>
                            <div className="btn-details">
                                <Button onClick={() => { addToCart(products.id); setCalculatedPrice(arrayProducts(products.id)) }}> Añadir al carro </Button>
                                <Button variant="warning"> Añadir a favoritos </Button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}