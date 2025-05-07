import { FaInstagram, FaWhatsapp, FaCcMastercard, FaCcVisa  } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { SiZelle, SiMercadopago } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import "./Footer.css"
import React from "react";
import { FormattedMessage } from "react-intl";

export function Footer () {

    return (
        <IconContext.Provider value={{size: '35'}}>
            <footer className="page-footer">
                <section className="site-map-section">
                    <div className="content-wrap">
                        <h3>
                            <FormattedMessage id="app.footer.contact" defaultMessage="Contact Us!" />
                        </h3>
                        <ul className="contact-icons">
                            <li><a href="https://www.instagram.com/overspeedrentals/" target="_blank" rel="noreferrer" className="button-icons"><FaInstagram /></a></li>
                            <li><a href="https://wa.me/+541164026530?text=Hola%20quiero%20mas%20informacion%20sobre%20alquilar%20un%20auto%20en%20Miami" target="_blank" rel="noreferrer" className="button-icons"><FaWhatsapp /></a></li>
                            <li><a href="https://wa.me/+541164026530?text=Hola%20quiero%20mas%20informacion%20sobre%20alquilar%20un%20auto%20en%20Miami" target="_blank" rel="noreferrer" className="button-icons"><FiMessageCircle /></a></li>
                            <li><a href="mailto:labastiealejandro@gmail.com" className="button-icons"><MdEmail /></a></li>
                        </ul>
                    </div>
                    <div className="content-wrap">
                        <h3>
                            <FormattedMessage id="app.footer.payments" defaultMessage="Payments Methods" />
                        </h3>
                        <ul className="payment-methods-list"> 
                            <li><SiZelle /></li>
                            <li><FaCcMastercard /></li>
                            <li><FaCcVisa /></li>
                            <li><SiMercadopago /></li>
                        </ul>
                    </div>
                </section>
                    
                <section className="disclaimer-section">
                    <p>@Copyright Overspeed Rental 2025 - Designed by Alejandro Labastie</p>
                    <p>340 W Flagler Street, Miami, Florida</p>
                    <p>labastiealejandro@gmail.com</p>
                    <p>(786) 917-8190</p>
                </section>
            </footer>
        </IconContext.Provider>
    )
}