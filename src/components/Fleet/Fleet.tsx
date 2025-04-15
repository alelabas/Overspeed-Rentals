import { useVehicles } from "../../hooks/useVehicles.js"
import { useCarousel } from "../../hooks/useCarousel.js";
import "./Fleet.css"
import { SwiperSlide } from "swiper/react"
import React from "react";
import Vehicle from "./Vehicle.js";


export function Fleet() {
	const vehicles = useVehicles()
    
    //Devuelve un array de elementos que se van a mostrar en el carusel
    const children = vehicles.map((vehicle) => (
        <SwiperSlide key={vehicle.id}>
            <Vehicle vehicle={vehicle}/>
        </SwiperSlide>
    ))

    //Genera el carusel con los elementos pasados en la prop
    const carousel = useCarousel({children, slides: 5})

	return (
        <section className="fleet-wrapper">
            <div className="fleet-header">
                <h2>Our Fleet</h2>
                <p>Choose from our wide selection of vehicles</p>
            </div>

            <div className="fleet-section">
                {carousel}
            </div>
        </section>
	)
}