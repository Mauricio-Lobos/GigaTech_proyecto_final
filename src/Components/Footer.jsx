import FacebookLogo from "./icons/FacebookLogo";
import InstagramLogo from "./icons/InstagramLogo";
import "../Style/Footer.css"

export default function Footer() {

    return(
        <div className="div-footer">
            <div className="description">
                <img width="160px" src="logo192.png" alt="" />
                <p>Obten el ordenador que necesitas y se acomode a lo que requieres junto a nosotros 😄</p>
            </div>
            <div className="contact">
                <p>Contactanos:</p>
                <p>example@false.cl</p>
                <p>+56912345678</p>
            </div>

            <div className="redes">
                <p>Nuestras redes sociales:</p>
                <InstagramLogo className="icons" fill="white" width="50px"/>
                <FacebookLogo className="icons" fill="white" width="50px" />
            </div>
        </div>
    )
}