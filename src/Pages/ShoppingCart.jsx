import "../Style/ShoppingCart.css"
import Button from 'react-bootstrap/Button';

export default function Cart() {
    return (
        <div className="cart-body">
            <h3 id="title-cart"><b>Detalle del pedido:</b></h3>
            <div className='cart-contain'>

                <div className="object-cart">
                    <p>Aún no hay productos en tu carrito</p>
                </div>
                <div className="pay-cart">
                    <span>Total: $</span>
                    <Button>Ir a pagar</Button>
                </div>
            </div>
        </div>
    )
}