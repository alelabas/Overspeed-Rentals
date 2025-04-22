import React from "react";
import "./Hero.css"

export function Hero () {
    return (
        <section className="hero-section">
            <div className="hero-contact">
                <h1>Overspeed Rentals</h1>
                <p>Our mission is to make your vacations <strong>unique</strong> and <strong>unforgettable</strong> where you won't have any worries or concerness. We will make everything happen so that you <strong>enjoy</strong> and <br/> <strong style={{color: "#ff3c3c"}}>Drive Miami Your Way</strong></p>
                <a href="https://wa.me/+541164026530?text=Hola%20quiero%20mas%20informacion%20sobre%20alquilar%20un%20auto%20en%20Miami" target="_blank" className="modal-button hero-button">Contact us!</a>
            </div>
        </section>
    )
}