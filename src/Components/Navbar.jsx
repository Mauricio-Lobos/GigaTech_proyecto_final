import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "../Style/Navbar.css";

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import CartLogo from "./icons/CartLogo";
import { Context } from "../Context/Provider";

export default function GlobalNavbar() {
    const { user, login, logout, cart, favorites } = useContext(Context);

    return (
        <Navbar sticky="top" expand="lg" variant="dark" bg="dark" className="nav-border img-nav">
            <Container>
                <Navbar.Brand></Navbar.Brand>
                <div className="nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : "not-active"}> Home </NavLink>
                    {login && user ? (
                        <>
                            <NavLink to="/favorites" className={({ isActive }) => isActive ? "active" : "not-active"}> Favoritos {favorites.length}</NavLink>
                            <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : "not-active"}> Mi perfil</NavLink>
                            <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : "not-active"}>
                                <CartLogo width="2vw" height="2vh" fill="white" />{cart.length}
                            </NavLink>
                            <button to="/login" onClick={logout}>Cerrar sesión</button>
                        </>
                    ) : (<>
                        <NavLink to="/login" className={({ isActive }) => isActive ? "active" : "not-active"}>Iniciar sesión</NavLink>
                        <NavLink to="/registerUser" className={({ isActive }) => isActive ? "active" : "not-active"}>Registrarse</NavLink>
                    </>)
                    }
                </div>
            </Container>
        </Navbar>
    );
}