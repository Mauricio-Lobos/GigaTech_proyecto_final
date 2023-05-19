import Button from "react-bootstrap/esm/Button"
import NavProfile from "../Components/NavProfile"

export default function ManagePost() {
    return (
        <>
            <div className="grid-profile">
                <div className="nav-profile">
                    <NavProfile />
                </div>
                <div className="main-profile">
                    <h1 className="title-center">Administrar publicaciones</h1>
                    <div>
                        <p>Aún no hay publicaciones creadas</p>
                    </div>
                    <Button variant="outline-primary">Ir a crear publicación</Button>
                </div>
            </div>
        </>
    )
}