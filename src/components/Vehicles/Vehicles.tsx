import { useVehicleTypes } from "../../hooks/useVehicleTypes";
import { useCarousel } from "../../hooks/useCarousel"
import { SwiperSlide } from "swiper/react";
import "./Vehicles.css"
import React, { ReactNode } from "react";
import { VehicleTypes } from "../../types/types";

export function Vehicles () {
    
    const vehicleTypes: VehicleTypes[] = useVehicleTypes()

    const children: ReactNode = vehicleTypes.map(vehicle => (
        <SwiperSlide key={vehicle.id}>
            <div className="types-container">
                <img src={vehicle.image} alt="Car Image" className="type-image" />
                <div className="type-inner-text">
                    <h3 className="type-title">{vehicle.type}</h3>
                    <p className="type-description">{vehicle.description}</p>
                </div>
            </div>
        </SwiperSlide>
    ))

    const vehicleTypesList = useCarousel({children, slides: 3})

    return (
        <section className="types-section">
            <div className="types-text">
                <h2>Types of Vehicles to rent</h2>
                <p>If your not sure what vehicle suits your vacation, here you have a cheat sheet to see which car fits your plans the best. You can choose from these types of cars to check for availability and prices from our fleet.</p>
            </div>
            <div className="types-wrapper">
                {vehicleTypesList}
            </div>
        </section>
    )
}