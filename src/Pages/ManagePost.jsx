import Button from "react-bootstrap/esm/Button";
import NavProfile from "../Components/NavProfile";
import { Context } from "../Context/Provider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../Style/ManagePost.css"

export default function ManagePost() {
  const { user, products, deleteProduct } = useContext(Context);

  const userProducts = products.filter((product) => product.user === user.email);

  return (
    <>
      <div className="grid-profile">
        <div className="nav-profile">
          <NavProfile />
        </div>
        <div className="main-profile">
          <h1 className="title-center">Administrar publicaciones</h1>
          {userProducts.length === 0 ? (
            <div>
              <p>Aún no hay publicaciones creadas</p>
            </div>
          ) : (
            <div className="product-contain">
              {userProducts.map((product) => (
                  <div className="product-card" key={product.id}>
                    <img src={product.img} alt="product" />
                    <h2>{product.name}</h2>
                    <h2>{product.description}</h2>
                    <h2>${product.price}</h2>
                    <div className="btn-product-manage">
                      <Button variant="danger" onClick={() => deleteProduct(product.id)}>Eliminar</Button>
                    <Link to={`/post_form/${product.id}`}> <Button> Editar </Button></Link>
                    </div>
                    
                  </div>
              ))}
            </div>
          )}
          <Link to="/post_form">
            <Button variant="outline-primary">Ir a crear publicación</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
