import Button from "react-bootstrap/esm/Button"
import "../Style/Favorites.css"

export default function Favorites() {
    return (
        <div>
            <div className="favorites-body">
                <h1 className="title-center"><b>Mis favoritos</b></h1>
                <div className='favorites-contain'>
                    <div className="object-favorites">
                        <p>Aún no hay productos en tus favoritos</p>
                        <Button variant="outline-dark">Ir a ver productos</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}