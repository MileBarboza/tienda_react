import './footer.scss'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer>        
            <div className="footer ">
                <div >
                    <h5>CATEGORÍA</h5>
                    <ul>	
                      <li><Link to='/categoria/Abrigo'>Abrigo</Link></li>
                      <li><Link to='/categoria/Pantalón'>Pantalón</Link></li>
                      <li><Link to='/categoria/Remera'>Remera</Link></li>
                      <li><Link to='/categoria/Sweater'>Sweater</Link></li>
                    </ul>
                </div>
                <div >
                    <h5>AYUDA</h5>
                        <li><Link to='/preguntas-frecuentes'>Envío y Seguimiento</Link></li>
                        <li><Link to='/preguntas-frecuentes'>Cambios y Devoluciones</Link></li>
                        <li><Link to='/preguntas-frecuentes'>Formas de Pago</Link></li>
                        <li><Link to='/preguntas-frecuentes'>Mas Información</Link></li>
                </div>
                <div >
                    <h5>ACERCA DE</h5>
                        <li><Link to='/contacto'>Contacto</Link></li>
                        <li><Link to='/politicas-de-privacidad'>Políticas de Privacidad</Link></li>
                        <li><Link to='/terminos-y-condiciones'>Términos y Condiciones</Link></li>
                </div>
                <div >
                    <h5>SEGUINOS EN</h5>
                    <div className='footer__contacto'>
                        <li> <a href='https://www.facebook.com/' target="blank">< BsFacebook /></a> </li>
                        <li> <a href='https://www.instagram.com/' target="blank">< BsInstagram /></a> </li>
                    </div>
                </div>
            </div>

                <p className="footer__copy"> &copy; 2022 MileBarboza<a href="https://github.com/MileBarboza" target="blank">< BsGithub className='github'/></a></p>
        </footer>
    );
  }


