import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <section className="botonesYsubsFooter">
            <div className="navegaFoot">
                <h4 className="titNavFoot">SEGUÍ NAVEGANDO</h4>
                <div className="botonesNavFoot">
                    <Link to='/'><a>Inicio</a></Link>
                    <Link to='/Contacto'><a>Contacto</a></Link>
                    <Link to='/Tienda'><a>Tienda</a></Link>
                </div>
            </div>
            <div className="otrosFoot">
                <h4 className="titOtrosFoot">MÁS</h4>
                <div className="botonesOtrosFoot">
                    <a href="">Legales</a>
                    <a href="">Trabajá con nosotros</a>
                    <a href="">Preguntas Frecuentes</a>
                </div>
            </div>
            <div className="subsFoot">
                <div className="subsNewFoot">
                    <h5 className="titSubsFoot">SUSCRIBITE A NUESTRO NEWSLETTER</h5>
                    <div className="formSubsFoot">
                        <form action="">
                            <input type="text" name="SUSCRIBITE" id="subsFormFoot" aria-label="Subs" placeholder="Ingresa tu e-mail"/>
                            <input type="submit" value="SUSCRIBIRME" id="btnSubsFoot"/>
                        </form>
                    </div>
                </div>
                <div className="redesSubsFoot">
                    <h5 className="titRedesFoot">SEGUINOS EN NUESTRAS REDES</h5>
                    <div className="btnRedesFoot">
                        <a href="https://www.facebook.com/" className="btnIGRedes" target="_blank"><FaFacebook/></a>
                        <a href="https://www.instagram.com/" className="btnIGRedes" target="_blank"><FaInstagram/></a>
                    </div>
                </div>
            </div>
        </section>
        <section className="copyFooter">
            <p>Creado por Agustin R. Perez 🧡</p>
        </section>
    </footer>
  )
}

export default Footer