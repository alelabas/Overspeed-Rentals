import { FaInstagram, FaWhatsapp, FaCcMastercard, FaCcVisa  } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { SiZelle, SiMercadopago } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import "./Footer.css"

export function Footer () {

    return (
        <IconContext.Provider value={{size: 35}}>
            <footer className="page-footer">
                <section className="site-map-section">
                    <div className="content-wrap">
                        <h3>Empresa</h3>
                        <ul className="business-list">
                            <button className="button-list"><li>Politica de devoluciones</li></button>
                            <button className="button-list"><li>Politica de privacidad</li></button>
                            <button className="button-list"><li>Terminos y condiciones</li></button>
                            <button className="button-list"><li>Contrato de renta</li></button>
                        </ul>
                    </div>
                    <div className="content-wrap">
                        <h3>Usuario</h3>
                        <ul className="user-list">
                            <button className="button-list"><li>Preguntas Frecuentes</li></button>
                            <button className="button-list"><li>Mis Reservas</li></button>
                            <button className="button-list"><li>Cancelar mis Reservas</li></button>
                            <button className="button-list"><li>Peticiones, Quejas y Reclamos</li></button>
                        </ul>
                    </div>
                    <div className="content-wrap">
                        <h3>Metodos de pago</h3>
                        <ul className="payment-methods-list"> 
                            <li><SiZelle /></li>
                            <li><FaCcMastercard /></li>
                            <li><FaCcVisa /></li>
                            <li><SiMercadopago /></li>
                        </ul>
                    </div>
                    <div className="content-wrap">
                        <h3>Contactanos!</h3>
                        <ul className="contact-icons">
                            <button className="button-icons"><li><FaInstagram /></li></button>
                            <button className="button-icons"><li><FaWhatsapp /></li></button>
                            <button className="button-icons"><li><FiMessageCircle /></li></button>
                            <button className="button-icons"><li><MdEmail /></li></button>
                        </ul>
                    </div>
                </section>
                    
                <section className="disclaimer-section">
                    <p>@Copyright Overspeed Rental 2025 - Designed by Alejandro Labastie</p>
                </section>
            </footer>
        </IconContext.Provider>
    )
}