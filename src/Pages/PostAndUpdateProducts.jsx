import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import NavProfile from "../Components/NavProfile";
import Form from "react-bootstrap/esm/Form";
import { Context } from "../Context/Provider";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Style/PostAndUpdateProducts.css"

export default function PostAndUpdateProducts() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, products, createProduct, updateProduct, setProducts } = useContext(Context);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [components, setComponents] = useState(['']);
  const [img, setImg] = useState("");

  useEffect(() => {
    if (id) {
      const findProduct = products.find((item) => item.id === parseInt(id));
      setName(findProduct.name);
      setDesc(findProduct.desc);
      setPrice(findProduct.price);
      setComponents(findProduct.components)
      setImg(findProduct.img);
    } else {
      setName("");
      setDesc("");
      setPrice("");
      setComponents(['']);
      setImg("");
    }
  }, [id, products]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      desc,
      id: id ? parseInt(id) : Date.now(),
      img,
      name,
      price,
      components: [components],
      user: user.email,
    };

    if (id) {
      updateProduct(newProduct);
      return Swal.fire({
        icon: "success",
        title: "¡Producto actualizado exitosamente!",
        text: "Presione 'Ok' para volver a la administración de productos",
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: 'Volver a editar',
        customClass: {
          confirmButton: 'outline-primary',
          cancelButton: 'outline-danger'
        }

      }).then(result => {
        if (result.isConfirmed) {
          navigate("/manage_post");
        }
      });

    } else {
      createProduct(newProduct);
      return Swal.fire({
        icon: "success",
        title: "¡Producto creado exitosamente!",
        text: "Presione 'Ok' para volver a la administración de productos",
        confirmButtonText: "Ok"
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/manage_post");
        }
      });
    }
  }

  return (
    <>
      <div className="grid-profile">
        <div className="nav-profile">
          <NavProfile />
        </div>
        <div className="main-create-post">
          <h1 className="title-center">
            {useParams().id ? "Actualizar publicación" : "Crear publicación"}
          </h1>
          <div>
            <div className="form-cp">
              <Form onSubmit={handleSubmit}>
                <label htmlFor="">Nombre del producto</label>
                <Form.Control placeholder="Nombre descriptivo del producto"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />

                <label htmlFor="">Precio del producto</label>
                <Form.Control type="number" placeholder="Ej: 99999"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)} />
                <label htmlFor="">Descripción del producto</label>
                <Form.Control placeholder="Ej: Escriba aquí la descripción del producto"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)} />
                <label htmlFor="">Componentes de tu producto</label>
                <p>Para ingresar un nuevo articulo, por favor, siga el orden indicado en el listado de abajo (en caso de no contener un producto, indiquelo con "---"):
                </p>
                <Form.Control
                  as="textarea"
                  placeholder="Escriba aquí las características del producto"
                  value={components}
                  onChange={(e) => setComponents(e.target.value)}
                />
                <label htmlFor="">Sube tu imagen como url</label>
                <Form.Control placeholder="Imágen como url"
                  value={img}
                  onChange={(e) => setImg(e.target.value)} />
                <div className="cp-btn">
                  <Button type="submit" variant="outline-primary">
                    {id ? "Actualizar publicación" : "Crear publicación"}
                  </Button>
                  <Link to="/profile" >
                    <Button variant="outline-danger">Cancelar</Button>
                  </Link>
                  
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};