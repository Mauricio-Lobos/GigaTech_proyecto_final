import "../Style/Profile.css"
import NavProfile from "../Components/NavProfile"
import Form from "react-bootstrap/esm/Form"
import Button from "react-bootstrap/esm/Button"

export default function Profile() {

    return (
        <>
            <div className="grid-profile">
                <div className="nav-profile">
                    <NavProfile />
                </div>
                <div className="main-profile">
                    <h1 className="title-center">Mi perfil</h1>
                    <div className="card-profile">
                        <img className="img-profile" src="https://static.vecteezy.com/system/resources/previews/013/516/935/original/man-person-character-avatar-png.png" alt="" />
                        <div className="flex-data">
                            <h3>Perfil Name - Lastname</h3>
                            <hr />
                            <div>
                                <p>Email: <Form.Control type="email" value="test@test.com" /> </p>
                                <p>Fecha de nacimiento: <Form.Control type="date" /></p>
                                <Button variant="outline-primary">Editar perfil</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}