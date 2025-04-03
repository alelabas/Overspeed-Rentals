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
                        <h3>Business</h3>
                        <ul className="business-list">
                            <button className="button-list"><li>Return Policy</li></button>
                            <button className="button-list"><li>Privacy Policy</li></button>
                            <button className="button-list"><li>Terms and Condition</li></button>
                            <button className="button-list"><li>Rental Agreement</li></button>
                        </ul>
                    </div>
                    <div className="content-wrap">
                        <h3>User</h3>
                        <ul className="user-list">
                            <button className="button-list"><li>FAQs</li></button>
                            <button className="button-list"><li>My Reservations</li></button>
                            <button className="button-list"><li>Cancel Reservations</li></button>
                            <button className="button-list"><li>Requests, Complaints and Suggestions</li></button>
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
                    <div className="content-wrap">
                        <h3>Contact Us!</h3>
                        <ul className="contact-icons">
                            <a href="https://www.instagram.com/overspeedrentals/" target="_blank" className="button-icons"><li><FaInstagram /></li></a>
                            <a className="button-icons"><li><FaWhatsapp /></li></a>
                            <a className="button-icons"><li><FiMessageCircle /></li></a>
                            <a className="button-icons"><li><MdEmail /></li></a>
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