import Button from "react-bootstrap/esm/Button"
import "../Style/Favorites.css"
import { Context } from "../Context/Provider";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
    const { favorites, deleteFavorites } = useContext(Context);

    return (
        <div>
            <div className="favorites-body">
                <h1 className="title-center"><b>Mis favoritos</b></h1>
                <div className='favorites-contain'>
                    <div className="object-favorites">
                        {favorites.map((item) => (
                            <article key={item.id}>

                                <div className="favorites">
                                    <img src={item.img} alt="" />
                                    <p>{item.name}</p>
                                    <div className="btns-favorites">
                                        <Link to={`/product/${item.id}`}>
                                            <Button id="btn-details-favorites" variant="primary"> Ver detalles</Button>
                                        </Link>
                                        <Button id="btn-favorites" variant="warning" onClick={() => deleteFavorites(item.id)}>Eliminar</Button>
                                    </div>
                                </div>
                            </article>
                        ))}
                        {favorites.length === 0 && <p>No existen favoritos</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
