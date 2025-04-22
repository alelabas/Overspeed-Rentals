import { FaInstagram, FaWhatsapp, FaCcMastercard, FaCcVisa  } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { SiZelle, SiMercadopago } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import "./Footer.css"
import React from "react";

export function Footer () {

    return (
        <IconContext.Provider value={{size: '35'}}>
            <footer className="page-footer">
                <section className="site-map-section">
                    <div className="content-wrap">
                        <h3>Contact Us!</h3>
                        <ul className="contact-icons">
                            <a href="https://www.instagram.com/overspeedrentals/" target="_blank" className="button-icons"><li><FaInstagram /></li></a>
                            <a href="https://wa.me/+541164026530?text=Hola%20quiero%20mas%20informacion%20sobre%20alquilar%20un%20auto%20en%20Miami" target="_blank" className="button-icons"><li><FaWhatsapp /></li></a>
                            <a href="" className="button-icons"><li><FiMessageCircle /></li></a>
                            <a href="" className="button-icons"><li><MdEmail /></li></a>
                        </ul>
                    </div>
                    <div className="content-wrap">
                        <h3>Payment Methods</h3>
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
                </section>
            </footer>
        </IconContext.Provider>
    )
}