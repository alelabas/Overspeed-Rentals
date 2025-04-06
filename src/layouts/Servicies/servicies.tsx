import "./servicies.css";
import React from "react";

export default function Servicies(){
    return(
        <section className="servicies" id="servicies-id">
            <h2>Our servicies</h2>
            <div className="servicies-container">
                <div className="service-container">
                    <img src="src/assets/CarImages/mustang-rojo-2.webp" alt="" />
                    <div className="service-text-container">
                        <h3>Sports Cars Rental</h3>
                        <p>We offer the best cars for the best price in the market. You can enjoy the big engines while driving with the roof down and enjoy the breeze of Miami.</p>
                    </div>
                </div>
                <div className="service-container">
                    <img src="src/assets/CarImages/mustangs-2.webp" alt="" />
                    <div className="service-text-container">
                        <h3>24/7 Pick-Up and Drop-Off</h3>
                        <p>We can Deliver and Pick-Up the cars whenever it's comfortable for <strong>you</strong>. Even early in the morning or late in the night</p>
                    </div>
                </div>
                <div className="service-container">
                    <img src="src/assets/CarImages/mustangs-3.webp" alt="" />
                    <div className="service-text-container">
                        <h3>Airport Pick-Up and Drop-Off</h3>
                        <p>You can forget about arriving at Miami and calling a taxi or uber. We will deliver and pick-up the car straight <strong>out of your gate</strong></p>
                    </div>
                </div>
                <div className="service-container">
                    <img src="src/assets/CarImages/bmwMustang.webp" alt="" />
                    <div className="service-text-container">
                        <h3>Renting Combos</h3>
                        <p>Do you want to rent a convertible but you can't fit your luggage? No worries, we can arrange both a SUV or Van and a convertible combo</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
