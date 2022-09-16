import '../../sass/footer.scss'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
    return (
        <footer>        
            <div className="footer">
                <div >
                    <h5>CATEGORÍAS</h5>
                      <li>Abrigos</li>
                      <li>Pantalones</li>
                      <li>Remeras</li>
                      <li>Sweaters</li>
                </div>
                <div >
                    <h5>AYUDA</h5>
                        <li>Envío y Seguimiento</li>
                        <li>Cambios y Devoluciones</li>
                        <li>Formas de Pago</li>
                        <li>Mas Información</li>
                </div>
                <div >
                    <h5>ACERCA DE</h5>
                        <li>Contacto</li>
                        <li>Políticas de Privacidad</li>
                        <li>Términos y Condiciones</li>
                </div>
                <div >
                    <h5>SEGUINOS EN</h5>
                    <div className='footer__contacto'>
                        <li> < BsFacebook /> </li>
                        <li> < BsInstagram /> </li>
                    </div>
                </div>
            </div>

                <p className="footer__copy"> &copy; 2022 MileBarboza < BsGithub className='github'/></p>
        </footer>
    );
  }


