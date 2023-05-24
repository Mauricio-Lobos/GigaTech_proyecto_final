import { useContext, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { Context } from "../Context/Provider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function RegisterUser() {
  const { register } = useContext(Context);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repassword) {
      return alert("no coinciden las contraseñas");
    }

    const user = register({
      name,
      email,
      lastname,
      password,
      id: Date.now(),
    });
    console.log('register: ', user);
    if (user) {
      console.log(user);
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El email ya está registrado",
      });
    }
    return Swal.fire({
      icon: "success",
      title: "Usuario registrado",
      text: "Serás redirigido a la ventana principal",
      confirmButtonText: "Confirmar"
    }).then(result => {
      if (result.isConfirmed) {
          navigate("/");
      }
  });
    
  };

  return (
    <div className="background">
      <div className='container-login'>
        <div className='card-login'>
          <div className='title-login'>
            <h3>Registrarse</h3>
            <hr />
          </div>
          <Form onSubmit={handleSubmit}>
            <div className='email-password'>
              <p>Correo electrónico</p>
              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Ingrese su Email" name="email" required />
            </div>
            <div className='email-password'>
              <p>Contraseña</p>
              <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Nueva contraseña" name="password" required />
            </div>
            <div className='email-password'>
              <p>Repetir contraseña</p>
              <Form.Control type="password" onChange={(e) => setRepassword(e.target.value)} placeholder="Nueva contraseña" name="repeatPassword" required />
            </div>
            <div className='name-validation'>
              <div>
                <p>Nombre</p>
                <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder="Ingrese su nombre" name="name" required />
              </div>
              <div>
                <p>Apellido</p>
                <Form.Control type="text" onChange={(e) => setLastname(e.target.value)} placeholder="Ingrese su apellido" name="lastName" required />
              </div>
            </div>
            <Button type='submit' variant='success'>Registrarse</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
