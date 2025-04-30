import "./WhyUs.css"
import { ContadorAnimado } from "./ContadorAnimado"
import { FaCheck } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import React from "react";
import { FormattedMessage } from "react-intl";

export function WhyUs() {
    return (
        <IconContext.Provider value={{size: '40', color: '#00ff00'}}>
            <section className="why-us-section">
                <h2>
                    <FormattedMessage id="app.whyus.title" defaultMessage="Why Us?" />
                </h2>
                <article className="stats-section">
                    <div className="stat-clients">
                        <ContadorAnimado inicio={0} fin={200} duracion={6000}/>
                        <h3>
                            <FormattedMessage id="app.whyus.trips" defaultMessage="Trips" />
                        </h3>
                    </div>
                    <div className="stat-clients">
                        <ContadorAnimado inicio={0} fin={40000} duracion={6000}/>
                        <h3>
                            <FormattedMessage id="app.whyus.miles" defaultMessage="Miles Driven" />
                        </h3>
                    </div>
                    <div className="stat-clients">
                        <ContadorAnimado inicio={0} fin={150} duracion={6000}/>
                        <h3>
                            <FormattedMessage id="app.whyus.reviews" defaultMessage="Possitive Reviews" />
                        </h3>
                    </div>
                </article>

                <article className="fundaments-section">
                        <span className="span-wrapper">
                            <FaCheck />
                            <h4>
                                <FormattedMessage id="app.whyus.fees" defaultMessage="No Hidden Fees, what you see here it's what you pay" />
                            </h4>
                        </span>
                        <span className="span-wrapper">
                            <FaCheck />
                            <h4>
                                <FormattedMessage id="app.whyus.assistance" defaultMessage="24/7 Assistance and full cover insurances" />
                            </h4>
                        </span>
                        <span className="span-wrapper">
                            <FaCheck />
                            <h4>
                                <FormattedMessage id="app.whyus.reservations" defaultMessage="Make a reservation and then pay the rest when you get the car" />
                            </h4>
                        </span>
                        <span className="span-wrapper">
                            <FaCheck />
                            <h4>
                                <FormattedMessage id="app.whyus.pickup" defaultMessage="Make a reservation and then pay the rest when you get the car" />
                            </h4>
                        </span>
                        <span className="span-wrapper">
                            <FaCheck />
                            <h4>
                                <FormattedMessage id="app.whyus.guidance" defaultMessage="Assistance with any travelling concern" />
                            </h4>
                        </span>
                        <span className="span-wrapper">
                            <FaCheck />
                            <h4>
                                <FormattedMessage id="app.whyus.cars" defaultMessage="Brand new, clean and mint cars" />
                            </h4>
                        </span>
                </article>
                
                <article className="about-us">
                    <div className="about-us-content">
                        <p>
                            <FormattedMessage id="app.whyus.content" defaultMessage="Our goal at <strong>OverSpeed Rentals</strong> is to provide our customers with the best possible service and make their car rental experience as <strong>easy and convenient</strong> as possible. We offer <strong>competitive rates</strong> and flexible rental terms to meet the needs of our customers. Whether you need a car for a day, a week, or longer, we have <strong>the perfect vehicle for you</strong>. Contact us today to learn more about our car rental services and to reserve your vehicle." />
                        </p>
                    </div>
                </article>
            </section>
        </IconContext.Provider>
    )
}