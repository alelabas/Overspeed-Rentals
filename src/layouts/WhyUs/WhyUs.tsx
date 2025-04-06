import "./WhyUs.css"
import { ContadorAnimado } from "./ContadorAnimado"
import { FaCheck } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import React from "react";

export function WhyUs() {
    return (
        <IconContext.Provider value={{size: '40', color: 'green'}}>
            <section className="why-us-section">
                <h2>Why Us?</h2>
                <article className="stats-section">
                    <div className="stat-clients">
                        <ContadorAnimado inicio={0} fin={200} duracion={6000}/>
                        <h3>Trips</h3>
                    </div>
                    <div className="stat-clients">
                        <ContadorAnimado inicio={0} fin={40000} duracion={6000}/>
                        <h3>Miles driven</h3>
                    </div>
                    <div className="stat-clients">
                        <ContadorAnimado inicio={0} fin={150} duracion={6000}/>
                        <h3>Possitive Reviews</h3>
                    </div>
                </article>

                <article className="fundaments-section">
                        <span className="span-wrapper">
                            <FaCheck />
                            <h4>No Hidden Fees, what you see here it's what you pay</h4>
                        </span>
                        <span className="span-wrapper">
                            <FaCheck />
                            <h4>24/7 Assistance and full cover insurances</h4>
                        </span>
                        <span className="span-wrapper">
                            <FaCheck />
                            <h4>Make a reservation and then pay the rest when you get the car</h4>
                        </span>
                        <span className="span-wrapper">
                            <FaCheck />
                            <h4>Pick-up and Delivery straight out of your gate</h4>
                        </span>
                        <span className="span-wrapper">
                            <FaCheck />
                            <h4>Assistance with any travelling concern</h4>
                        </span>
                        <span className="span-wrapper">
                            <FaCheck />
                            <h4>Brand new, clean and mint cars</h4>
                        </span>
                </article>
                
                <article className="about-us">
                    <div className="about-us-content">
                        <p>Our goal at <strong>OverSpeed Rentals</strong> is to provide our customers with the best possible service and make their car rental experience as <strong>easy and convenient</strong> as possible. We offer <strong>competitive rates</strong> and flexible rental terms to meet the needs of our customers. Whether you need a car for a day, a week, or longer, we have <strong>the perfect vehicle for you</strong>. Contact us today to learn more about our car rental services and to reserve your vehicle.</p>
                    </div>
                </article>
            </section>
        </IconContext.Provider>
    )
}