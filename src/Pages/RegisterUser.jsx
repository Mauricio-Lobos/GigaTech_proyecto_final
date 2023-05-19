import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import '../Style/LogUser.css';

export default function RegisterUser() {
    return (
        <div className="background"> 
            <div className='container-login'>
                <div className='card-login'>
                    <div className='title-login'>
                        <h3>Registrarse</h3>
                        <hr />
                    </div>
                    <div className='email-password'>
                        <p>Correo electrónico</p>
                        <Form.Control type="email" placeholder="Ingrese su Email" />
                    </div>
                    <div className='email-password'>
                        <p>Contraseña</p>
                        <Form.Control type="password" placeholder="Nueva contraseña" />
                    </div>
                    <div className='email-password'>
                        <p>Repetir contraseña</p>
                        <Form.Control type="password" placeholder="Nueva contraseña" />
                    </div>
                    <div className='name-validation'>
                        <div>
                            <p>Nombre</p>
                            <Form.Control type="text" placeholder="Ingrese su nomobre" />
                        </div>
                        <div>
                            <p>Apellido</p>
                            <Form.Control type="text" placeholder="Ingrese su apellido" />
                        </div>
                    </div>
                    <Button type='submit' variant='success'>Registrarse</Button>
                </div>
            </div>

        </div>
    )
}