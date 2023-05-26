import "../Style/Profile.css"
import NavProfile from "../Components/NavProfile"
import Form from "react-bootstrap/esm/Form"
import Button from "react-bootstrap/esm/Button"
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Provider";
import Swal from "sweetalert2";

export default function Profile() {
    const { user, updateUser } = useContext(Context);

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState("");

    useEffect(() => {
        setName(user.name);
        setLastname(user.lastname);
        setEmail(user.email);
        setPassword(user.password);
        setProfileImage(user.profileImage)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        updateUser({
            email: email,
            name: name,
            lastname: lastname,
            password: password,
            id: user.id,
            profileImage: profileImage,
        });

        Swal.fire("Datos actualizados");
    };

    return (
        <>
            <div className="grid-profile">
                <div className="nav-profile">
                    <NavProfile />
                </div>
                <div className="main-profile">
                    <Form onSubmit={handleSubmit}>
                        <h1 className="title-center">Mi perfil</h1>
                        <div className="card-profile">
                            <img className="img-profile" src={user.profileImage ? profileImage : "https://static.vecteezy.com/system/resources/previews/013/516/935/original/man-person-character-avatar-png.png" } alt="" />
                            <div className="flex-data">
                                <h3>{name} {lastname}</h3>
                                <hr />
                                <div>
                                    <p>Nombre: <Form.Control
                                        type="text"
                                        placeholder="Ingrese su nombre"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    /></p>
                                    <p>Apellido: <Form.Control
                                        type="text"
                                        placeholder="Ingrese su apellido"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                    /></p>
                                     <p>Email: <Form.Control
                                        type="email"
                                        placeholder="Ingrese su email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    /></p>
                                    <p>Contraseña: <Form.Control
                                        type="password"
                                        placeholder="Ingrese su contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    /></p>
                                    <Button type="submit" variant="outline-primary">Editar perfil</Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}