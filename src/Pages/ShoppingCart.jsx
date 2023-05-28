import { useContext, useEffect } from "react";
import "../Style/ShoppingCart.css"
import Button from 'react-bootstrap/Button';
import { Context } from "../Context/Provider";
import ToCLP from "../helpers/ToCLP"

export default function Cart() {
    const { setCart, addToCart, removeToCart, arrayProducts, calculatedPrice, setCalculatedPrice, orderedCartProducts, products } = useContext(Context);

    let list = []

    const listOforderedProducts = () => {
        const cartProducts = [];
    
        orderedCartProducts.forEach((product) => {
          const existingProduct = cartProducts.find((p) => p.id === product.id);
    
          if (existingProduct) {
            existingProduct.count++;
          } else {
            cartProducts.push({ ...product, count: 1 });
          }
        });
    
        list = cartProducts.map((product) => ({
          ...product,
          result: product.count * product.price
        }));
      };

    listOforderedProducts();

    useEffect(() => {
        setCart(orderedCartProducts);
    }, [orderedCartProducts, setCart]);

    const calculateTotalPrice = () => {
        const totalPrice = list.reduce((sum, item) => {
            const product = products.find((p) => p.id === item.id);
            if (product) {
                return sum + product.price * item.count;
            }
            return sum;
        }, 0);
        return totalPrice;
    };

    const totalPrice = calculateTotalPrice();


    return (
        <div className="cart-body">
            <h3 className="title-center"><b>Detalle del pedido</b></h3>
            <div className='cart-contain'>
                {list.length === 0 ? (
                    <div className="object-cart">
                        <p>Aún no hay productos en tu carrito</p>
                    </div>
                ) : (
                    list.map((item) =>
                        <div className='cart-with-contain'>
                            <div className="object-cart" key={item.id}>
                                <img className='img-cart' src={item.img} alt="" />
                                <div className="text-and-btns">
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
                        </div>
                    )
                )}
                <div className="pay-cart">
                    <span className="final-price">Total: ${ToCLP(totalPrice)}</span>
                    <Button id="btn-pay">Ir a pagar</Button>
                </div>
            </div>
        </div>
    )
}