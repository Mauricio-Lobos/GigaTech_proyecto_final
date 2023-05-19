import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import '../Style/LogUser.css';

export default function Login() {
    return (
        <div className="background">
            <div className='container-login'>
                <div className='card-login'>
                    <div className='title-login'>
                        <h3>Iniciar sesión</h3>
                        <hr />
                    </div>
                    <div className='email-password'>
                        <p>Correo electrónico</p>
                        <Form.Control type="email" placeholder="Ingrese su Email" />
                    </div>
                    <div className='email-password'>
                        <p>Contraseña</p>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" />
                    </div>
                    <Button type='submit' variant='success'>Ingresar</Button>
                </div>
            </div>

        </div>
    )
}