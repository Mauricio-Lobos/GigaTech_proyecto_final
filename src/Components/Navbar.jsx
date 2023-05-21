import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../Style/Navbar.css";
import CartLogo from "./icons/CartLogo";
import { useContext } from "react";
import { Context } from "../Context/Provider";
import ToCLP from "../helpers/ToCLP";


export default function GlobalNavbar() {
    const { calculatedPrice } = useContext(Context);
    return (
        <>
            <Navbar sticky="top" expand="lg" variant="dark" bg="dark" className="nav-border img-nav">
                <Container>
                    <Navbar.Brand > </Navbar.Brand>
                        <div className="nav">
                            <NavLink to="/" className={({ isActive }) => isActive ? "active" : "not-active"} > Home </NavLink>
                            <NavLink to="/login" className={({ isActive }) => isActive ? "active" : "not-active"}>Iniciar sesión</NavLink>
                            <NavLink to="/registerUser" className={({ isActive }) => isActive ? "active" : "not-active"}>Registrarse</NavLink>
                            <NavLink to="/favorites" className={({ isActive }) => isActive ? "active" : "not-active"}> Favoritos</NavLink>
                            <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : "not-active"}> Mi perfil</NavLink>
                            <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : "not-active"}>
                                    <CartLogo width="2vw" height="2vh" fill="white"/>${ToCLP(calculatedPrice)}
                            </NavLink>
                        </div>
                </Container>
            </Navbar>
        </>
    );
}