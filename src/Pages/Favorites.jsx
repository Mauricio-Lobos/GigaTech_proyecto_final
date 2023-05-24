import Button from "react-bootstrap/esm/Button"
import "../Style/Favorites.css"
import { Context } from "../Context/Provider";
import { useContext } from "react";

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

                                <div className="object-favorites">
                                    <p>{item.title}</p>
                                    <img src={item.img} alt="" />
                                    <Button onClick={() => deleteFavorites(item.id)}>Eliminar</Button>
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
