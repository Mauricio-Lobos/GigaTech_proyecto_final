import { NavLink } from "react-router-dom"
import "../Style/Profile.css"

export default function NavProfile() {

    return (
        <div className="link-profile">
            <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : "not-active"}> Mi perfil</NavLink>
            <NavLink to="/create_post" className={({ isActive }) => isActive ? "active" : "not-active"} > Crear publicación </NavLink>
            <NavLink to="/manage_post" className={({ isActive }) => isActive ? "active" : "not-active"}>Administrar publicaciones</NavLink>
            <NavLink to="/manage_purchase" className={({ isActive }) => isActive ? "active" : "not-active"}>Administrar compras</NavLink>
        </div>
    )
}