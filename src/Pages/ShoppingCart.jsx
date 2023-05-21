import { useContext, useEffect } from "react";
import "../Style/ShoppingCart.css"
import Button from 'react-bootstrap/Button';
import { Context } from "../Context/Provider";
import ToCLP from "../helpers/ToCLP"

export default function Cart() {
    const { setCart, addToCart, removeToCart, arrayProducts, calculatedPrice, setCalculatedPrice, orderedCartProducts } = useContext(Context);

    let list = []
    let count = 1

    const listOforderedProducts = () => {
        for (let i = 0; i < orderedCartProducts.length; i++) {
            let index = orderedCartProducts[i];

            if (index === orderedCartProducts[i + 1]) {
                count++
            }
            else {
                const newList = {
                    id: index.id,
                    name: index.name,
                    price: index.price,
                    img: index.img,
                    count: count,
                    result: count * index.price
                }
                list.push(newList)
                count = 1
            }
        }
    }

    listOforderedProducts();

    useEffect(() => {
        setCart(orderedCartProducts);
    }, [orderedCartProducts, setCart]);


    return (
        <div className="cart-body">
            <h3 id="title-cart"><b>Detalle del pedido:</b></h3>
            <div className='cart-contain'>
                {list.length === 0 ? (
                    <div className="object-cart">
                        <p>Aún no hay productos en tu carrito</p>
                    </div>
                ) : (
                    list.map((item) =>
                        <div className='cart-contain'>
                            <div className="object-cart" key={item.id}>
                                <img className='img-cart' src={item.img} alt="" />
                                <div className="name-and-price">
                                    <p>{item.name}</p>
                                    <p className="price-each">${ToCLP(item.result)}</p>
                                </div>
                                <div className='btn-cart' >
                                    <Button 
                                    variant="danger"
                                    className='remove-btn' onClick={() => { removeToCart(item.id) }}> - </Button>
                                    <p id="count"><b>{item.count}</b></p>
                                    <Button variant="success"
                                    className='plus-btn' onClick={() => { addToCart(item.id); setCalculatedPrice(arrayProducts(item.id)) }}> + </Button>
                                </div>
                            </div>
                        </div>
                    )
                )}
                <div className="pay-cart">
                    <span className="final-price">Total: ${ToCLP(calculatedPrice)}</span>
                    <Button>Ir a pagar</Button>
                </div>
            </div>
        </div>
    )
}