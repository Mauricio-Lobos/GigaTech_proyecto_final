import { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import "../Style/LogUser.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context/Provider";

export default function Login() {
    const { login, email, setEmail, password, setPassword } = useContext(Context);
    const navigate = useNavigate();

    const [showError, setShowError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await login(email, password);
        if (user) {
            console.log(user)
            setEmail("");
            setPassword("");
            return navigate("/");
        } else {
            setShowError(true);
        }
    };

    return (
        <div className="background">
            <div className="container-login">
                <div className="card-login">
                    <div className="title-login">
                        <h3>Iniciar sesión</h3>
                        <hr />
                    </div>
                    <div className="email-password">
                        <p>Correo electrónico</p>
                        <Form.Control
                            type="email"
                            placeholder="Ingrese su Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="email-password">
                        <p>Contraseña</p>
                        <Form.Control
                            type="password"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {showError && (
                        <div className="error-message">
                            <p>Credenciales incorrectas, intente nuevamente.</p>
                        </div>
                    )}
                    <Button type="submit" variant="success" onClick={handleSubmit}>
                        Ingresar
                    </Button>
                    <div>
                        <p>¿Aún no tienes una cuenta GigaTech? </p>
                        <Link to="/registerUser">
                            <Button type="submit" variant="success">
                                Crear nueva cuenta
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 
